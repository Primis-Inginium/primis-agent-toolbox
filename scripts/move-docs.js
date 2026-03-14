const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\tubul\\AndroidStudioProjects\\PrimisInginium\\primis_analysis';
const destDir = path.join(rootDir, 'docs');

const filesToMove = [
    'CONTRIBUTING.md',
    'DEFAULT_USERS.md',
    'DEPLOYMENT_CHECKLIST.md',
    'FRESH_START_GUIDE.md',
    'LOCAL_DEV.md',
    'NEON_MIGRATION.md'
];

try {
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }

    filesToMove.forEach(f => {
        const src = path.join(rootDir, f);
        const dest = path.join(destDir, f);
        if (fs.existsSync(src)) {
            fs.renameSync(src, dest);
            console.log(`✅ Moved: ${f} -> docs/`);
        } else {
            console.log(`ℹ️ Skipped (Not Found): ${f}`);
        }
    });
} catch (err) {
    console.error(`Error: ${err.message}`);
}
