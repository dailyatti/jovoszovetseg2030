import React, { useState } from "react";
import { Heart, HeartPulse, Shield, CheckCircle, Users, Clock, Home, Stethoscope, Truck, Sparkles, ChevronDown, Pill, Zap, Phone, ShieldCheck } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { cn } from "../utils";

function ElderAccordion({ icon: Icon, title, summary, children, accentColor, isOpen, onToggle }) {
    const colorMap = {
        rose: { icon: "bg-rose-500/20 text-rose-300", ring: "ring-rose-500/30", dot: "bg-rose-400" },
        purple: { icon: "bg-purple-500/20 text-purple-300", ring: "ring-purple-500/30", dot: "bg-purple-400" },
        amber: { icon: "bg-amber-500/20 text-amber-300", ring: "ring-amber-500/30", dot: "bg-amber-400" },
    };
    const c = colorMap[accentColor] || colorMap.rose;

    return (
        <div className={cn(
            "rounded-2xl border transition-all duration-300",
            isOpen
                ? "bg-white/[0.08] border-white/20 shadow-2xl shadow-black/20"
                : "bg-white/[0.04] border-white/10 hover:bg-white/[0.06] hover:border-white/15"
        )}>
            <button
                type="button"
                onClick={onToggle}
                className="w-full p-5 md:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 rounded-2xl"
                aria-expanded={isOpen}
            >
                <div className="flex items-start gap-4">
                    <div className={cn(
                        "flex-shrink-0 p-3 rounded-xl transition-all duration-300",
                        c.icon,
                        isOpen && "scale-110 ring-2 " + c.ring
                    )}>
                        <Icon size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-display text-lg md:text-xl font-bold text-white leading-tight">
                            {title}
                        </h3>
                        <p className="mt-1.5 text-slate-300 text-sm leading-relaxed">
                            {summary}
                        </p>
                    </div>
                    <div className={cn(
                        "flex-shrink-0 p-2 rounded-full transition-all duration-300",
                        isOpen ? "bg-white/10 rotate-180" : "bg-transparent"
                    )}>
                        <ChevronDown size={20} className="text-slate-300" />
                    </div>
                </div>
            </button>

            <div className={cn("accordion-content", isOpen && "open")}>
                <div className="accordion-inner">
                    <div className="px-5 md:px-6 pb-6 pt-1">
                        <div className="ml-0 md:ml-16 border-t border-white/10 pt-5">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ElderCareSection() {
    const { t } = useLanguage();
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (id) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    return (
        <section id="eldercare" className="scroll-mt-24">
            <div className="bg-gradient-to-br from-rose-950 via-slate-900 to-purple-950 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative border border-rose-900/50">
                {/* Background FX */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/15 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-[200px]" />

                <div className="relative z-10">
                    <SectionHeader
                        title={t('eldercare.header.title')}
                        subtitle={t('eldercare.header.subtitle')}
                        light
                        centered
                    />

                    {/* Hero Banner */}
                    <div className="bg-gradient-to-r from-rose-500/20 via-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-10 border border-rose-400/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-purple-500/10 animate-pulse" style={{ animationDuration: '4s' }} />
                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-rose-500/30 backdrop-blur-sm mb-5 font-bold text-sm border border-rose-400/30">
                                <Heart size={18} className="text-rose-300" />
                                <span className="text-rose-100">{t('eldercare.banner.badge')}</span>
                            </div>
                            <h3 className="font-display text-2xl md:text-3xl font-black mb-4 text-white">{t('eldercare.banner.title')}</h3>
                            <p className="text-slate-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('eldercare.banner.desc') }} />
                        </div>
                    </div>

                    {/* Stats Strip */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                        {[
                            { icon: "💊", value: "0 Ft", label: t === Function ? "" : (typeof t('eldercare.banner.badge') === 'string' ? "TB 65+ felett" : "") },
                            { icon: "🚕", value: "24/7", label: typeof t('eldercare.banner.badge') === 'string' && t('eldercare.banner.badge').includes("TISZTELET") ? "Állami Taxi" : "State Taxi" },
                            { icon: "🏠", value: "100%", label: typeof t('eldercare.banner.badge') === 'string' && t('eldercare.banner.badge').includes("TISZTELET") ? "Otthoni Gondozás" : "Home Care" },
                            { icon: "❤️", value: "65+", label: typeof t('eldercare.banner.badge') === 'string' && t('eldercare.banner.badge').includes("TISZTELET") ? "Korosztály" : "Age Group" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/[0.06] backdrop-blur-sm border border-white/10 p-4 rounded-2xl text-center hover:bg-white/[0.1] hover:scale-105 transition-all duration-300">
                                <div className="text-2xl mb-1">{stat.icon}</div>
                                <div className="text-xl md:text-2xl font-display font-black text-rose-400">{stat.value}</div>
                                <div className="text-xs text-slate-300 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Accordion Content */}
                    <div className="space-y-4 max-w-4xl mx-auto">
                        {/* TB Eltörlés */}
                        <ElderAccordion
                            icon={Shield}
                            title={t('eldercare.points.tb_abolish.title')}
                            summary={t('eldercare.points.tb_abolish.summary')}
                            accentColor="rose"
                            isOpen={activeAccordion === 'elder-0'}
                            onToggle={() => toggleAccordion('elder-0')}
                        >
                            <div className="space-y-5">
                                <p className="text-slate-300 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: t('eldercare.points.tb_abolish.p1') }} />

                                <div className="bg-gradient-to-r from-rose-500/10 to-pink-500/10 p-5 rounded-xl border border-rose-500/20">
                                    <h5 className="font-bold text-rose-300 mb-3 text-lg">{t('eldercare.points.tb_abolish.box1.title')}</h5>
                                    <div className="space-y-4">
                                        {t('eldercare.points.tb_abolish.box1.phases').map((phase, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <span className="bg-gradient-to-br from-rose-500 to-pink-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold flex-shrink-0 text-sm shadow-lg shadow-rose-500/30">{i + 1}</span>
                                                <div>
                                                    <div className="font-bold text-rose-200 text-sm">{phase.title}</div>
                                                    <div className="text-sm text-slate-300" dangerouslySetInnerHTML={{ __html: phase.desc }} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-blue-500/10 p-5 rounded-xl border border-blue-500/20">
                                    <h5 className="font-bold text-blue-300 mb-3 text-lg">{t('eldercare.points.tb_abolish.box2.title')}</h5>
                                    <p className="text-sm text-slate-300" dangerouslySetInnerHTML={{ __html: t('eldercare.points.tb_abolish.box2.desc') }} />
                                </div>
                            </div>
                        </ElderAccordion>

                        {/* Gondoskodás */}
                        <ElderAccordion
                            icon={HeartPulse}
                            title={t('eldercare.points.care.title')}
                            summary={t('eldercare.points.care.summary')}
                            accentColor="purple"
                            isOpen={activeAccordion === 'elder-1'}
                            onToggle={() => toggleAccordion('elder-1')}
                        >
                            <div className="space-y-5">
                                <p className="text-slate-300 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: t('eldercare.points.care.p1') }} />

                                <div className="grid md:grid-cols-2 gap-4">
                                    {t('eldercare.points.care.cards').map((card, i) => {
                                        const styles = [
                                            { bg: "from-purple-500/15 to-purple-500/5", border: "border-purple-500/20", title: "text-purple-300", icon: "🏥", glow: "shadow-purple-500/10" },
                                            { bg: "from-emerald-500/15 to-emerald-500/5", border: "border-emerald-500/20", title: "text-emerald-300", icon: "🚕", glow: "shadow-emerald-500/10" },
                                            { bg: "from-blue-500/15 to-blue-500/5", border: "border-blue-500/20", title: "text-blue-300", icon: "🏠", glow: "shadow-blue-500/10" },
                                            { bg: "from-amber-500/15 to-amber-500/5", border: "border-amber-500/20", title: "text-amber-300", icon: "🤝", glow: "shadow-amber-500/10" }
                                        ];
                                        const s = styles[i] || styles[0];
                                        return (
                                            <div key={i} className={`bg-gradient-to-br ${s.bg} p-4 rounded-xl border ${s.border} hover:scale-[1.02] transition-all duration-300 shadow-lg ${s.glow}`}>
                                                <div className="text-2xl mb-2">{s.icon}</div>
                                                <h5 className={`font-bold ${s.title} mb-2`}>{card.title}</h5>
                                                <p className="text-sm text-slate-300" dangerouslySetInnerHTML={{ __html: card.desc }} />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </ElderAccordion>

                        {/* Nyugdíjas Életminőség */}
                        <ElderAccordion
                            icon={Sparkles}
                            title={t('eldercare.points.quality.title')}
                            summary={t('eldercare.points.quality.summary')}
                            accentColor="amber"
                            isOpen={activeAccordion === 'elder-2'}
                            onToggle={() => toggleAccordion('elder-2')}
                        >
                            <div className="space-y-5">
                                <p className="text-slate-300 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: t('eldercare.points.quality.p1') }} />

                                <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 p-5 rounded-xl border border-amber-500/20">
                                    <h5 className="font-bold text-amber-300 mb-3 text-lg">{t('eldercare.points.quality.box1.title')}</h5>
                                    <ul className="space-y-3 text-sm text-slate-300">
                                        {t('eldercare.points.quality.box1.list').map((item, i) => (
                                            <li key={i} className="flex items-start gap-2.5">
                                                <CheckCircle size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
                                                <div dangerouslySetInnerHTML={{ __html: item }} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ElderAccordion>
                    </div>
                </div>
            </div>
        </section>
    );
}
