import React from "react";
import { GraduationCap, Fish } from "lucide-react";
import Container from "./Container";

import { useLanguage } from "../context/LanguageContext";

export default function DesignerManifesto() {
    const { t, language } = useLanguage();
    const m = t('manifesto');
    const articles = m.articles || [{}, {}, {}, {}, {}]; // Fallback to avoid crashes if loading

    return (
        <section className="py-32 bg-slate-950 relative overflow-hidden text-slate-200">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-900/10 blur-[150px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-emerald-900/10 blur-[150px] -z-10"></div>

            <Container>
                <div className="max-w-4xl mx-auto">

                    {/* Main Title Block */}
                    <div className="border-l-4 border-emerald-500 pl-8 mb-24">
                        <h4 className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4">{m.badge}</h4>
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase font-display" dangerouslySetInnerHTML={{ __html: m.title }} />
                    </div>

                    <div className="space-y-32">

                        {/* 1. SZABADSÁG */}
                        <article className="prose prose-invert prose-xl max-w-none">
                            <h3 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4 flex items-center gap-4">
                                <span className="text-emerald-500 text-sm font-mono">[ 01 ]</span> {articles[0]?.title}
                            </h3>
                            <p className="leading-relaxed text-slate-300" dangerouslySetInnerHTML={{ __html: articles[0]?.content }} />
                            <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 my-10">
                                <p className="text-2xl font-display font-medium italic text-emerald-400 text-center">
                                    {articles[0]?.quote}
                                </p>
                            </div>
                        </article>

                        {/* 2. GAZDASÁG */}
                        <article className="prose prose-invert prose-xl max-w-none">
                            <h3 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4 flex items-center gap-4">
                                <span className="text-emerald-500 text-sm font-mono">[ 02 ]</span> {articles[1]?.title}
                            </h3>
                            <div className="text-slate-300" dangerouslySetInnerHTML={{ __html: articles[1]?.content }} />

                            <div className="grid md:grid-cols-2 gap-8 my-12">
                                <div className="bg-slate-900/80 p-6 rounded-2xl border border-white/5">
                                    <h4 className="text-blue-400 font-bold mb-4">{articles[1]?.boxes?.[0]?.title}</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        {articles[1]?.boxes?.[0]?.text}
                                    </p>
                                </div>
                                <div className="bg-slate-900/80 p-6 rounded-2xl border border-white/5">
                                    <h4 className="text-yellow-400 font-bold mb-4">{articles[1]?.boxes?.[1]?.title}</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        {articles[1]?.boxes?.[1]?.text}
                                    </p>
                                </div>
                            </div>

                            <p className="text-lg text-slate-400 text-center italic">
                                {articles[1]?.quote}
                            </p>
                        </article>

                        {/* 3. SBT & DATA */}
                        <article className="prose prose-invert prose-xl max-w-none">
                            <h3 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4 flex items-center gap-4">
                                <span className="text-emerald-500 text-sm font-mono">[ 03 ]</span> {articles[2]?.title}
                            </h3>
                            <p className="text-slate-300" dangerouslySetInnerHTML={{ __html: articles[2]?.content }} />
                            <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-2xl">
                                <p className="text-base text-blue-300 m-0">
                                    {articles[2]?.box_blue}
                                </p>
                            </div>
                        </article>

                        {/* 4. KATONASÁG */}
                        <article className="prose prose-invert prose-xl max-w-none">
                            <h3 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4 flex items-center gap-4">
                                <span className="text-emerald-500 text-sm font-mono">[ 04 ]</span> {articles[3]?.title}
                            </h3>
                            <p className="text-slate-300" dangerouslySetInnerHTML={{ __html: articles[3]?.content }} />
                        </article>

                        {/* 5. OKTATÁS */}
                        <article className="prose prose-invert prose-xl max-w-none">
                            <h3 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4 flex items-center gap-4">
                                <span className="text-emerald-500 text-sm font-mono">[ 05 ]</span> {articles[4]?.title}
                            </h3>
                            <p className="text-slate-300" dangerouslySetInnerHTML={{ __html: articles[4]?.content }} />

                            <div className="bg-slate-900 border border-slate-800 p-10 rounded-[3rem] my-12 text-center relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <GraduationCap size={200} />
                                </div>
                                <div className="flex justify-center gap-12 mb-8 items-center scale-75 md:scale-100">
                                    <div className="text-center">
                                        <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 mx-auto animate-bounce-slow">
                                            <Fish size={48} className="text-blue-400" />
                                        </div>
                                        <div className="text-white text-xs font-bold uppercase tracking-widest">{language === 'en' ? "THE FISH" : "A HAL"}</div>
                                    </div>
                                    <div className="text-slate-600 font-black italic text-2xl">VS</div>
                                    <div className="text-center">
                                        <div className="w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center mb-4 mx-auto animate-bounce-slow-delayed">
                                            <span className="text-4xl">🐒</span>
                                        </div>
                                        <div className="text-white text-xs font-bold uppercase tracking-widest">{language === 'en' ? "THE MONKEY" : "A MAJOM"}</div>
                                    </div>
                                </div>
                                <p className="text-xl md:text-2xl font-display font-medium text-slate-200 leading-relaxed italic">
                                    {articles[4]?.quote}
                                </p>
                            </div>

                            <p className="text-slate-300" dangerouslySetInnerHTML={{ __html: articles[4]?.outro }} />
                        </article>

                        {/* 6. VISION / OUTRO */}
                        <article className="pt-24 border-t border-slate-800 text-center">
                            <h3 className="text-4xl md:text-6xl font-black text-white mb-12 uppercase tracking-tighter" dangerouslySetInnerHTML={{ __html: m?.outro?.title }} />
                            <div className="space-y-8 text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
                                <p dangerouslySetInnerHTML={{ __html: m?.outro?.text }} />
                                <div className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-3xl mt-12">
                                    <p className="m-0 font-bold text-emerald-400 text-2xl">
                                        {m?.outro?.quote}
                                    </p>
                                </div>
                            </div>
                        </article>

                    </div>
                </div>
            </Container>
        </section>
    );
}
