import React from "react";
import { Shield, Menu, X, ChevronRight, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { cn } from "../utils";
import Container from "./Container";

export default function Navigation({ scrolled, navLinks, menuOpen, setMenuOpen, handleNav }) {
    const { t, language, toggleLanguage } = useLanguage();
    return (
        <nav className={cn(
            "fixed inset-x-0 top-0 z-50 transition-all duration-500",
            scrolled
                ? "glass-white py-3 shadow-lg"
                : "bg-transparent py-5"
        )}>
            <Container>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div
                        className="flex items-center gap-3 cursor-pointer group"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <div className={cn(
                            "relative flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300",
                            "bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg",
                            "group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-blue-500/30"
                        )}>
                            <Shield size={24} strokeWidth={2.5} />
                            <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-yellow-400 border-2 border-white" />
                        </div>
                        <div>
                            <div className={cn(
                                "font-display text-xl font-black tracking-tight transition-colors",
                                scrolled ? "text-slate-900" : "text-white"
                            )}>
                                {t('nav.title')}
                            </div>
                            <div className={cn(
                                "font-mono text-[10px] uppercase tracking-widest transition-colors",
                                scrolled ? "text-slate-500" : "text-blue-200"
                            )}>
                                {t('nav.subtitle')}
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-1">
                        <div className={cn(
                            "flex items-center gap-1 rounded-full p-1.5 transition-all",
                            scrolled ? "bg-slate-100" : "glass"
                        )}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all",
                                        scrolled
                                            ? "text-slate-600 hover:text-blue-700 hover:bg-white"
                                            : "text-white/80 hover:text-white hover:bg-white/10"
                                    )}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Language Toggle Desktop */}
                        <button
                            onClick={toggleLanguage}
                            className={cn(
                                "ml-2 flex items-center gap-2 px-3 py-2 rounded-full font-bold text-xs transition-all border",
                                scrolled
                                    ? "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 hover:border-slate-300"
                                    : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                            )}
                        >
                            <Globe size={16} />
                            <span>{language === 'hu' ? 'HU' : 'EN'}</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className={cn(
                            "lg:hidden rounded-xl p-3 transition-all",
                            scrolled
                                ? "bg-slate-100 text-slate-800 hover:bg-slate-200"
                                : "glass text-white hover:bg-white/20"
                        )}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Menü bezárása" : "Menü megnyitása"}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </Container>

            {/* Mobile Menu */}
            <div className={cn(
                "lg:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden",
                menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            )}>
                <div className="glass-white border-t border-slate-200 shadow-2xl">
                    <Container>
                        <div className="flex flex-col py-4 gap-1">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    type="button"
                                    onClick={() => handleNav(link.href)}
                                    className="text-left rounded-xl px-4 py-4 font-bold text-slate-800 hover:bg-blue-50 active:bg-blue-100 transition-colors flex items-center justify-between"
                                >
                                    {link.name}
                                    <ChevronRight size={18} className="text-slate-400" />
                                </button>
                            ))}
                        </div>

                        {/* Mobile Language Toggle */}
                        <div className="px-4 py-4 border-t border-slate-100">
                            <button
                                onClick={() => {
                                    toggleLanguage();
                                    setMenuOpen(false);
                                }}
                                className="flex items-center justify-center w-full gap-2 px-4 py-3 rounded-xl bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 transition-all"
                            >
                                <Globe size={18} />
                                <span>{language === 'hu' ? 'Magyar' : 'English'}</span>
                            </button>
                        </div>
                    </Container>
                </div>
            </div>
        </nav>
    );
}
