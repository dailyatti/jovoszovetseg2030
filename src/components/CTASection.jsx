import React from "react";
import Button from "./Button";
import { useLanguage } from "../context/LanguageContext";

export default function CTASection() {
    const { t } = useLanguage();
    const cta = t('cta');

    return (
        <section className="rounded-3xl bg-gradient-to-br from-blue-950 via-slate-900 to-black p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-500/10 rounded-full blur-[100px]" />
            <div className="relative z-10">
                <h2 className="font-display text-4xl md:text-6xl font-black mb-6 leading-tight">
                    <span className="text-red-500">{cta?.title_part1}</span><br />
                    <span className="text-white">{cta?.title_part2}</span> <span className="text-emerald-500">{cta?.title_part3}</span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-10">
                    {cta?.desc}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                    <Button href="#calculator" variant="outline" size="lg">
                        {cta?.btn}
                    </Button>
                </div>
            </div>
        </section>
    );
}
