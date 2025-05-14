import { ChevronLeft, Check } from 'lucide-react';
import Button from '../../components/ui/button';

const StressLevelResult = () => {
	return (
		<div className="bg-[var(--color-brown-70)] text-white rounded-3xl overflow-hidden h-[600px] flex flex-col">
			<div className="p-4">
				<div className="flex justify-between items-center">
					<ChevronLeft className="w-6 h-6" />
					<span className="text-sm">Stress Level</span>
					<div className="w-6"></div>
				</div>
			</div>

			<div className="flex-grow flex flex-col items-center px-6">
				<div className="mt-8 mb-4 max-w-[240px]">
					<div className="bg-white rounded-xl p-4 flex flex-col items-center">
						<div className="w-24 h-24">
							<div className="w-full h-full rounded-full bg-[var(--color-orange-30)]"></div>
						</div>

						<div className="mt-4 text-center">
							<h3 className="font-bold text-[var(--color-brown-80)]">
								Stress Level Set to 3
							</h3>
							<p className="text-xs text-[var(--color-brown-60)] mt-2">
								Stress condition updated to your mental health journal. Data
								sent to Doctor Friend AI.
							</p>
						</div>

						<div className="mt-4 w-full">
							<Button variant="primary" fullWidth>
								Got it, thanks! <Check className="w-4 h-4" />
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className="p-4 bg-black/20">
				<div className="flex justify-center items-center">
					<div className="w-8 h-1 bg-white/30 rounded-full"></div>
				</div>
			</div>
		</div>
	);
};
export default StressLevelResult;
