import React, { useState } from "react";
import { Heart, HeartPulse, Shield, CheckCircle, Users, Clock, Home, Stethoscope, Truck, Sparkles } from "lucide-react";
import SectionHeader from "./SectionHeader";
import DeepDivePoint from "./DeepDivePoint";
import { useLanguage } from "../context/LanguageContext";

export default function ElderCareSection() {
    const { t } = useLanguage();
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (id) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    return (
        <section id="eldercare" className="scroll-mt-24">
            <SectionHeader
                title={t('eldercare.header.title')}
                subtitle={t('eldercare.header.subtitle')}
                centered
            />

            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 rounded-3xl p-8 md:p-10 mb-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-yellow-400/10 rounded-full blur-[60px]" />
                <div className="relative z-10 text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6 font-bold text-sm">
                        <Heart size={18} />
                        <span>{t('eldercare.banner.badge')}</span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-black mb-4">{t('eldercare.banner.title')}</h3>
                    <p className="text-white/90 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('eldercare.banner.desc') }} />
                </div>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
                {/* TB Eltörlés */}
                <DeepDivePoint
                    icon={Shield}
                    title={t('eldercare.points.tb_abolish.title')}
                    summary={t('eldercare.points.tb_abolish.summary')}
                    accentColor="red"
                    isOpen={activeAccordion === 'elder-0'}
                    onToggle={() => toggleAccordion('elder-0')}
                >
                    <div className="space-y-6">
                        <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('eldercare.points.tb_abolish.p1') }} />

                        <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-5 rounded-xl border border-rose-200">
                            <h5 className="font-bold text-rose-800 mb-3 text-lg">{t('eldercare.points.tb_abolish.box1.title')}</h5>
                            <div className="space-y-4">
                                {t('eldercare.points.tb_abolish.box1.phases').map((phase, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <span className="bg-rose-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold flex-shrink-0 text-sm">{i + 1}</span>
                                        <div>
                                            <div className="font-bold text-rose-900 text-sm">{phase.title}</div>
                                            <div className="text-sm text-slate-700" dangerouslySetInnerHTML={{ __html: phase.desc }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                            <h5 className="font-bold text-blue-800 mb-3 text-lg">{t('eldercare.points.tb_abolish.box2.title')}</h5>
                            <p className="text-sm text-slate-700" dangerouslySetInnerHTML={{ __html: t('eldercare.points.tb_abolish.box2.desc') }} />
                        </div>
                    </div>
                </DeepDivePoint>

                {/* Gondoskodás */}
                <DeepDivePoint
                    icon={HeartPulse}
                    title={t('eldercare.points.care.title')}
                    summary={t('eldercare.points.care.summary')}
                    accentColor="purple"
                    isOpen={activeAccordion === 'elder-1'}
                    onToggle={() => toggleAccordion('elder-1')}
                >
                    <div className="space-y-6">
                        <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('eldercare.points.care.p1') }} />

                        <div className="grid md:grid-cols-2 gap-4">
                            {t('eldercare.points.care.cards').map((card, i) => {
                                const colors = [
                                    { bg: "bg-purple-50", border: "border-purple-100", title: "text-purple-800", icon: "🏥" },
                                    { bg: "bg-emerald-50", border: "border-emerald-100", title: "text-emerald-800", icon: "🚕" },
                                    { bg: "bg-blue-50", border: "border-blue-100", title: "text-blue-800", icon: "🏠" },
                                    { bg: "bg-yellow-50", border: "border-yellow-100", title: "text-yellow-800", icon: "🤝" }
                                ];
                                const c = colors[i] || colors[0];
                                return (
                                    <div key={i} className={`${c.bg} p-4 rounded-xl border ${c.border}`}>
                                        <div className="text-2xl mb-2">{c.icon}</div>
                                        <h5 className={`font-bold ${c.title} mb-2`}>{card.title}</h5>
                                        <p className="text-sm text-slate-700" dangerouslySetInnerHTML={{ __html: card.desc }} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </DeepDivePoint>

                {/* Nyugdíjas Életminőség */}
                <DeepDivePoint
                    icon={Sparkles}
                    title={t('eldercare.points.quality.title')}
                    summary={t('eldercare.points.quality.summary')}
                    accentColor="yellow"
                    isOpen={activeAccordion === 'elder-2'}
                    onToggle={() => toggleAccordion('elder-2')}
                >
                    <div className="space-y-6">
                        <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('eldercare.points.quality.p1') }} />

                        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-5 rounded-xl border border-yellow-200">
                            <h5 className="font-bold text-yellow-800 mb-3 text-lg">{t('eldercare.points.quality.box1.title')}</h5>
                            <ul className="space-y-2 text-sm text-slate-700">
                                {t('eldercare.points.quality.box1.list').map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                                        <div dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </DeepDivePoint>
            </div>
        </section>
    );
}
