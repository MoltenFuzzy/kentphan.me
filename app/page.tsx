import { BrowserView, MobileView } from "react-device-detect";
import info from "../info.json";

export default function HomePage() {
	return (
		<>
			<MobileView>
				<main>
					<nav className="flex justify-between text-2xl">
						<h1 className="font-medium">{`${info.fullName}`}</h1>
						<div>
							<div className="flex">
								<h1>About</h1>
								<h1>Projects</h1>
								<h1>Resume</h1>
								<h1>Contact</h1>
							</div>
						</div>
					</nav>
					<div>Mobile Test</div>
				</main>
			</MobileView>
			<BrowserView>
				<main>
					<nav className="flex justify-between text-2xl">
						<h1 className="font-medium">{`${info.fullName}`}</h1>
						<div>
							<div className="flex">
								<h1>About</h1>
								<h1>Projects</h1>
								<h1>Resume</h1>
								<h1>Contact</h1>
							</div>
						</div>
					</nav>
					<div>Desktop Test</div>
				</main>
			</BrowserView>
		</>
	);
}
