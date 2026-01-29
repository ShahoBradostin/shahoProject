export default function Projects() {
    const projects = [
        {
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio built with Next.js and Tailwind CSS featuring smooth navigation and interactive components.',
            tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
            image: 'bg-gradient-to-br from-[#979DAB] to-[#C5BAC4]',
            link: '#'
        },
        {
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce solution with product catalog, shopping cart, and secure payment integration.',
            tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            image: 'bg-gradient-to-br from-[#C5BAC4] to-[#7E919F]',
            link: '#'
        },
        {
            title: 'Task Management App',
            description: 'Collaborative task management application with real-time updates and user authentication.',
            tech: ['Next.js', 'PostgreSQL', 'Firebase', 'Tailwind'],
            image: 'bg-gradient-to-br from-[#7E919F] to-[#979DAB]',
            link: '#'
        },
    ];

    return (
        <section id="projects" className="py-32 px-8 bg-[#DEDCDC]">
            <h2 className="text-5xl font-bold mb-16 text-center text-[#191D23]">Featured Projects</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition transform hover:-translate-y-2"
                    >
                        <div className={`h-48 ${project.image}`} />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-3 text-[#191D23]">
                                {project.title}
                            </h3>
                            <p className="text-[#57707A] mb-4 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="text-xs px-3 py-1 bg-[#C5BAC4] text-[#191D23] rounded-full font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a href={project.link} className="text-[#979DAB] hover:text-[#191D23] font-semibold inline-block transition">
                                View Project →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}