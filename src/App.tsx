import { Briefcase, FileText, Database, Server, Smartphone, Camera, UploadCloud, MapPin, HardDrive, RefreshCw, Zap, ShieldAlert, ActivitySquare, Scale, Target, Rocket, Monitor, ChevronRight } from 'lucide-react';

// ---------- Primitives ----------
function SectionBadge({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-[11px] font-bold uppercase tracking-widest">
            {children}
        </span>
    );
}

function FlowNode({ icon, label, sub, glow }: { icon: React.ReactNode; label: string; sub: string; glow?: string }) {
    return (
        <div className={`flex flex-col items-center text-center px-4 py-5 rounded-2xl border w-full lg:w-auto lg:flex-1 shadow-inner transition-all ${glow || 'bg-slate-900/60 border-slate-800'}`}>
            <div className="mb-3">{icon}</div>
            <div className="text-sm font-bold text-white mb-0.5">{label}</div>
            <div className="text-[11px] text-slate-500">{sub}</div>
        </div>
    );
}

function FlowArrow({ color = 'text-slate-700' }: { color?: string }) {
    return (
        <>
            <ChevronRight className={`${color} hidden lg:block flex-shrink-0 w-5 h-5`} />
            <ChevronRight className={`${color} rotate-90 lg:hidden flex-shrink-0 w-5 h-5`} />
        </>
    );
}

function TagPill({ children }: { children: React.ReactNode }) {
    return (
        <span className="px-3 py-1.5 bg-slate-800/80 text-slate-300 text-xs font-medium rounded-lg border border-slate-700/80">
            {children}
        </span>
    );
}

// ---------- Sections ----------
function GlobalHero() {
    return (
        <div className="text-center mb-20 md:mb-28 space-y-6 pt-12 md:pt-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(139,92,246,0.12)]">
                <Briefcase size={14} />
                Enterprise Engineering Showcase
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
                Freelance Architecture
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-emerald-400">
                    Technical Deep Dive
                </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                A transparent look into the production-grade systems, AI pipelines, and offline-first mobile infrastructures powering two real enterprise clients.
            </p>
            {/* Decorative pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                {['Python / Flask', 'Google Gemini AI', 'React 19', 'Capacitor 8', 'SQLite', 'Node.js', 'Supabase'].map(t => (
                    <span key={t} className="px-3 py-1.5 rounded-full text-xs font-medium text-slate-400 border border-slate-800 bg-slate-900/80">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}

function InsuranceProject() {
    const capabilities = [
        { title: 'Policy Analysis', desc: 'Deep-dive into policy documents to find coverage gaps and exclusions.', icon: <FileText className="w-5 h-5 text-white" />, bg: 'bg-indigo-500' },
        { title: 'Claim Assessment', desc: 'Step-by-step guided claim evaluation with coverage validation.', icon: <ShieldAlert className="w-5 h-5 text-white" />, bg: 'bg-orange-500' },
        { title: 'Risk Profiling', desc: 'Generate detailed risk assessments with scoring and mitigation strategies.', icon: <ActivitySquare className="w-5 h-5 text-white" />, bg: 'bg-emerald-500' },
        { title: 'Plan Comparison', desc: 'Side-by-side analysis of insurance plans with cost-benefit breakdown.', icon: <Scale className="w-5 h-5 text-white" />, bg: 'bg-sky-500' },
    ];

    const techStack = ['Python (Flask)', 'Google Gemini AI', 'React', 'Supabase', 'FPDF2', 'JavaScript'];

    return (
        <div className="relative rounded-[2.5rem] overflow-hidden border border-violet-500/20 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 shadow-2xl shadow-violet-500/5 backdrop-blur-xl">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-60" />
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl -z-0 pointer-events-none" />

            <div className="relative z-10 p-8 md:p-14 space-y-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="flex-shrink-0">
                        <div className="p-5 rounded-2xl bg-violet-500/10 border border-violet-500/25 shadow-lg shadow-violet-500/10">
                            <FileText className="w-12 h-12 text-violet-400" />
                        </div>
                    </div>
                    <div className="flex-1 space-y-3">
                        <SectionBadge>Project 01 — Insurance AI</SectionBadge>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                            Intelligent Insurance &amp; Claims Automation Platform
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            An AI-powered pipeline automating motor insurance claims by extracting data from complex unstructured PDFs — Registration Certificates, Licenses, Invoices — and generating deterministic survey reports with precise depreciation calculations.
                        </p>
                    </div>
                </div>

                {/* Mission & Result */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Target className="w-5 h-5 text-violet-400" />
                            <h4 className="text-white font-semibold">The Mission</h4>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Automate a complex, manual insurance reporting workflow for Mr. Rajat Gupta (Insurance Surveyor) using AI to drastically reduce claim turnaround time.
                        </p>
                    </div>
                    <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-6 relative overflow-hidden">
                        <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none" />
                        <div className="flex items-center gap-3 mb-4 relative z-10">
                            <Rocket className="w-5 h-5 text-emerald-400" />
                            <h4 className="text-white font-semibold">The Result</h4>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed relative z-10">
                            Achieved a massive <strong className="text-emerald-400">90% speed improvement</strong> in report generation and a <strong className="text-emerald-400">20% increase</strong> in client capacity.
                        </p>
                    </div>
                    <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Monitor className="w-5 h-5 text-fuchsia-400" />
                            <h4 className="text-white font-semibold">Tech Stack</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {techStack.map(t => <TagPill key={t}>{t}</TagPill>)}
                        </div>
                    </div>
                </div>

                {/* Capabilities Grid */}
                <div>
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5 border-b border-slate-800/60 pb-3">Core Capabilities</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {capabilities.map((cap) => (
                            <div key={cap.title} className="bg-slate-950/50 border border-slate-800/60 rounded-2xl p-5 hover:border-slate-700 transition-all">
                                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 ${cap.bg}`}>
                                    {cap.icon}
                                </div>
                                <h4 className="text-white font-semibold text-sm mb-1.5">{cap.title}</h4>
                                <p className="text-slate-500 text-xs leading-relaxed">{cap.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Flow Diagram */}
                <div>
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5 border-b border-slate-800/60 pb-3">Data Flow Topology</h3>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
                        <FlowNode icon={<UploadCloud className="w-8 h-8 text-slate-400" />} label="User Upload" sub="Raw PDFs & Images" />
                        <FlowArrow color="text-violet-500/40" />
                        <FlowNode icon={<Server className="w-8 h-8 text-violet-400" />} label="Flask Backend" sub="Auth & Orchestration" glow="bg-violet-900/20 border-violet-500/30" />
                        <FlowArrow color="text-fuchsia-500/40" />
                        <FlowNode icon={<Zap className="w-8 h-8 text-fuchsia-400" />} label="Gemini API" sub="50+ Field Extraction" glow="bg-fuchsia-900/20 border-fuchsia-500/30" />
                        <FlowArrow color="text-emerald-500/40" />
                        <FlowNode icon={<FileText className="w-8 h-8 text-emerald-400" />} label="FPDF2 Gen" sub="Depreciation Math" glow="bg-emerald-900/20 border-emerald-500/30" />
                        <FlowArrow color="text-blue-500/40" />
                        <FlowNode icon={<Database className="w-8 h-8 text-blue-400" />} label="Supabase & Drive" sub="Store PDFs & Data" glow="bg-blue-900/20 border-blue-500/30" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function FieldWorkerProject() {
    return (
        <div className="relative rounded-[2.5rem] overflow-hidden border border-emerald-500/20 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 shadow-2xl shadow-emerald-500/5 backdrop-blur-xl">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-60" />
            {/* Background glow */}
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl -z-0 pointer-events-none" />

            <div className="relative z-10 p-8 md:p-14 space-y-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="flex-shrink-0">
                        <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 shadow-lg shadow-emerald-500/10">
                            <Smartphone className="w-12 h-12 text-emerald-400" />
                        </div>
                    </div>
                    <div className="flex-1 space-y-3">
                        <SectionBadge>Project 02 — Mobile Sync</SectionBadge>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                            Enterprise Field-Worker Photo Sync App
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            An offline-first cross-platform application empowering field workers to rapidly capture, geotag, and seamlessly cloud-sync site photographs — even in zero-connectivity remote environments.
                        </p>
                    </div>
                </div>

                {/* Tech Stack */}
                <div>
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Core Architecture Layers</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: 'Client App', value: 'React 19 + Zustand', color: 'text-teal-400' },
                            { label: 'Mobile Wrapper', value: 'Capacitor 8 (APK)', color: 'text-emerald-400' },
                            { label: 'Local State', value: 'Capacitor SQLite', color: 'text-amber-400' },
                            { label: 'Sync Server', value: 'Node.js + Drive API', color: 'text-blue-400' },
                        ].map(({ label, value, color }) => (
                            <div key={label} className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4">
                                <div className={`text-xs font-bold uppercase mb-1.5 tracking-wider ${color}`}>{label}</div>
                                <div className="text-white font-medium text-sm">{value}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Flow Diagram */}
                <div>
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5 border-b border-slate-800/60 pb-3">Offline-First Sync Architecture</h3>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
                        <FlowNode icon={<div className="flex gap-1.5"><Camera className="w-7 h-7 text-slate-400" /><MapPin className="w-7 h-7 text-slate-400" /></div>} label="Capacitor API" sub="Capture & Geotag" />
                        <FlowArrow color="text-amber-500/40" />
                        <FlowNode icon={<HardDrive className="w-8 h-8 text-amber-400" />} label="Local SQLite" sub="Offline Queue Store" glow="bg-amber-900/20 border-amber-500/30" />
                        <FlowArrow color="text-emerald-500/40" />
                        <FlowNode icon={<RefreshCw className="w-8 h-8 text-emerald-400" />} label="Background Sync" sub="Capacitor Runner" glow="bg-emerald-900/20 border-emerald-500/30" />
                        <FlowArrow color="text-blue-500/40" />
                        <FlowNode icon={<Server className="w-8 h-8 text-blue-400" />} label="Node.js Gateway" sub="OAuth & Rate Limits" glow="bg-blue-900/20 border-blue-500/30" />
                        <FlowArrow color="text-blue-500/40" />
                        <FlowNode icon={<Database className="w-8 h-8 text-cyan-400" />} label="Google Drive" sub="Cloud Persistence" glow="bg-cyan-900/20 border-cyan-500/30" />
                    </div>
                </div>

                {/* Key Design Decisions */}
                <div>
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5 border-b border-slate-800/60 pb-3">Key Engineering Decisions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { title: 'Offline First', desc: 'All data captured into local SQLite. No network dependency at the edge.', icon: '📴' },
                            { title: 'Conflict-Free Sync', desc: 'Timestamp-based queue system prevents data conflicts on reconnect.', icon: '🔁' },
                            { title: 'Zero Setup APK', desc: 'Capacitor wraps the React PWA into a distributable APK without App Store overhead.', icon: '📦' },
                        ].map(item => (
                            <div key={item.title} className="bg-slate-950/50 border border-slate-800/60 rounded-2xl p-5">
                                <div className="text-2xl mb-3">{item.icon}</div>
                                <h4 className="text-white font-semibold text-sm mb-1.5">{item.title}</h4>
                                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function App() {
    return (
        <div className="min-h-screen bg-[#060810] text-slate-50 overflow-x-hidden">
            {/* Ambient background blobs */}
            <div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-violet-700/8 rounded-full blur-[200px] pointer-events-none z-0" />
            <div className="fixed bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-600/8 rounded-full blur-[160px] pointer-events-none z-0" />
            <div className="fixed top-1/2 left-[-5%] w-[400px] h-[400px] bg-fuchsia-700/6 rounded-full blur-[150px] pointer-events-none z-0" />

            <main className="relative z-10 max-w-6xl mx-auto px-5 md:px-10 lg:px-12 pb-20">
                <GlobalHero />

                <div className="space-y-10 md:space-y-16">
                    <InsuranceProject />
                    <FieldWorkerProject />
                </div>

                <footer className="mt-20 text-center text-sm text-slate-700 uppercase tracking-widest font-medium pb-4">
                    <p>© 2026 · Architectural Case Studies · All Systems Production-Grade</p>
                </footer>
            </main>
        </div>
    );
}
