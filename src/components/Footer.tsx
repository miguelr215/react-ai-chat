import React from 'react';

interface FooterProps {
	sendMessage: (e: React.FormEvent<HTMLFormElement>) => void;
	newMessage: string;
	setNewMessage: (message: string) => void;
}

const Footer: React.FC<FooterProps> = ({
	sendMessage,
	newMessage,
	setNewMessage,
}) => {
	return (
		<footer>
			<form onSubmit={sendMessage}>
				<input
					id="messageInput"
					value={newMessage}
					onChange={(e) => setNewMessage(e.target.value)}
					type="text"
					placeholder="Enter your message..."
				/>
				<button type="submit">Send</button>
			</form>
		</footer>
	);
};

export default Footer;
