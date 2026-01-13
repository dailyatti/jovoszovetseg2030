import React from "react";
import { cn } from "../utils";

export default function SectionHeader({ title, subtitle, centered = false, light = false }) {
    return (
        <div className={cn("mb-12", centered && "text-center")}>
            <h2 className={cn(
                "section-title",
                light ? "!text-white" : "text-slate-900"
            )}>
                {title}
            </h2>
            {subtitle && (
                <p
                    className={cn(
                        "section-subtitle mt-4",
                        light ? "!text-slate-300" : "text-slate-600",
                        centered && "mx-auto"
                    )}
                    dangerouslySetInnerHTML={{ __html: subtitle }}
                />
            )}
            <div className={cn("section-divider", centered && "mx-auto")} />
        </div>
    );
}
