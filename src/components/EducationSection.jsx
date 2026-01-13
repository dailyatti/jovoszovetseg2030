import React from "react";
import { GraduationCap, Target, CheckCircle, Cpu, Briefcase, Shield, CarFront, HeartPulse } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function EducationSection() {
    const { t } = useLanguage();
    const box3Icons = [Briefcase, Shield, CarFront, HeartPulse];
    return (
        <section id="education" className="scroll-mt-24">
            <div className="bg-white rounded-3xl p-8 md:p-14 border border-slate-200 shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 mb-12 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                        <GraduationCap size={16} /> {t('education.badge')}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-display">
                        {t('education.title')} <br />
                        <span className="text-blue-600">{t('education.subtitle')}</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl leading-relaxed" dangerouslySetInnerHTML={{ __html: t('education.intro') }} />
                </div>

                <div className="grid lg:grid-cols-2 gap-8 relative z-10 mb-8">
                    {/* 1. MÓDSZERTAN & HÁZI FELADAT */}
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/20 text-white">
                                <Target size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800">{t('education.box1.title')}</h3>
                        </div>
                        <ul className="space-y-4">
                            {t('education.box1.items').map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-yellow-500 mt-1 flex-shrink-0" />
                                    <div className="text-slate-700 text-sm"><strong>{item.title}</strong> <span dangerouslySetInnerHTML={{ __html: item.desc }} /></div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 2. DIGITÁLIS EGYENSÚLY & TABLET */}
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20 text-white">
                                <Cpu size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800">{t('education.box2.title')}</h3>
                        </div>
                        <ul className="space-y-4">
                            {t('education.box2.items').map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                                    <div className="text-slate-700 text-sm"><strong>{item.title}</strong> <span dangerouslySetInnerHTML={{ __html: item.desc }} /></div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 3. ÉLETRE NEVELÉS TABLE */}
                <div className="mt-8 bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />
                    <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {t('education.box3.items').map((item, idx) => {
                            const Icon = box3Icons[idx];
                            return (
                                <div key={idx}>
                                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                                        <Icon size={20} className="text-purple-400" /> {item.title}
                                    </h4>
                                    <p className="text-sm text-slate-400">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
