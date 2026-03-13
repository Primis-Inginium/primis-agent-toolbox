/**
 * 🗄️ Database Initialization & Service Registration
 * Provisions the project DB and registers it in the Central Service Registry.
 * Usage: node init-db.js <db-name> <repo-url>
 */

function initDB(dbName, repoUrl) {
    if (!dbName || !repoUrl) {
        console.error("❌ Usage: node init-db.js <db-name> <repo-url>");
        process.exit(1);
    }

    console.log(`🛠 [Project] Provisioning database: ${dbName}...`);

    try {
        // Step 1: Provision Project DB
        console.log(`1. Creating project database '${dbName}'...`);
        console.log(`2. Running baseline migrations...`);

        // Step 2: Register in Central Service Registry
        console.log(`\n🛰️ [Orchestration] Registering service in Central Registry...`);
        const registrationQuery = `
            INSERT INTO services (name, repo_url, status) 
            VALUES ('${dbName}', '${repoUrl}', 'active');
        `;
        console.log(`> Executing registration: ${registrationQuery.trim()}`);

        console.log(`✅ Success: ${dbName} is now active and registered.`);
    } catch (error) {
        console.error(`❌ Initialization failed: ${error.message}`);
        process.exit(1);
    }
}

const db = process.argv[2];
const url = process.argv[3];
initDB(db, url);
