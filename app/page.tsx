"use client";

import info from "../info.json";
import { CgMail } from "react-icons/cg";
import { RiPagesFill } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import dynamic from "next/dynamic";
import ProjectCard from "@/components/ui/ProjectCard";

const PdfViewer = dynamic(() => import("@/components/PdfViewer"), {
	ssr: false,
});

const useWindowWide = (size: number) => {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [setWidth]);

	return width;
};

export default function HomePage() {
	const [showAboutMe, setShowAboutMe] = useState(true);
	const [showProjects, setShowProjects] = useState(false);
	const [focusProjectIndex, setFocusProjectIndex] = useState(0);
	const divRef = useRef<HTMLDivElement | null>(null);
	const wide = useWindowWide(1024);

	const executeScroll = () =>
		divRef.current?.scrollIntoView({ behavior: "smooth" });

	return (
		<div>
			<div className="container mx-auto p-6">
				<header className="flex flex-row items-center justify-between mb-6">
					<h1 className="font-medium text-4xl font-mono">{`${info.fullName}`}</h1>
					<div className="flex flex-row items-center justify-center gap-x-5">
						<a
							href={`${info.github}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="hover:animate-pulse">
								<AiFillGithub size={30} />
							</button>
						</a>
						<a
							href={`${info.linkedin}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="hover:animate-pulse">
								<AiFillLinkedin size={30} />
							</button>
						</a>
						<a
							href={`${info.instagram}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="hover:animate-pulse">
								<AiFillInstagram size={30} />
							</button>
						</a>
						<a
							href={`mailto:${info.email}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="hover:animate-pulse">
								<CgMail size={30} />
							</button>
						</a>
					</div>
				</header>
				<div ref={divRef} className="grid grid-cols-1 lg:grid-cols-2 gap-y-8">
					{showAboutMe ? (
						<section>
							<div className="animate__animated animate__fadeIn lg:sticky lg:top-16">
								<h1 className="text-4xl font-thin my-4">About Me</h1>
								<div className="border-l-2 gradient-border pl-6 whitespace-pre-line w-11/12 lg:w-3/4 text-lg">
									{`${info.aboutMe}`}
								</div>
							</div>
						</section>
					) : (
						<section>
							<div
								key={focusProjectIndex}
								className={`animate__animated ${
									showProjects ? "animate__fadeIn" : ""
								} lg:sticky lg:top-16`}
							>
								<h1 className="text-4xl font-thin my-4">
									{info.projects[focusProjectIndex].name}
								</h1>
								<div className="border-l-2 gradient-border pl-6 whitespace-pre-line w-11/12 lg:w-3/4">
									<p className="mt-5">
										{info.projects[focusProjectIndex].description}
									</p>
									{info.projects[focusProjectIndex].reflection !== "" && (
										<p className="mt-5">
											<span className="font-bold">Self-reflections: </span>
											{info.projects[focusProjectIndex].reflection}
										</p>
									)}
									<ul className="mt-5 flex text-sm flex-wrap gap-2">
										{info.projects[focusProjectIndex].technologies.map(
											(tech, index) => (
												<li
													key={tech}
													className="bg-cyan-900 px-2 py-1 rounded-2xl text-indigo-50"
												>
													{tech}
												</li>
											)
										)}
									</ul>
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
							</div>
						</section>
					)}
					<div>
						<section className="flex flex-col justify-between">
							<h1 className="text-4xl font-thin my-4">Projects</h1>
							<div className="border-l-2 gradient-border pl-6">
								<div className="grid gap-4 ">
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
												if (wide < 1024) {
													executeScroll();
												}
											}}
										>
											<ProjectCard
												imageUrl={project.image}
												text={project.name}
											/>
										</div>
									))}
								</div>
							</div>
						</section>
						<section className="flex flex-col justify-between">
							<h1 className="text-4xl font-thin my-4">Resume</h1>
							<div className="w-fit border-l-2 gradient-border pl-6 hover:opacity-80 transition-all duration-300 ease-in-out">
								<a
									href={`${info.resume}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<PdfViewer file="resume.pdf" />
								</a>
							</div>
						</section>
					</div>
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
