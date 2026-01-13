import React from "react";
import { CheckCircle } from "lucide-react";
import { cn } from "../utils";
import { useLanguage } from "../context/LanguageContext";

export default function Timeline() {
    const { t } = useLanguage();
    const phases = t('timeline.phases');

    return (
        <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-yellow-500 to-emerald-500" />

            <div className="space-y-12">
                {phases.map((phase, index) => (
                    <div
                        key={phase.title}
                        className={cn(
                            "relative flex items-start gap-8",
                            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        )}
                    >
                        {/* Dot */}
                        <div className="absolute left-6 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-white border-4 border-blue-600 shadow-lg z-10" />

                        {/* Content */}
                        <div className={cn(
                            "ml-16 md:ml-0 md:w-1/2 card p-6",
                            index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                        )}>
                            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-mono font-bold text-sm mb-3">
                                {phase.year}
                            </div>
                            <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                                {phase.title}
                            </h3>
                            <ul className="space-y-6">
                                {phase.items.map((item, i) => (
                                    <li key={i} className="group">
                                        <div className="flex items-center gap-3 mb-2">
                                            <CheckCircle size={20} className="text-emerald-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                            <strong className="text-slate-800 text-lg">{item.title}</strong>
                                        </div>
                                        <p className="text-slate-600 text-sm leading-relaxed pl-8">
                                            {item.desc}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Spacer for alignment */}
                        <div className="hidden md:block md:w-1/2" />
                    </div>
                ))}
            </div>
        </div>
    );
}
