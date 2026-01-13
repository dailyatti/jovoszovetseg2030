import React, { useState } from "react";
import { Globe, Cpu, CheckCircle, TrendingUp, Truck, Zap, Info, Shield, Vote, Briefcase, Plus, Minus } from "lucide-react";
import SectionHeader from "./SectionHeader";
import DeepDivePoint from "./DeepDivePoint";
import { useLanguage } from "../context/LanguageContext";

export default function EconomySection() {
    const { t } = useLanguage();
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (id) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    return (
        <section id="economy" className="scroll-mt-24">
            <SectionHeader
                title={t('economy.header.title')}
                subtitle={t('economy.header.subtitle')}
                centered
            />

            {/* Web 4.0 Intro Badge */}
            <div className="flex justify-center mb-12">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold shadow-xl">
                    <Globe size={20} />
                    <span>{t('economy.badge')}</span>
                </div>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
                <DeepDivePoint
                    icon={Cpu}
                    title={t('economy.points.state_os.title')}
                    summary={t('economy.points.state_os.summary')}
                    accentColor="blue"
                    isOpen={activeAccordion === 'eco-0'}
                    onToggle={() => toggleAccordion('eco-0')}
                >
                    <div className="space-y-6">
                        <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('economy.points.state_os.p1') }} />

                        <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                            <h5 className="font-bold text-blue-800 mb-3 text-lg">{t('economy.points.state_os.box1.title')}</h5>
                            <p className="text-sm text-slate-700 mb-3" dangerouslySetInnerHTML={{ __html: t('economy.points.state_os.box1.desc1') }} />
                            <p className="text-sm text-slate-700 font-semibold" dangerouslySetInnerHTML={{ __html: t('economy.points.state_os.box1.impossible') }} />
                            <ul className="mt-2 space-y-2 text-sm text-slate-700">
                                {t('economy.points.state_os.box1.list').map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                                        <div dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
                            <h5 className="font-bold text-emerald-800 mb-3 text-lg">{t('economy.points.state_os.box2.title')}</h5>
                            <p className="text-sm text-slate-700 mb-3">{t('economy.points.state_os.box2.desc')}</p>
                            <ul className="mt-2 space-y-2 text-sm text-slate-700">
                                {t('economy.points.state_os.box2.list').map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <TrendingUp size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                                        <div dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4 pt-3 border-t border-emerald-200/50 space-y-1 opacity-70">
                                {t('economy.points.state_os.box2.notes').map((note, i) => (
                                    <p key={i} className="text-[10px] text-emerald-800 leading-tight">{note}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </DeepDivePoint>

                <DeepDivePoint
                    icon={Truck}
                    title={t('economy.points.waste_plasma.title')}
                    summary={t('economy.points.waste_plasma.summary')}
                    accentColor="green"
                    isOpen={activeAccordion === 'eco-1'}
                    onToggle={() => toggleAccordion('eco-1')}
                >
                    <div className="space-y-6">
                        <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('economy.points.waste_plasma.p1') }} />

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
                                <h5 className="font-bold text-emerald-800 mb-2">{t('economy.points.waste_plasma.box1.title')}</h5>
                                <ul className="text-sm text-slate-700 space-y-2">
                                    {t('economy.points.waste_plasma.box1.list').map((item, i) => (
                                        <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                    ))}
                                    {/* Legal Shield */}
                                    <li className="space-y-1 pt-2 border-t border-emerald-200/50 opacity-70 block">
                                        {t('economy.points.waste_plasma.box1.legal').map((text, i) => (
                                            <p key={i} className="text-[10px] text-emerald-800 leading-tight block">{text}</p>
                                        ))}
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                                <h5 className="font-bold text-blue-800 mb-2">{t('economy.points.waste_plasma.box2.title')}</h5>
                                <p className="text-sm text-slate-700 mb-2">
                                    {t('economy.points.waste_plasma.box2.desc')}
                                </p>
                                <ul className="text-sm text-slate-700 list-disc list-inside">
                                    {t('economy.points.waste_plasma.box2.list').map((item, i) => (
                                        <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-slate-50 to-orange-50 p-5 rounded-xl border border-slate-200">
                            <h5 className="font-bold text-slate-800 mb-3 text-lg">{t('economy.points.waste_plasma.outputs.title')}</h5>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                                {t('economy.points.waste_plasma.outputs.items').map((item, i) => (
                                    <div key={i} className="p-3 bg-white rounded-lg shadow-sm">
                                        {i === 0 && <Zap size={24} className="mx-auto text-yellow-500 mb-2" />}
                                        {i === 1 && <div className="mx-auto text-red-500 mb-2 text-xl font-bold">🌡️</div>}
                                        {i === 2 && <div className="mx-auto text-blue-500 mb-2 text-xl font-bold">⛽</div>}
                                        {i === 3 && <div className="mx-auto text-slate-800 mb-2 text-xl font-bold">🧱</div>}
                                        <div className="font-bold text-sm">{item.title}</div>
                                        <div className="text-xs text-slate-500">{item.desc}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 bg-yellow-100/50 p-3 rounded-lg border border-yellow-200">
                                <p className="text-sm text-slate-800 flex items-center gap-2">
                                    <Info size={16} className="text-yellow-600 flex-shrink-0" />
                                    <span dangerouslySetInnerHTML={{ __html: t('economy.points.waste_plasma.outputs.paks_note') }} />
                                </p>
                            </div>
                        </div>
                    </div>
                </DeepDivePoint>

                <DeepDivePoint
                    icon={Zap}
                    title={t('economy.points.e_fuel.title')}
                    summary={t('economy.points.e_fuel.summary')}
                    accentColor="yellow"
                    isOpen={activeAccordion === 'eco-2'}
                    onToggle={() => toggleAccordion('eco-2')}
                >
                    <div className="space-y-6">
                        <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('economy.points.e_fuel.p1') }} />

                        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-5 rounded-xl border border-yellow-200">
                            <h5 className="font-bold text-yellow-800 mb-3 text-lg">{t('economy.points.e_fuel.box1.title')}</h5>
                            <ol className="space-y-3 text-sm text-slate-700">
                                {t('economy.points.e_fuel.box1.steps').map((step, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">{i + 1}</span>
                                        <div dangerouslySetInnerHTML={{ __html: step }} />
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                <h5 className="font-bold text-blue-700 mb-2 flex items-center gap-2">
                                    <Zap size={16} /> {t('economy.points.e_fuel.box2.title')}
                                </h5>
                                <p className="text-sm text-slate-700">
                                    {t('economy.points.e_fuel.box2.desc')}
                                </p>
                            </div>
                            <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                                <h5 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                                    <TrendingUp size={16} /> {t('economy.points.e_fuel.box3.title')}
                                </h5>
                                <p className="text-sm text-slate-700" dangerouslySetInnerHTML={{ __html: t('economy.points.e_fuel.box3.desc') }} />
                            </div>
                        </div>
                    </div>
                </DeepDivePoint>

                <DeepDivePoint
                    icon={Globe}
                    title={t('economy.points.web4_state.title')}
                    summary={t('economy.points.web4_state.summary')}
                    accentColor="purple"
                    isOpen={activeAccordion === 'eco-3'}
                    onToggle={() => toggleAccordion('eco-3')}
                >
                    <div className="space-y-6">
                        <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('economy.points.web4_state.p1') }} />

                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-200">
                            <h5 className="font-bold text-purple-800 mb-3 text-lg">{t('economy.points.web4_state.box1.title')}</h5>
                            <p className="text-sm text-slate-700 mb-3">
                                {t('economy.points.web4_state.box1.desc')}
                            </p>
                            <ul className="space-y-2 text-sm text-slate-700">
                                {t('economy.points.web4_state.box1.list').map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-purple-500 mt-0.5 flex-shrink-0" />
                                        <div dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                            <h5 className="font-bold text-blue-800 mb-3 text-lg">{t('economy.points.web4_state.box2.title')}</h5>
                            <p className="text-sm text-slate-700 mb-3">
                                {t('economy.points.web4_state.box2.desc')}
                            </p>
                            <ul className="space-y-2 text-sm text-slate-700">
                                {t('economy.points.web4_state.box2.list').map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <Vote size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                                        <div dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
                            <h5 className="font-bold text-emerald-800 mb-3 text-lg flex items-center gap-2"><Shield size={20} /> {t('economy.points.web4_state.box3.title')}</h5>
                            <p className="text-sm text-slate-700 mb-3">
                                {t('economy.points.web4_state.box3.desc')}
                            </p>
                            <ul className="space-y-2 text-sm text-slate-700">
                                {t('economy.points.web4_state.box3.list').map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                                        <div dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </DeepDivePoint>

                <DeepDivePoint
                    icon={Briefcase}
                    title={t('economy.points.web4_workforce.title')}
                    summary={t('economy.points.web4_workforce.summary')}
                    accentColor="emerald"
                    isOpen={activeAccordion === 'eco-4'}
                    onToggle={() => toggleAccordion('eco-4')}
                >
                    <div className="space-y-6">
                        <p className="text-slate-600 leading-relaxed">
                            {t('economy.points.web4_workforce.p1')}
                        </p>

                        <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
                            <h5 className="font-bold text-emerald-800 mb-3 text-lg flex items-center gap-2"><Globe size={20} /> {t('economy.points.web4_workforce.box1.title')}</h5>
                            <p className="text-sm text-slate-700 mb-3" dangerouslySetInnerHTML={{ __html: t('economy.points.web4_workforce.box1.desc') }} />
                            <ul className="space-y-2 text-sm text-slate-700">
                                {t('economy.points.web4_workforce.box1.list').map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                                        <div dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-3 bg-white/60 p-3 rounded-lg text-xs text-emerald-900 border border-emerald-100 flex items-start gap-2">
                                <Info size={14} className="mt-0.5 flex-shrink-0 text-emerald-600" />
                                <div dangerouslySetInnerHTML={{ __html: t('economy.points.web4_workforce.box1.note') }} />
                            </div>
                        </div>

                        <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
                            <h5 className="font-bold text-purple-800 mb-3 text-lg flex items-center gap-2"><Cpu size={20} /> {t('economy.points.web4_workforce.box2.title')}</h5>
                            <p className="text-sm text-slate-700 mb-3" dangerouslySetInnerHTML={{ __html: t('economy.points.web4_workforce.box2.desc') }} />
                            <ul className="space-y-2 text-sm text-slate-700">
                                {t('economy.points.web4_workforce.box2.list').map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-purple-500 mt-0.5 flex-shrink-0" />
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
