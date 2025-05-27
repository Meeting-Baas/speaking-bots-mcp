import { initializeMcpApiHandler } from "../lib/mcp-api-handler";
import registerTools from "./tools";

const handler = initializeMcpApiHandler(
  (server, apiKey) => {
    // Register only the speaking tools
    server = registerTools(server, apiKey);
  },
  {
    capabilities: {
      tools: {
        joinSpeakingMeeting: {
          description:
            "Send an AI speaking bot to join a video meeting. The bot can assist in meetings with voice AI capabilities.",
          category: "Meeting Management",
        },
        leaveSpeakingMeeting: {
          description: "Remove a speaking bot from a meeting by its ID.",
          category: "Meeting Management",
        },
        generatePersonaImage: {
          description: "Generate an image for a persona using Replicate.",
          category: "Meeting Management",
        },
      },
    },
  }
);

export default handler;
