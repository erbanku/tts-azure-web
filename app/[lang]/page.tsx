import { ListItem } from '../lib/types'
import Content from './ui/content'
import Nav from './ui/nav'
import { getDictionary } from '@/get-dictionary'
import type { Locale } from '@/i18n-config'

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const t = await getDictionary(lang)
  let list: ListItem[] = []
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + '/api/list')
    list = await res.json()
  } catch (err) {
    console.error('Failed to fetch list:', err)
  }
  return (
    <main className="flex w-full min-h-screen flex-col">
      <Nav />
      <Content t={t} list={list} />
    </main>
  )
}
