"use client";

import info from "../info.json";
import { CgMail } from "react-icons/cg";
import { RiPagesFill } from "react-icons/ri";
import { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import dynamic from "next/dynamic";
import { redirect } from "next/dist/server/api-utils";

const PdfViewer = dynamic(() => import("@/components/PdfViewer"), {
	ssr: false,
});

export default function HomePage() {
	const [showProjects, setShowProjects] = useState(false);
	const [projects, setProjects] = useState([]);

	return (
		<div>
			<div className="container mx-auto p-6">
				<header className="flex flex-row items-center justify-between">
					<h1 className="font-medium text-2xl">{`${info.fullName}`}</h1>
					<div className="flex flex-row items-center justify-center gap-x-3">
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
				<div className="flex flex-col justify-center gap-y-8">
					{!showProjects ? (
						<section className="flex flex-col justify-between">
							<h1 className="text-4xl font-thin my-4">Welcome</h1>
							<div className="border-l-2 gradient-border pl-6 text-md whitespace-pre-line">
								{`${info.aboutMe}`}
							</div>
						</section>
					) : (
						<section className="flex flex-col justify-between">
							<h1 className="text-4xl font-thin my-4">{}</h1>
							<div className="border-l-2 gradient-border pl-6"></div>
						</section>
					)}
					<section className="flex flex-col justify-between">
						<h1 className="text-4xl font-thin my-4">Projects</h1>
						<div className="border-l-2 gradient-border pl-6">
							<ul>
								{info.projects.map((project) => (
									<li
										key={project.name}
										className="hover:underline"
										onClick={() => {
											setShowProjects(true);
										}}
									>
										{project.name}
									</li>
								))}
							</ul>
						</div>
					</section>
					<section className="flex flex-col justify-between">
						<h1 className="text-4xl font-thin my-4">Resume</h1>
						<div className="w-fit">
							<PdfViewer file="resume.pdf" />
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
