import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ProjectSection() {
    return (
        <div className="bg-[#FAF9F0] dark:bg-black text-black dark:text-white py-12 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-8 w-md text-center">A glimpse into my CREATIVE WORK</h1>
            <div className="flex flex-col md:flex-row-reverse gap-4 max-w-6xl px-10 py-4 mx-auto">
                <div className="h-full w-full flex flex-col gap-4">
                    <div className="bg-slate-800 p-4 gap-2 flex flex-row items-center rounded-2xl ">
                        <Image src="/Projects/Portfolio.png" alt="Project Image" width={200} height={200} className="rounded-xl saturate-90 contrast-90 mr-2" />
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Portfolio</h2>
                            <p className="mb-1 text-sm text-slate-300">Portfolio made in collaboration with one of my friend in my first year while learning web development.</p>
                            <a href="https://portfolio-project-4fx6q9hse-monishas-projects-1eb67903.vercel.app/" target="_blank" className="text-blue-500 hover:underline">View Project</a>
                        </div>
                    </div>
                    <div className="bg-slate-800 rounded-2xl p-4">
                        <Image src="/Projects/Framsphere.png" alt="Project Image" width={600} height={400} className="rounded-xl saturate-90 contrast-90 mb-4" />
                        <h2 className="text-2xl font-bold mb-2">Farm Sphere</h2>
                        <p className="mb-1 text-slate-300 text-sm">FarmSphere is a comprehensive agricultural management system that empowers farmers with real-time data, predictive analytics, and smart automation to optimize crop yields and resource utilization. Made during a hackathon.</p>
                        <a href="https://farm-sphere.vercel.app/" target="_blank" className="text-blue-500 hover:underline">View Project</a>
                    </div>
                </div>
                <div className="h-full w-full gap-4 flex flex-col">
                    <div className="bg-slate-800 p-4 rounded-2xl">
                        <Image 
                            src="/Projects/StockMarketApp.png"
                            alt="Project Image"
                            width={600}
                            height={400}
                            className="mb-4 rounded-xl"
                        />
                        <h2 className="text-2xl font-bold mb-2">Stock Market App</h2>
                        <p className="mb-1 text-slate-300 text-sm">Track real-time stock prices, get personalised alerts and explore detailed company insights.</p>
                        <a href="https://stock-market-app-six-beige.vercel.app/" target="_blank" className="text-blue-500 hover:underline">View Project</a>
                    </div>
                    <div className="bg-slate-800 p-4 gap-2 flex flex-row items-center rounded-2xl ">
                        <Image src="/Projects/ResumeGenerator.png" alt="Project Image" width={200} height={200} className="rounded-xl mr-2" />
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Resume Generator</h2>
                            <p className="mb-1 text-sm text-slate-300">A tool to generate professional resumes in seconds. Will add AI features soon.</p>
                            <a href="https://resume-generator-ochre-three.vercel.app/" target="_blank" className="text-blue-500 hover:underline">View Project</a>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <a href="https://github.com/MONISHA2876?tab=repositories" target="_blank" rel="noopener noreferrer" className="w-full">
                        <div className="bg-slate-800 p-4 py-9 items-center justify-center rounded-2xl w-full text-black dark:text-white">
                            <p className="inline text-center font-bold font-xl mx-auto">View all </p>
                            <p>PROJECTS</p>
                        </div>
                        </a>
                        <div className="bg-slate-800 p-4 py-8 items-center justify-center rounded-2xl w-full text-black dark:text-white ">
                            <p className="inline text-center font-bold font-xl mx-auto">SOCIALS </p>
                            <div className="flex space-x-4 mt-2">
                                <a href="https://github.com/MONISHA2876" target="_blank" rel="noopener noreferrer">
                                    <Github className="w-5 h-5 hover:text-gray-500 transition-colors" />
                                </a>
                                <a href="https://www.linkedin.com/in/monisha-singh-tech/" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="w-5 h-5 hover:text-gray-500 transition-colors" />
                                </a>
                                <a href="mailto:monishasingh06@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <Mail className="w-5 h-5 hover:text-gray-500 transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}