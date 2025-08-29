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
        name: "get-swagger-analysis-instructions",
        description: "Get comprehensive instructions and template for creating a swagger semantic diff analysis summary",
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

  if (name === "get-swagger-analysis-instructions") {
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

## Overview
${instructions}

## Analysis Template
${customizedTemplate}

## Step-by-Step Analysis Workflow

### Step 1: Understand Input Files
- **Old Swagger**: \`${oldSwaggerPath}\` - The original swagger specification
- **New Swagger**: \`${newSwaggerPath}\` - The migrated swagger specification  
- **API Changes**: \`${apiChangesPath}\` - Documentation of all differences between old and new swagger

### Step 2: Categorize Changes Semantically
Group changes by their functional meaning rather than structural differences:
- **Model Restructuring**: Same models created inline vs referenced
- **Property Ordering**: Changes in property order without semantic impact
- **Description Updates**: Documentation improvements without functional changes
- **Schema Formatting**: Different ways of expressing the same constraints
- **Reference Patterns**: Changes from inline to $ref or vice versa
- **Default Value Handling**: Different ways of expressing default behaviors
- **Breaking Changes**: Any changes that affect API contract or behavior

### Step 3: Assess Each Category
For each category, determine:
- **Functional Impact**: Breaking vs Non-breaking
- **Examples**: Specific instances with code snippets
- **Coverage**: All related items from API_CHANGES.md
- **Assessment**: Why it's considered equivalent or breaking

### Step 4: Generate Complete Summary
Create a markdown report following the template that includes:
- Executive summary with recommendation
- Detailed category analysis
- Code comparisons
- Complete coverage verification
- Links to source files and specific changes

## Key Analysis Principles

1. **Semantic Focus**: Analyze what the API does, not just how it's structured
2. **Semantic Impact**: Focus on how changes affect the API's semantic meaning  
3. **Complete Coverage**: Every line in API_CHANGES.md must be categorized
4. **Evidence-Based**: Provide specific examples and code snippets for each category
5. **Clear Categorization**: Group changes by their semantic impact and meaning

## Quality Checklist

- [ ] All items from API_CHANGES.md are categorized
- [ ] Each category has clear examples with code snippets
- [ ] Semantic changes are clearly identified and categorized
- [ ] Links to source files are provided
- [ ] Executive summary reflects the detailed analysis
- [ ] Verification table shows complete coverage

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
