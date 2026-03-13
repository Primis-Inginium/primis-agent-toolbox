/**
 * 🕵️ Modularity Linter
 * Ensures that features do not depend on each other directly.
 * Standard: Feature A should NOT import from Feature B. Both should use @core.
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const FEATURES_PATH = path.join(process.cwd(), 'src', 'features');

function checkModularity() {
  console.log("🔍 Checking architectural modularity...");
  
  const files = glob.sync('src/features/**/*.ts*');
  let issuesFound = false;

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const currentFeature = path.basename(path.dirname(file));
    
    // Simple regex to find imports from other features
    const otherFeatureImports = content.match(/from ['"]@features\/([^'"]+)['"]/g);
    
    if (otherFeatureImports) {
      otherFeatureImports.forEach(imp => {
        const importedFeature = imp.match(/@features\/([^'"]+)/)[1].split('/')[0];
        if (importedFeature !== currentFeature) {
          console.error(`❌ Modularity Violation in ${file}:`);
          console.error(`   Feature '${currentFeature}' is importing directly from '${importedFeature}'.`);
          console.error(`   Fix: Move shared logic to @core.`);
          issuesFound = true;
        }
      });
    }
  });

  if (!issuesFound) {
    console.log("✅ All modularity checks passed!");
    process.exit(0);
  } else {
    process.exit(1);
  }
}

checkModularity();
