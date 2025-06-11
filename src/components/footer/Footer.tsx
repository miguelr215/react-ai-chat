import React from 'react';
import './footer.css';

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
		<footer className="p-4 w-full fixed bottom-0 left-0">
			<form
				onSubmit={sendMessage}
				className="flex justify-center items-center gap-2"
			>
				<input
					id="messageInput"
					value={newMessage}
					onChange={(e) => setNewMessage(e.target.value)}
					type="text"
					placeholder="Enter your message..."
					className="p-2 md:w-1/2 border border-gray-300 rounded"
				/>
				<button
					type="submit"
					className="p-2 text-black hover:text-white bg-green-500 hover:bg-green-700 rounded"
				>
					Send
				</button>
			</form>
		</footer>
	);
};

export default Footer;
