/**
 * 🔌 Primis MCP Server (Prototype)
 * Exposes Primis-Inginium knowledge and tools via the Model Context Protocol.
 */

const { Server } = require("@modelcontextprotocol/sdk/server.js");
const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio.js");

const server = new Server({
    name: "primis-mcp",
    version: "1.0.0",
});

// 1. Expose Tools (Actions)
server.tool("create-backlog", "Generate GitHub issues from a requirement file", {
    filePath: { type: "string", description: "Path to requirements.md" }
}, async ({ filePath }) => {
    // Logic to call issue-generator.js
    return { content: [{ type: "text", text: `Backlog generation triggered for ${filePath}` }] };
});

// 2. Expose Resources (Knowledge)
server.resource("discovery-standard", "mcp://knowledge/discovery", async () => {
    return { content: [{ type: "text", text: "Primis Discovery Standard: [Content from RAG Docs...]" }] };
});

// 3. Expose Prompts (Instructions)
server.prompt("translate-transcript", "Transcript to User Stories prompt template", {
    transcript: { type: "string" }
}, async ({ transcript }) => {
    return {
        messages: [{
            role: "user",
            content: { type: "text", text: `Translate this: ${transcript} using our discovery standard.` }
        }]
    };
});

async function run() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("🚀 Primis MCP Server running on stdio");
}

run().catch(console.error);
