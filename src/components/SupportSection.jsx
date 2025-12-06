import React from "react";

export default function SupportSection() {
    const supports = [
        {
            title: "Listening & Care",
            desc: "Be present for cancer fighters emotionally and mentally.",
        },
        {
            title: "Guidance & Info",
            desc: "Share trusted information about symptoms and treatment.",
        },
        {
            title: "Community Events",
            desc: "Organize awareness events, support circles & donation drives.",
        },
    ];

    return (
        <section
            id="support"
            className="py-16 px-5 bg-slate-50 border-y border-slate-200"
        >
            <div className="mx-auto max-w-6xl animate-fadeUp">
                <h2 className="text-3xl font-bold">How We Support</h2>
                <p className="mt-3 max-w-xl text-slate-600">
                    Support comes in many ways — emotional presence, sharing resources, or
                    building awareness.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    {supports.map((item, i) => (
                        <div key={i} className="p-5 bg-white rounded-xl shadow-sm">
                            <h3 className="font-semibold text-lg">{item.title}</h3>
                            <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
