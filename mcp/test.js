#!/usr/bin/env node

import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { spawn } from "child_process";

async function testMCPServer() {
  console.log("Starting MCP server test...");
  
  // Start the MCP server
  const serverProcess = spawn("node", ["dist/index.js"], {
    cwd: process.cwd(),
    stdio: ["pipe", "pipe", "inherit"]
  });

  // Create client transport
  const transport = new StdioClientTransport({
    stdin: serverProcess.stdin,
    stdout: serverProcess.stdout
  });

  const client = new Client({
    name: "test-client",
    version: "1.0.0"
  }, {
    capabilities: {}
  });

  try {
    await client.connect(transport);
    console.log("✅ Connected to MCP server");

    // Test listing prompts
    const prompts = await client.listPrompts();
    console.log("✅ Available prompts:", prompts.prompts.map(p => p.name));

    // Test listing tools
    const tools = await client.listTools();
    console.log("✅ Available tools:", tools.tools.map(t => t.name));
    
    // Verify both tools are available
    const expectedTools = ["swagger-semantic-diff-analyze", "tsmv-run"];
    expectedTools.forEach(toolName => {
      if (!tools.tools.find(t => t.name === toolName)) {
        throw new Error(`Expected tool '${toolName}' not found`);
      }
    });
    console.log("✅ All expected tools are available");

    // Test getting the specific prompt
    const prompt = await client.getPrompt("swagger-functional-equivalence-analysis", {
      service_name: "Azure CDN",
      api_version: "2023-05-01",
      old_swagger_path: "../cdn/oldNormalizedSwagger.json",
      new_swagger_path: "../cdn/newNormalizedSwagger.json",
      api_changes_path: "../cdn/API_CHANGES.md"
    });
    
    console.log("✅ Generated prompt successfully");
    console.log("Prompt description:", prompt.description);
    console.log("Prompt content length:", prompt.messages[0].content.text.length);

    // Test the new tool
    const toolResult = await client.callTool("swagger-semantic-diff-analyze", {
      service_name: "Azure CDN",
      api_version: "2023-05-01",
      old_swagger_path: "../cdn/oldNormalizedSwagger.json",
      new_swagger_path: "../cdn/newNormalizedSwagger.json",
      api_changes_path: "../cdn/API_CHANGES.md"
    });
    
    console.log("✅ Tool call successful");
    console.log("Tool result content length:", toolResult.content[0].text.length);

    // Test the new tsmv tool (with example paths - this won't actually run since the paths don't exist)
    try {
      console.log("Testing tsmv tool (this will fail gracefully with invalid paths)...");
      const tsmvResult = await client.callTool("tsmv-run", {
        original_openapi_folder: "C:\\workspace\\azure-rest-api-specs\\specification\\databoxedge\\resource-manager\\Microsoft.DataBoxEdge\\stable\\2023-12-01\\old",
        generated_openapi_file: "C:\\workspace\\azure-rest-api-specs\\specification\\databoxedge\\resource-manager\\Microsoft.DataBoxEdge\\stable\\2023-12-01\\openapi.json",
        output_folder: "C:\\workspace\\azure-rest-api-specs\\specification\\databoxedge\\DataBoxEdge.Management\\diff-output"
      });
      console.log("✅ TSMV tool call completed (unexpected success)");
    } catch (tsmvError) {
      console.log("✅ TSMV tool call failed as expected (invalid paths):", tsmvError.message);
    }

    await client.close();
    serverProcess.kill();
    console.log("✅ MCP server test completed successfully");

  } catch (error) {
    console.error("❌ Test failed:", error);
    serverProcess.kill();
    process.exit(1);
  }
}

testMCPServer();
