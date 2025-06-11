import { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import Header from './components/Header';
import Messages from './components/Messages';
import Footer from './components/Footer';
import './App.css';

interface Message {
	role: 'user' | 'assistant';
	content: string;
	timestamp: string;
}

function App() {
	// const googleGenApiKey: string = import.meta.env.VITE_GOOGLE_GEN_API_KEY;
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
			let errorMessage = 'Unknown error';
			if (error && typeof error === 'object' && 'message' in error) {
				errorMessage = (error as { message: string }).message;
			}
			return `Error getting AI response: ${errorMessage}`;
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
				<Header />

				<Messages messages={messages} />
			</main>

			<Footer
				sendMessage={sendMessage}
				newMessage={newMessage}
				setNewMessage={setNewMessage}
			/>
		</>
	);
}

export default App;
