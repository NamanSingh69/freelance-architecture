import { Briefcase, FileText, Database, Server, Smartphone, Camera, ArrowRight, UploadCloud, MapPin, HardDrive, RefreshCw, Zap } from 'lucide-react';
import { InsuranceCaseStudy } from './components/InsuranceCaseStudy';

export default function App() {
    return (
        <div className="min-h-screen p-6 md:p-12 lg:p-24 flex flex-col items-center justify-start relative overflow-x-hidden bg-slate-950 text-slate-50">
            {/* Background Decorators */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="fixed bottom-0 right-[-10%] w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-6xl w-full z-10">

                {/* Header Section */}
                <div className="text-center mb-16 space-y-6 pt-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-bold uppercase tracking-widest mb-2 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                        <Briefcase size={16} />
                        Enterprise Engineering Showcase
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
                        Freelance Architecture <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-emerald-400">
                            Technical Deep Dive
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        A transparent look into the production-grade macro-architecture and technical patterns powering two massive enterprise client platforms.
                    </p>
                </div>

                <div className="w-full mb-16 min-h-[400px]">
                    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        
                        {/* New Hero & Case Study UI */}
                        <InsuranceCaseStudy />

                        {/* System 1: Insurance AI */}
                        <div className="glass-card p-8 md:p-12 relative overflow-hidden border-violet-500/30 bg-slate-900/80 rounded-3xl group transition-all hover:border-violet-500/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.1)]">
                            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-50" />
                            
                            <div className="flex flex-col md:flex-row gap-8 mb-10 items-start">
                                <div className="p-4 bg-violet-500/10 rounded-2xl border border-violet-500/20">
                                    <FileText className="w-12 h-12 text-violet-400" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-extrabold text-white mb-3">Motor Insurance AI Analysis Platform</h2>
                                    <p className="text-slate-400 text-lg leading-relaxed">
                                        An AI-powered pipeline automating motor insurance claims by extracting data from complex unstructured PDFs (Registration Certificates, Licenses, Invoices) and generating deterministic survey reports.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                                    <div className="text-violet-400 text-xs font-bold uppercase mb-1">Backend</div>
                                    <div className="text-white font-medium">Python (Flask)</div>
                                </div>
                                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                                    <div className="text-fuchsia-400 text-xs font-bold uppercase mb-1">AI Engine</div>
                                    <div className="text-white font-medium">Gemini 3 Flash / 2.5 Pro</div>
                                </div>
                                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                                    <div className="text-emerald-400 text-xs font-bold uppercase mb-1">PDF Gen</div>
                                    <div className="text-white font-medium">FPDF2 Engine</div>
                                </div>
                                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                                    <div className="text-blue-400 text-xs font-bold uppercase mb-1">Data Layer</div>
                                    <div className="text-white font-medium">Supabase & Drive</div>
                                </div>
                            </div>

                            <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800/80">
                                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 border-b border-slate-800 pb-2">Data Flow Topology</h3>
                                
                                <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                                    
                                    <div className="flex flex-col items-center text-center p-4 bg-slate-900 rounded-xl border border-slate-800 w-full lg:w-1/5 shadow-inner">
                                        <UploadCloud className="w-8 h-8 text-slate-400 mb-3" />
                                        <div className="text-sm font-bold text-white mb-1">User Upload</div>
                                        <div className="text-xs text-slate-500">Raw PDFs & Images</div>
                                    </div>

                                    <ArrowRight className="text-violet-500/50 hidden lg:block" />
                                    <ArrowRight className="text-violet-500/50 rotate-90 lg:hidden" />

                                    <div className="flex flex-col items-center text-center p-4 bg-violet-900/20 rounded-xl border border-violet-500/30 w-full lg:w-1/5 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                        <Server className="w-8 h-8 text-violet-400 mb-3" />
                                        <div className="text-sm font-bold text-white mb-1">Flask Backend</div>
                                        <div className="text-xs text-slate-500">Auth & Orchestration</div>
                                    </div>

                                    <ArrowRight className="text-fuchsia-500/50 hidden lg:block" />
                                    <ArrowRight className="text-fuchsia-500/50 rotate-90 lg:hidden" />

                                    <div className="flex flex-col items-center text-center p-4 bg-fuchsia-900/20 rounded-xl border border-fuchsia-500/30 w-full lg:w-1/5 shadow-[0_0_15px_rgba(217,70,239,0.1)]">
                                        <Zap className="w-8 h-8 text-fuchsia-400 mb-3" />
                                        <div className="text-sm font-bold text-white mb-1">Gemini API</div>
                                        <div className="text-xs text-slate-500">50+ Field Extraction</div>
                                    </div>

                                    <ArrowRight className="text-emerald-500/50 hidden lg:block" />
                                    <ArrowRight className="text-emerald-500/50 rotate-90 lg:hidden" />

                                    <div className="flex flex-col items-center text-center p-4 bg-emerald-900/20 rounded-xl border border-emerald-500/30 w-full lg:w-1/5 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                                        <FileText className="w-8 h-8 text-emerald-400 mb-3" />
                                        <div className="text-sm font-bold text-white mb-1">FPDF2 Gen</div>
                                        <div className="text-xs text-slate-500">Depreciation Math</div>
                                    </div>

                                    <ArrowRight className="text-blue-500/50 hidden lg:block" />
                                    <ArrowRight className="text-blue-500/50 rotate-90 lg:hidden" />

                                    <div className="flex flex-col items-center text-center p-4 bg-blue-900/20 rounded-xl border border-blue-500/30 w-full lg:w-1/5 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                                        <Database className="w-8 h-8 text-blue-400 mb-3" />
                                        <div className="text-sm font-bold text-white mb-1">Supabase & Drive</div>
                                        <div className="text-xs text-slate-500">Store PDFs & Data</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* System 2: Photo App */}
                        <div className="glass-card p-8 md:p-12 relative overflow-hidden border-emerald-500/30 bg-slate-900/80 rounded-3xl group transition-all hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]">
                            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50" />
                            
                            <div className="flex flex-col md:flex-row gap-8 mb-10 items-start">
                                <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                                    <Smartphone className="w-12 h-12 text-emerald-400" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-extrabold text-white mb-3">Enterprise Field-Worker Photo Sync</h2>
                                    <p className="text-slate-400 text-lg leading-relaxed">
                                        An offline-first cross-platform application empowering field workers to rapidly capture, geotag, and seamlessly cloud-sync site photos even in zero-connectivity remote environments.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                                    <div className="text-teal-400 text-xs font-bold uppercase mb-1">Client App</div>
                                    <div className="text-white font-medium">React 19 + Zustand</div>
                                </div>
                                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                                    <div className="text-emerald-400 text-xs font-bold uppercase mb-1">Mobile Wrapper</div>
                                    <div className="text-white font-medium">Capacitor 8 (APK)</div>
                                </div>
                                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                                    <div className="text-amber-400 text-xs font-bold uppercase mb-1">Local State</div>
                                    <div className="text-white font-medium">Capacitor SQLite</div>
                                </div>
                                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                                    <div className="text-blue-400 text-xs font-bold uppercase mb-1">Sync Server</div>
                                    <div className="text-white font-medium">Node.js + Drive API</div>
                                </div>
                            </div>

                            <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800/80">
                                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 border-b border-slate-800 pb-2">Offline-First Sync Architecture</h3>
                                
                                <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                                    
                                    <div className="flex flex-col items-center text-center p-4 bg-slate-900 rounded-xl border border-slate-800 w-full lg:w-1/5 shadow-inner">
                                        <div className="flex gap-2">
                                            <Camera className="w-6 h-6 text-slate-400 mb-3" />
                                            <MapPin className="w-6 h-6 text-slate-400 mb-3" />
                                        </div>
                                        <div className="text-sm font-bold text-white mb-1">Capacitor API</div>
                                        <div className="text-xs text-slate-500">Capture & Geotag</div>
                                    </div>

                                    <ArrowRight className="text-amber-500/50 hidden lg:block" />
                                    <ArrowRight className="text-amber-500/50 rotate-90 lg:hidden" />

                                    <div className="flex flex-col items-center text-center p-4 bg-amber-900/20 rounded-xl border border-amber-500/30 w-full lg:w-1/5 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                                        <HardDrive className="w-8 h-8 text-amber-400 mb-3" />
                                        <div className="text-sm font-bold text-white mb-1">Local SQLite</div>
                                        <div className="text-xs text-slate-500">Offline Queue Store</div>
                                    </div>

                                    <ArrowRight className="text-emerald-500/50 hidden lg:block" />
                                    <ArrowRight className="text-emerald-500/50 rotate-90 lg:hidden" />

                                    <div className="flex flex-col items-center text-center p-4 bg-emerald-900/20 rounded-xl border border-emerald-500/30 w-full lg:w-1/5 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                                        <RefreshCw className="w-8 h-8 text-emerald-400 mb-3" />
                                        <div className="text-sm font-bold text-white mb-1">Background Sync</div>
                                        <div className="text-xs text-slate-500">Capacitor Runner</div>
                                    </div>

                                    <ArrowRight className="text-blue-500/50 hidden lg:block" />
                                    <ArrowRight className="text-blue-500/50 rotate-90 lg:hidden" />

                                    <div className="flex flex-col items-center text-center p-4 bg-blue-900/20 rounded-xl border border-blue-500/30 w-full lg:w-1/5 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                                        <Server className="w-8 h-8 text-blue-400 mb-3" />
                                        <div className="text-sm font-bold text-white mb-1">Node.js Gateway</div>
                                        <div className="text-xs text-slate-500">OAuth & Rate Limits</div>
                                    </div>

                                    <ArrowRight className="text-blue-500/50 hidden lg:block" />
                                    <ArrowRight className="text-blue-500/50 rotate-90 lg:hidden" />

                                    <div className="flex flex-col items-center text-center p-4 bg-blue-900/20 rounded-xl border border-blue-500/30 w-full lg:w-1/5 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                                        <Database className="w-8 h-8 text-blue-400 mb-3" />
                                        <div className="text-sm font-bold text-white mb-1">Google Drive</div>
                                        <div className="text-xs text-slate-500">Cloud Persistence</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center text-sm font-medium text-slate-600/80 tracking-wide uppercase pb-12">
                    <p>© 2026. Architectural Case Studies.</p>
                </div>

            </div>
        </div>
    )
}
