import React, { useState, useMemo } from "react";
import { TrendingUp, Zap, ArrowRight } from "lucide-react";
import { formatHuf, formatUsd } from "../utils";
import { useLanguage } from "../context/LanguageContext";

export default function WageCalculator() {
    const { t, language } = useLanguage();

    const config = useMemo(() => {
        if (language === 'hu') {
            return {
                min: 150000,
                max: 3000000,
                step: 10000,
                default: 400000,
                formatter: (val) => `${formatHuf(val)} Ft`,
                currency: 'HUF'
            };
        } else {
            return {
                min: 500,
                max: 10000,
                step: 50,
                default: 1200,
                formatter: (val) => formatUsd(val),
                currency: 'USD'
            };
        }
    }, [language]);

    const [currentNet, setCurrentNet] = useState(config.default);

    const estimatedFuture = useMemo(() => currentNet * 3, [currentNet]);
    const diff = estimatedFuture - currentNet;
    const progressPercent = (currentNet / config.max) * 100;

    return (
        <div className="w-full" id="calculator">
            <div className="relative isolate overflow-hidden rounded-2xl bg-slate-900 border border-white/10 shadow-xl">
                {/* Subtle Background */}
                <div className="absolute top-0 right-0 -z-10 w-48 h-48 bg-blue-600/15 rounded-full blur-[60px]" />
                <div className="absolute bottom-0 left-0 -z-10 w-32 h-32 bg-purple-600/10 rounded-full blur-[40px]" />

                <div className="relative z-10 p-5">
                    {/* Compact Header */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                        <div>
                            <div className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/15 px-2.5 py-1 text-[10px] font-bold text-yellow-300 border border-yellow-500/20 mb-2">
                                <TrendingUp size={10} />
                                {t('calculator.zeroTax')}
                            </div>
                            <h3 className="font-display text-lg font-bold text-white">{t('calculator.title')}</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10">
                            <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-orange-500">3x</span>
                        </div>
                    </div>

                    {/* Input Section */}
                    <div className="bg-white/5 rounded-xl p-4 mb-4 border border-white/5">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{t('calculator.currentLabel')}</span>
                            <div className="font-mono text-lg text-white font-bold bg-slate-950/50 px-3 py-1 rounded-md border border-white/10">
                                {config.formatter(currentNet)}
                            </div>
                        </div>

                        <div className="relative h-6 flex items-center">
                            <div className="absolute inset-x-0 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-blue-500 to-yellow-400 transition-all duration-100"
                                    style={{ width: `${progressPercent}%` }}
                                />
                            </div>
                            <input
                                type="range"
                                min={config.min}
                                max={config.max}
                                step={config.step}
                                value={currentNet}
                                onChange={(e) => setCurrentNet(parseInt(e.target.value, 10))}
                                className="absolute inset-x-0 w-full h-6 opacity-0 cursor-pointer z-10"
                            />
                            <div
                                className="absolute h-4 w-4 bg-white rounded-full shadow-md border-2 border-yellow-400 pointer-events-none transition-all duration-100"
                                style={{ left: `calc(${progressPercent}% - 8px)` }}
                            />
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                            <span>{config.formatter(config.min)}</span>
                            <span>{config.formatter(config.max)}</span>
                        </div>
                    </div>

                    {/* Result Section - Compact */}
                    <div className="bg-gradient-to-r from-blue-900/30 to-slate-900/30 rounded-xl p-4 border border-blue-500/20">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mb-2 uppercase tracking-wide">
                            <Zap size={12} />
                            {t('calculator.expectedLabel')}
                        </div>
                        <div className="flex items-baseline justify-between gap-4">
                            <span className="font-mono text-3xl font-black text-white">
                                {config.formatter(estimatedFuture)}
                            </span>
                            <div className="flex items-center gap-1 bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded text-xs font-bold border border-emerald-500/20">
                                <ArrowRight size={10} />
                                <span>+{config.formatter(diff)}</span>
                            </div>
                        </div>
                    </div>

                    <p className="mt-3 text-[9px] text-slate-500 leading-tight">
                        {t('calculator.disclaimer')}
                    </p>
                </div>
            </div>
        </div>
    );
}
