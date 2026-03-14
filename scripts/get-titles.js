const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\tubul\\AndroidStudioProjects\\PrimisInginium\\primis_analysis\\docs';

try {
    const files = fs.readdirSync(dir);
    let output = '';
    files.forEach(f => {
        if (f.endsWith('.md')) {
            const content = fs.readFileSync(path.join(dir, f), 'utf-8');
            const lines = content.split('\n');
            // Find the first heading line starting with #
            const titleLine = lines.find(l => l.trim().startsWith('#'));
            if (titleLine) {
                output += `| ${f} | ${titleLine.trim()} |\n`;
            } else {
                output += `| ${f} | (No Header Found) |\n`;
            }
        }
    });
    fs.writeFileSync('titles_utf8.txt', output, 'utf-8');
    console.log('✅ titles_utf8.txt created successfully!');
} catch (err) {
    console.error(`Error: ${err.message}`);
}
