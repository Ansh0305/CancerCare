import React from "react";

export default function Hero() {
    return (
        <section id="home" className="bg-gradient-to-br from-pink-50 to-rose-50">
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-10 px-5 py-16 animate-fadeUp">

                <div className="space-y-4 max-w-lg text-center md:text-left">
                    <span className="px-3 py-1 text-xs font-semibold bg-pink-100 text-pink-700 rounded-full">
                        Cancer Awareness & Support
                    </span>
                    <h1 className="text-4xl font-bold leading-tight">
                        Cancer Awareness & Support{" "}
                        <span className="text-pink-700"> – Early Detection Saves Lives.</span>
                    </h1>
                    <p className="text-slate-600">
                        Together we create awareness, spread hope, and support individuals fighting cancer.
                        A small act of care can light up someone’s darkest days.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                        <a href="#support" className="bg-pink-700 text-white px-6 py-2 rounded-full hover:bg-pink-800">
                            Get Support
                        </a>
                        <a href="#awareness" className="text-pink-700 font-medium hover:underline">
                            Learn More
                        </a>
                    </div>
                </div>

                <img
                    src="/banner.jpg"
                    alt="Cancer Awareness Banner"
                    className="w-full max-w-md rounded-2xl shadow-md"
                />
            </div>
        </section>
    );
}
