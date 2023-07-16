"use client";

import info from "../info.json";
import { CgMail } from "react-icons/cg";
import { RiPagesFill } from "react-icons/ri";
import { useRef, useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import dynamic from "next/dynamic";
import ProjectCard from "@/components/ui/ProjectCard";

const PdfViewer = dynamic(() => import("@/components/PdfViewer"), {
	ssr: false,
});

export default function HomePage() {
	const [showAboutMe, setShowAboutMe] = useState(true);
	const [showProjects, setShowProjects] = useState(false);
	const [focusProjectIndex, setFocusProjectIndex] = useState(0);
	const myRef = useRef<HTMLElement | null>(null);

	const executeScroll = () =>
		myRef.current?.scrollIntoView({ behavior: "smooth" });

	return (
		<div>
			<div className="container mx-auto p-6">
				<header className="flex flex-row items-center justify-between mb-6">
					<h1 className="font-medium text-3xl font-mono">{`${info.fullName}`}</h1>
					<div className="flex flex-row items-center justify-center gap-x-5">
						<a
							href={`${info.github}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="hover:animate-pulse">
								<AiFillGithub size={25} />
							</button>
						</a>
						<a
							href={`${info.linkedin}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="hover:animate-pulse">
								<AiFillLinkedin size={25} />
							</button>
						</a>
						<a
							href={`${info.instagram}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="hover:animate-pulse">
								<AiFillInstagram size={25} />
							</button>
						</a>
						<a
							href={`${info.resume}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="hover:animate-pulse">
								<RiPagesFill size={25} />
							</button>
						</a>
						<a
							href={`mailto:${info.email}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="hover:animate-pulse">
								<CgMail size={25} />
							</button>
						</a>
					</div>
				</header>
				<div ref={myRef} className="flex flex-col justify-center gap-y-8">
					{showAboutMe ? (
						<section className="flex flex-col justify-between">
							<h1 className="text-4xl font-thin my-4">Welcome</h1>
							<div className="border-l-2 gradient-border pl-6 text-lg whitespace-pre-line md:w-1/2">
								{`${info.aboutMe}`}
							</div>
						</section>
					) : (
						<section className="flex flex-col justify-between">
							<h1 className="text-4xl font-thin my-4">
								{info.projects[focusProjectIndex].name}
							</h1>
							<div className="border-l-2 gradient-border pl-6 md:w-1/2">
								<p className="mt-5">
									{info.projects[focusProjectIndex].description}
								</p>
								{info.projects[focusProjectIndex].reflection !== "" && (
									<p className="mt-5">
										<span className="font-bold">Self-reflections: </span>
										{info.projects[focusProjectIndex].reflection}
									</p>
								)}
								<p className="mt-5">
									<span className="font-bold">Technologies: </span>
									{info.projects[focusProjectIndex].technologies.map(
										(tech, index) => (
											<span key={tech}>
												<span>{tech}</span>
												{index !==
													info.projects[focusProjectIndex].technologies.length -
														1 && <span>, </span>}
											</span>
										)
									)}
								</p>
								<div className="flex gap-x-5">
									{info.projects[focusProjectIndex].link !== "" && (
										<div>
											<a
												href={info.projects[focusProjectIndex].link}
												target="_blank"
												rel="noopener noreferrer"
											>
												<button className="mt-5 hover:animate-pulse border-b-2 border-emerald-500">
													View Site
												</button>
											</a>
										</div>
									)}
									{info.projects[focusProjectIndex].repo !== "" && (
										<div>
											<a
												href={info.projects[focusProjectIndex].repo}
												target="_blank"
												rel="noopener noreferrer"
											>
												<button className="mt-5 hover:animate-pulse border-b-2 border-emerald-500">
													Repository
												</button>
											</a>
										</div>
									)}
									{info.projects[focusProjectIndex].demo !== "" && (
										<div>
											<a
												href={info.projects[focusProjectIndex].demo}
												target="_blank"
												rel="noopener noreferrer"
											>
												<button className="mt-5 hover:animate-pulse border-b-2 border-emerald-500">
													Demo
												</button>
											</a>
										</div>
									)}
								</div>
							</div>
						</section>
					)}
					<section className="flex flex-col justify-between">
						<h1 className="text-4xl font-thin my-4">Projects</h1>
						<div className="border-l-2 gradient-border pl-6">
							<div className="grid md:grid-cols-3 gap-4 ">
								{info.projects.map((project, index) => (
									<div
										className="p-2"
										key={project.name}
										onClick={() => {
											// if user presses the same project, show about me
											if (!showAboutMe && index === focusProjectIndex) {
												setShowAboutMe(true);
											} else {
												setShowAboutMe(false);
											}
											setShowProjects(true);
											setFocusProjectIndex(index);
											executeScroll();
										}}
									>
										<ProjectCard imageUrl={project.image} text={project.name} />
									</div>
								))}
							</div>
						</div>
					</section>
					<section className="flex flex-col justify-between">
						<h1 className="text-4xl font-thin my-4">Resume</h1>
						<div className="w-fit border-l-2 gradient-border pl-6">
							<PdfViewer file="resume.pdf" />
						</div>
					</section>
				</div>
			</div>
			<footer className="min-w-full p-4 text-white">
				<div className="container mx-auto">
					<div className="flex items-center justify-center">
						<p className="text-sm text-center">
							&copy; 2023 kentphan.me by MoltenFuzzy LLC. All rights reserved.
							Please hire me.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
