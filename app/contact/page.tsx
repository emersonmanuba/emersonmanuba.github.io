export default function Contact() {
    return (
        <section className="text-center">
            <h1 className="text-3xl font-bold mb-4">Contact Me</h1>

            <form className="flex flex-col gap-2 max-w-md">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="border p-2 rounded"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="border p-2 rounded"
                />
                <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="border p-2 rounded"
                />
                <button className="bg-blue-600 text-white p-2 rounded">
                    Send
                </button>
            </form>
        </section>
    );
}