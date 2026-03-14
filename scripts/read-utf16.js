const fs = require('fs');
try {
    const content = fs.readFileSync('titles.txt', 'utf16le');
    console.log(content);
} catch (err) {
    console.error(`Error reading titles.txt: ${err.message}`);
}
