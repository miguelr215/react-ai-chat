import React from 'react';

interface Message {
	role: 'user' | 'assistant';
	content: string;
	timestamp: string;
}

const Messages: React.FC<{ messages: Message[] }> = ({ messages }) => {
	return (
		<section>
			{messages.map((message) => {
				return (
					<div
						key={message.timestamp}
						className={`message ${message.role}`}
					>
						<time>{message.timestamp}</time>
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
