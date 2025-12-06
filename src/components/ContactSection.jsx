import React from "react";

export default function ContactSection() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for contacting!");
        e.target.reset();
    };

    return (
        <section id="contact" className="py-16 px-5 flex justify-center">
            <div className="w-full max-w-3xl text-center animate-fadeUp">
                <h2 className="text-3xl font-bold">Contact Us</h2>
                <p className="text-slate-600 mt-3">
                    Feel free to reach out if you have questions or need help.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 max-w-md mx-auto space-y-4 bg-white p-6 rounded-xl shadow"
                >
                    <input
                        className="w-full border p-2 rounded-md"
                        type="text"
                        placeholder="Name"
                        required
                    />
                    <input
                        className="w-full border p-2 rounded-md"
                        type="email"
                        placeholder="Email"
                        required
                    />
                    <textarea
                        className="w-full border p-2 rounded-md"
                        rows="4"
                        placeholder="Message"
                        required
                    />
                    <button className="bg-pink-700 hover:bg-pink-800 text-white w-full py-2 rounded-md font-medium">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
