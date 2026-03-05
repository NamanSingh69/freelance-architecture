import { Briefcase, Code, Terminal, ArrowRight, Zap, Target, Hexagon } from 'lucide-react';

export default function App() {
    return (
        <div className="min-h-screen p-6 md:p-12 lg:p-24 flex flex-col items-center justify-center relative overflow-hidden bg-slate-950">
            {/* Background Decorators */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px]" />

            <div className="max-w-5xl w-full z-10">

                {/* Header Section */}
                <div className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-bold uppercase tracking-widest mb-2 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                        <Briefcase size={16} />
                        Proprietary Operations Showcase
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
                        Freelance Ops <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-300">
                            Autonomous Layer
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Due to strict NDA covenants and private IP boundaries, the source code and operational algorithms for enterprise consulting projects are withheld. This page validates the macro-architecture utilized for private client deployments.
                    </p>
                </div>

                {/* Core Architecture Matrix */}
                <div className="glass-card p-10 mb-16 relative overflow-hidden border-violet-500/20 bg-slate-900/60">
                    <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-50" />

                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <Hexagon className="text-violet-400" /> Distributed Architecture Nodes
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 hover:border-violet-500/50 transition-colors shadow-lg">
                            <Code className="w-10 h-10 text-violet-400 mb-4" />
                            <h3 className="font-bold text-white mb-2 text-lg">Cross-Platform Delivery</h3>
                            <p className="text-sm text-slate-400">Robust UI/UX implementation utilizing unified React Native and specialized React Web SPAs.</p>
                        </div>

                        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 hover:border-fuchsia-500/50 transition-colors shadow-lg">
                            <Zap className="w-10 h-10 text-fuchsia-400 mb-4" />
                            <h3 className="font-bold text-white mb-2 text-lg">Serverless Orchestration</h3>
                            <p className="text-sm text-slate-400">Edge-computed APIs deployed across Vercel and Render for scalable compute elasticity.</p>
                        </div>

                        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-colors shadow-lg relative">
                            <Target className="w-10 h-10 text-indigo-400 mb-4" />
                            <h3 className="font-bold text-white mb-2 text-lg">Zero-Trust Boundaries</h3>
                            <p className="text-sm text-slate-400">Strict Pydantic models securing the perimeter for B2B API integrations and microservices.</p>
                        </div>

                    </div>
                </div>

                {/* Deep Dive Details */}
                <div className="glass-card border border-slate-800 bg-slate-900/40 p-10 text-center">
                    <Terminal className="text-slate-500 w-12 h-12 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">Classified Enterprise Repository</h3>
                    <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
                        Proprietary pipelines encompass internal workflow automations, secure ML ingestion layers, and high-frequency data synchronizations. These artifacts reside in air-gapped or private enterprise modules.
                    </p>
                    <div className="inline-flex items-center gap-3 text-violet-400 font-bold uppercase tracking-widest text-sm border-b border-violet-500/30 pb-1">
                        Architecture Validated <ArrowRight size={16} />
                    </div>
                </div>

                <div className="mt-16 text-center text-sm font-medium text-slate-600/80 tracking-wide uppercase">
                    <p>© 2026. Private Architectural Sandbox. Clearance Required for Codebase Access.</p>
                </div>

            </div>
        </div>
    )
}
