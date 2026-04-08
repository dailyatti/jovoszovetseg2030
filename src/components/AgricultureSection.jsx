import React, { useState } from "react";
import { Wheat, Pickaxe, Droplets, CheckCircle, TrendingUp, Cpu, Leaf, Mountain, ThermometerSun } from "lucide-react";
import SectionHeader from "./SectionHeader";
import DeepDivePoint from "./DeepDivePoint";
import { useLanguage } from "../context/LanguageContext";

export default function AgricultureSection() {
    const { t } = useLanguage();
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (id) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    return (
        <section id="agriculture" className="scroll-mt-24">
            <div className="bg-gradient-to-br from-green-900 via-emerald-900 to-green-950 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative border border-green-800">
                {/* Background FX */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-cover bg-center mix-blend-overlay"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80')" }}
                />
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-[100px]" />

                <div className="relative z-10">
                    <SectionHeader
                        title={t('agriculture.header.title')}
                        subtitle={t('agriculture.header.subtitle')}
                        light
                        centered
                    />

                    {/* Badge */}
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 via-green-500 to-yellow-500 text-white font-bold shadow-xl">
                            <Wheat size={20} />
                            <span>{t('agriculture.badge')}</span>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        {t('agriculture.stats').map((stat, i) => (
                            <div key={i} className="glass-dark p-4 rounded-2xl text-center">
                                <div className="text-2xl md:text-3xl font-display font-black text-emerald-400">{stat.value}</div>
                                <div className="text-xs md:text-sm text-slate-400 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-12">
                        {/* Precision Agriculture */}
                        <div className="glass-dark p-6 rounded-2xl border-t-4 border-t-emerald-500">
                            <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                                <span className="text-2xl">🌾</span>
                            </div>
                            <h3 className="font-display text-xl font-bold mb-2">{t('agriculture.precision.title')}</h3>
                            <p className="text-sm text-slate-300 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t('agriculture.precision.desc') }} />
                            <ul className="text-sm text-slate-400 space-y-3">
                                {t('agriculture.precision.list').map((item, i) => (
                                    <li key={i} className="flex gap-2">
                                        <CheckCircle size={14} className="text-emerald-500 mt-1 flex-shrink-0" />
                                        <div dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Underground Resources */}
                        <div className="glass-dark p-6 rounded-2xl border-t-4 border-t-yellow-500">
                            <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center mb-4">
                                <span className="text-2xl">⛏️</span>
                            </div>
                            <h3 className="font-display text-xl font-bold mb-2">{t('agriculture.resources.title')}</h3>
                            <p className="text-sm text-slate-300 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t('agriculture.resources.desc') }} />
                            <ul className="text-sm text-slate-400 space-y-3">
                                {t('agriculture.resources.list').map((item, i) => (
                                    <li key={i} className="flex gap-2">
                                        <CheckCircle size={14} className="text-yellow-500 mt-1 flex-shrink-0" />
                                        <div dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Resource Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        {t('agriculture.resource_cards').map((card, i) => {
                            const icons = ["🌡️", "💎", "🌊", "⛽"];
                            return (
                                <div key={i} className="glass-dark p-4 rounded-2xl text-center hover:scale-105 transition-transform">
                                    <div className="text-3xl mb-2">{icons[i]}</div>
                                    <div className="font-bold text-sm text-white">{card.title}</div>
                                    <div className="text-xs text-slate-400 mt-1">{card.desc}</div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom Features */}
                    <div className="grid md:grid-cols-2 gap-8 border-t border-green-800 pt-8">
                        <div>
                            <h4 className="font-display font-bold text-lg mb-4 text-white flex items-center gap-2">
                                <Leaf className="text-emerald-400" /> {t('agriculture.farmer_protection.title')}
                            </h4>
                            <p className="text-sm text-slate-400 leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: t('agriculture.farmer_protection.desc') }} />
                            <ul className="text-sm text-slate-400 space-y-2">
                                {t('agriculture.farmer_protection.list').map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <CheckCircle size={14} className="text-emerald-400 mt-1 flex-shrink-0" />
                                        <div dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-display font-bold text-lg mb-4 text-white flex items-center gap-2">
                                <Mountain className="text-yellow-400" /> {t('agriculture.exploration.title')}
                            </h4>
                            <p className="text-sm text-slate-400 leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: t('agriculture.exploration.desc') }} />
                            <ul className="text-sm text-slate-400 space-y-2">
                                {t('agriculture.exploration.list').map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <CheckCircle size={14} className="text-yellow-400 mt-1 flex-shrink-0" />
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
