import { ArrowRight } from 'lucide-react';

const RecommendationBadge = ({ color }: { color: string }) => (
	<div
		className={`size-8 rounded-full ${color} flex items-center justify-center font-extrabold text-white mr-1`}>
		<span>8+</span>
	</div>
);

const ActivityCard = ({
	icon,
	title,
	description,
	time,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
	time: string;
}) => (
	<div className="flex items-center bg-card rounded-lg p-4 mb-4">
		<div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full mr-4">
			{icon}
		</div>
		<div className="flex-grow">
			<h3 className="font-bold text-sm">{title}</h3>
			<p className="text-xs text-muted-foreground">
				{description}, {time}
			</p>
		</div>
		<ArrowRight className="flex-shrink-0 size-5 text-muted-foreground" />
	</div>
);

const AIScoreSuggestions = () => {
	return (
		<div className="flex flex-col h-screen bg-[var(--color-brown-80)] text-[var(--color-brown-10)]">
			<div className="p-4 pb-2">
				<div className="flex items-center mb-4">
					<button
						className="rounded-full border border-[var(--color-brown-10)]/20 size-8 flex items-center justify-center"
						title="button">
						<ArrowRight className="size-5 rotate-180" />
					</button>
				</div>
				<h1 className="text-2xl font-bold mb-1">AI Score Suggestions</h1>
				<div className="flex items-center text-sm">
					<span className="mr-1">📍 52 Total</span>
					<span className="mx-2">•</span>
					<span>🎯 GPT-6</span>
				</div>
			</div>

			<div className="flex justify-between items-center px-4 pt-2 pb-4">
				<button className="font-bold text-sm">All Suggestions</button>
				<div className="flex items-center text-sm">
					<span className="mr-2">Newest</span>
					<span>▼</span>
				</div>
			</div>

			<div className="flex-1 overflow-auto bg-white rounded-t-3xl text-[var(--color-gray-100)] p-4">
				<div className="mb-6">
					<div className="flex items-center justify-between mb-3">
						<div className="flex items-center">
							<div className="flex">
								<RecommendationBadge color="bg-[var(--color-green-60)]" />
								<RecommendationBadge color="bg-[var(--color-green-50)]" />
							</div>
							<h2 className="font-bold ml-1">Mindfulness Activities</h2>
						</div>
						<ArrowRight className="size-5 text-muted-foreground" />
					</div>
					<ActivityCard
						icon={<span className="text-xl">🧘</span>}
						title="Mindfulness Activities"
						description="Breathing, Relax"
						time="25-30min"
					/>
				</div>

				<div className="mb-6">
					<div className="flex items-center justify-between mb-3">
						<div className="flex items-center">
							<div className="flex">
								<RecommendationBadge color="bg-[var(--color-orange-50)]" />
								<RecommendationBadge color="bg-[var(--color-orange-40)]" />
							</div>
							<h2 className="font-bold ml-1">Physical Activities</h2>
						</div>
						<ArrowRight className="size-5 text-muted-foreground" />
					</div>
					<ActivityCard
						icon={<span className="text-xl">🏃</span>}
						title="Physical Activities"
						description="Jogging, Running, Swimming"
						time="16-50min"
					/>
				</div>

				<div className="mb-6">
					<div className="flex items-center justify-between mb-3">
						<div className="flex items-center">
							<div className="flex">
								<RecommendationBadge color="bg-[var(--color-purple-60)]" />
								<RecommendationBadge color="bg-[var(--color-purple-50)]" />
							</div>
							<h2 className="font-bold ml-1">Social Connection</h2>
						</div>
						<ArrowRight className="size-5 text-muted-foreground" />
					</div>
					<ActivityCard
						icon={<span className="text-xl">👥</span>}
						title="Social Connection"
						description="Party, Binge Watching"
						time="1-2hr"
					/>
				</div>

				<div className="mb-6">
					<div className="flex items-center justify-between mb-3">
						<div className="flex items-center">
							<div className="flex">
								<RecommendationBadge color="bg-[var(--color-orange-50)]" />
								<RecommendationBadge color="bg-[var(--color-orange-40)]" />
							</div>
							<h2 className="font-bold ml-1">Professional Support</h2>
						</div>
						<ArrowRight className="size-5 text-muted-foreground" />
					</div>
					<ActivityCard
						icon={<span className="text-xl">👨‍⚕️</span>}
						title="Professional Support"
						description="Psychatrist, Hotline"
						time="25-30min"
					/>
				</div>

				<div className="flex justify-center pt-4">
					<div className="w-16 h-1 bg-[var(--color-brown-30)] rounded-full"></div>
				</div>
			</div>
		</div>
	);
};

export default AIScoreSuggestions;
