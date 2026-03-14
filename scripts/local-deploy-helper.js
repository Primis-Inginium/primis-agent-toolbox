/**
 * 🚀 Local Deployment Helper
 * Listens for GitHub webhooks and triggers local auto-deployment.
 */

const http = require('http');
const { exec } = require('child_process');

const PORT = 8080;

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/webhook/deploy') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            console.log("📦 Received Deployment Webhook...");
            
            // 1. Pull latest changes
            console.log("> Pulling latest code...");
            exec('git pull origin master', (err, stdout, stderr) => {
                if (err) return console.error(`❌ Git Pull Error: ${err}`);
                console.log(stdout);

                // 2. Restart Docker Stack
                console.log("> Restarting services...");
                exec('docker-compose up -d --build', (err, stdout, stderr) => {
                    if (err) return console.error(`❌ Docker Error: ${err}`);
                    console.log("✅ Stack Redeployed successfully.");
                });
            });

            res.writeHead(200);
            res.end('Deployment triggered');
        });
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`📡 Local Deploy Agent listening on port ${PORT}`);
    console.log(`🔗 Point your Cloudflare Tunnel to http://localhost:${PORT}/webhook/deploy`);
});
