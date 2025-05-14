export interface JournalEntry {
	id: string;
	date: Date;
	content: string;
	audioUrl?: string;
	sentiment?: 'positive' | 'negative' | 'neutral';
	aiSuggestion?: string;
}

export interface JournalStats {
	totalEntries: number;
	weeklyAverage: number;
	monthlyAverage: number;
	streakDays: number;
	lastEntry?: Date;
}

export interface JournalModalProps {
	isOpen: boolean;
	onClose: () => void;
	suggestion: string;
	onAccept?: () => void;
}
