-- 🌌 Primis-Inginium Omniscient Database (Service Registry v2)
-- A comprehensive state graph for the entire AI-driven organization.

-- 1. Services Table (Legacy Registry+)
CREATE TABLE IF NOT EXISTS services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT UNIQUE NOT NULL,
    repo_url TEXT NOT NULL,
    deployment_url TEXT,
    status TEXT DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Knowledge Graph (Central RAG Index)
CREATE TABLE IF NOT EXISTS knowledge_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    content_link TEXT NOT NULL, -- Path to markdown in Toolbox or Scaffold
    category TEXT CHECK (category IN ('standard', 'pattern', 'discovery', 'infra')),
    tags TEXT[],
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Prompt Performance (Promptfoo Integration)
CREATE TABLE IF NOT EXISTS prompt_evals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    prompt_id TEXT NOT NULL,
    version TEXT NOT NULL,
    score FLOAT, -- From Promptfoo assertions
    raw_output JSONB,
    eval_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Architectural Decision Records (ADR)
CREATE TABLE IF NOT EXISTS adrs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    status TEXT CHECK (status IN ('proposed', 'accepted', 'superseded')),
    content TEXT,
    decided_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Agent Audit Logs (Centralized for Security)
CREATE TABLE IF NOT EXISTS agent_audits (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    agent_id TEXT NOT NULL,
    service_id UUID REFERENCES services(id),
    action_taken TEXT NOT NULL,
    impact_level TEXT CHECK (impact_level IN ('low', 'medium', 'high', 'critical')),
    audit_log_url TEXT, -- Link to the PR Audit Log
    logged_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
