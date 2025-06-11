import React from 'react';
import './messages.css';

interface Message {
	role: 'user' | 'assistant';
	content: string;
	timestamp: string;
}

const Messages: React.FC<{ messages: Message[] }> = ({ messages }) => {
	return (
		<section className="py-5">
			{messages.map((message) => {
				return (
					<div
						key={message.timestamp}
						className={`message p-3 rounded border border-gray-500 mb-2 text-gray-800 ${message.role}`}
					>
						<div className="message-header flex gap-3 items-center">
							<time>{message.timestamp}</time>
							⏺️
							<span>{message.role}</span>
						</div>
						<div>
							{message.content.split('\n').map((line, idx) => (
								<p key={idx}>{line}</p>
							))}
						</div>
					</div>
				);
			})}
		</section>
	);
};

export default Messages;
