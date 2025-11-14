# TypeSpec Conversion AI Tool

A Model Context Protocol (MCP) server that provides AI-powered tools for TypeSpec conversion and swagger semantic diff analysis.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- VS Code Github Copilot extension
- TypeScript compiler

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

  ```
  analyze swagger semantic diff for <service-name>
  ```
  The tool will provide comprehensive semantic diff analysis between old and new swagger specifications, categorizing changes and identifying their semantic impact during TypeSpec migrations.


  ```
  generate typespec fix report for <service-name>
  ```
  
  The tool will generate fix report without updating code

  
  ```
  apply typespec fix report for <service-name>
  ```
  The tool will update typespec code and commit for each category one by one
  
  
  ```
  tsp compile and tsmv for <service-name>
  ```
  The tool will run tsp compile and tsmv for one service


