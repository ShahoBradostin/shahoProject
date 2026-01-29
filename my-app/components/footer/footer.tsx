export default function Footer() {
    return (
        <footer className="text-center py-10 bg-[#191D23] text-[#C5BAC4] border-t border-[#2a3038]">
            <p className="mb-2">© {new Date().getFullYear()} Shaho Bradostin. All rights reserved.</p>
            <p className="text-sm text-[#979DAB]">Built with Next.js • Designed with Tailwind CSS</p>
        </footer>
    );
}