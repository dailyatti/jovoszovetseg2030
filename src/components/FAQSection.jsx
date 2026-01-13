import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../utils";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200 last:border-0">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-expanded={isOpen}
            >
                <span className="font-display font-bold text-slate-900">{question}</span>
                <ChevronDown
                    size={20}
                    className={cn(
                        "text-slate-400 transition-transform duration-300",
                        isOpen && "rotate-180"
                    )}
                />
            </button>
            <div className={cn("accordion-content", isOpen && "open")}>
                <div className="accordion-inner">
                    <div className="pb-5 text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: answer }} />
                </div>
            </div>
        </div>
    );
}

export default function FAQSection() {
    const { t } = useLanguage();
    const faqItems = t('faq.items') || [];

    return (
        <section id="faq" className="scroll-mt-24">
            <SectionHeader
                title={t('faq.title')}
                subtitle={t('faq.subtitle')}
                centered
            />
            <div className="max-w-3xl mx-auto card p-6 md:p-8">
                {faqItems.map((item) => (
                    <FAQItem key={item.question} {...item} />
                ))}
            </div>
        </section>
    );
}
