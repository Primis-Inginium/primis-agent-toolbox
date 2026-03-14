export default function Home() {
  const projects = [
    {
      name: 'primis-home',
      category: 'Website',
      status: 'Active',
      url: 'https://github.com/turbo-leg/Primis_inginium.git',
      tech: 'Unknown',
      icon: '🌐',
    },
    {
      name: 'primis-analysis',
      category: 'Backend',
      status: 'Active',
      url: 'Local / Analysis',
      tech: 'Python / FastAPI',
      icon: '⚙️',
    },
    {
      name: 'primis-analysis-frontend',
      category: 'Frontend',
      status: 'Active',
      url: 'Local / Analysis',
      tech: 'Next.js 14',
      icon: '🎨',
    },
    {
      name: 'primis-agent-toolbox',
      category: 'Core',
      status: 'Active',
      url: 'Local Workspace',
      tech: 'Node.js / MCP',
      icon: '🛠️',
    },
    {
      name: 'primis-scaffold',
      category: 'Template',
      status: 'Healthy',
      url: 'Local Workspace',
      tech: 'Next.js 14',
      icon: '📋',
    },
  ];

  return (
    <main className="min-h-screen p-8 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-12 border-b border-zinc-800 pb-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Primis <span className="text-purple-500">Dashboard</span>
          </h1>
          <p className="text-zinc-400 mt-2">Central Node Control Plane</p>
        </div>
        <div className="flex items-center gap-2 bg-purple-900/40 text-purple-200 px-4 py-1.5 rounded-full text-sm border border-purple-500/30 glass-effect">
          <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse"></span>
          Org AI: Connected
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {projects.map((project) => (
          <div
            key={project.name}
            className="glass-effect p-6 rounded-2xl glow-hover flex flex-col justify-between h-48 cursor-pointer group transition-all"
          >
            <div>
              <div className="flex justify-between items-start">
                <span className="text-3xl">{project.icon}</span>
                <span className="bg-zinc-800 text-zinc-300 text-xs px-2.5 py-1 rounded-full font-medium">
                  {project.category}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-white mt-4 group-hover:text-purple-400 transition-colors">
                {project.name}
              </h2>
              <p className="text-zinc-500 text-sm mt-1">{project.tech}</p>
            </div>

            <div className="flex justify-between items-center mt-4">
              <span className="text-zinc-400 text-xs truncate max-w-[150px]">
                {project.url}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-green-400">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400"></span>
                {project.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
