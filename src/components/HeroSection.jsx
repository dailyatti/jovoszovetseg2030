import React from "react";
import {
    Lock, Zap, Building, Shield, TrendingUp, Info, ChevronDown
} from "lucide-react";
import { cn } from "../utils";
import Container from "./Container";
import Button from "./Button";

import { useLanguage } from "../context/LanguageContext";

export default function HeroSection() {
    const { t } = useLanguage();
    return (
        <header className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex flex-col justify-center">
            {/* Background Elements */}
            <div className="absolute inset-0 hero-pattern" />
            <div className="absolute inset-0 grid-pattern" />

            {/* Animated Orbs */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-float" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[150px]" />

            <Container>
                <div className="relative z-10 pt-24 pb-32">
                    <div className="text-center text-white max-w-5xl mx-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-3 rounded-full glass px-5 py-2.5 mb-8">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                            </span>
                            <span className="font-mono text-sm text-blue-200 font-medium">
                                {t('hero.badge')}
                            </span>
                        </div>

                        {/* Main Title */}
                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">
                            <span className="block text-red-500">{t('hero.title_part1')}</span>
                            <span className="block mt-2">
                                <span className="text-white">{t('hero.title_part2')}</span> <span className="text-emerald-500">{t('hero.title_part3')}</span>.
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="mt-8 text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                            {t('hero.subtitle')}
                            <br className="hidden md:block" />
                            <strong className="text-white font-semibold">{t('hero.features')}</strong>
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
                            <Button href="#calculator" variant="primary" size="lg">
                                <TrendingUp size={20} />
                                {t('hero.btn_calculate')}
                            </Button>
                            <Button href="#constitution" variant="outline" size="lg">
                                <Info size={20} />
                                {t('hero.btn_details')}
                            </Button>
                        </div>

                        {/* Scroll Indicator - Inline Professional */}
                        <div className="mt-10 flex justify-center">
                            <a
                                href="#constitution"
                                className="group flex flex-col items-center gap-2 px-8 py-4 rounded-2xl glass border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-105"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 group-hover:text-white/80 transition-colors duration-300">
                                    {t('hero.scroll')}
                                </span>
                                <div className="scroll-indicator-arrow">
                                    <ChevronDown size={18} className="text-white/40 group-hover:text-yellow-400 transition-colors duration-300" />
                                </div>
                            </a>
                        </div>

                        {/* Stats Row */}
                        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 relative z-30">
                            {[
                                { icon: Lock, label: t('hero.stats.sbt'), color: "blue" },
                                { icon: Zap, label: t('hero.stats.fuel'), color: "yellow" },
                                { icon: Building, label: t('hero.stats.utility'), color: "green" },
                                { icon: Shield, label: t('hero.stats.security'), color: "red" },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="glass rounded-2xl px-4 py-4 flex items-center gap-3 hover:bg-white/10 transition-all group cursor-default"
                                >
                                    <item.icon size={20} className={cn(
                                        "transition-colors",
                                        item.color === "blue" && "text-blue-400",
                                        item.color === "yellow" && "text-yellow-400",
                                        item.color === "green" && "text-emerald-400",
                                        item.color === "red" && "text-red-400"
                                    )} />
                                    <span className="text-sm font-bold text-white/90">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}
