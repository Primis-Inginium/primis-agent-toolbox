/**
 * 🎫 Issue Generator
 * Converts structured requirement files into GitHub Issues using the ai_task.yml template.
 * Usage: node issue-generator.js <path-to-requirements.md>
 */

const fs = require('fs');
const path = require('path');

async function generateIssues(filePath) {
    if (!filePath) {
        console.error("❌ Please provide a path to a requirements file.");
        process.exit(1);
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Simple parser for User Stories in Markdown
    // Expects: ### [Title] \n - Story: ... \n - Feature: ...
    const storyBlocks = content.split('###').slice(1);

    console.log(`🚀 Found ${storyBlocks.length} story blocks. Generating issues...`);

    storyBlocks.forEach((block, index) => {
        const lines = block.trim().split('\n');
        const title = lines[0].trim();
        const body = lines.slice(1).join('\n').trim();

        // In a real scenario, this would use the GitHub CLI (gh issue create)
        // or the Octokit API. For now, we'll output the command for the user.
        
        const issueCommand = `
gh issue create --title "[AI TASK]: ${title}" --label "type:ai-task,status:needs-triage" --body "
### 🤖 AI Agent Task Request
Converted from: ${path.basename(filePath)}

### Task Description
${body}

### Mandatory Sandbox Environment
AlphaClaw (Managed / Hardened)

### Permission Boundaries
Please review the relevant feature directory in src/features/.
"
        `;

        console.log(`--- Issue #${index + 1}: ${title} ---`);
        console.log(issueCommand);
    });
}

const targetFile = process.argv[2];
generateIssues(targetFile);
