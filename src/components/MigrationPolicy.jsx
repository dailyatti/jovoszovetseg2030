import React from "react";
import { MapPin, Target, Home, Scale, X, Shield, Globe } from "lucide-react";
import { cn } from "../utils";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

export default function MigrationPolicy() {
    const { t } = useLanguage();
    const stepConfig = [
        { icon: MapPin, color: "blue" },
        { icon: Target, color: "blue" },
        { icon: Home, color: "red" },
        { icon: Scale, color: "slate" },
        { icon: X, color: "orange" },
        { icon: Shield, color: "red" },
        { icon: Globe, color: "emerald" }
    ];

    const colorStyles = {
        red: "bg-red-600 shadow-red-500/30",
        blue: "bg-blue-600 shadow-blue-500/30",
        orange: "bg-orange-500 shadow-orange-500/30",
        emerald: "bg-emerald-600 shadow-emerald-500/30",
        slate: "bg-slate-600 shadow-slate-500/30"
    };

    return (
        <React.Fragment>
            <SectionHeader
                title={t('migration.header.title')}
                subtitle={t('migration.header.subtitle')}
                centered
            />

            <div className="max-w-4xl mx-auto mb-16">
                <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 relative overflow-hidden text-center sticky top-24 z-10 shadow-2xl">
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-display" dangerouslySetInnerHTML={{ __html: t('migration.banner.title') }} />
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            {t('migration.banner.text')}
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto grid gap-6">
                {t('migration.steps').map((step, idx) => {
                    const config = stepConfig[idx] || stepConfig[0];
                    const colorClass = colorStyles[config.color] || colorStyles.slate;
                    const Icon = config.icon;
                    return (
                        <div key={step.id} className="group relative bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-lg", colorClass)}>
                                    <Icon size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                                        <span className="text-2xl font-black text-blue-100">#{step.id}</span>
                                        {step.title}
                                    </h4>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        {step.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-12 text-center text-sm text-slate-400 italic">
                <p>{t('migration.disclaimer')}</p>
            </div>

        </React.Fragment>
    );
}
