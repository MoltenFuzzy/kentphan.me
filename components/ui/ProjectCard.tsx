import React, { useState } from "react";
import Image from "next/image";
import "animate.css";

interface ProjectCardProps {
	imageUrl: string;
	text: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, text }) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<div
			className="relative cursor-pointer"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div
				className={`${
					isHovered ? "opacity-50" : ""
				} min-w-32 relative aspect-video border border-gray-600 rounded-lg transition-all duration-300 ease-in-out`}
			>
				<Image src={imageUrl} alt={text} fill className="rounded-lg" />
			</div>

			{isHovered ? (
				<div className="animate__animated animate__fast animate__fadeIn absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center ">
					<div className="bg-black text-white px-4 py-2 rounded-lg">
						<p className="text-lg font-bold font-mono">{text}</p>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default ProjectCard;
