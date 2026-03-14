const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\tubul\\AndroidStudioProjects\\PrimisInginium\\primis_analysis\\docs';

const filesToDelete = [
    'SESSION_SUMMARY.md',
    'EMAIL_SYSTEM_COMPLETE.md',
    'HOW_TO_TEST.md',
    'STATUS_READY_TO_TEST.md',
    'MIGRATION_SETUP_COMPLETE.md'
];

filesToDelete.forEach(f => {
    const file = path.join(dir, f);
    try {
        if (fs.existsSync(file)) {
            fs.unlinkSync(file);
            console.log(`✅ Deleted: ${f}`);
        } else {
            console.log(`ℹ️ Skipped (Not Found): ${f}`);
        }
    } catch (err) {
        console.error(`❌ Failed to delete ${f}: ${err.message}`);
    }
});
