import { useState } from 'react';
import { Briefcase, Code, Terminal, ArrowRight, Zap, Target, Hexagon, Loader2 } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { Skeleton } from './components/Skeleton';
import { EmptyState } from './components/EmptyState';

export default function App() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
    const [mode, setMode] = useState<'pro' | 'fast'>('pro');
    const [quota, setQuota] = useState({ remaining: 15, limit: 15 });

    const simulateSync = () => {
        setStatus('loading');
        toast.info('Instantiating Architecture Nodes...', { icon: <Loader2 className="animate-spin text-violet-400" /> });
        setTimeout(() => {
            setStatus('success');
            toast.success('System Architecture Successfully Provisioned');
            setQuota(q => ({ ...q, remaining: Math.max(0, q.remaining - 1) }));
        }, 2500);
    };

    return (
        <div className="min-h-screen p-6 md:p-12 lg:p-24 flex flex-col items-center justify-center relative overflow-hidden bg-slate-950">
            <Toaster theme="dark" position="bottom-right" richColors />
            {/* Background Decorators */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px]" />

            <div className="max-w-5xl w-full z-10">

                {/* Header Section */}
                <div className="flex justify-between items-start mb-8 w-full">
                    <div className="inline-flex flex-col gap-2">
                        <button
                            onClick={() => setMode(m => m === 'pro' ? 'fast' : 'pro')}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all w-fit ${mode === 'pro'
                                ? 'bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-lg shadow-violet-500/20 text-white'
                                : 'bg-gradient-to-br from-emerald-600 to-teal-600 shadow-lg shadow-emerald-500/20 text-white'
                                }`}
                        >
                            {mode === 'pro' ? '⚡ PRO' : '🚀 FAST'}
                        </button>
                        <div className="flex items-center gap-2">
                            <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-violet-500 transition-all duration-500" style={{ width: `${(quota.remaining / quota.limit) * 100}%` }} />
                            </div>
                            <span className="text-xs text-slate-400 font-mono">{quota.remaining}/{quota.limit}</span>
                        </div>
                    </div>
                </div>

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
                <div className="mb-8 flex justify-center">
                    <button
                        onClick={simulateSync}
                        disabled={status === 'loading'}
                        className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white rounded-xl font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] disabled:opacity-50 flex items-center gap-3"
                    >
                        {status === 'loading' ? (
                            <><Loader2 className="animate-spin" size={20} /> Provisioning Nodes...</>
                        ) : 'Simulate Infrastructure Sync'}
                    </button>
                </div>

                <div className="w-full mb-16 min-h-[400px]">
                    {status === 'idle' && <EmptyState />}

                    {status === 'loading' && <Skeleton />}

                    {status === 'success' && (
                        <div className="glass-card p-10 relative overflow-hidden border-violet-500/20 bg-slate-900/60 animate-in fade-in slide-in-from-bottom-4 duration-500">
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
                    )}
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
