import { ChevronLeft } from 'lucide-react';
import Button from '../../components/ui/button';

const StressLevelInput = () => {
	return (
		<div className="bg-white rounded-3xl overflow-hidden h-[600px] flex flex-col">
			<div className="p-4">
				<div className="flex justify-start items-center">
					<ChevronLeft className="w-6 h-6 text-[var(--color-brown-80)]" />
				</div>
			</div>

			<div className="flex-grow flex flex-col px-6">
				<div className="mb-8 mt-4">
					<h2 className="text-xl font-bold text-[var(--color-brown-80)]">
						What's your stress level today?
					</h2>
				</div>

				<div className="flex-grow relative flex items-center">
					<div className="w-full h-1 bg-[var(--color-brown-20)] rounded-full">
						<div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between">
							<div className="w-3 h-3 rounded-full bg-[var(--color-brown-20)]"></div>
							<div className="w-3 h-3 rounded-full bg-[var(--color-brown-20)]"></div>
							<div className="w-3 h-3 rounded-full bg-[var(--color-brown-20)]"></div>
							<div className="w-3 h-3 rounded-full bg-[var(--color-brown-20)]"></div>
							<div className="w-3 h-3 rounded-full bg-[var(--color-brown-20)]"></div>
						</div>
					</div>

					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						<div className="flex flex-col items-center">
							<div className="w-10 h-10 rounded-full bg-[var(--color-orange-40)] border-4 border-white shadow-lg flex items-center justify-center text-white font-bold">
								<span className="text-sm">3</span>
							</div>
						</div>
					</div>
				</div>

				<div className="flex justify-center mb-8">
					<div className="text-6xl font-bold text-[var(--color-brown-70)]">
						3
					</div>
				</div>
				<div className="text-center mb-4 text-[var(--color-brown-60)]">
					Moderate
				</div>
			</div>

			<div className="p-4">
				<Button variant="primary" fullWidth>
					Continue
				</Button>
			</div>
		</div>
	);
};
export default StressLevelInput;
