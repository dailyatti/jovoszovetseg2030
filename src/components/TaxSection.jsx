import React, { useState } from "react";
import { Briefcase, CheckCircle, Utensils, Award, Shield, Info, HeartPulse, Building } from "lucide-react";
import SectionHeader from "./SectionHeader";
import DeepDivePoint from "./DeepDivePoint";
import WageCalculator from "./WageCalculator";
import { useLanguage } from "../context/LanguageContext";

export default function TaxSection() {
    const { t } = useLanguage();
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (id) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    return (
        <section id="tax" className="scroll-mt-24">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div>
                    <SectionHeader
                        title={t('tax.header.title')}
                        subtitle={t('tax.header.subtitle')}
                    />
                    <div className="space-y-4">
                        <DeepDivePoint
                            icon={Briefcase}
                            title={t('tax.items.zero_tax.title')}
                            summary={t('tax.items.zero_tax.summary')}
                            accentColor="blue"
                            isOpen={activeAccordion === 'tax-0'}
                            onToggle={() => toggleAccordion('tax-0')}
                        >
                            <div className="space-y-4">
                                <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('tax.items.zero_tax.p1') }} />

                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                    <h5 className="font-bold text-blue-800 mb-3">{t('tax.items.zero_tax.box1.title')}</h5>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                                        {t('tax.items.zero_tax.box1.list').map((item, i) => (
                                            <div key={i} className="flex items-center gap-2"><span>🌍</span> {item}</div>
                                        ))}
                                    </div>
                                </div>

                                <ul className="space-y-2 text-sm text-slate-700">
                                    {t('tax.items.zero_tax.list').map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                                            <div dangerouslySetInnerHTML={{ __html: item }} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </DeepDivePoint>

                        <DeepDivePoint
                            icon={Utensils}
                            title={t('tax.items.vat.title')}
                            summary={t('tax.items.vat.summary')}
                            accentColor="green"
                            isOpen={activeAccordion === 'tax-1'}
                            onToggle={() => toggleAccordion('tax-1')}
                        >
                            <div className="space-y-4">
                                <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('tax.items.vat.p1') }} />

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                                        <h5 className="font-bold text-emerald-800 mb-2">{t('tax.items.vat.green_box.title')}</h5>
                                        <p className="text-sm text-slate-700 mb-2">{t('tax.items.vat.green_box.desc')}</p>
                                        <ul className="text-sm text-slate-600 space-y-1">
                                            {t('tax.items.vat.green_box.items').map((item, i) => (
                                                <li key={i}>• {item}</li>
                                            ))}
                                        </ul>
                                        <p className="text-sm font-bold text-emerald-600 mt-2">{t('tax.items.vat.green_box.footer')}</p>
                                    </div>

                                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100">
                                        <h5 className="font-bold text-yellow-800 mb-2">{t('tax.items.vat.yellow_box.title')}</h5>
                                        <p className="text-sm text-slate-700 mb-2">{t('tax.items.vat.yellow_box.desc')}</p>
                                        <ul className="text-sm text-slate-600 space-y-1">
                                            {t('tax.items.vat.yellow_box.items').map((item, i) => (
                                                <li key={i}>• {item}</li>
                                            ))}
                                        </ul>
                                        <p className="text-sm text-yellow-700 mt-2">{t('tax.items.vat.yellow_box.footer')}</p>
                                    </div>
                                </div>
                            </div>
                        </DeepDivePoint>

                        <DeepDivePoint
                            icon={Award}
                            title={t('tax.items.gambling.title')}
                            summary={t('tax.items.gambling.summary')}
                            accentColor="purple"
                            isOpen={activeAccordion === 'tax-2'}
                            onToggle={() => toggleAccordion('tax-2')}
                        >
                            <div className="space-y-4">
                                <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                                    <h5 className="font-bold text-purple-800 mb-2">{t('tax.items.gambling.box1.title')}</h5>
                                    <p className="text-sm text-slate-700 mb-3" dangerouslySetInnerHTML={{ __html: t('tax.items.gambling.box1.desc') }} />
                                    <ul className="text-sm text-slate-700 space-y-2">
                                        {t('tax.items.gambling.box1.list').map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircle size={16} className="text-purple-600 mt-0.5" />
                                                <div dangerouslySetInnerHTML={{ __html: item }} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                    <h5 className="font-bold text-blue-800 mb-2">{t('tax.items.gambling.box2.title')}</h5>
                                    <p className="text-sm text-slate-700 mb-2">{t('tax.items.gambling.box2.desc')}</p>
                                    <div className="flex gap-4 items-center mt-2">
                                        <div className="bg-white p-3 rounded-lg shadow-sm border text-center flex-1">
                                            <div className="text-red-500 font-bold text-lg">10%</div>
                                            <div className="text-xs text-slate-500">{t('tax.items.gambling.box2.corp_tax')}</div>
                                        </div>
                                        <div className="bg-white p-3 rounded-lg shadow-sm border text-center flex-1">
                                            <div className="text-emerald-500 font-bold text-lg">0%</div>
                                            <div className="text-xs text-slate-500">{t('tax.items.gambling.box2.player_tax')}</div>
                                        </div>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2 italic">{t('tax.items.gambling.box2.footer')}</p>
                                </div>
                            </div>
                        </DeepDivePoint>

                        <DeepDivePoint
                            icon={HeartPulse}
                            title={t('tax.items.charity.title')}
                            summary={t('tax.items.charity.summary')}
                            accentColor="red"
                            isOpen={activeAccordion === 'tax-3'}
                            onToggle={() => toggleAccordion('tax-3')}
                        >
                            <div className="space-y-4">
                                <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('tax.items.charity.p1') }} />

                                <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                                    <h5 className="font-bold text-red-800 mb-2">{t('tax.items.charity.box1.title')}</h5>
                                    <p className="text-sm text-slate-700 mb-2" dangerouslySetInnerHTML={{ __html: t('tax.items.charity.box1.desc') }} />
                                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-700 mt-2">
                                        {t('tax.items.charity.box1.list').map((item, i) => (
                                            <li key={i} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                    <h5 className="font-bold text-blue-800 mb-2">{t('tax.items.charity.box2.title')}</h5>
                                    <p className="text-sm text-slate-700" dangerouslySetInnerHTML={{ __html: t('tax.items.charity.box2.desc') }} />
                                </div>

                                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                                    <h5 className="font-bold text-green-800 mb-2">{t('tax.items.charity.box3.title')}</h5>
                                    <p className="text-sm text-slate-700" dangerouslySetInnerHTML={{ __html: t('tax.items.charity.box3.desc') }} />
                                </div>
                            </div>
                        </DeepDivePoint>

                        <DeepDivePoint
                            icon={Building}
                            title={t('tax.items.patriot.title')}
                            summary={t('tax.items.patriot.summary')}
                            accentColor="slate"
                            isOpen={activeAccordion === 'tax-4'}
                            onToggle={() => toggleAccordion('tax-4')}
                        >
                            <div className="space-y-4">
                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                                    <h5 className="font-bold text-slate-800 mb-2">{t('tax.items.patriot.box1.title')}</h5>
                                    <p className="text-sm text-slate-700" dangerouslySetInnerHTML={{ __html: t('tax.items.patriot.box1.desc') }} />
                                </div>
                                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                                    <h5 className="font-bold text-emerald-800 mb-2">{t('tax.items.patriot.box2.title')}</h5>
                                    <p className="text-sm text-slate-700 mb-2" dangerouslySetInnerHTML={{ __html: t('tax.items.patriot.box2.desc') }} />
                                    <ul className="text-sm text-slate-700 space-y-2">
                                        {t('tax.items.patriot.box2.list').map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircle size={16} className="text-emerald-600 mt-0.5" />
                                                <div dangerouslySetInnerHTML={{ __html: item }} />
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-sm text-slate-700 font-bold mt-3 border-t border-emerald-200 pt-2">
                                        {t('tax.items.patriot.box2.footer')}
                                    </p>
                                </div>
                            </div>
                        </DeepDivePoint>
                    </div>
                </div>
                <div className="lg:sticky lg:top-28">
                    <WageCalculator />
                </div>
            </div>
        </section>
    );
}
