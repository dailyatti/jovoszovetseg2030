export function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

export function formatHuf(n) {
    return n.toLocaleString("hu-HU");
}

export function formatUsd(n) {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
