import React from 'react';
import './header.css';

const Header: React.FC = () => {
	return (
		<section className="header">
			<h1 className="text-green-500 font-semibold text-center mb-2">
				AI Chat by Miguel
			</h1>
			<ul className="flex flex-col gap-1 mx-auto sm:flex-row md:gap-4">
				<li>
					💖 Developed by{' '}
					<a
						href="https://mrtech.dev"
						target="_blank"
						className="underline"
					>
						Miguel Ramos
					</a>
				</li>
				<li>
					🚀 Created with React, TypeScript, Tailwind CSS and Vite
				</li>
				<li>🌟 API integration with Gemini AI</li>
				{/* <li>
					<a
						href="https://ai.google.dev/gemini-api/docs"
						target="_blank"
					>
						📖 Gemini API Docs
					</a>
				</li> */}
			</ul>
		</section>
	);
};

export default Header;
