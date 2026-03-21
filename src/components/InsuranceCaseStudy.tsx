import { FileText, ShieldAlert, ActivitySquare, Scale, Target, Rocket, Monitor } from 'lucide-react';

export function InsuranceCaseStudy() {
    const quickActions = [
        {
            title: "Policy Analysis",
            desc: "Deep-dive into policy documents to find coverage gaps and exclusions.",
            icon: <FileText className="text-white w-5 h-5" />,
            bg: "bg-indigo-500"
        },
        {
            title: "Claim Assessment",
            desc: "Step-by-step guided claim evaluation with coverage validation.",
            icon: <ShieldAlert className="text-white w-5 h-5" />,
            bg: "bg-orange-500"
        },
        {
            title: "Risk Profiling",
            desc: "Generate detailed risk assessments with scoring and mitigation strategies.",
            icon: <ActivitySquare className="text-white w-5 h-5" />,
            bg: "bg-emerald-500"
        },
        {
            title: "Plan Comparison",
            desc: "Side-by-side analysis of insurance plans with cost-benefit breakdown.",
            icon: <Scale className="text-white w-5 h-5" />,
            bg: "bg-sky-500"
        }
    ];

    return (
        <div className="w-full max-w-6xl mx-auto my-16 space-y-16">
            
            {/* Hero Section */}
            <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Intelligent Insurance Analysis</h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    Upload policy documents, describe claims, or ask about coverage — get instant AI-powered insights, risk assessments, and recommendations.
                </p>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickActions.map((act, i) => (
                    <div key={i} className="bg-[#11131c] border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition-all shadow-lg flex flex-col items-start text-left">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${act.bg}`}>
                            {act.icon}
                        </div>
                        <h4 className="text-white font-bold text-lg mb-2">{act.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{act.desc}</p>
                    </div>
                ))}
            </div>

            {/* Featured Work Case Study */}
            <div className="relative bg-[#0d0f16] border border-slate-800/60 rounded-[2rem] p-8 md:p-12 overflow-hidden shadow-2xl">
                {/* Top Border Gradient */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-emerald-500 to-fuchsia-500 opacity-80" />
                
                <div className="mb-8">
                    <span className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-500 text-xs font-bold tracking-widest uppercase rounded-full border border-yellow-500/20 mb-4">
                        Featured Work
                    </span>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">AutoReport Generation System</h3>
                    <p className="text-slate-400 text-lg">Full-Stack Development Internship Project for Mr. Rajat Gupta (Insurance Surveyor)</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* The Mission */}
                    <div className="bg-[#11131c] border border-slate-800/80 rounded-2xl p-6 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <Target className="w-6 h-6 text-pink-500" />
                            <h4 className="text-white font-bold text-xl">The Mission</h4>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Automate a complex, manual insurance reporting workflow using AI to reduce turnaround time for claims.
                        </p>
                    </div>

                    {/* The Result */}
                    <div className="bg-[#11131c] border border-emerald-500/30 rounded-2xl p-6 flex flex-col relative overflow-hidden group hover:border-emerald-500/50 transition">
                        <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition" />
                        <div className="flex items-center gap-3 mb-4 relative z-10">
                            <Rocket className="w-6 h-6 text-emerald-400" />
                            <h4 className="text-white font-bold text-xl">The Result</h4>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                            Achieved a massive <strong className="text-emerald-400 font-bold">90% speed improvement</strong> in report generation and a <strong className="text-emerald-400 font-bold">20% increase</strong> in client capacity.
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="bg-[#11131c] border border-slate-800/80 rounded-2xl p-6 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <Monitor className="w-6 h-6 text-sky-400" />
                            <h4 className="text-white font-bold text-xl">Tech Stack</h4>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            <span className="px-3 py-1.5 bg-slate-800/80 text-slate-300 text-xs font-medium rounded-lg border border-slate-700">Python (Flask)</span>
                            <span className="px-3 py-1.5 bg-slate-800/80 text-slate-300 text-xs font-medium rounded-lg border border-slate-700">Google Gemini AI</span>
                            <span className="px-3 py-1.5 bg-slate-800/80 text-slate-300 text-xs font-medium rounded-lg border border-slate-700">JavaScript</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
