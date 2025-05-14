import { ChevronLeft, Check, Camera, X } from 'lucide-react';
import Button from '../../components/ui/button';

const RecordExpression = () => {
	return (
		<div className="bg-[var(--color-brown-70)] text-white rounded-3xl overflow-hidden h-[600px] flex flex-col">
			<div className="p-4">
				<div className="flex justify-start items-center">
					<ChevronLeft className="w-6 h-6" />
				</div>
			</div>

			<div className="flex-grow flex flex-col px-6">
				<div className="mb-6">
					<h2 className="text-xl font-bold">Record Expression</h2>
					<p className="text-sm opacity-90 mt-1">
						Let's analyze face expression for better stress AI analysis. Ensure
						the following:
					</p>
				</div>

				<div className="flex-grow flex flex-col gap-3">
					<div className="bg-[var(--color-brown-60)] rounded-lg p-3 flex justify-between items-center">
						<span>Brightly Lit Room</span>
						<div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
							<Check className="w-4 h-4" />
						</div>
					</div>

					<div className="bg-[var(--color-brown-60)] rounded-lg p-3 flex justify-between items-center">
						<span>Clear Face Expression</span>
						<div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
							<Check className="w-4 h-4" />
						</div>
					</div>

					<div className="bg-[var(--color-brown-60)] rounded-lg p-3 flex justify-between items-center">
						<span>Stay Still</span>
						<div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
							<Check className="w-4 h-4" />
						</div>
					</div>

					<div className="bg-[var(--color-brown-60)] rounded-lg p-3 flex justify-between items-center">
						<span>720P Camera</span>
						<div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
							<Camera className="w-4 h-4" />
						</div>
					</div>
				</div>

				<div className="mb-4">
					<div className="flex gap-2 mb-4">
						<Button variant="accent" fullWidth>
							Skip This Step
						</Button>
						<X className="w-5 h-5" />
					</div>

					<Button variant="secondary" fullWidth>
						Continue
					</Button>
				</div>
			</div>
		</div>
	);
};

export default RecordExpression;
