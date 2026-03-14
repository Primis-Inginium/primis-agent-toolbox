const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\tubul\\AndroidStudioProjects\\PrimisInginium\\primis_analysis\\docs';

try {
    if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir);
        files.forEach(f => {
            if (f.endsWith('.md')) {
                fs.unlinkSync(path.join(dir, f));
                console.log(`✅ Deleted: ${f}`);
            }
        });
        console.log('✅ Outdated documentation cleared.');
    } else {
        console.log('ℹ️ docs folder does not exist.');
    }
} catch (err) {
    console.error(`Error: ${err.message}`);
}
