import React from "react";
import { Trash2, Zap, CloudLightning, Leaf, ArrowRight, Info, CheckCircle, TrendingUp, DollarSign } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

export default function EnergySection() {
    const { t } = useLanguage();
    return (
        <section id="energy" className="py-24 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-yellow-50/50 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <SectionHeader
                    badge={t('energy.badge')}
                    title={t('energy.title')}
                    subtitle={t('energy.subtitle')}
                />

                <div className="grid lg:grid-cols-2 gap-12 mb-20 animate-fade-in-up">
                    {/* Left: The Concept */}
                    <div className="space-y-8">
                        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100 shadow-lg">
                            <h3 className="text-2xl font-bold font-display text-emerald-900 mb-4 flex items-center gap-3">
                                <DollarSign className="w-8 h-8 text-emerald-600" />
                                {t('energy.box1.title')}
                            </h3>
                            <p className="text-slate-700 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('energy.box1.desc') }} />

                            <div className="space-y-4">
                                {t('energy.box1.features').map((feature, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                                            {i === 0 && <Zap size={16} className="text-emerald-600" />}
                                            {i === 1 && <Trash2 size={16} className="text-emerald-600" />}
                                            {i === 2 && <TrendingUp size={16} className="text-emerald-600" />}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-emerald-800 text-sm mb-1">{feature.title}</h4>
                                            <p className="text-xs text-slate-600 leading-snug" dangerouslySetInnerHTML={{ __html: feature.desc }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stats / Impact */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md hover:shadow-lg transition-shadow">
                                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">{t('energy.box1.credit_title')}</div>
                                <div className="text-4xl font-black text-emerald-500 mb-1">{t('energy.box1.credit_val')}</div>
                                <div className="text-xs text-slate-400 font-medium">{t('energy.box1.credit_sub')}</div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md hover:shadow-lg transition-shadow">
                                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">{t('energy.box1.saving_title')}</div>
                                <div className="text-4xl font-black text-blue-500 mb-1">{t('energy.box1.saving_val')}</div>
                                <div className="text-xs text-slate-400 font-medium">{t('energy.box1.saving_sub')}</div>
                            </div>
                        </div>
                        {/* Legal Disclaimers */}
                        <div className="text-[10px] text-slate-400 leading-tight space-y-1 pl-2 border-l-2 border-slate-200">
                            {t('energy.box1.legal').map((text, i) => (
                                <p key={i}>{text}</p>
                            ))}
                        </div>
                    </div>

                    {/* Right: Applications */}
                    <div className="space-y-6">
                        {/* EV Charging */}
                        <div className="group relative bg-slate-900 rounded-2xl p-8 overflow-hidden text-white shadow-xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md border border-white/20">
                                        <Zap className="text-yellow-400 w-8 h-8" />
                                    </div>
                                    <span className="text-xs font-bold bg-yellow-400 text-slate-900 px-3 py-1 rounded-full">{t('energy.box2.ev.unit')}</span>
                                </div>
                                <h4 className="text-2xl font-bold mb-2">{t('energy.box2.ev.title')}</h4>
                                <p className="text-slate-400 text-sm mb-6">{t('energy.box2.ev.desc')}</p>
                                <div className="flex items-end gap-2">
                                    <span className="text-5xl font-black text-yellow-400">{t('energy.box2.ev.price')}</span>
                                    <span className="text-sm text-slate-400 mb-2">{t('energy.box2.ev.footer')}</span>
                                </div>
                            </div>
                        </div>

                        {/* E-Fuel */}
                        <div className="group relative bg-white rounded-2xl p-8 overflow-hidden border border-slate-200 shadow-xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                                        <TrendingUp className="text-blue-600 w-8 h-8" />
                                    </div>
                                    <span className="text-xs font-bold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{t('energy.box2.petrol.unit')}</span>
                                </div>
                                <h4 className="text-2xl font-bold text-slate-800 mb-2">{t('energy.box2.petrol.title')}</h4>
                                <p className="text-slate-500 text-sm mb-6">{t('energy.box2.petrol.desc')}</p>
                                <div className="flex items-end gap-2">
                                    <span className="text-5xl font-black text-blue-600">{t('energy.box2.petrol.price')}</span>
                                    <span className="text-sm text-slate-400 mb-2">{t('energy.box2.petrol.footer')}</span>
                                </div>
                                {/* E-Fuel Disclaimer */}
                                <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 leading-tight space-y-1">
                                    {t('energy.box2.petrol.legal').map((text, i) => (
                                        <p key={i}>{text}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Economic Impact Strip */}
                <div className="bg-slate-900 border-y border-slate-800 py-12 rounded-2xl mb-20">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
                            {/* State Profit */}
                            <div className="px-4 text-center md:text-left">
                                <h4 className="text-white font-bold text-lg mb-4 flex items-center justify-center md:justify-start gap-2">
                                    <DollarSign className="text-emerald-500" /> {t('energy.box3.profit.title')}
                                </h4>
                                <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto md:mx-0">
                                    {t('energy.box3.profit.desc')}
                                </p>
                                <div className="grid grid-cols-3 gap-4">
                                    {t('energy.box3.profit.items').map((item, i) => (
                                        <div key={i}>
                                            <div className="text-2xl font-black text-white">{item.val}</div>
                                            <div className="text-[10px] text-slate-500 uppercase tracking-widest">{item.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Environmental Impact */}
                            <div className="px-4 text-center md:text-left md:pl-8">
                                <h4 className="text-white font-bold text-lg mb-4 flex items-center justify-center md:justify-start gap-2">
                                    <Leaf className="text-green-500" /> {t('energy.box3.env.title')}
                                </h4>
                                <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto md:mx-0">
                                    {t('energy.box3.env.desc')}
                                </p>
                                <ul className="text-sm text-slate-300 space-y-2 inline-block text-left">
                                    {t('energy.box3.env.items').map((item, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <CheckCircle size={14} className="text-green-500" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center">
                        <div className="flex justify-center mb-6">
                            <span className="bg-white border border-slate-200 shadow-sm px-4 py-1.5 rounded-full text-xs font-bold text-slate-500 tracking-wider">
                                {t('energy.technology.badge')}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-8">{t('energy.technology.title')}</h3>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                            {t('energy.technology.steps').map((step, i) => (
                                <React.Fragment key={i}>
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-16 h-16 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center text-slate-700">
                                            {i === 0 && <Trash2 size={24} />}
                                            {i === 1 && <CloudLightning size={24} className="text-blue-500" />}
                                            {i === 2 && <Zap size={24} className="text-yellow-500" />}
                                        </div>
                                        <span className="font-bold text-slate-700 text-sm">{step.title}</span>
                                    </div>
                                    {i < 2 && (
                                        <ArrowRight className="text-slate-300 rotate-90 md:rotate-0" />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                        <p className="mt-8 text-xs text-slate-400 italic">
                            {t('energy.technology.footer')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
