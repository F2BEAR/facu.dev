export default function Resumee() {
	return (
		<section className="mt-6 flex flex-col justify-between gap-4 md:flex-row">
			<div className="flex flex-col gap-4 rounded-lg bg-black bg-opacity-80 p-8">
				<h1 className="text-lg text-cyan">Formal Experience</h1>
				<div>
					<h1 className="text-sm md:text-base">
						Web Developer at{' '}
						<a
							href="https://www.takeoffmedia.com"
							rel="noopener noreferrer"
							target="_blank"
							className="text-cyan"
						>
							Take-off Media
						</a>
					</h1>
					<p className="text-xs md:text-sm">Sept. 2021 / Prenset</p>
				</div>
				<div>
					<h1 className="text-sm md:text-base">
						Application Support level 2 and 3 at{' '}
						<a
							href="https://www.tcs.com"
							rel="noopener noreferrer"
							target="_blank"
							className="text-cyan"
						>
							Tata Consultancy Services
						</a>
					</h1>
					<p className="text-xs md:text-sm">Feb. 2021 / Sept. 2021</p>
				</div>
				<div>
					<h1 className="text-sm md:text-base">
						Quality Assurance Tester (UAT) at{' '}
						<a
							href="https://www.tcs.com"
							rel="noopener noreferrer"
							target="_blank"
							className="text-cyan"
						>
							Tata Consultancy Services
						</a>
					</h1>
					<p className="text-xs md:text-sm">Jan. 2020 / Feb. 2021</p>
				</div>
				<div>
					<h1 className="text-sm md:text-base">
						Junior IT Technician at{' '}
						<a
							href="https://www.tcs.com"
							rel="noopener noreferrer"
							target="_blank"
							className="text-cyan"
						>
							Tata Consultancy Services
						</a>
					</h1>
					<p className="text-xs md:text-sm">Jul. 2019 / Jan. 2020</p>
				</div>
			</div>
			<div className="flex flex-col gap-4 rounded-lg bg-black bg-opacity-80 p-8">
				<h1 className="text-lg text-cyan">Skillset</h1>
				<div className="grid grid-cols-2 grid-rows-2 gap-4 md:gap-x-12 md:gap-y-4">
					<div>
						<h1 className="font-bold">Front-end</h1>
						<ul className="text-sm md:text-base">
							<li className="text-sm">React</li>
							<li className="text-sm">Next.js - Vite</li>
							<li className="text-sm">TailwindCSS</li>
						</ul>
					</div>
					<div>
						<h1 className="font-bold">Back-end</h1>
						<ul className="text-sm md:text-base">
							<li className="text-sm">Node.js</li>
							<li className="text-sm">Express</li>
							<li className="text-sm">SQL</li>
							<li className="text-sm">MongoDb</li>
						</ul>
					</div>
					<div>
						<h1 className="font-bold">Tools</h1>
						<ul className="text-sm md:text-base">
							<li className="text-sm">Git</li>
							<li className="text-sm">TypeScript</li>
							<li className="text-sm">Docker - Kubernetes</li>
						</ul>
					</div>
					<div>
						<h1 className="font-bold">CI/CD</h1>
						<ul className="text-sm md:text-base">
							<li className="text-sm">GitHub Actions</li>
							<li className="text-sm">GitLab CI</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
