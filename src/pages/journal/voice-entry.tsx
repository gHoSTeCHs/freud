import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

interface RecordingState {
	isRecording: boolean;
	duration: number;
	audioUrl?: string;
}

const VoiceEntry = () => {
	const navigate = useNavigate();
	const [recordingState, setRecordingState] = useState<RecordingState>({
		isRecording: false,
		duration: 0,
	});

	useEffect(() => {
		let interval: NodeJS.Timeout;
		if (recordingState.isRecording) {
			interval = setInterval(() => {
				setRecordingState((prev) => ({
					...prev,
					duration: prev.duration + 1,
				}));
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [recordingState.isRecording]);

	const handleStartRecording = () => {
		setRecordingState({
			isRecording: true,
			duration: 0,
		});
		// TODO: Implement actual recording logic
	};

	const handleStopRecording = () => {
		setRecordingState((prev) => ({
			...prev,
			isRecording: false,
			audioUrl: 'mock-recording.mp3',
		}));
	};

	const formatDuration = (seconds: number): string => {
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${mins}:${secs.toString().padStart(2, '0')}`;
	};

	return (
		<div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[60vh]">
			<div className="text-center mb-8">
				<h1 className="text-3xl font-bold mb-2">Voice Journal</h1>
				<p className="text-gray-600">Record your thoughts and feelings</p>
			</div>

			<div className="bg-card rounded-2xl p-8 w-full max-w-md text-center">
				<div className="mb-8">
					{recordingState.isRecording ? (
						<div className="animate-pulse text-red-600 text-xl mb-4">
							Recording... {formatDuration(recordingState.duration)}
						</div>
					) : recordingState.audioUrl ? (
						<div className="text-primary text-xl mb-4">Recording Complete!</div>
					) : (
						<div className="text-gray-600 text-xl mb-4">Ready to record</div>
					)}
				</div>

				<div className="flex justify-center gap-4">
					{!recordingState.isRecording && !recordingState.audioUrl && (
						<button
							onClick={handleStartRecording}
							className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center hover:bg-primary-dark transition-colors">
							🎤
						</button>
					)}

					{recordingState.isRecording && (
						<button
							onClick={handleStopRecording}
							className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center hover:bg-red-700 transition-colors">
							⬛
						</button>
					)}

					{recordingState.audioUrl && (
						<>
							<button
								onClick={() =>
									setRecordingState({ isRecording: false, duration: 0 })
								}
								className="bg-gray-200 text-gray-700 rounded-full w-16 h-16 flex items-center justify-center hover:bg-gray-300 transition-colors">
								🗑️
							</button>
							<button
								onClick={() => navigate('/journal/new')}
								className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center hover:bg-primary-dark transition-colors">
								✓
							</button>
						</>
					)}
				</div>

				{recordingState.audioUrl && (
					<div className="mt-8">
						<audio src={recordingState.audioUrl} controls className="w-full" />
					</div>
				)}
			</div>
		</div>
	);
};

export default VoiceEntry;
