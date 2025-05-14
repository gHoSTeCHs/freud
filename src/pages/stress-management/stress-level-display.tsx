import { ChevronLeft } from 'lucide-react';

const StressLevelDisplay = () => {
	return (
		<div className="bg-[var(--color-orange-40)] text-white rounded-3xl overflow-hidden flex flex-col h-[600px]">
			<div className="p-4">
				<div className="flex justify-between items-center">
					<ChevronLeft className="w-6 h-6" />
					<span className="text-sm">Stress Level</span>
					<div className="w-6"></div>
				</div>
			</div>

			<div className="flex-grow flex flex-col items-center justify-center">
				<div className="relative">
					<div className="text-9xl font-bold">3</div>
					<div className="absolute -top-8 -left-8 w-16 h-16 rounded-full bg-white/10 z-0"></div>
					<div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-white/10 z-0"></div>
				</div>
				<div className="mt-2 text-xl font-medium">Elevated Stress</div>
			</div>

			<div className="bg-white rounded-t-3xl p-4 text-[var(--color-brown-80)]">
				<div className="flex justify-between items-center mb-2">
					<span className="font-semibold">Stress Stats</span>
					<span className="text-xs text-[var(--color-brown-60)]">See All</span>
				</div>

				<div className="mb-2">
					<div className="flex justify-between mb-1">
						<div className="flex items-center gap-2">
							<span className="bg-[var(--color-orange-50)] w-4 h-4 rounded-full"></span>
							<span>Stressor</span>
						</div>
						<div className="flex items-center gap-2">
							<span className="bg-[var(--color-orange-30)] w-4 h-4 rounded-full"></span>
							<span>Impact</span>
						</div>
					</div>
					<div className="flex justify-between text-sm">
						<span>Loneliness</span>
						<span>Very High</span>
					</div>
				</div>

				<div className="flex flex-col gap-1 mb-4">
					<div className="bg-[var(--color-green-40)] h-2 rounded-full w-3/4"></div>
					<div className="bg-[var(--color-green-40)] h-2 rounded-full w-1/2"></div>
					<div className="bg-[var(--color-green-40)] h-2 rounded-full w-5/6"></div>
				</div>

				<div className="flex">
					<div className="flex-1">
						<div className="bg-[var(--color-purple-30)] h-16 rounded-full w-8 relative">
							<div className="absolute top-3 left-2 w-4 h-4 bg-white rounded-full"></div>
							<div className="absolute bottom-3 left-2 w-4 h-4 bg-white rounded-full"></div>
						</div>
					</div>
					<div className="flex-1">
						<div className="bg-[var(--color-purple-30)] h-16 rounded-full w-8 relative">
							<div className="absolute top-1/4 left-2 w-4 h-4 bg-white rounded-full"></div>
							<div className="absolute bottom-1/4 left-2 w-4 h-4 bg-white rounded-full"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StressLevelDisplay;
