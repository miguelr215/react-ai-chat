import React from 'react';

const Header: React.FC = () => {
	return (
		<section className="header">
			<h1 className="text-red-500">AI Chat by Miguel</h1>
			<ul>
				<li>
					<a
						href="https://ai.google.dev/gemini-api/docs"
						target="_blank"
					>
						Gemini AI &mdash; API Docs
					</a>
				</li>
				<li>
					Created by{' '}
					<a href="https://mrtech.dev" target="_blank">
						Miguel Ramos
					</a>
				</li>
			</ul>
		</section>
	);
};

export default Header;
