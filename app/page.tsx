import Image from "next/image";

export default function Home() {
  return (
    <section className="text-center">
      <div className="flex flex-col items-center">
        <Image
          src="/profile.jpg"
          width={150}
          height={150}
          className="rounded-full mx-auto"
          alt="Profile"
        />
        <h1 className="text-5xl font-bold mt-6">
          Hi, I'm Emerson 👋
        </h1>

        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
          R&D Engineer and Full-Stack Developer passionate about building
          modern web applications, intuitive user interfaces, and solving complex problems.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
