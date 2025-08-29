#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListPromptsRequestSchema,
  GetPromptRequestSchema,
  ListToolsRequestSchema,
  GetPromptRequest,
  CallToolRequest,
} from "@modelcontextprotocol/sdk/types.js";
import { promises as fs } from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Server configuration
const server = new Server(
  {
    name: "swagger-semantic-diff-analyzer",
    version: "1.0.0",
  },
  {
    capabilities: {
      prompts: {},
      tools: {},
    },
  }
);

// Read template and instruction files
async function readTemplateFiles() {
  const templatePath = path.join(__dirname, "..", "SWAGGER_SEMANTIC_DIFF_ANALYSIS_TEMPLATE.md");
  const instructionsPath = path.join(__dirname, "..", "prompts.md");
  
  try {
    const template = await fs.readFile(templatePath, "utf8");
    const instructions = await fs.readFile(instructionsPath, "utf8");
    return { template, instructions };
  } catch (error) {
    console.error("Error reading template files:", error);
    throw error;
  }
}

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "swagger-semantic-diff-analyze",
        description: "Analyze semantic diff between two swagger files",
        inputSchema: {
          type: "object",
          properties: {
            service_name: {
              type: "string",
              description: "Name of the service being analyzed (optional, defaults to placeholder)",
            },
            old_swagger_path: {
              type: "string",
              description: "Path to the old normalized swagger file (optional, defaults to placeholder)",
            },
            new_swagger_path: {
              type: "string",
              description: "Path to the new normalized swagger file (optional, defaults to placeholder)",
            },
            api_changes_path: {
              type: "string",
              description: "Path to the API_CHANGES.md file (optional, defaults to placeholder)",
            },
          },
          additionalProperties: false,
        },
      },
    ],
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request: CallToolRequest) => {
  const { name, arguments: args } = request.params;

  if (name === "swagger-semantic-diff-analyze") {
    try {
      const { template, instructions } = await readTemplateFiles();
      
      // Extract parameters with defaults
      const serviceName = (args?.service_name as string) || "[Service Name]";
      const apiVersion = (args?.api_version as string) || "[X.X.X]";
      const oldSwaggerPath = (args?.old_swagger_path as string) || "[path/to/old/swagger]";
      const newSwaggerPath = (args?.new_swagger_path as string) || "[path/to/new/swagger]";
      const apiChangesPath = (args?.api_changes_path as string) || "[path/to/changes]";

      // Create the customized template with provided arguments
      let customizedTemplate = template
        .replace(/\[Service Name\]/g, serviceName)
        .replace(/\[X\.X\.X\]/g, apiVersion)
        .replace(/\[path\/to\/old\/swagger\]/g, oldSwaggerPath)
        .replace(/\[path\/to\/new\/swagger\]/g, newSwaggerPath)
        .replace(/\[path\/to\/changes\]/g, apiChangesPath);

      const fullInstructions = `# Swagger Semantic Diff Analysis Instructions

## Instructions
${instructions}

## Analysis Template
${customizedTemplate}

Use this template and follow these instructions to create a comprehensive semantic diff analysis.`;

      return {
        content: [
          {
            type: "text",
            text: fullInstructions,
          },
        ],
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      return {
        content: [
          {
            type: "text",
            text: `Error generating swagger analysis instructions: ${errorMessage}`,
          },
        ],
        isError: true,
      };
    }
  }

  throw new Error(`Unknown tool: ${name}`);
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Swagger Semantic Diff MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
