import React from "react";
import { Shield, ExternalLink } from "lucide-react";
import Container from "./Container";

import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();
    const f = t('footer');
    const nav = t('nav');

    return (
        <footer className="bg-slate-950 text-slate-400 border-t border-white/10">
            <Container>
                <div className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Brand */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white">
                                    <Shield size={20} />
                                </div>
                                <div>
                                    <div className="font-display font-black text-white uppercase">{nav?.title}</div>
                                    <div className="text-xs text-slate-500">2030–2038</div>
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed mb-6">
                                {f?.desc}
                            </p>
                            <div className="flex gap-3">
                                {["twitter", "facebook", "youtube"].map((social) => (
                                    <a
                                        key={social}
                                        href="#"
                                        className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                                        aria-label={social}
                                    >
                                        <ExternalLink size={16} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Program Links */}
                        <div>
                            <h4 className="font-display font-bold text-white mb-4">{f?.program_title}</h4>
                            <ul className="space-y-3">
                                {(f?.links?.program || []).map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm hover:text-white transition-colors">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Info Links */}
                        <div>
                            <h4 className="font-display font-bold text-white mb-4">{f?.info_title}</h4>
                            <ul className="space-y-3">
                                {(f?.links?.info || []).map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm hover:text-white transition-colors">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>


                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-slate-600">
                        {f?.copyright}
                    </div>
                    <div className="flex items-center gap-6">
                        {(f?.links?.legal || []).map((link) => (
                            <a key={link} href="#" className="text-xs hover:text-white transition-colors">
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
}
