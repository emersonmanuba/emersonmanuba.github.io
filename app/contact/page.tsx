"use client";

import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("Failed to send message.");
            }
        } catch (error) {
            setStatus("An error occurred. Please try again.");
        }
    };

    return (
        <section className="max-w-xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow"
            >
                <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border p-2 rounded"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border p-2 rounded"
                />
                <textarea
                    placeholder="Your Message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border p-2 rounded"
                />
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-blue-600 text-white p-2 rounded">
                    {status === "loading" ? "Sending..." : "Send Message"}
                </button>
            </form>
            {status == "Message sent successfully!" && (<p className="mt-4 text-green-600">{status}</p>
            )}
            {status == "Failed to send message." && (
                <p className="mt-4 text-red-600">{status}</p>
            )}
            {status == "An error occurred. Please try again." && (
                <p className="mt-4 text-red-600">{status}</p>
            )}
        </section>
    );
}