import React, { useState } from "react";
import { Lock, Shield, CheckCircle, Vote, Home, Scale, Globe, HeartPulse, Briefcase, Cpu, Leaf, Users } from "lucide-react";
import SectionHeader from "./SectionHeader";
import DeepDivePoint from "./DeepDivePoint";
import { cn } from "../utils";
import { useLanguage } from "../context/LanguageContext";

export default function ConstitutionSection() {
    const { t } = useLanguage();
    const c = t('constitution');
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (id) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    // Helper for Social Box rendering
    const socialIcons = [Briefcase, Cpu, Leaf, Users];
    const socialColors = ['red', 'purple', 'green', 'blue'];

    return (
        <section id="constitution" className="scroll-mt-24">
            <SectionHeader
                title={c?.title}
                subtitle={c?.subtitle}
                centered
            />
            <div className="space-y-4 max-w-4xl mx-auto">
                {/* SBT Accordion */}
                <DeepDivePoint
                    icon={Lock}
                    title={c?.accordions?.sbt?.title}
                    summary={c?.accordions?.sbt?.summary}
                    accentColor="blue"
                    isOpen={activeAccordion === 'const-0'}
                    onToggle={() => toggleAccordion('const-0')}
                >
                    <div className="text-slate-600 space-y-4">
                        <div dangerouslySetInnerHTML={{ __html: c?.accordions?.sbt?.content }} />

                        {/* Democracy Box */}
                        {c?.accordions?.sbt?.democracy && (
                            <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 p-5 rounded-xl border border-blue-200">
                                <h5 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                                    <Vote size={20} className="text-purple-600" />
                                    {c.accordions.sbt.democracy.title}
                                </h5>
                                <ul className="space-y-3 text-sm text-slate-700">
                                    {c.accordions.sbt.democracy.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <CheckCircle size={16} className="text-purple-500 mt-1 flex-shrink-0" />
                                            <div dangerouslySetInnerHTML={{ __html: item }} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Welfare Box */}
                        {c?.accordions?.sbt?.welfare && (
                            <div className="mt-6 bg-gradient-to-r from-emerald-50 to-teal-50 p-5 rounded-xl border border-emerald-200">
                                <h5 className="font-bold text-emerald-900 mb-2 flex items-center gap-2">
                                    <Home size={20} className="text-teal-600" />
                                    {c.accordions.sbt.welfare.title}
                                </h5>
                                <p className="text-sm text-slate-700 mb-3 italic" dangerouslySetInnerHTML={{ __html: c.accordions.sbt.welfare.desc }} />
                                <ul className="space-y-3 text-sm text-slate-700">
                                    {c.accordions.sbt.welfare.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <CheckCircle size={16} className="text-teal-500 mt-1 flex-shrink-0" />
                                            <div dangerouslySetInnerHTML={{ __html: item }} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </DeepDivePoint>

                {/* Rights Accordion */}
                <DeepDivePoint
                    icon={Scale}
                    title={c?.accordions?.rights?.title}
                    summary={c?.accordions?.rights?.summary}
                    accentColor="red"
                    isOpen={activeAccordion === 'const-1'}
                    onToggle={() => toggleAccordion('const-1')}
                >
                    <div className="text-slate-600" dangerouslySetInnerHTML={{ __html: c?.accordions?.rights?.content }} />
                </DeepDivePoint>

                {/* Crime Accordion */}
                <DeepDivePoint
                    icon={Shield}
                    title={c?.accordions?.crime?.title}
                    summary={c?.accordions?.crime?.summary}
                    accentColor="blue"
                    isOpen={activeAccordion === 'const-2'}
                    onToggle={() => toggleAccordion('const-2')}
                >
                    <div className="text-slate-600" dangerouslySetInnerHTML={{ __html: c?.accordions?.crime?.content }} />
                </DeepDivePoint>

                {/* Sovereignty Accordion */}
                <DeepDivePoint
                    icon={Globe}
                    title={c?.accordions?.sovereignty?.title}
                    summary={c?.accordions?.sovereignty?.summary}
                    accentColor="green"
                    isOpen={activeAccordion === 'const-3'}
                    onToggle={() => toggleAccordion('const-3')}
                >
                    <div className="text-slate-600" dangerouslySetInnerHTML={{ __html: c?.accordions?.sovereignty?.content }} />
                </DeepDivePoint>

                {/* Social Accordion */}
                <DeepDivePoint
                    icon={HeartPulse}
                    title={c?.accordions?.social?.title}
                    summary={c?.accordions?.social?.summary}
                    accentColor="red"
                    isOpen={activeAccordion === 'const-4'}
                    onToggle={() => toggleAccordion('const-4')}
                >
                    <div className="mb-4 text-slate-600" dangerouslySetInnerHTML={{ __html: c?.accordions?.social?.content }} />
                    <div className="space-y-4">
                        {(c?.accordions?.social?.boxes || []).map((box, idx) => {
                            const Icon = socialIcons[idx] || Briefcase;
                            const colorKey = socialColors[idx] || 'gray';

                            const styleMap = {
                                red: { bg: "bg-red-50", border: "border-red-100", text: "text-red-800" },
                                purple: { bg: "bg-purple-50", border: "border-purple-100", text: "text-purple-800" },
                                green: { bg: "bg-green-50", border: "border-green-100", text: "text-green-800" },
                                blue: { bg: "bg-blue-50", border: "border-blue-100", text: "text-blue-800" },
                                gray: { bg: "bg-slate-50", border: "border-slate-100", text: "text-slate-800" }
                            };

                            const style = styleMap[colorKey] || styleMap.gray;

                            return (
                                <div key={idx} className={cn("p-4 rounded-xl border", style.bg, style.border)}>
                                    <h5 className={cn("font-bold mb-2 flex items-center gap-2", style.text)}>
                                        <Icon size={18} /> {box.title}
                                    </h5>
                                    <ul className="text-sm text-slate-700 space-y-1">
                                        {(box.items || []).map((item, i) => (
                                            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </DeepDivePoint>
            </div>
        </section>
    );
}
