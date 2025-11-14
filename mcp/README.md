# Swagger Functional Equivalence MCP Server

This is a Model Context Protocol (MCP) server that provides prompts for analyzing functional equivalence between swagger files during API migrations. It uses the templates and instructions from the `mcp` folder to generate comprehensive analysis prompts.

## Features

- **MCP Prompt**: `swagger-functional-equivalence-analysis` - Generates detailed prompts for analyzing swagger functional equivalence
- **MCP Tool**: `get-swagger-analysis-instructions` - Returns comprehensive instructions and customized template for creating swagger functional equivalence analysis
- **Template Integration**: Uses `SWAGGER_FUNCTIONAL_EQUIVALENCE_ANALYSIS_TEMPLATE.md` as the output template
- **Instruction Integration**: Uses `prompts_swagger_diff_report_generate.md` for analysis workflow instructions
- **Customizable Parameters**: Accepts service name, API version, and file paths as arguments

## Installation

```powershell
cd mcp
npm install
```

## Development

Build the TypeScript source:
```powershell
npm run build
```

Run in development mode:
```powershell
npm run dev
```

## Usage

### As an MCP Server

The server can be integrated with MCP-compatible clients. It provides one prompt and one tool:

**Prompt**: `swagger-functional-equivalence-analysis`

**Parameters**:
- `service_name` (required): Name of the service being analyzed
- `api_version` (required): Version of the API being analyzed  
- `old_swagger_path` (required): Path to the old normalized swagger file
- `new_swagger_path` (required): Path to the new normalized swagger file
- `api_changes_path` (required): Path to the API_CHANGES.md file

**Tool**: `get-swagger-analysis-instructions`

**Parameters**:
- `service_name` (optional): Name of the service being analyzed
- `api_version` (optional): Version of the API being analyzed  
- `old_swagger_path` (optional): Path to the old normalized swagger file
- `new_swagger_path` (optional): Path to the new normalized swagger file
- `api_changes_path` (optional): Path to the API_CHANGES.md file

The tool returns comprehensive instructions with a customized template for performing swagger functional equivalence analysis.

### Example Usage

When invoked with parameters like:
```json
{
  "service_name": "Azure CDN",
  "api_version": "2023-05-01",
  "old_swagger_path": "../cdn/oldNormalizedSwagger.json",
  "new_swagger_path": "../cdn/newNormalizedSwagger.json", 
  "api_changes_path": "../cdn/API_CHANGES.md"
}
```

The server will generate a comprehensive prompt that:

1. Includes the analysis instructions from `prompts_swagger_diff_report_generate.md`
2. Provides a customized template with the service details filled in
3. Gives detailed guidance on how to perform the analysis
4. Explains the principles of functional equivalence analysis

## Output

The generated prompt guides the analyst to create a detailed functional equivalence analysis report that includes:

- Executive summary with recommendation (APPROVE/REJECT)
- Categorized analysis of all changes
- Code examples from old and new swagger files
- Breaking change assessments
- Complete coverage verification
- Links to source files and specific changes

## Files

- `src/index.ts` - Main MCP server implementation
- `SWAGGER_FUNCTIONAL_EQUIVALENCE_ANALYSIS_TEMPLATE.md` - Output template
- `prompts_swagger_diff_report_generate.md` - Analysis instructions and workflow
- `package.json` - Project configuration
- `tsconfig.json` - TypeScript configuration

## Architecture

The MCP server is built using:
- **@modelcontextprotocol/sdk** for MCP protocol implementation
- **TypeScript** for type safety and modern JavaScript features
- **Node.js** for runtime environment

The server reads the template and instruction files at runtime and combines them with user-provided parameters to generate customized analysis prompts.
