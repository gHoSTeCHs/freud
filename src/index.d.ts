export type MetricType = 'freud' | 'mood' | 'journal' | 'sleep' | 'exercise';

export interface MetricData {
	id: string;
	type: MetricType;
	title: string;
	value: number | string;
	bgColor: string;
	icon?: React.ReactNode;
}

export interface MetricCardProps {
	metric: MetricData;
	className?: string;
}

export interface MentalHealthCarouselProps {
	metrics: MetricData[];
}

export interface ArticleComponentProps {
	title: string;
	tag: string;
	likes: number;
	views: number;
	image: string;
}
