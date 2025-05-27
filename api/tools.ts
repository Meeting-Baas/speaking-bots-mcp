import { McpServer } from "@modelcontextprotocol/sdk/server/mcp";
import { registerJoinSpeakingTool } from "./tools/bots/join-speaking";

export function registerTools(server: McpServer, apiKey: string): McpServer {
  return registerJoinSpeakingTool(server, apiKey);
}

export default registerTools;
