import { ArrowRight, Play, Check } from 'lucide-react';

import Button from '../../../../components/ui/button';

const MindfulnessActivities = () => {
	return (
		<div className="flex flex-col h-screen bg-[var(--color-green-40)] text-[var(--color-gray-100)]">
			<div className="p-4 pb-2">
				<div className="flex items-center mb-4">
					<button
						className="rounded-full border border-[var(--color-brown-10)]/20 size-8 flex items-center justify-center"
						title="button">
						<ArrowRight className="size-5 rotate-180" />
					</button>
				</div>
				<h1 className="text-2xl font-bold mb-1">Mindfulness Activities</h1>
			</div>

			<div className="flex-1 overflow-auto bg-white rounded-t-3xl text-[var(--color-gray-100)] p-4">
				<div className="mb-6">
					<div className="flex justify-between items-center mb-3">
						<h2 className="font-bold">Suggested Activity</h2>
						<span className="text-sm text-muted-foreground">See All</span>
					</div>

					<div className="grid grid-cols-3 gap-4">
						<div className="flex flex-col items-center">
							<div className="bg-[var(--color-brown-10)] rounded-lg p-4 w-full aspect-square flex items-center justify-center mb-2">
								<span className="text-3xl">🧘</span>
							</div>
							<span className="text-xs font-medium text-center">
								Daily Meditation Routine
							</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="bg-[var(--color-brown-10)] rounded-lg p-4 w-full aspect-square flex items-center justify-center mb-2">
								<span className="text-3xl">📔</span>
							</div>
							<span className="text-xs font-medium text-center">
								Gratefulness Journaling
							</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="bg-[var(--color-brown-10)] rounded-lg p-4 w-full aspect-square flex items-center justify-center mb-2">
								<span className="text-3xl">🌿</span>
							</div>
							<span className="text-xs font-medium text-center">
								Afternoon Exercise
							</span>
						</div>
					</div>
				</div>

				<div className="mb-6">
					<div className="flex justify-between items-center mb-3">
						<h2 className="font-bold">Mindful Resources</h2>
						<span className="text-sm text-muted-foreground">See All</span>
					</div>

					<div className="relative rounded-xl overflow-hidden">
						<img
							src="/api/placeholder/400/320"
							alt="Nature scene"
							className="w-full h-28 object-cover"
						/>
						<div className="absolute inset-0 flex items-center justify-center">
							<button
								className="bg-white/80 rounded-full size-12 flex items-center justify-center"
								title="button">
								<Play className="size-6 text-[var(--color-brown-70)] ml-1" />
							</button>
						</div>
						<div className="absolute bottom-0 left-0 right-0 flex justify-between p-2 text-xs text-white">
							<span>05:06</span>
							<div className="w-24 h-1 bg-white/30 rounded-full mt-1 relative">
								<div className="w-1/2 h-1 bg-white rounded-full absolute left-0"></div>
							</div>
						</div>
					</div>

					<h3 className="font-bold mt-3">Why should we be mindful?</h3>
					<p className="text-sm text-muted-foreground line-clamp-4 mt-1">
						Mindfulness: the practice of being fully present and engaged in the
						moment, has become increasingly important in our fast-paced world.
						It's not just a trend, it's a vital tool for enhancing overall
						well-being.
					</p>

					<div className="flex mt-3">
						<span className="bg-[var(--color-orange-20)] text-[var(--color-orange-60)] text-xs rounded-full px-3 py-1 mr-2">
							<span className="mr-1">●</span>
							Reduce Stress
						</span>
						<span className="bg-[var(--color-orange-20)] text-[var(--color-orange-60)] text-xs rounded-full px-3 py-1">
							<span className="mr-1">●</span>
							Improve Health
						</span>
					</div>
				</div>

				<Button
					variant="primary"
					size="lg"
					radius="pill"
					fullWidth
					icon={<Check className="size-5" />}>
					Mark As Completed
				</Button>

				<div className="flex justify-center pt-4">
					<div className="w-16 h-1 bg-[var(--color-brown-30)] rounded-full"></div>
				</div>
			</div>
		</div>
	);
};

export default MindfulnessActivities;
