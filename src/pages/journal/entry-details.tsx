import { useNavigate } from 'react-router';
import { useState } from 'react';
import MoodEmoji, { type MoodLevel } from '../../components/ui/mood-emoji';
import SuggestionModal from '../../components/modals/suggestion-modal';

interface JournalEntry {
	id: string;
	date: string;
	content: string;
	mood: MoodLevel;
	hasVoiceNote: boolean;
	audioUrl?: string;
}

const sampleEntry: JournalEntry = {
	id: '1',
	date: '2024-01-15 09:30 AM',
	content:
		'Had a productive morning meeting and feeling energized about the new project. The team was very supportive and we made great progress on our goals. Looking forward to implementing the new ideas we discussed.',
	mood: 5,
	hasVoiceNote: true,
	audioUrl: 'sample-recording.mp3',
};

const JournalEntryDetails = () => {
	// const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const [showSuggestion, setShowSuggestion] = useState(false);

	const entry = sampleEntry;

	const getMoodLabel = (mood: MoodLevel): string => {
		const labels: Record<MoodLevel, string> = {
			1: 'Very Stressed',
			2: 'Stressed',
			3: 'Neutral',
			4: 'Good',
			5: 'Great',
		};
		return labels[mood];
	};

	const getSuggestion = (mood: MoodLevel): string => {
		if (mood <= 2) {
			return "Consider taking a short break to practice deep breathing exercises. Remember that it's okay to take time for yourself when feeling stressed.";
		}
		return 'Great job maintaining a positive mood! Keep up the activities and habits that are working well for you.';
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="max-w-2xl mx-auto">
				<button
					onClick={() => navigate(-1)}
					className="mb-6 text-gray-600 hover:text-gray-900 flex items-center gap-2">
					← Back
				</button>

				<div className="bg-white rounded-2xl p-6 shadow-sm">
					<div className="flex items-center justify-between mb-6">
						<div className="flex items-center gap-3">
							<MoodEmoji level={entry.mood} size="lg" />
							<div>
								<h2 className="text-xl font-semibold">
									Feeling {getMoodLabel(entry.mood)}
								</h2>
								<p className="text-sm text-gray-600">{entry.date}</p>
							</div>
						</div>
						<button
							onClick={() => setShowSuggestion(true)}
							className="text-primary hover:text-primary-dark">
							💡 Get Suggestion
						</button>
					</div>

					<div className="prose max-w-none mb-6">
						<p className="text-gray-800 whitespace-pre-wrap">{entry.content}</p>
					</div>

					{entry.hasVoiceNote && entry.audioUrl && (
						<div className="bg-gray-50 rounded-lg p-4">
							<div className="flex items-center gap-2 mb-2">
								<span className="text-primary">🎤</span>
								<span className="text-sm font-medium">Voice Note</span>
							</div>
							<audio src={entry.audioUrl} controls className="w-full" />
						</div>
					)}
				</div>
			</div>

			<SuggestionModal
				isOpen={showSuggestion}
				onClose={() => setShowSuggestion(false)}
				title="Mental Health Suggestion"
				suggestion={getSuggestion(entry.mood)}
			/>
		</div>
	);
};

export default JournalEntryDetails;
