import { useState } from 'react';
import { useNavigate } from 'react-router';
import MoodEmoji, { type MoodLevel } from '../../components/ui/mood-emoji';

interface VoiceNote {
	url: string;
	duration: number;
}

const NewJournalEntry = () => {
	const navigate = useNavigate();
	const [content, setContent] = useState('');
	const [mood, setMood] = useState<MoodLevel>(3);
	const [isRecording, setIsRecording] = useState(false);
	const [voiceNote, setVoiceNote] = useState<VoiceNote | null>(null);

	const handleStartRecording = () => {
		setIsRecording(true);
		// TODO: Implement actual voice recording logic
	};

	const handleStopRecording = () => {
		setIsRecording(false);
		// Mock voice note data
		setVoiceNote({
			url: 'mock-recording.mp3',
			duration: 30,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// TODO: Save journal entry
		navigate('/journal/stats');
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="max-w-2xl mx-auto">
				<h1 className="text-3xl font-bold mb-8">New Journal Entry</h1>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							How are you feeling today?
						</label>
						<div className="flex justify-center gap-4 mb-4">
							{[1, 2, 3, 4, 5].map((level) => (
								<button
									key={level}
									type="button"
									className={`transition-transform hover:scale-110 focus:outline-none rounded-full
                    ${
											mood === level ? 'ring-2 ring-primary ring-offset-2' : ''
										}`}
									onClick={() => setMood(level as MoodLevel)}
									title="button">
									<MoodEmoji level={level as MoodLevel} size="md" />
								</button>
							))}
						</div>
					</div>

					<div>
						<label
							htmlFor="content"
							className="block text-sm font-medium text-gray-700 mb-2">
							Write your thoughts
						</label>
						<textarea
							id="content"
							rows={6}
							className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
							placeholder="What's on your mind?"
							value={content}
							onChange={(e) => setContent(e.target.value)}
						/>
					</div>

					<div className="bg-gray-50 rounded-lg p-4">
						<div className="flex items-center justify-between mb-2">
							<span className="text-sm font-medium text-gray-700">
								Add voice note
							</span>
							{!isRecording && !voiceNote && (
								<button
									type="button"
									onClick={handleStartRecording}
									className="text-primary hover:text-primary-dark">
									Start Recording
								</button>
							)}
							{isRecording && (
								<button
									type="button"
									onClick={handleStopRecording}
									className="text-red-600 hover:text-red-700">
									Stop Recording
								</button>
							)}
						</div>
						{voiceNote && (
							<div className="bg-white rounded-md p-3 flex items-center justify-between">
								<div className="flex items-center gap-2">
									<span className="text-primary">🎤</span>
									<span className="text-sm text-gray-600">
										{voiceNote.duration}s
									</span>
								</div>
								<button
									type="button"
									onClick={() => setVoiceNote(null)}
									className="text-gray-400 hover:text-gray-500">
									Delete
								</button>
							</div>
						)}
					</div>

					<div className="flex justify-end gap-4">
						<button
							type="button"
							onClick={() => navigate(-1)}
							className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
							Cancel
						</button>
						<button
							type="submit"
							className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
							Save Entry
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default NewJournalEntry;
