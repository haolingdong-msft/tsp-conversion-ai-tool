# TypeSpec Conversion AI Tool

A Model Context Protocol (MCP) server that provides AI-powered tools for TypeSpec conversion and swagger functional equivalence analysis.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- VS Code with Claude Dev extension
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

Once configured, you can use the following AI prompts in Claude Dev:

- **Analyze swagger functional equivalence:**
  ```
  analyze swagger functional equivalence for <service-name>
  ```
  Add the diff-output folder to chat context for analysis.

The tool will provide comprehensive functional equivalence analysis between old and new swagger specifications, helping ensure API compatibility during TypeSpec migrations.