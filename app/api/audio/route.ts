import { Buffer } from 'buffer'
import { NextRequest, NextResponse } from 'next/server'
import { azureCognitiveEndpoint } from '@/app/lib/constants'

async function fetchAudio(token: string, data: any): Promise<string> {
  // 验证输入参数
  if (!token) {
    throw new Error('Token is required')
  }

  if (!data) {
    throw new Error('Data is required')
  }

  try {
    const response = await fetch(azureCognitiveEndpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/ssml+xml',
        'X-MICROSOFT-OutputFormat': 'audio-16khz-32kbitrate-mono-mp3',
      },
      body: getXML(data),
    })

    // 检查响应状态
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`)
    }

    const arrayBuffer = await response.arrayBuffer()
    const base64String = Buffer.from(arrayBuffer).toString('base64')
    return base64String
  } catch (error) {
    console.error('Error fetching audio:', error)
    throw error
  }
}

export async function POST(req: NextRequest) {
  try {
    // fetch token
    const tokenResponse = await fetch(`${req.nextUrl.origin}/api/token`, { method: 'POST' })

    if (!tokenResponse.ok) {
      throw new Error(`Failed to fetch token: ${tokenResponse.statusText}`)
    }
    const { token } = await tokenResponse.json()
    const data = await req.json()

    // use token to request
    const base64Audio = await fetchAudio(token, data)
    return NextResponse.json({ base64Audio })
  } catch (error) {
    console.error('Error in POST handler:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

function getXML(data: any) {
  const { input, config } = data
  const { lang, gender, voiceName, style, role } = config
  const styleProperty = style ? ` xml:style='${style}'` : ''
  const roleProperty = role ? ` xml:role='${role}` : ''
  const xml = `<speak version='1.0'  xml:lang='${lang}'><voice xml:lang='${lang}' xml:gender='${gender}' name='${voiceName}'${styleProperty}${roleProperty}>${input}</voice></speak>`
  // console.log(xml)
  return xml
}
