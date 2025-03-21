# TTS Azure Web 2025

English / [简体中文](./README_CN.md)

TTS Azure Web is an Azure Text-to-Speech (TTS) web application. Fine-tune the output speech results using Speech Synthesis Markup Language (SSML). It allows you to run it locally or deploy it with a single click using your Azure Key.

Key Features:

- Supports selection of voice, language, style, and character.
- Supports adjustments of speech speed, intonation, and volume.
- Supports audio output download.
- One-click deployment for both local and cloud environments.
- Supports SSML config import and export.

This application is ideal for those looking to minimize setup while experiencing the full capabilities of Azure TTS.

Live demo: https://tts.femoon.top

## Getting Started

Get your API Key

- Go to [Microsoft Azure Text to Speech](https://azure.microsoft.com/en-us/products/ai-services/text-to-speech/) and click "Try Text to Speech Free"
- Go to [Azure AI services](https://portal.azure.com/#view/Microsoft_Azure_ProjectOxford/CognitiveServicesHub/~/SpeechServices)
- In the "Speech services" block, click "Add"
- A region and two subscription keys will be listed beside Speech Services. You only need one key and its corresponding region.

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FFemoon%2Ftts-azure-web&env=SPEECH_KEY&env=SPEECH_REGION&project-name=tts-azure-web&repository-name=tts-azure-web)

## Deploy locally

```bash
# install yarn
npm i -g yarn
# install dependencies
yarn
# building the production environment
yarn build
# run production environment serve
yarn start
```

## Development

Before starting development, you must create a new `.env.local` file at project root, and place your azure key and region into it:

```bash
# your azure key (required)
SPEECH_KEY=your_azure_key
# your azure region (required)
SPEECH_REGION=your_azure_region
# Maximum input length limit (optional)
NEXT_PUBLIC_MAX_INPUT_LENGTH=4000
```

Run the development server:

```bash
# install yarn
npm i -g yarn
# install dependencies
yarn
# run serve
yarn dev
```

Open [http://localhost:3000](http://localhost:3000/) with your browser to see the result.

## Git commit specification reference

- `feat` add new functions
- `fix` Fix issues/bugs
- `perf` Optimize performance
- `style` Change the code style without affecting the running result
- `refactor` Re-factor code
- `revert` Undo changes
- `test` Test related, does not involve changes to business code
- `docs` Documentation and Annotation
- `chore` Updating dependencies/modifying scaffolding configuration, etc.
- `ci` CI/CD
