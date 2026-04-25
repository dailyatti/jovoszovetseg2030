import React, { useState } from "react";
import { Globe, Cpu, CheckCircle, TrendingUp, Truck, Zap, Info, Shield, Vote, Briefcase, ChevronDown } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { cn } from "../utils";

function EconAccordion({ icon: Icon, title, summary, children, accentColor, isOpen, onToggle }) {
    const colorMap = {
        blue: { icon: "bg-blue-500/20 text-blue-300", ring: "ring-blue-500/30" },
        green: { icon: "bg-emerald-500/20 text-emerald-300", ring: "ring-emerald-500/30" },
        yellow: { icon: "bg-yellow-500/20 text-yellow-300", ring: "ring-yellow-500/30" },
        emerald: { icon: "bg-emerald-500/20 text-emerald-300", ring: "ring-emerald-500/30" },
    };
    const c = colorMap[accentColor] || colorMap.blue;

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
                className="w-full p-5 md:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-2xl"
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
                        <ChevronDown size={20} className="text-slate-400" />
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

export default function EconomySection() {
    const { t } = useLanguage();
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (id) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    return (
        <section id="economy" className="scroll-mt-24">
            <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative border border-blue-900/50">
                {/* Background FX */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
                <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[180px]" />

                <div className="relative z-10">
                    <SectionHeader
                        title={t('economy.header.title')}
                        subtitle={t('economy.header.subtitle')}
                        light
                        centered
                    />

                    {/* Badge */}
                    <div className="flex justify-center mb-10">
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold shadow-xl shadow-purple-500/20">
                            <Globe size={20} />
                            <span>{t('economy.badge')}</span>
                        </div>
                    </div>

                    {/* Stats Strip */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                        {[
                            { icon: "🤖", value: "AI", label: "State-OS" },
                            { icon: "⚡", value: "0%", label: typeof t('economy.badge') === 'string' && t('economy.badge').includes('Blokklánc') ? "Korrupció" : "Corruption" },
                            { icon: "♻️", value: "100%", label: typeof t('economy.badge') === 'string' && t('economy.badge').includes('Blokklánc') ? "Hulladék-energia" : "Waste-to-Energy" },
                            { icon: "🌍", value: "EU#1", label: "E-Fuel Export" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/[0.06] backdrop-blur-sm border border-white/10 p-4 rounded-2xl text-center hover:bg-white/[0.1] hover:scale-105 transition-all duration-300">
                                <div className="text-2xl mb-1">{stat.icon}</div>
                                <div className="text-xl md:text-2xl font-display font-black text-blue-400">{stat.value}</div>
                                <div className="text-xs text-slate-300 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Accordion Content */}
                    <div className="space-y-4 max-w-4xl mx-auto">
                        {/* State-OS */}
                        <EconAccordion
                            icon={Cpu}
                            title={t('economy.points.state_os.title')}
                            summary={t('economy.points.state_os.summary')}
                            accentColor="blue"
                            isOpen={activeAccordion === 'eco-0'}
                            onToggle={() => toggleAccordion('eco-0')}
                        >
                            <div className="space-y-5">
                                <p className="text-slate-300 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: t('economy.points.state_os.p1') }} />

                                <div className="bg-blue-500/10 p-5 rounded-xl border border-blue-500/20">
                                    <h5 className="font-bold text-blue-300 mb-3 text-lg">{t('economy.points.state_os.box1.title')}</h5>
                                    <p className="text-sm text-slate-300 mb-3" dangerouslySetInnerHTML={{ __html: t('economy.points.state_os.box1.desc1') }} />
                                    <p className="text-sm text-slate-200 font-semibold" dangerouslySetInnerHTML={{ __html: t('economy.points.state_os.box1.impossible') }} />
                                    <ul className="mt-2 space-y-2 text-sm text-slate-300">
                                        {t('economy.points.state_os.box1.list').map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircle size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                                                <div dangerouslySetInnerHTML={{ __html: item }} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-emerald-500/10 p-5 rounded-xl border border-emerald-500/20">
                                    <h5 className="font-bold text-emerald-300 mb-3 text-lg">{t('economy.points.state_os.box2.title')}</h5>
                                    <p className="text-sm text-slate-300 mb-3">{t('economy.points.state_os.box2.desc')}</p>
                                    <ul className="mt-2 space-y-2 text-sm text-slate-300">
                                        {t('economy.points.state_os.box2.list').map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <TrendingUp size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                                                <div dangerouslySetInnerHTML={{ __html: item }} />
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-4 pt-3 border-t border-emerald-500/20 space-y-1">
                                        {t('economy.points.state_os.box2.notes').map((note, i) => (
                                            <p key={i} className="text-[10px] text-slate-400 leading-tight">{note}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </EconAccordion>

                        {/* Waste Plasma */}
                        <EconAccordion
                            icon={Truck}
                            title={t('economy.points.waste_plasma.title')}
                            summary={t('economy.points.waste_plasma.summary')}
                            accentColor="green"
                            isOpen={activeAccordion === 'eco-1'}
                            onToggle={() => toggleAccordion('eco-1')}
                        >
                            <div className="space-y-5">
                                <p className="text-slate-300 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: t('economy.points.waste_plasma.p1') }} />

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-emerald-500/10 p-5 rounded-xl border border-emerald-500/20">
                                        <h5 className="font-bold text-emerald-300 mb-2">{t('economy.points.waste_plasma.box1.title')}</h5>
                                        <ul className="text-sm text-slate-300 space-y-2">
                                            {t('economy.points.waste_plasma.box1.list').map((item, i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                            ))}
                                            <li className="space-y-1 pt-2 border-t border-emerald-500/20 block">
                                                {t('economy.points.waste_plasma.box1.legal').map((text, i) => (
                                                    <p key={i} className="text-[10px] text-slate-400 leading-tight block">{text}</p>
                                                ))}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-500/10 p-5 rounded-xl border border-blue-500/20">
                                        <h5 className="font-bold text-blue-300 mb-2">{t('economy.points.waste_plasma.box2.title')}</h5>
                                        <p className="text-sm text-slate-300 mb-2">
                                            {t('economy.points.waste_plasma.box2.desc')}
                                        </p>
                                        <ul className="text-sm text-slate-300 list-disc list-inside">
                                            {t('economy.points.waste_plasma.box2.list').map((item, i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-white/[0.05] p-5 rounded-xl border border-white/10">
                                    <h5 className="font-bold text-white mb-3 text-lg">{t('economy.points.waste_plasma.outputs.title')}</h5>
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                                        {t('economy.points.waste_plasma.outputs.items').map((item, i) => {
                                            const icons = ["⚡", "🌡️", "⛽", "🧱"];
                                            const colors = ["text-yellow-400", "text-red-400", "text-blue-400", "text-slate-300"];
                                            return (
                                                <div key={i} className="p-3 bg-white/[0.06] rounded-xl border border-white/10 hover:scale-105 transition-all">
                                                    <div className={`text-2xl mb-2 ${colors[i]}`}>{icons[i]}</div>
                                                    <div className="font-bold text-sm text-white">{item.title}</div>
                                                    <div className="text-xs text-slate-300">{item.desc}</div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="mt-4 bg-yellow-500/10 p-3 rounded-lg border border-yellow-500/20">
                                        <p className="text-sm text-slate-300 flex items-center gap-2">
                                            <Info size={16} className="text-yellow-400 flex-shrink-0" />
                                            <span dangerouslySetInnerHTML={{ __html: t('economy.points.waste_plasma.outputs.paks_note') }} />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </EconAccordion>

                        {/* E-Fuel */}
                        <EconAccordion
                            icon={Zap}
                            title={t('economy.points.e_fuel.title')}
                            summary={t('economy.points.e_fuel.summary')}
                            accentColor="yellow"
                            isOpen={activeAccordion === 'eco-2'}
                            onToggle={() => toggleAccordion('eco-2')}
                        >
                            <div className="space-y-5">
                                <p className="text-slate-300 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: t('economy.points.e_fuel.p1') }} />

                                <div className="bg-yellow-500/10 p-5 rounded-xl border border-yellow-500/20">
                                    <h5 className="font-bold text-yellow-300 mb-3 text-lg">{t('economy.points.e_fuel.box1.title')}</h5>
                                    <ol className="space-y-3 text-sm text-slate-300">
                                        {t('economy.points.e_fuel.box1.steps').map((step, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 shadow-lg shadow-yellow-500/30">{i + 1}</span>
                                                <div dangerouslySetInnerHTML={{ __html: step }} />
                                            </li>
                                        ))}
                                    </ol>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
                                        <h5 className="font-bold text-blue-300 mb-2 flex items-center gap-2">
                                            <Zap size={16} /> {t('economy.points.e_fuel.box2.title')}
                                        </h5>
                                        <p className="text-sm text-slate-300">
                                            {t('economy.points.e_fuel.box2.desc')}
                                        </p>
                                    </div>
                                    <div className="bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                                        <h5 className="font-bold text-red-300 mb-2 flex items-center gap-2">
                                            <TrendingUp size={16} /> {t('economy.points.e_fuel.box3.title')}
                                        </h5>
                                        <p className="text-sm text-slate-300" dangerouslySetInnerHTML={{ __html: t('economy.points.e_fuel.box3.desc') }} />
                                    </div>
                                </div>
                            </div>
                        </EconAccordion>

                        {/* Web 4.0 Workforce */}
                        <EconAccordion
                            icon={Briefcase}
                            title={t('economy.points.web4_workforce.title')}
                            summary={t('economy.points.web4_workforce.summary')}
                            accentColor="emerald"
                            isOpen={activeAccordion === 'eco-3'}
                            onToggle={() => toggleAccordion('eco-3')}
                        >
                            <div className="space-y-5">
                                <p className="text-slate-300 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: t('economy.points.web4_workforce.p1') }} />

                                <div className="bg-emerald-500/10 p-5 rounded-xl border border-emerald-500/20">
                                    <h5 className="font-bold text-emerald-300 mb-3 text-lg flex items-center gap-2"><Globe size={20} /> {t('economy.points.web4_workforce.box1.title')}</h5>
                                    <p className="text-sm text-slate-300 mb-3" dangerouslySetInnerHTML={{ __html: t('economy.points.web4_workforce.box1.desc') }} />
                                    <ul className="space-y-2 text-sm text-slate-300">
                                        {t('economy.points.web4_workforce.box1.list').map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircle size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                                                <div dangerouslySetInnerHTML={{ __html: item }} />
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-3 bg-white/[0.06] p-3 rounded-lg text-xs text-slate-300 border border-white/10 flex items-start gap-2">
                                        <Info size={14} className="mt-0.5 flex-shrink-0 text-emerald-400" />
                                        <div dangerouslySetInnerHTML={{ __html: t('economy.points.web4_workforce.box1.note') }} />
                                    </div>
                                </div>

                                <div className="bg-purple-500/10 p-5 rounded-xl border border-purple-500/20">
                                    <h5 className="font-bold text-purple-300 mb-3 text-lg flex items-center gap-2"><Cpu size={20} /> {t('economy.points.web4_workforce.box2.title')}</h5>
                                    <p className="text-sm text-slate-300 mb-3" dangerouslySetInnerHTML={{ __html: t('economy.points.web4_workforce.box2.desc') }} />
                                    <ul className="space-y-2 text-sm text-slate-300">
                                        {t('economy.points.web4_workforce.box2.list').map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircle size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                                                <div dangerouslySetInnerHTML={{ __html: item }} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </EconAccordion>
                    </div>
                </div>
            </div>
        </section>
    );
}
