import React, { useState, useEffect, useRef } from "react";
import { Briefcase, TrendingUp, Zap, Cpu } from "lucide-react";
import { cn } from "../utils";
import Container from "./Container";
import { useLanguage } from "../context/LanguageContext";

export default function StatsBar() {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const stats = [
        { value: "0%", label: t('stats_bar.tax'), icon: Briefcase },
        { value: "3×", label: t('stats_bar.wage'), icon: TrendingUp },
        { value: "∞", label: t('stats_bar.fuel'), icon: Zap },
        { value: "24/7", label: t('stats_bar.admin'), icon: Cpu },
    ];

    return (
        <section ref={ref} className="relative -mt-12 z-20 mb-16">
            <Container>
                <div className="glass-dark rounded-3xl py-8 md:py-12 px-4 md:px-8 shadow-2xl border border-white/5">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {stats.map((stat, i) => (
                            <div
                                key={stat.label}
                                className={cn(
                                    "flex flex-col items-center justify-center py-6 px-4 rounded-2xl bg-white/5 border border-white/10 transition-all duration-700 hover:bg-white/10 hover:border-white/20",
                                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                )}
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <div className="mb-3 p-3 rounded-full bg-yellow-400/10">
                                    <stat.icon size={24} className="text-yellow-400" />
                                </div>
                                <div className="font-display font-bold text-3xl md:text-4xl text-white mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-xs md:text-sm text-slate-400 font-medium uppercase tracking-wider text-center">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
