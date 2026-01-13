import React from "react";
import { cn } from "../utils";

export default function Container({ children, className = "" }) {
    return <div className={cn("container", className)}>{children}</div>;
}
