import React from "react";
import { cn } from "../utils";

export default function Button({ children, href, onClick, variant = "primary", size = "md", className = "" }) {
    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };

    const baseClass = cn("btn", `btn - ${variant} `, sizeClasses[size], className);

    if (href) {
        return <a href={href} className={baseClass}>{children}</a>;
    }
    return <button onClick={onClick} className={baseClass} type="button">{children}</button>;
}
