import React from "react";
import { cn } from "../utils";

export default function InfoCard({ icon, title, children, color = "blue" }) {
    const Icon = icon;
    const colorClasses = {
        blue: "bg-blue-500 text-white",
        green: "bg-emerald-500 text-white",
        yellow: "bg-yellow-500 text-slate-900",
        red: "bg-red-500 text-white",
        purple: "bg-purple-500 text-white",
    };

    return (
        <div className="card h-full">
            <div className="p-6">
                <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                    colorClasses[color]
                )}>
                    <Icon size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <div className="text-slate-600 text-sm leading-relaxed">{children}</div>
            </div>
        </div>
    );
}
