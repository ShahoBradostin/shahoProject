export default function About() {
    const skills = [
        { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
        { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
        { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'VS Code'] },
    ];

    return (
        <section id="about" className="py-32 px-8 max-w-6xl mx-auto text-[#191D23]">
            <h2 className="text-5xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                    <p className="text-lg leading-relaxed text-[#57707A] mb-6">
                        I am a passionate full-stack developer focused on building clean, modern, and
                        user-friendly digital experiences. I enjoy working with modern frameworks
                        and creating responsive designs that look great on all devices.
                    </p>
                    <p className="text-lg leading-relaxed text-[#57707A]">
                        With a keen eye for design and a love for problem-solving, I craft solutions
                        that are both beautiful and functional. My goal is to create web experiences
                        that users love to interact with.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
                    <div className="space-y-6">
                        {skills.map((skillGroup) => (
                            <div key={skillGroup.category}>
                                <h4 className="font-semibold text-[#191D23] mb-3">{skillGroup.category}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 bg-[#C5BAC4] text-[#191D23] rounded-full text-sm font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}