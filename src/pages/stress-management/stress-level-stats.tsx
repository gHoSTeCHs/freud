import { ChevronLeft, HelpCircle } from 'lucide-react';

const StressLevelStats = () => {
	return (
		<div className="bg-white rounded-3xl overflow-hidden h-[600px] flex flex-col">
			<div className="p-4">
				<div className="flex justify-between items-center">
					<ChevronLeft className="w-6 h-6 text-[var(--color-brown-80)]" />
					<span className="text-base font-medium text-[var(--color-brown-80)]">
						Stress Level Stats
					</span>
					<div className="w-6 h-6 rounded-full border border-[var(--color-brown-30)] flex items-center justify-center">
						<span className="text-[var(--color-brown-60)]">○</span>
					</div>
				</div>
			</div>

			<div className="flex-grow flex flex-col px-6">
				<div className="mb-6">
					<div className="flex flex-wrap gap-2 text-xs">
						<div className="flex items-center gap-1">
							<div className="w-3 h-3 rounded-full bg-[var(--color-green-40)]"></div>
							<span>Calm</span>
						</div>
						<div className="flex items-center gap-1">
							<div className="w-3 h-3 rounded-full bg-[var(--color-yellow-40)]"></div>
							<span>Normal</span>
						</div>
						<div className="flex items-center gap-1">
							<div className="w-3 h-3 rounded-full bg-[var(--color-orange-40)]"></div>
							<span>Elevated</span>
						</div>
						<div className="flex items-center gap-1">
							<div className="w-3 h-3 rounded-full bg-[var(--color-orange-60)]"></div>
							<span>Stressed</span>
						</div>
						<div className="flex items-center gap-1">
							<div className="w-3 h-3 rounded-full bg-[var(--color-purple-50)]"></div>
							<span>Extreme</span>
						</div>
					</div>
				</div>

				<div className="flex-grow relative">
					<div className="absolute top-1/4 right-4">
						<div className="w-16 h-16 rounded-full bg-[var(--color-gray-40)] flex items-center justify-center">
							<span className="text-white text-sm">33</span>
						</div>
					</div>

					<div className="absolute top-1/2 left-1/4">
						<div className="w-20 h-20 rounded-full bg-[var(--color-yellow-40)] flex items-center justify-center">
							<span className="text-white text-lg">25</span>
						</div>
					</div>

					<div className="absolute top-8 left-8">
						<div className="w-24 h-24 rounded-full bg-[var(--color-orange-40)] flex items-center justify-center">
							<span className="text-white text-xl">58</span>
						</div>
					</div>

					<div className="absolute bottom-4 left-1/3">
						<div className="w-32 h-32 rounded-full bg-[var(--color-green-40)] flex items-center justify-center">
							<span className="text-white text-3xl">91</span>
						</div>
					</div>
				</div>

				<div className="mb-4">
					<div className="flex justify-center">
						<div className="bg-[var(--color-brown-80)] rounded-full px-4 py-1 flex items-center">
							<span className="text-white text-xs">Monthly</span>
							<ChevronLeft className="w-4 h-4 text-white rotate-270" />
						</div>
					</div>
				</div>
			</div>

			<div className="p-4 relative">
				<div className="absolute bottom-8 right-8">
					<div className="w-12 h-12 rounded-full bg-[var(--color-purple-40)] flex items-center justify-center">
						<HelpCircle className="w-6 h-6 text-white" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default StressLevelStats;
