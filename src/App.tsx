import { Briefcase, FileText, Database, Server, UploadCloud, Zap, ActivitySquare, Scale, ChevronRight, HardDrive, RefreshCw, Smartphone, Camera, MapPin } from 'lucide-react';

// ---------- Primitives ----------
function SectionBadge({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-[11px] font-bold uppercase tracking-widest">
            {children}
        </span>
    );
}

function FlowNode({ icon, label, sub, glow }: { icon: React.ReactNode; label: string; sub: string; glow?: string }) {
    return (
        <div className={`flex flex-col items-center text-center px-4 py-5 rounded-2xl border w-full lg:w-auto lg:flex-1 shadow-inner transition-all ${glow || 'bg-[#0f111a] border-slate-800'}`}>
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
                A transparent look into the production-grade macro-architecture and technical patterns powering a custom AI-driven Insurance Survey Report Generator.
            </p>
        </div>
    );
}

function InsuranceOnlineProject() {
    const capabilities = [
        { title: 'AI PDF Extraction', desc: 'Gemini AI extracts 50+ structured fields from unstructured insurance claim documents.', icon: <Zap className="w-5 h-5 text-white" />, bg: 'bg-violet-500' },
        { title: 'Automated Assessment', desc: 'Calculates precise depreciation, GST, and net liability algorithms instantly.', icon: <Scale className="w-5 h-5 text-white" />, bg: 'bg-emerald-500' },
        { title: 'Dual Processing', desc: 'Supports both full document processing and targeted invoice-only parts extraction.', icon: <ActivitySquare className="w-5 h-5 text-white" />, bg: 'bg-indigo-500' },
        { title: 'Professional Reporting', desc: 'Generates multi-page, formatted PDF survey reports with localized number-to-words.', icon: <FileText className="w-5 h-5 text-white" />, bg: 'bg-orange-500' },
    ];

    return (
        <div className="relative rounded-[2.5rem] overflow-hidden border border-violet-500/20 bg-gradient-to-br from-slate-900/90 via-[#0d0f16] to-[#0a0c12] shadow-2xl backdrop-blur-xl">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-60" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl -z-0 pointer-events-none" />

            <div className="relative z-10 p-8 md:p-14 space-y-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="flex-shrink-0">
                        <div className="p-5 rounded-2xl bg-violet-500/10 border border-violet-500/25 shadow-lg shadow-violet-500/10">
                            <Server className="w-12 h-12 text-violet-400" />
                        </div>
                    </div>
                    <div className="flex-1 space-y-3">
                        <SectionBadge>System 01 — Online Edition</SectionBadge>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                            Insurance Survey Report Generator
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            An AI-powered pipeline deployed on Render automating motor insurance claims by extracting data from complex unstructured PDFs (Registration Certificates, Licenses, Invoices) and generating deterministic survey reports.
                        </p>
                    </div>
                </div>

                {/* Tech Stack Grid */}
                <div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: 'Backend', value: 'Python (Flask)', color: 'text-violet-400' },
                            { label: 'AI Engine', value: 'Gemini 3 Flash / 2.5 Pro', color: 'text-fuchsia-400' },
                            { label: 'PDF Engine', value: 'FPDF2 & ReportLab', color: 'text-emerald-400' },
                            { label: 'Cloud Data', value: 'Google Sheets & Drive', color: 'text-blue-400' },
                        ].map(({ label, value, color }) => (
                            <div key={label} className="bg-[#11131c] border border-slate-800/80 rounded-xl p-4">
                                <div className={`text-xs font-bold uppercase mb-1.5 tracking-wider ${color}`}>{label}</div>
                                <div className="text-white font-medium text-sm">{value}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Core Capabilities */}
                <div>
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">Core Capabilities</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {capabilities.map((cap) => (
                            <div key={cap.title} className="bg-[#11131c] border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition-all shadow-lg flex flex-col items-start text-left">
                                <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center mb-5 ${cap.bg}`}>
                                    {cap.icon}
                                </div>
                                <h4 className="text-white font-bold text-sm mb-2">{cap.title}</h4>
                                <p className="text-slate-400 text-xs leading-relaxed">{cap.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Flow Diagram */}
                <div>
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5 border-b border-slate-800/60 pb-3">Cloud Data Flow Topology</h3>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
                        <FlowNode icon={<UploadCloud className="w-8 h-8 text-slate-400" />} label="User Upload" sub="Raw PDFs via Browser" />
                        <FlowArrow color="text-violet-500/40" />
                        <FlowNode icon={<Server className="w-8 h-8 text-violet-400" />} label="Flask Backend" sub="Render Cloud Hosting" glow="bg-violet-900/20 border-violet-500/30" />
                        <FlowArrow color="text-fuchsia-500/40" />
                        <FlowNode icon={<Zap className="w-8 h-8 text-fuchsia-400" />} label="Gemini AI" sub="Data Extraction" glow="bg-fuchsia-900/20 border-fuchsia-500/30" />
                        <FlowArrow color="text-emerald-500/40" />
                        <FlowNode icon={<FileText className="w-8 h-8 text-emerald-400" />} label="FPDF2 Gen" sub="Report Generation" glow="bg-emerald-900/20 border-emerald-500/30" />
                        <FlowArrow color="text-blue-500/40" />
                        <FlowNode icon={<Database className="w-8 h-8 text-blue-400" />} label="Google Ecosystem" sub="Sheets & OAuth Drive" glow="bg-blue-900/20 border-blue-500/30" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function FieldWorkerProject() {
    const capabilities = [
        { title: 'Camera Integration', desc: 'Capacitor Camera plugin for native hardware photo capture capabilities.', icon: <Camera className="w-5 h-5 text-white" />, bg: 'bg-teal-500' },
        { title: 'Geolocation Tagging', desc: 'Automatic GPS metadata embedding and EXIF data tagging for all captured photos.', icon: <MapPin className="w-5 h-5 text-white" />, bg: 'bg-emerald-500' },
        { title: 'Offline-First Storage', desc: 'SQLite local storage queue guaranteeing zero data loss in disconnected environments.', icon: <HardDrive className="w-5 h-5 text-white" />, bg: 'bg-amber-500' },
        { title: 'Google Drive Sync', desc: 'Automatic background sync engine with resumable chunked transfer protocols.', icon: <UploadCloud className="w-5 h-5 text-white" />, bg: 'bg-blue-500' },
    ];

    return (
        <div className="relative rounded-[2.5rem] overflow-hidden border border-teal-500/20 bg-gradient-to-br from-slate-900/90 via-[#0d0f16] to-[#0a0c12] shadow-2xl backdrop-blur-xl">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl -z-0 pointer-events-none" />

            <div className="relative z-10 p-8 md:p-14 space-y-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="flex-shrink-0">
                        <div className="p-5 rounded-2xl bg-teal-500/10 border border-teal-500/25 shadow-lg shadow-teal-500/10">
                            <Smartphone className="w-12 h-12 text-teal-400" />
                        </div>
                    </div>
                    <div className="flex-1 space-y-3">
                        <SectionBadge>System 02 — Mobile Edge</SectionBadge>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                            Field-Worker Photo Sync App
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            A cross-platform mobile application (Android APK + Web PWA) empowering remote field workers to capture, geotag, and cloud-sync site photographs utilizing an offline-first architecture.
                        </p>
                    </div>
                </div>

                {/* Tech Stack Grid */}
                <div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: 'Client App', value: 'React 19 & Zustand', color: 'text-teal-400' },
                            { label: 'Mobile Wrapper', value: 'Capacitor 8 (APK)', color: 'text-emerald-400' },
                            { label: 'Local Store', value: 'Capacitor SQLite', color: 'text-amber-400' },
                            { label: 'Sync Server', value: 'Node.js & Express', color: 'text-blue-400' },
                        ].map(({ label, value, color }) => (
                            <div key={label} className="bg-[#11131c] border border-slate-800/80 rounded-xl p-4">
                                <div className={`text-xs font-bold uppercase mb-1.5 tracking-wider ${color}`}>{label}</div>
                                <div className="text-white font-medium text-sm">{value}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Core Capabilities */}
                <div>
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">Core Capabilities</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {capabilities.map((cap) => (
                            <div key={cap.title} className="bg-[#11131c] border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition-all shadow-lg flex flex-col items-start text-left">
                                <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center mb-5 ${cap.bg}`}>
                                    {cap.icon}
                                </div>
                                <h4 className="text-white font-bold text-sm mb-2">{cap.title}</h4>
                                <p className="text-slate-400 text-xs leading-relaxed">{cap.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Flow Diagram */}
                <div>
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5 border-b border-slate-800/60 pb-3">Offline-First Sync Topology</h3>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
                        <FlowNode icon={<div className="flex gap-1.5"><Camera className="w-7 h-7 text-slate-400" /><MapPin className="w-7 h-7 text-slate-400" /></div>} label="Capacitor API" sub="Capture & Geotag" />
                        <FlowArrow color="text-amber-500/40" />
                        <FlowNode icon={<HardDrive className="w-8 h-8 text-amber-400" />} label="Local SQLite" sub="Offline Queue Store" glow="bg-amber-900/20 border-amber-500/30" />
                        <FlowArrow color="text-emerald-500/40" />
                        <FlowNode icon={<RefreshCw className="w-8 h-8 text-emerald-400" />} label="Background Sync" sub="Capacitor Runner" glow="bg-emerald-900/20 border-emerald-500/30" />
                        <FlowArrow color="text-blue-500/40" />
                        <FlowNode icon={<Server className="w-8 h-8 text-blue-400" />} label="Node.js Gateway" sub="Express Auth" glow="bg-blue-900/20 border-blue-500/30" />
                        <FlowArrow color="text-blue-500/40" />
                        <FlowNode icon={<Database className="w-8 h-8 text-cyan-400" />} label="Google Drive" sub="Cloud Persistence" glow="bg-cyan-900/20 border-cyan-500/30" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default function App() {
    return (
        <div className="min-h-screen bg-[#060810] text-slate-50 overflow-x-hidden">
            <div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-violet-700/8 rounded-full blur-[200px] pointer-events-none z-0" />
            <div className="fixed bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-teal-600/8 rounded-full blur-[160px] pointer-events-none z-0" />

            <main className="relative z-10 max-w-6xl mx-auto px-5 md:px-10 lg:px-12 pb-20">
                <GlobalHero />

                <div className="space-y-10 md:space-y-16">
                    <InsuranceOnlineProject />
                    <FieldWorkerProject />
                </div>

                <footer className="mt-20 text-center text-sm text-slate-700 uppercase tracking-widest font-medium pb-4">
                    <p>© 2026 · Architectural Case Studies</p>
                </footer>
            </main>
        </div>
    );
}
