import Image from "next/image";
import githubLogo from '../../public/2111432.png';
import linkedinLogo from '../../public/LinkedIn_icon.png';
import mailLogo from '../../public/6244710.png';


export default function Contact() {
    const socials = [
        { name: "GitHub", url: "https://github.com", icon: githubLogo },
        { name: "LinkedIn", url: "https://linkedin.com", icon: linkedinLogo },
        { name: "Email", url: "mailto:shaho_01@hotmail.com", icon: mailLogo },
    ];

    return (
        <section id="contact" className="py-32 px-8 text-center bg-gradient-to-br from-[#7E919F] to-[#57707A]">
            <h2 className="text-5xl font-bold mb-6 text-[#191D23]">Let's Connect</h2>
            <p className="mb-12 text-[#DEDCDC] max-w-2xl mx-auto text-lg">
                I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>

            <div className="flex justify-center gap-4 mb-12">
                {socials.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full text-[#DEDCDC] flex items-center justify-center hover:bg-[#C5BAC4] hover:text-[#191D23] transition"
                        title={social.name}
                    >
                        {social.icon ? (
                            <Image
                                src={social.icon}
                                alt={social.name}
                                width={24}
                                height={24}
                            />
                        ) : (
                            <span>{social.name[0]}</span>
                        )}
                    </a>
                ))}
            </div>

            <a
                href="mailto:shaho_01@hotmail.com"
                className="inline-block bg-[#191D23] text-[#DEDCDC] px-10 py-4 rounded-lg font-semibold hover:bg-[#DEDCDC] hover:text-[#191D23] transition text-lg"
            >
                Send Me an Email
            </a>
        </section>
    );
}