<p align="center"><a href="https://discord.com/invite/dsvFgDTr6c"><img height="60px" src="https://user-images.githubusercontent.com/31022056/158916278-4504b838-7ecb-4ab9-a900-7dc002aade78.png" alt="Join our Discord!"></a></p>

# Speaking Bots MCP Server

Deploy AI-powered speaking agents in video meetings using the MeetingBaas API. This open-source MCP server demonstrates how to connect LLM-powered voice bots to Google Meet, Zoom, and Microsoft Teams, with customizable personas and real-time audio streaming.

---

## Introduction

This project provides a minimal, production-ready API for deploying speaking bots in video meetings. It integrates with [MeetingBaas](https://meetingbaas.com) and Pipecat's Python framework for building voice and multimodal conversational agents.

- **Join meetings as an AI speaking bot**
- **Customizable personas and voices**
- **Real-time bidirectional audio streaming**
- **Minimalist, extensible API design**

The API is open source and designed for easy customization and extension.

---

## Getting Started

1. **Clone this repository**
2. **Install dependencies**
3. **Set your environment variables** (see below)
4. **Run locally or deploy to your preferred platform (Docker, fly.io, Vercel, etc.)**

### Environment Variables

- `BAAS_API_KEY`: Your MeetingBaas API key (required)
- `BAAS_URL`: The MeetingBaas API base URL (required)
- `NODE_ENV`, `LOG_LEVEL`: (optional)

---

## API Reference

The Speaking Bot API is accessible at `https://speaking.meetingbaas.com`.

- **OpenAPI spec:** [`/openapi.json`](https://speaking.meetingbaas.com/openapi.json)

### Example: Join a Meeting as a Speaking Bot

```sh
curl -X POST https://speaking.meetingbaas.com/bots \
  -H "Content-Type: application/json" \
  -H "x-meeting-baas-api-key: your-api-key" \
  -d '{
    "meeting_url": "https://us06web.zoom.us/j/123456789?pwd=example",
    "personas": ["baas_onboarder"]
  }'
```

#### Key Endpoints
- `POST /bots` — Join a meeting as a speaking bot
- `DELETE /bots/{bot_id}` — Remove a speaking bot from a meeting
- `POST /personas/generate-image` — Generate a persona image

See the OpenAPI spec for full details and parameters.

---

## Command Line Usage

You can interact with the API using `curl` or any HTTP client. See the example above for joining a meeting. For advanced usage, see the [scripts](./scripts) directory (if present) or build your own CLI tools.

---

## Personas System

Speaking bots can be assigned unique personas, each with their own context, voice, and characteristics. Personas are defined in Markdown or JSON and can be extended or customized.

- Choose from a library of built-in personas (e.g., `baas_onboarder`, `pirate_queen`, `quantum_physicist`)
- Generate custom persona images via the API
- Control voice, language, and context for each bot

---

## Directory Structure

```
api/                # API route handlers and tool registration
config/             # Core configuration and persona management
scripts/            # Command-line tools and utilities
```

---

## Acknowledgements

- [MeetingBaas](https://meetingbaas.com) — Video meeting API platform
- [Pipecat](https://github.com/pipecat-ai/pipecat) — Conversational AI framework
- [Model Context Protocol (MCP)](https://github.com/modelcontextprotocol/typescript-sdk) — LLM integration

---

## Meeting BaaS

For more information about MeetingBaas and the SDK:
- [SDK Documentation](https://docs.meetingbaas.com/com/docs/typescript-sdk)
- [npm Package](https://www.npmjs.com/package/@meeting-baas/sdk)
- [GitHub Repository](https://github.com/Meeting-Baas/sdk)

---

## License

This project is open source and welcomes contributions. See [LICENSE](./LICENSE) for details.
