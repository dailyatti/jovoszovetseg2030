import React from 'react';
import { Loader2 } from 'lucide-react';

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center p-12 w-full min-h-[200px] text-slate-400">
            <Loader2 className="animate-spin mb-4 text-blue-500" size={48} />
            <span className="text-sm font-medium tracking-widest uppercase">Betöltés...</span>
        </div>
    );
}
