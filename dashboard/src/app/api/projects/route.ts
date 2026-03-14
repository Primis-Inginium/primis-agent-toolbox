import { NextResponse } from 'next/server';

export async function GET() {
  const projects = [
    {
      name: 'primis-home',
      category: 'Website',
      status: 'Active',
      url: 'https://github.com/turbo-leg/Primis_inginium.git',
      tech: 'Unknown',
    },
    {
      name: 'primis-analysis',
      category: 'Backend',
      status: 'Active',
      url: 'Local / Analysis',
      tech: 'Python / FastAPI',
    },
    {
      name: 'primis-analysis-frontend',
      category: 'Frontend',
      status: 'Active',
      url: 'Local / Analysis',
      tech: 'Next.js 14',
    },
    {
      name: 'primis-agent-toolbox',
      category: 'Core',
      status: 'Active',
      url: 'Local Workspace',
      tech: 'Node.js / MCP',
    },
    {
      name: 'primis-scaffold',
      category: 'Template',
      status: 'Healthy',
      url: 'Local Workspace',
      tech: 'Next.js 14',
    },
  ];

  return NextResponse.json({ projects });
}
