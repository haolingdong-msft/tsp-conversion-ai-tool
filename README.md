# TypeSpec Conversion AI Tool

A Model Context Protocol (MCP) server that provides AI-powered tools for TypeSpec conversion and swagger semantic diff analysis.

## MCP Tools Overview

This MCP server provides four specialized tools for TypeSpec migration and swagger validation:

1. **Swagger Semantic Diff Analysis** - Analyzes and categorizes all differences between old and new swagger files.
   - **Prompt:** [`mcp/prompts_swagger_diff_report_generate.md`](mcp/prompts_swagger_diff_report_generate.md)
   - **Template:** [`mcp/SWAGGER_SEMANTIC_DIFF_ANALYSIS_TEMPLATE.md`](mcp/SWAGGER_SEMANTIC_DIFF_ANALYSIS_TEMPLATE.md)
   - **Output:** `SWAGGER_SEMANTIC_DIFF_ANALYSIS.md`

2. **TypeSpec Fix Report Generation** - Generates detailed fix proposals with root cause analysis and TSG references for each semantic diff category. Will NOT update .tsp source files.
   - **Prompt:** [`mcp/prompts_tsp_fix_generate.md`](mcp/prompts_tsp_fix_generate.md)
   - **Template:** [`mcp/TYPESPEC_FIX_TEMPLATE.md`](mcp/TYPESPEC_FIX_TEMPLATE.md)
   - **Output:** `TSP_FIX.diff`

3. **TypeSpec Fix Application** -  The tool will update typespec code and commit for each category one by one.
   - **Prompt:** [`mcp/prompts_tsp_fix_apply.md`](mcp/prompts_tsp_fix_apply.md)
   - **Action:** Modifies `.tsp` files and validates with tsmv

4. **TypeSpec Compile and Validate** - Runs TypeSpec compilation and migration validator to ensure functional equivalence.
   - **Tool:** `tsp-compile-tsmv`
   - **Output:** `tsmv_output.json`, updated diff files


## Getting Started

### Prerequisites

- Run `tsp-client convert` command and `tsmv`, which outputs a `diff-output` folder(e.g. `C:\workspace\azure-rest-api-specs\specification\databoxedge\DataBoxEdge.Management\diff-output`) containing below files:
  - `API_CHANGES.md` - Detailed diff report between old and new swagger
  - `newNormalizedSwagger.json` - Normalized new swagger specification
  - `oldNormalizedSwagger.json` - Normalized old swagger specification


### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/haolingdong-msft/tsp-conversion-ai-tool.git
   cd tsp-conversion-ai-tool
   ```

2. **Install dependencies:**
   ```bash
   cd mcp
   npm install
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

### Configuration

Add the MCP server configuration to your VS Code settings. Update the file:
```
C:\workspace\azure-rest-api-specs\.vscode\mcp.json
```

With the following configuration:

```json
{  
  "servers": {
    "azure-sdk-mcp": {
      "type": "stdio",
      "command": "pwsh",        
      "args": ["${workspaceFolder}/eng/common/mcp/azure-sdk-mcp.ps1", "-Run"]
    },
    "typespec-conversion-ai-tools-mcp": {
      "type": "stdio",
      "command": "node",
      "args": [
        "C:\\workspace\\tsp-conversion-ai-tool\\mcp\\dist\\index.js"
      ]
    }
  }
}
```

### Usage

Once configured, you can use the following AI prompts:

**1. Swagger Semantic Diff Analysis**
  ```
  analyze swagger semantic diff for <service-name>
  ```
  

**2. TypeSpec Fix Report Generation**
  ```
  generate typespec fix report for <service-name>
  ```
  
  
**3. TypeSpec Fix Application**
  ```
  apply typespec fix report for <service-name>
  ```

  
**4. TypeSpec Compile and Validate**
  ```
  tsp compile and tsmv for <service-name>
  ```


