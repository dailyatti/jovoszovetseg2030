import React, { useState } from "react";
import { Scale, Siren, ShieldAlert, CheckCircle, Ban, Lock, Gavel, AlertTriangle, Pill, Building2, HandMetal } from "lucide-react";
import SectionHeader from "./SectionHeader";
import DeepDivePoint from "./DeepDivePoint";
import { useLanguage } from "../context/LanguageContext";

export default function JusticeSection() {
    const { t } = useLanguage();
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (id) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    return (
        <section id="justice" className="scroll-mt-24">
            {/* Dark Hero Banner */}
            <div className="bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative border border-red-900/50 mb-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/15 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]" />

                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-500/20 backdrop-blur-sm mb-6 font-bold text-sm border border-red-500/30">
                        <Scale size={18} />
                        <span>{t('justice.banner.badge')}</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-5xl font-black mb-4 leading-tight">{t('justice.banner.title')}</h2>
                    <p className="text-slate-300 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: t('justice.banner.desc') }} />
                </div>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
                {/* Orvosi Marihuána */}
                <DeepDivePoint
                    icon={Pill}
                    title={t('justice.points.medical_cannabis.title')}
                    summary={t('justice.points.medical_cannabis.summary')}
                    accentColor="green"
                    isOpen={activeAccordion === 'just-0'}
                    onToggle={() => toggleAccordion('just-0')}
                >
                    <div className="space-y-6">
                        <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('justice.points.medical_cannabis.p1') }} />

                        <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
                            <h5 className="font-bold text-emerald-800 mb-3 text-lg">{t('justice.points.medical_cannabis.box1.title')}</h5>
                            <ul className="space-y-2 text-sm text-slate-700">
                                {t('justice.points.medical_cannabis.box1.list').map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                                        <div dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                <h5 className="font-bold text-blue-800 mb-2">{t('justice.points.medical_cannabis.box2.title')}</h5>
                                <ul className="text-sm text-slate-700 space-y-2">
                                    {t('justice.points.medical_cannabis.box2.list').map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                                            <div dangerouslySetInnerHTML={{ __html: item }} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100">
                                <h5 className="font-bold text-yellow-800 mb-2">{t('justice.points.medical_cannabis.box3.title')}</h5>
                                <p className="text-sm text-slate-700" dangerouslySetInnerHTML={{ __html: t('justice.points.medical_cannabis.box3.desc') }} />
                            </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                            <p className="text-sm text-red-800 font-bold flex items-center gap-2">
                                <AlertTriangle size={16} className="text-red-600 flex-shrink-0" />
                                <span dangerouslySetInnerHTML={{ __html: t('justice.points.medical_cannabis.warning') }} />
                            </p>
                        </div>
                    </div>
                </DeepDivePoint>

                {/* Kemény Drogpolitika */}
                <DeepDivePoint
                    icon={Ban}
                    title={t('justice.points.drug_policy.title')}
                    summary={t('justice.points.drug_policy.summary')}
                    accentColor="red"
                    isOpen={activeAccordion === 'just-1'}
                    onToggle={() => toggleAccordion('just-1')}
                >
                    <div className="space-y-6">
                        <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('justice.points.drug_policy.p1') }} />

                        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-5 rounded-xl border border-red-200">
                            <h5 className="font-bold text-red-800 mb-3 text-lg">{t('justice.points.drug_policy.box1.title')}</h5>
                            <ul className="space-y-3 text-sm text-slate-700">
                                {t('justice.points.drug_policy.box1.list').map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 bg-white/60 p-3 rounded-lg border border-red-100">
                                        <ShieldAlert size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                                        <div dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </DeepDivePoint>

                {/* Tényleges Életfogytiglan */}
                <DeepDivePoint
                    icon={Lock}
                    title={t('justice.points.life_sentence.title')}
                    summary={t('justice.points.life_sentence.summary')}
                    accentColor="slate"
                    isOpen={activeAccordion === 'just-2'}
                    onToggle={() => toggleAccordion('just-2')}
                >
                    <div className="space-y-6">
                        <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('justice.points.life_sentence.p1') }} />

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-slate-100 p-5 rounded-xl border border-slate-300">
                                <h5 className="font-bold text-slate-800 mb-3 text-lg flex items-center gap-2">
                                    <ShieldAlert size={18} className="text-red-600" />
                                    {t('justice.points.life_sentence.box1.title')}
                                </h5>
                                <ul className="space-y-2 text-sm text-slate-700">
                                    {t('justice.points.life_sentence.box1.list').map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <Lock size={14} className="text-slate-600 mt-0.5 flex-shrink-0" />
                                            <div dangerouslySetInnerHTML={{ __html: item }} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                                <h5 className="font-bold text-blue-800 mb-3 text-lg flex items-center gap-2">
                                    <Gavel size={18} />
                                    {t('justice.points.life_sentence.box2.title')}
                                </h5>
                                <p className="text-sm text-slate-700" dangerouslySetInnerHTML={{ __html: t('justice.points.life_sentence.box2.desc') }} />
                            </div>
                        </div>

                        <blockquote className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg italic text-slate-700 shadow-sm">
                            {t('justice.points.life_sentence.quote')}
                        </blockquote>
                    </div>
                </DeepDivePoint>

                {/* Rabszolgatörvény Eltörlése */}
                <DeepDivePoint
                    icon={Building2}
                    title={t('justice.points.labor_law.title')}
                    summary={t('justice.points.labor_law.summary')}
                    accentColor="orange"
                    isOpen={activeAccordion === 'just-3'}
                    onToggle={() => toggleAccordion('just-3')}
                >
                    <div className="space-y-6">
                        <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('justice.points.labor_law.p1') }} />

                        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-5 rounded-xl border border-orange-200">
                            <h5 className="font-bold text-orange-800 mb-3 text-lg">{t('justice.points.labor_law.box1.title')}</h5>
                            <ul className="space-y-2 text-sm text-slate-700">
                                {t('justice.points.labor_law.box1.list').map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                                        <div dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
                            <h5 className="font-bold text-emerald-800 mb-3 text-lg">{t('justice.points.labor_law.box2.title')}</h5>
                            <ul className="space-y-2 text-sm text-slate-700">
                                {t('justice.points.labor_law.box2.list').map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                                        <div dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                            <p className="text-sm text-blue-800 font-semibold" dangerouslySetInnerHTML={{ __html: t('justice.points.labor_law.note') }} />
                        </div>
                    </div>
                </DeepDivePoint>
            </div>
        </section>
    );
}
