/**
 * 📝 Audit Log Helper
 * Helps AI agents generate the mandatory audit log for PRs.
 */

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("🛠 Primis-Inginium AI Audit Log Generator");

const auditTemplate = {
  agent: "",
  prompt: "",
  sandbox: "AlphaClaw",
  tools: "",
  reasoning: ""
};

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function generateLog() {
    auditTemplate.agent = await askQuestion("🤖 Agent Name (e.g., OpenClaw-Alpha): ");
    auditTemplate.prompt = await askQuestion("📝 Triggering Prompt (Full Text): ");
    auditTemplate.tools = await askQuestion("🔧 Tools Used (comma separated): ");
    auditTemplate.reasoning = await askQuestion("🧠 Key Reasoning Summary: ");

    const log = `
---
## 🤖 AI Agent Audit Log
- **Agent Identity**: ${auditTemplate.agent}
- **Trigger Prompt**: ${auditTemplate.prompt}
- **Sandbox Used**: ${auditTemplate.sandbox}
- **Toolbox**: ${auditTemplate.tools}
- **Reasoning Summary**: ${auditTemplate.reasoning}
---
    `;

    console.log("\n✅ Generated Audit Log (Copy this to your PR):\n");
    console.log(log);
    rl.close();
}

generateLog();
