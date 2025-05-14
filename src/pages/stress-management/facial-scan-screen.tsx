import { Camera } from 'lucide-react';

const FacialScanScreen = () => {
	return (
		<div className="relative bg-[var(--color-brown-40)] rounded-3xl overflow-hidden h-[600px] flex flex-col">
			<div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>

			<div className="relative z-10 p-4">
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-2">
						<div className="w-8 h-8 rounded-full bg-[var(--color-green-40)] flex items-center justify-center">
							<span className="text-white text-xs">68</span>
						</div>
						<span className="text-white text-xs">bpm</span>
					</div>

					<div className="flex items-center gap-2">
						<div className="w-8 h-8 rounded-full bg-[var(--color-purple-40)] flex items-center justify-center">
							<span className="text-white text-xs">134</span>
						</div>
						<span className="text-white text-xs">ms</span>
					</div>
				</div>
			</div>

			<div className="flex-grow flex items-center justify-center">
				<div className="w-40 h-40 border-4 border-white rounded-full"></div>
			</div>

			<div className="relative z-10 mt-auto p-4">
				<div className="bg-[var(--color-orange-30)] rounded-lg p-2 mb-8 flex items-center">
					<div className="bg-[var(--color-orange-50)] w-5 h-5 rounded-full flex items-center justify-center mr-2">
						<span className="text-white text-xs">!</span>
					</div>
					<span className="text-sm text-white">
						Stay still for better AI analysis
					</span>
				</div>

				<div className="flex justify-around">
					<div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
						<span className="text-white text-2xl">|||</span>
					</div>

					<div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
						<Camera className="w-8 h-8 text-[var(--color-brown-70)]" />
					</div>

					<div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
						<span className="text-white">○</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FacialScanScreen;
