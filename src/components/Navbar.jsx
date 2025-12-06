import React, { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const handleNavClick = () => {
        // close menu after clicking a link on mobile
        setOpen(false);
    };

    return (
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-100 shadow-sm">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
                <div className="text-xl font-bold text-pink-700">CancerCare</div>

                {/* Desktop links */}
                <div className="hidden md:flex gap-6 text-sm font-medium text-slate-700">
                    <a href="#home" className="hover:text-pink-700">
                        Home
                    </a>
                    <a href="#awareness" className="hover:text-pink-700">
                        Awareness
                    </a>
                    <a href="#support" className="hover:text-pink-700">
                        Support
                    </a>
                    <a href="#contact" className="hover:text-pink-700">
                        Contact
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-200 px-2 py-1 text-slate-700 hover:bg-slate-50"
                    onClick={() => setOpen((prev) => !prev)}
                    aria-label="Toggle navigation menu"
                >
                    {/* Simple 3-bars icon */}
                    <span className="flex flex-col gap-0.5">
                        <span className="h-0.5 w-4 bg-slate-700" />
                        <span className="h-0.5 w-4 bg-slate-700" />
                        <span className="h-0.5 w-4 bg-slate-700" />
                    </span>
                </button>
            </nav>

            {/* Mobile dropdown menu */}
            {open && (
                <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur">
                    <div className="mx-auto flex max-w-6xl flex-col items-center text-center px-5 py-3 text-sm font-medium text-slate-700 space-y-3">
                        <a href="#home" onClick={handleNavClick} className="hover:text-pink-700">
                            Home
                        </a>
                        <a href="#awareness" onClick={handleNavClick} className="hover:text-pink-700">
                            Awareness
                        </a>
                        <a href="#support" onClick={handleNavClick} className="hover:text-pink-700">
                            Support
                        </a>
                        <a href="#contact" onClick={handleNavClick} className="hover:text-pink-700">
                            Contact
                        </a>
                    </div>
                </div>
            )}

        </header>
    );
}
