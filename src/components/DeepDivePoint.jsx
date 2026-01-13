import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../utils";

export default function DeepDivePoint({ icon, title, summary, children, accentColor = "blue", isOpen, onToggle }) {
    const Icon = icon;
    const [internalIsOpen, setInternalIsOpen] = useState(false);
    const isControlled = isOpen !== undefined;
    const show = isControlled ? isOpen : internalIsOpen;

    const handleToggle = () => {
        if (isControlled) {
            onToggle();
        } else {
            setInternalIsOpen(!internalIsOpen);
        }
    };

    const colorClasses = {
        blue: { icon: "bg-blue-100 text-blue-700", border: "border-l-blue-600" },
        green: { icon: "bg-emerald-100 text-emerald-700", border: "border-l-emerald-600" },
        red: { icon: "bg-red-100 text-red-700", border: "border-l-red-600" },
        yellow: { icon: "bg-yellow-100 text-yellow-700", border: "border-l-yellow-600" },
        purple: { icon: "bg-purple-100 text-purple-700", border: "border-l-purple-600" },
        orange: { icon: "bg-orange-100 text-orange-700", border: "border-l-orange-600" },
        slate: { icon: "bg-slate-100 text-slate-700", border: "border-l-slate-600" }, // Added slate just in case
    };

    const colors = colorClasses[accentColor] || colorClasses.blue;

    return (
        <div className={cn(
            "card card-accent border-l-4 transition-all",
            colors.border,
            show && "shadow-xl"
        )}>
            <button
                type="button"
                onClick={handleToggle}
                className="w-full p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-xl"
                aria-expanded={show}
            >
                <div className="flex items-start gap-4">
                    <div className={cn(
                        "flex-shrink-0 p-3 rounded-xl transition-transform",
                        colors.icon,
                        show && "scale-110"
                    )}>
                        <Icon size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-display text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                            {title}
                        </h3>
                        <p className="mt-2 text-slate-600 leading-relaxed">
                            {summary}
                        </p>
                    </div>
                    <div className={cn(
                        "flex-shrink-0 p-2 rounded-full transition-all duration-300",
                        show ? "bg-slate-100 rotate-180" : "bg-transparent"
                    )}>
                        <ChevronDown size={20} className="text-slate-500" />
                    </div>
                </div>
            </button>

            <div className={cn("accordion-content", show && "open")}>
                <div className="accordion-inner">
                    <div className="px-6 pb-6 pt-2">
                        <div className="pl-16 border-t border-slate-100 pt-6">
                            <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-p:text-slate-700 prose-li:text-slate-700">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
