import { useParams, useNavigate } from 'react-router';
import { useState } from 'react';
import MoodEmoji from '../../../components/ui/mood-emoji';
import type { MoodLevel } from '../../../components/ui/mood-emoji';

const moodDescriptions = {
	1: 'Very Stressed',
	2: 'Stressed',
	3: 'Neutral',
	4: 'Good',
	5: 'Great',
};

const MoodInput = () => {
	const { level } = useParams();
	const navigate = useNavigate();
	const moodLevel = Number(level) as MoodLevel;
	const [notes, setNotes] = useState('');

	if (
		!moodLevel ||
		!Object.keys(moodDescriptions).includes(String(moodLevel))
	) {
		return <div>Invalid mood level</div>;
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		console.log({ level: moodLevel, notes });

		navigate('/mood-history');
	};

	return (
		<div className="min-h-screen p-6 flex flex-col items-center justify-center gap-8 bg-gray-50">
			<div className="flex flex-col items-center gap-4">
				<MoodEmoji level={moodLevel} size="xl" />
				<h1 className="text-2xl font-semibold text-gray-900">
					Feeling {moodDescriptions[moodLevel].toLowerCase()}?
				</h1>
			</div>

			<form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
				<div>
					<label
						htmlFor="notes"
						className="block text-sm font-medium text-gray-700 mb-2">
						Want to add any notes about how you're feeling?
					</label>
					<textarea
						id="notes"
						value={notes}
						onChange={(e) => setNotes(e.target.value)}
						rows={4}
						className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
						placeholder="Write your thoughts here..."
					/>
				</div>

				<button
					type="submit"
					className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
					Save Mood
				</button>
			</form>
		</div>
	);
};

export default MoodInput;
