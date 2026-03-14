/**
 * 🔌 Primis MCP Server (Standard CJS API)
 * Exposes Primis-Inginium knowledge and tools via the Model Context Protocol.
 */

const path = require('path');
const sdkDir = 'c:\\Users\\tubul\\primis-agent-toolbox\\node_modules\\@modelcontextprotocol\\sdk\\dist\\cjs';

const { Server } = require(path.join(sdkDir, 'server', 'index.js'));
const { StdioServerTransport } = require(path.join(sdkDir, 'server', 'stdio.js'));
const { 
    ListToolsRequestSchema, CallToolRequestSchema,
    ListResourcesRequestSchema, ReadResourceRequestSchema 
} = require(path.join(sdkDir, 'types.js'));

const server = new Server({
    name: "primis-mcp",
    version: "1.0.0",
}, {
    capabilities: {
        tools: {},
        resources: {}
    }
});

// 1. Tools Handlers
server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
        tools: [{
            name: "create-backlog",
            description: "Generate GitHub issues from a requirement file",
            inputSchema: {
                type: "object",
                properties: {
                    filePath: { type: "string" }
                },
                required: ["filePath"]
            }
        }]
    };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
    if (request.params.name === "create-backlog") {
        const filePath = request.params.arguments?.filePath;
        return { content: [{ type: "text", text: `Backlog generation triggered for ${filePath}` }] };
    }
    throw new Error(`Tool not found: ${request.params.name}`);
});

// 2. Resources Handlers
server.setRequestHandler(ListResourcesRequestSchema, async () => {
    return {
        resources: [{
            uri: "mcp://docs/primis-analysis",
            name: "Documentation Index",
            mimeType: "text/markdown"
        }]
    };
});

server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
    if (request.params.uri === "mcp://docs/primis-analysis") {
        const fs = require('fs');
        const indexPath = 'c:\\Users\\tubul\\AndroidStudioProjects\\PrimisInginium\\primis_analysis\\docs\\README.md';
        try {
            const content = fs.readFileSync(indexPath, 'utf-8');
            return { content: [{ type: "text", text: content }] };
        } catch (err) {
            return { content: [{ type: "text", text: `Error reading docs index: ${err.message}` }] };
        }
    }
    throw new Error(`Resource not found: ${request.params.uri}`);
});

async function run() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("🚀 Primis MCP Server running on stdio");
}

run().catch(console.error);
