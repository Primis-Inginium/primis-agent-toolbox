-- 🛰️ Primis-Inginium Service Registry
-- Central database to track all organization-wide services.

CREATE TABLE IF NOT EXISTS services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT UNIQUE NOT NULL,
    repo_url TEXT NOT NULL,
    deployment_url TEXT,
    status TEXT CHECK (status IN ('active', 'archived', 'deprecated')) DEFAULT 'active',
    owner_identity TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    metadata JSONB -- For storing tech stack, NFRs, and discovery links
);

CREATE INDEX idx_services_name ON services(name);
