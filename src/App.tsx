import { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import './App.css';

interface Message {
	role: 'user' | 'assistant';
	content: string;
	timestamp: string;
}

function App() {
	// const googleGenApiKey = import.meta.env.VITE_GOOGLE_GEN_API_KEY;
	const [messages, setMessages] = useState<Message[]>([]);
	const [newMessage, setNewMessage] = useState<string>('');

	const ai = new GoogleGenAI({
		apiKey: 'AIzaSyDZP4OccsJ9rijlW7S4PlnVo87Y_5ozmOQ',
	});

	async function getAIMessage(message: string) {
		try {
			const res = await ai.models.generateContent({
				model: 'gemini-2.0-flash',
				contents: message,
			});

			console.log('AI response:', res);
			return res.text;
		} catch (error) {
			console.log('error getting AI message:', error);
		}
	}

	async function sendMessage(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const message = newMessage;

		setMessages((prev) => [
			...prev,
			{
				content: message,
				role: 'user',
				timestamp: new Date().toLocaleTimeString(),
			},
		]);

		const aiResponse = await getAIMessage(message);
		console.log('ai res:', aiResponse);

		setMessages((prev) => [
			...prev,
			{
				content: aiResponse || 'No response from AI',
				role: 'assistant',
				timestamp: new Date().toLocaleTimeString(),
			},
		]);

		setNewMessage('');
	}

	return (
		<>
			<main>
				<section className="header">
					<h1>Gemini Chat by Miguel</h1>
					<ul>
						<li>
							<a
								href="https://ai.google.dev/gemini-api/docs"
								target="_blank"
							>
								Gemini API Docs
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
				<section>
					{messages.map((message) => {
						return (
							<div
								key={message.timestamp}
								className={`message ${message.role}`}
							>
								<time>{message.timestamp}</time>
								<div>
									{message.content
										.split('\n')
										.map((line, idx) => (
											<p key={idx}>{line}</p>
										))}
								</div>
							</div>
						);
					})}
				</section>
			</main>

			<footer>
				<form onSubmit={sendMessage}>
					<input
						value={newMessage}
						onChange={(e) => setNewMessage(e.target.value)}
						type="text"
						placeholder="Enter your message..."
					/>
					<button type="submit">Send</button>
				</form>
			</footer>
		</>
	);
}

export default App;
