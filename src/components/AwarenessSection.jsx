import React from "react";

export default function AwarenessSection() {
    const cards = [
        {
            title: "Early Detection",
            desc: "Detect symptoms at an early stage through regular checkups.",
        },
        {
            title: "Regular Screening",
            desc: "Screening increases chances of identifying risks early.",
        },
        {
            title: "Emotional Support",
            desc: "A caring conversation can reduce stress and isolation.",
        },
    ];

    return (
        <section id="awareness" className="py-16 px-5">
            <div className="mx-auto max-w-6xl animate-fadeUp">
                <h2 className="text-3xl font-bold">Why Awareness Matters</h2>
                <p className="mt-3 max-w-xl text-slate-600">
                    Awareness leads to early diagnosis and better survival chances. Knowing symptoms,
                    encouraging screening, and emotional support can change lives.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    {cards.map((item, i) => (
                        <div
                            key={i}
                            className="p-5 bg-white rounded-xl shadow-sm border border-slate-100"
                        >
                            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
