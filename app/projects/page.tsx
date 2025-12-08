type Project = {
    title: string;
    description: string;
};

const projects: Project[] = [
    { title: "Portfolio Website", description: "Built with Next.js + TypeScript" },
    { title: "To-Do App", description: "Task manager using React + TS" },
    { title: "Weather App", description: "OpenWeatherApp + API routes with SSR and data fetching" },
];

export default function Projects() {
    return (
        <section>
            <h1 className="text-3xl font-bold mb-4 text-center">My Projects</h1>

            <div className="space-y-4">
                {projects.map((project, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold">{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}