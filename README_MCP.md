# 🔌 Model Context Protocol (MCP) Integration Guide

This guide explains how to connect **Primis-Inginium** AI agents directly to our database, GitHub repos, and filesystems using the open-source **MCP Servers** ecosystem.

A template configuration file has been generated for you at **`primis-agent-toolbox/mcp-config.json`**.

---

## 🛠️ Supported Servers

| Server Name | Command | Purpose |
| :--- | :--- | :--- |
| **`primis-core`** | `node scripts/primis-mcp-server.js` | Custom Primis features (Backlogs, Discovery, Audit). |
| **`filesystem`** | `@modelcontextprotocol/server-filesystem` | Standardized file CRUD access across workspaces safely. |
| **`postgres`** | `@modelcontextprotocol/server-postgres` | Direct read access to the Omniscient DB tables for grid data. |
| **`github`** | `@modelcontextprotocol/server-github` | branch-automation and PR creation. |

---

## 🚀 How to Activate (Example: Claude Desktop)

To run all servers using standard clients (like Claude Desktop or Cursor IDE):

1.  **Locate your Config Folder**:
    -   **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
2.  **Edit the file** and copy the contents of `primis-agent-toolbox/mcp-config.json` directly into it.
3.  **Update Environment Secrets**:
    -   Inside the `github` block, replace `"YOUR_GITHUB_TOKEN_HERE"` with a personal access token.
4.  **Restart your IDE or Client**.

The AI model will now list all tools and resources enabling complete **Cross-Registry Orchestration** without further coding!

---
*Created automatically to power Autonomous AI integration.*
