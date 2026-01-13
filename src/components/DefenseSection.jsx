import React from "react";
import { CheckCircle, Zap } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

export default function DefenseSection() {
    const { t } = useLanguage();
    const corpsConfig = [
        { icon: "🚜", border: "border-t-green-500", bg: "bg-green-500/20", check: "text-green-500" },
        { icon: "🏗️", border: "border-t-yellow-500", bg: "bg-yellow-500/20", check: "text-yellow-500" },
        { icon: "🛡️", border: "border-t-blue-500", bg: "bg-blue-500/20", check: "text-blue-500" }
    ];
    const feature2Emojis = ["💵", "🏠", "🎓", "⏰", "💼"];
    return (
        <section id="army" className="scroll-mt-24">
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative border border-slate-800">
                {/* Background FX */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1579965342575-16428a7c8881?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>

                <div className="relative z-10">
                    <SectionHeader
                        title={t('defense.header.title')}
                        subtitle={t('defense.header.subtitle')}
                        light
                        centered
                    />

                    {/* 3 CORPS GRID */}
                    <div className="grid lg:grid-cols-3 gap-8 mt-12 mb-16">
                        {t('defense.corps').map((corps, idx) => {
                            const config = corpsConfig[idx];
                            return (
                                <div key={idx} className={`glass-dark p-6 rounded-2xl border-t-4 ${config.border}`}>
                                    <div className={`w-12 h-12 rounded-lg ${config.bg} flex items-center justify-center mb-4`}>
                                        <span className="text-2xl">{config.icon}</span>
                                    </div>
                                    <h3 className="font-display text-xl font-bold mb-2">{corps.title}</h3>
                                    <p className="text-sm text-slate-400 mb-4 font-mono uppercase tracking-widest">{corps.label}</p>
                                    <p className="text-sm text-slate-300 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: corps.desc }} />
                                    <ul className="text-sm text-slate-400 space-y-3">
                                        {corps.list && corps.list.map((item, i) => (
                                            <li key={i} className="flex gap-2">
                                                <CheckCircle size={14} className={`${config.check} mt-1 flex-shrink-0`} />
                                                <div dangerouslySetInnerHTML={{ __html: item }} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>

                    {/* BOTTOM FEATURES */}
                    <div className="grid md:grid-cols-2 gap-8 border-t border-slate-800 pt-8">
                        <div>
                            <h4 className="font-display font-bold text-lg mb-4 text-white flex items-center gap-2">
                                <Zap className="text-yellow-400" /> {t('defense.features.0.title')}
                            </h4>
                            <p className="text-sm text-slate-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('defense.features.0.desc') }} />
                        </div>
                        <div>
                            <h4 className="font-display font-bold text-lg mb-4 text-white flex items-center gap-2">
                                <CheckCircle className="text-blue-400" /> {t('defense.features.1.title')}
                            </h4>
                            <p className="text-sm text-slate-400 leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: t('defense.features.1.desc') }} />
                            <ul className="text-sm text-slate-400 space-y-2">
                                {t('defense.features.1.list') && t('defense.features.1.list').map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span>{feature2Emojis[i]}</span>
                                        <div dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
