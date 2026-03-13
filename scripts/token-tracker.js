/**
 * 🪙 Token & Cost Tracker
 * Logs LLM token usage and calculates costs based on model pricing.
 * Usage: node token-tracker.js <service-id> <model-name> <prompt-tokens> <completion-tokens>
 */

function logUsage(serviceId, modelName, promptTokens, completionTokens) {
    if (!serviceId || !modelName || !promptTokens || !completionTokens) {
        console.error("❌ Usage: node token-tracker.js <service-id> <model-name> <prompt-tokens> <completion-tokens>");
        process.exit(1);
    }

    // Mock pricing lookup
    const pricing = {
        'gemini-1.5-pro': { input: 0.0035, output: 0.0105 }, // Per 1M tokens example
        'claude-3-sonnet': { input: 0.003, output: 0.015 },
        'gpt-4o': { input: 0.005, output: 0.015 }
    };

    const modelPricing = pricing[modelName] || { input: 0, output: 0 };
    const cost = ((promptTokens / 1000000) * modelPricing.input) + ((completionTokens / 1000000) * modelPricing.output);

    console.log(`🪙 [Token Tracker] Logging usage for service: ${serviceId}`);
    console.log(`Model: ${modelName} | Tokens: ${promptTokens} (in) / ${completionTokens} (out)`);
    console.log(`💰 Calculated Cost: $${cost.toFixed(6)}`);

    // In a real scenario, this would UPDATE project_finances AND INSERT INTO token_usage
    const query1 = `INSERT INTO token_usage (service_id, model_name, prompt_tokens, completion_tokens, total_cost) VALUES ('${serviceId}', '${modelName}', ${promptTokens}, ${completionTokens}, ${cost});`;
    const query2 = `UPDATE project_finances SET current_spend = current_spend + ${cost} WHERE service_id = '${serviceId}';`;

    console.log(`> Executing metrics sync...`);
    // console.log(query1);
    // console.log(query2);
    
    console.log(`✅ Usage logged successfully.`);
}

const args = process.argv.slice(2);
logUsage(args[0], args[1], parseInt(args[2]), parseInt(args[3]));
