import React, { useState } from "react";
import { Database, Lightbulb, Cpu, Building, Lock, Globe, Shield, MapPin, X, CheckCircle } from "lucide-react";
import SectionHeader from "./SectionHeader";
import DeepDivePoint from "./DeepDivePoint";
import { cn } from "../utils";
import { useLanguage } from "../context/LanguageContext";

export default function TechEcosystem() {
    const { t } = useLanguage();
    const tech = t('tech_ecosystem');
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (id) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    // Configuration for styling and icons (not translatable)
    const categoryConfig = [
        {
            id: "cat-0",
            accentColor: "blue",
            icon: Database,
            totalArea: 2100
        },
        {
            id: "cat-1",
            accentColor: "red",
            icon: Lightbulb,
            totalArea: 920
        },
        {
            id: "cat-2",
            accentColor: "green", // emerald maps to green in DeepDivePoint
            icon: Cpu,
            totalArea: 1350
        },
        {
            id: "cat-3",
            accentColor: "yellow",
            icon: Building,
            totalArea: 1450
        },
        {
            id: "cat-4",
            accentColor: "purple",
            icon: Lock,
            totalArea: 500
        },
        {
            id: "cat-5",
            accentColor: "slate",
            icon: Globe,
            totalArea: 280
        }
    ];

    // Areas for individual items (ID -> Area in ha)
    const itemAreas = {
        1: 350, 2: 400, 3: 350, 4: 250, 5: 250, 6: 250, 7: 250,
        8: 200, 9: 120, 10: 120, 11: 100, 12: 100, 13: 100, 14: 80,
        15: 250, 16: 200, 17: 250, 18: 150, 19: 150, 20: 150, 21: 100,
        22: 250, 23: 250, 24: 250, 25: 200, 26: 200, 27: 150, 28: 150,
        29: 180, 30: 200, 31: 120,
        32: 80, 33: 80, 34: 70, 35: 50
    };

    // Merge translation data with config
    const categories = (tech?.categories || []).map((cat, index) => ({
        ...cat,
        ...categoryConfig[index],
        items: (cat.items || []).map(item => ({
            ...item,
            area: itemAreas[item.id] || 0
        }))
    }));

    return (
        <React.Fragment>
            <SectionHeader
                title={tech?.header?.title}
                subtitle={tech?.header?.subtitle}
                centered
            />

            {/* Policy Box - Kept as a static highlight above accordions */}
            <div className="max-w-5xl mx-auto mb-16">
                <div className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                        <Shield size={180} />
                    </div>
                    <div className="grid md:grid-cols-2 gap-10 relative z-10">
                        {/* Location Section */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <MapPin className="text-blue-600" /> {tech?.policy?.location?.title}
                            </h3>
                            <ul className="space-y-4 text-sm text-slate-700">
                                {(tech?.policy?.location?.items || []).map((itemStr, idx) => (
                                    <li key={idx} className="flex gap-4">
                                        <div className="bg-emerald-100 p-1.5 rounded-full h-fit mt-0.5"><CheckCircle size={16} className="text-emerald-600" /></div>
                                        <span dangerouslySetInnerHTML={{ __html: itemStr }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Security Section */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Shield className="text-blue-600" /> {tech?.policy?.security?.title}
                            </h3>
                            <ul className="space-y-4 text-sm text-slate-700">
                                {(tech?.policy?.security?.items || []).map((itemStr, idx) => {
                                    // 3rd item (index 2) gets Red X if needed, or check context. Assuming standard list.
                                    const isRed = idx === 2; // Based on previous code logic
                                    return (
                                        <li key={idx} className="flex gap-4">
                                            <div className={cn("p-1.5 rounded-full h-fit mt-0.5", isRed ? "bg-red-100" : "bg-emerald-100")}>
                                                {isRed ? (
                                                    <X size={16} className="text-red-600" />
                                                ) : (
                                                    <CheckCircle size={16} className="text-emerald-600" />
                                                )}
                                            </div>
                                            <span dangerouslySetInnerHTML={{ __html: itemStr }} />
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accordion Categories */}
            <div className="space-y-6 max-w-4xl mx-auto">
                {categories.map((cat) => (
                    <DeepDivePoint
                        key={cat.title}
                        icon={cat.icon}
                        title={cat.title}
                        summary={`${cat.items.length} cég • ${cat.totalArea} ha terület`}
                        accentColor={cat.accentColor}
                        isOpen={activeAccordion === cat.id}
                        onToggle={() => toggleAccordion(cat.id)}
                    >
                        <div className="overflow-x-auto rounded-xl border border-slate-200">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="px-6 py-3 w-12 text-center">#</th>
                                        <th className="px-6 py-3">Cég</th>
                                        <th className="px-6 py-3">Szerep</th>
                                        <th className="px-6 py-3 text-right">Terület</th>
                                        <th className="px-6 py-3">EU/NATO Státusz</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {cat.items.map((item) => (
                                        <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-mono text-slate-400 text-center">{item.id}</td>
                                            <td className="px-6 py-4 font-bold text-slate-900">{item.name}</td>
                                            <td className="px-6 py-4 text-slate-600">{item.role}</td>
                                            <td className="px-6 py-4 font-mono text-slate-700 text-right">{item.area} ha</td>
                                            <td className="px-6 py-4 text-slate-500 italic">{item.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </DeepDivePoint>
                ))}
            </div>
        </React.Fragment>
    );
}
