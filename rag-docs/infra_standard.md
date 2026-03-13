# ☁️ Primis-Inginium Infrastructure Standard

This guide is optimized for AI agents to manage cloud infrastructure safely and consistently.

## 1. Environment Management
- **Local**: Use `.env.local` for development secrets. Never commit this file.
- **Production**: Manage secrets via the Vercel/Supabase CLI or Dashboard.
- **Protocol**: If an agent needs a new environment variable, it must be requested via a `status:blocked-by-infrastructure` issue.

## 2. Deployment Protocol (Vercel)
- All main branches must be linked to a Vercel production project.
- Feature branches automatically get **Preview Deployments**.
- **Standard**: Agents should not trigger production deployments without a `status:human-signoff` label on the PR.

## 3. Database Provisioning (Supabase/Postgres)
- Use migrations for all schema changes.
- Place all migrations in `/infra/migrations/`.
- **Constraint**: Agents can write migrations but cannot execute `db push` to production autonomously.

## 4. Resource Naming
- Project names: `primis-[client]-[project]`
- DB names: `primis_[client]_[project]_db`

---
*Automation through Governance.*
