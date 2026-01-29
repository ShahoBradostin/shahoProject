import Header from "../components/header/header";
import About from "../components/about/about";
import Projects from "../components/projects/projects";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import React from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#DEDCDC] font-sans">
        <main>
          <Header />

          <section className="py-40 px-6 text-center bg-gradient-to-br from-[#191D23] to-[#2a3038] text-[#DEDCDC] min-h-screen flex flex-col justify-center items-center">
            <div className="mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#979DAB] to-[#C5BAC4] mx-auto mb-8 flex items-center justify-center text-4xl font-bold">
                SB
              </div>
            </div>

            <h1 className="text-7xl font-extrabold mb-6">
              Shaho Bradostin
            </h1>

            <p className="max-w-2xl mx-auto text-2xl text-[#979DAB] mb-8">
              Full Stack Developer & Creative Problem Solver
            </p>

            <p className="max-w-2xl mx-auto text-lg text-[#C5BAC4]">
              Building modern, elegant web experiences with clean code and user-first design.
            </p>

            <div className="mt-10">
              <a
                href="#projects"
                className="inline-block bg-[#C5BAC4] text-[#191D23] px-8 py-3 rounded-lg font-semibold hover:bg-[#DEDCDC] transition"
              >
                View My Work
              </a>
            </div>
          </section>

          <About />
          <Projects />
          <Contact />
          <Footer />
        </main>

        {children}
      </body>
    </html>
  );
}
