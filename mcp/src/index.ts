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
import { exec } from "child_process";
import { promisify } from "util";

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Promisify exec for async/await usage
const execAsync = promisify(exec);

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
  const instructionsPath = path.join(__dirname, "..", "prompts_swagger_diff_report_generate.md");
  const scriptPath = path.join(__dirname, "..", "count-api-changes-items.ps1");
  
  try {
    const template = await fs.readFile(templatePath, "utf8");
    const instructions = await fs.readFile(instructionsPath, "utf8");
    const scriptContent = await fs.readFile(scriptPath, "utf8");
    return { template, instructions, scriptContent };
  } catch (error) {
    console.error("Error reading template files:", error);
    throw error;
  }
}

// Read TypeSpec fix template and instruction files for generating report
async function readTypeSpecFixGenerateTemplateFiles() {
  const templatePath = path.join(__dirname, "..", "TYPESPEC_FIX_TEMPLATE.md");
  const instructionsPath = path.join(__dirname, "..", "prompts_tsp_fix_generate.md");
  
  try {
    const template = await fs.readFile(templatePath, "utf8");
    const instructions = await fs.readFile(instructionsPath, "utf8");
    return { template, instructions };
  } catch (error) {
    console.error("Error reading TypeSpec fix generate template files:", error);
    throw error;
  }
}

// Read TypeSpec fix template and instruction files for applying fixes
async function readTypeSpecFixApplyTemplateFiles() {
  const instructionsPath = path.join(__dirname, "..", "prompts_tsp_fix_apply.md");
  
  try {
    const instructions = await fs.readFile(instructionsPath, "utf8");
    return { instructions };
  } catch (error) {
    console.error("Error reading TypeSpec fix apply template files:", error);
    throw error;
  }
}

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "tsp-compile-tsmv",
        description: "Run TSP compile and TypeSpec Migration Validator (tsmv) to compare original OpenAPI folder with generated OpenAPI file",
        inputSchema: {
          type: "object",
          properties: {
            typespec_project_path: {
              type: "string",
              description: "Path to the TypeSpec project folder, usually named xxx.Management",
            },
            original_openapi_folder: {
              type: "string",
              description: "Path to the original OpenAPI folder containing the swagger files in *sparse-spec*, e.g.C:\\workspace\\azure-rest-api-specs\\sparse-spec\\specification\\databoxedge\\resource-manager\\Microsoft.DataBoxEdge\\stable\\2023-12-01\\",
            },
            generated_openapi_file: {
              type: "string", 
              description: "Path to the generated OpenAPI file to compare against under api-version folder, NOT tsp-output folder, e.g.C:\\workspace\\azure-rest-api-specs\\specification\\databoxedge\\resource-manager\\Microsoft.DataBoxEdge\\stable\\2023-12-01\\databoxedge.json",
            },
            output_folder: {
              type: "string",
              description: "Path to the output folder where tsmv results will be saved",
            },
          },
          required: ["typespec_project_path", "original_openapi_folder", "generated_openapi_file", "output_folder"],
          additionalProperties: false,
        },
      },
      {
        name: "swagger-semantic-diff-analyze",
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
              description: "Path to the oldNormalizedSwagger.json, usually under `diff-output` folder",
            },
            new_swagger_path: {
              type: "string",
              description: "Path to the newNormalizedSwagger.json, usually under `diff-output` folder",
            },
            api_changes_path: {
              type: "string",
              description: "Path to the API_CHANGES.md file, usually under `diff-output` folder",
            },
          },
          required: ["old_swagger_path", "new_swagger_path", "api_changes_path"],
          additionalProperties: false,
        },
      },
      {
        name: "generate-typespec-fix-report",
        description: "Depends on running swagger-semantic-diff-analyze tool to generate SWAGGER_SEMANTIC_DIFF_ANALYSIS report first. Analyze swagger diffs and generate a comprehensive fix report (TSP_FIX.diff) with proposed TypeSpec changes to make generated swagger functionally equivalent to original swagger",
        inputSchema: {
          type: "object",
          properties: {
            typespec_project_path: {
              type: "string",
              description: "Path to the TypeSpec project directory containing .tsp files and tspconfig.yaml file",
            },
            old_swagger_path: {
              type: "string",
              description: "Path to the original swagger file for reference, it is under diff-output folder, usually named oldNormalizedSwagger.json",
            },
            new_swagger_path: {
              type: "string",
              description: "Path to the generated swagger file from TypeSpec, it is under diff-output folder, usually named newNormalizedSwagger.json",
            },
            swagger_semantic_diff_analysis_path: {
              type: "string",
              description: "Path to the SWAGGER_SEMANTIC_DIFF_ANALYSIS.md file with categorized differences, it is under diff-output folder, usually named SWAGGER_SEMANTIC_DIFF_ANALYSIS.md",
            },
          },
          required: [],
          additionalProperties: false,
        },
      },
      {
        name: "apply-typespec-fixes",
        description: "Depends on running generate-typespec-fix-report to generate TSP_FIX.diff report. Apply TypeSpec fixes from TSP_FIX.diff report one category at a time with user confirmation, compile and validate after each fix",
        inputSchema: {
          type: "object",
          properties: {
            tsp_fix_diff_path: {
              type: "string",
              description: "Path to the TSP_FIX.diff file containing proposed fixes, usually under diff-output folder",
            },
          },
          required: ["tsp_fix_diff_path"],
          additionalProperties: false,
        },
      },
    ],
  };
});

// List available prompts
server.setRequestHandler(ListPromptsRequestSchema, async () => {
  return {
    prompts: [],
  };
});

// Handle prompt requests
server.setRequestHandler(GetPromptRequestSchema, async (request: GetPromptRequest) => {
  const { name } = request.params;
  throw new Error(`Unknown prompt: ${name}`);
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request: CallToolRequest) => {
  const { name, arguments: args } = request.params;

  if (name === "tsp-compile-tsmv") {
    try {
      // Extract required parameters
      const typespecProjectPath = args?.typespec_project_path as string;
      const originalFolder = args?.original_openapi_folder as string;
      const generatedFile = args?.generated_openapi_file as string;
      const outputFolder = args?.output_folder as string;

      if (!typespecProjectPath || !originalFolder || !generatedFile || !outputFolder) {
        throw new Error("Missing required parameters: typespec_project_path, original_openapi_folder, generated_openapi_file, and output_folder are all required");
      }

      let result = `TSMV execution with TypeSpec compilation started.\n\n`;

      // Step 1: Compile TypeSpec project
      result += `Step 1: Compiling TypeSpec project at: ${typespecProjectPath}\n`;
      const compileCommand = `cd "${typespecProjectPath}" && tsp compile .`;
      
      console.error(`Running TypeSpec compile command: ${compileCommand}`);
      
      try {
        const { stdout: compileStdout, stderr: compileStderr } = await execAsync(compileCommand);
        result += `TypeSpec compilation completed successfully.\n\n`;
        
        if (compileStdout) {
          result += `Compile STDOUT:\n${compileStdout}\n\n`;
        }
        
        if (compileStderr) {
          result += `Compile STDERR:\n${compileStderr}\n\n`;
        }
      } catch (compileError) {
        const compileErrorMessage = compileError instanceof Error ? compileError.message : String(compileError);
        result += `TypeSpec compilation failed: ${compileErrorMessage}\n\n`;
        // Continue with TSMV even if compilation fails, as user might want to see validation results
      }

      // Step 2: Run TSMV
      result += `Step 2: Running TSMV validation\n`;
      const tsmvCommand = `npx tsmv "${originalFolder}" "${generatedFile}" --outputFolder "${outputFolder}"`;
      
      console.error(`Running tsmv command: ${tsmvCommand}`);
      
      // Execute the TSMV command
      const { stdout, stderr } = await execAsync(tsmvCommand);
      
      result += `TSMV validation completed successfully.\n\n`;
      result += `Command: ${tsmvCommand}\n\n`;
      
      if (stdout) {
        result += `TSMV STDOUT:\n${stdout}\n\n`;
      }
      
      if (stderr) {
        result += `TSMV STDERR:\n${stderr}\n\n`;
      }
      
      result += `Output saved to: ${outputFolder}`;

      return {
        content: [
          {
            type: "text",
            text: result,
          },
        ],
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      return {
        content: [
          {
            type: "text",
            text: `Error running tsmv: ${errorMessage}`,
          },
        ],
        isError: true,
      };
    }
  }

  if (name === "swagger-semantic-diff-analyze") {
    try {
      const { template, instructions, scriptContent } = await readTemplateFiles();
      
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

        
## API Changes Counting Script
The following PowerShell script should be used to count total diff items in API_CHANGES.md:

\`\`\`powershell count-api-changes-items.ps1
${scriptContent}
\`\`\`

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

  if (name === "generate-typespec-fix-report") {
    try {
      const { template, instructions } = await readTypeSpecFixGenerateTemplateFiles();
      
      // Extract parameters with defaults
      const typespecProjectPath = (args?.typespec_project_path as string) || "[TypeSpec Project Path]";
      const oldSwaggerPath = (args?.old_swagger_path as string) || "[Original Swagger Path]";
      const newSwaggerPath = (args?.new_swagger_path as string) || "[Generated Swagger Path]";
      const swaggerDiffAnalysisPath = (args?.swagger_semantic_diff_analysis_path as string) || "[Swagger Diff Analysis Path]";
      const currentDate = new Date().toISOString().split('T')[0];

      // Get list of TypeSpec files if project path is provided and valid
      let typespecFilesList = "[TypeSpec Files List]";
      if (typespecProjectPath !== "[TypeSpec Project Path]") {
        try {
          const entries = await fs.readdir(typespecProjectPath, { withFileTypes: true });
          const tspFiles = entries
            .filter(entry => entry.isFile() && entry.name.endsWith('.tsp'))
            .map(entry => `- ${entry.name}`)
            .join('\n');
          if (tspFiles) {
            typespecFilesList = tspFiles;
          }
        } catch (error) {
          // If we can't read the directory, use the placeholder
          console.error(`Warning: Could not read TypeSpec project directory: ${error}`);
        }
      }

      // Create the customized template with provided arguments
      let customizedTemplate = template
        .replace(/\[TypeSpec Project Path\]/g, typespecProjectPath)
        .replace(/\[Swagger Diff Analysis Path\]/g, swaggerDiffAnalysisPath)
        .replace(/\[Original Swagger Path\]/g, oldSwaggerPath)
        .replace(/\[Generated Swagger Path\]/g, newSwaggerPath)
        .replace(/\[Date\]/g, currentDate)
        .replace(/\[TypeSpec Files List\]/g, typespecFilesList);

      const fullInstructions = `# TypeSpec Fix Report Generation

## Instructions
${instructions}

## Fix Report Template
${customizedTemplate}

Use this template and follow these instructions to analyze all swagger diffs and generate a comprehensive TSP_FIX.diff report with proposed fixes.`;

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
            text: `Error generating TypeSpec fix report instructions: ${errorMessage}`,
          },
        ],
        isError: true,
      };
    }
  }

  if (name === "apply-typespec-fixes") {
    try {
      const { instructions } = await readTypeSpecFixApplyTemplateFiles();
      
      // Extract parameter
      const tspFixDiffPath = (args?.tsp_fix_diff_path as string) || "[TSP_FIX.diff Path]";

      const fullInstructions = `# Apply TypeSpec Fixes

## Fix Report
- Fix Report: ${tspFixDiffPath}

## Instructions
${instructions}

Follow these instructions to apply the fixes from TSP_FIX.diff one category at a time with user confirmation.`;

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
            text: `Error generating TypeSpec fix application instructions: ${errorMessage}`,
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
