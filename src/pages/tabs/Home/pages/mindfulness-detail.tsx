import { Play, Check } from 'lucide-react';
import Button from '../../../../components/ui/button';

const MindfulnessDetail = () => {
	return (
		<div className="flex flex-col h-screen bg-[var(--color-green-40)] text-[var(--color-brown-10)]">
			<div className="relative h-2/5 w-full">
				<img
					src="/api/placeholder/400/320"
					alt="Forest meditation scene"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 flex items-center justify-center">
					<button
						className="bg-white/80 rounded-full size-12 flex items-center justify-center"
						title="button">
						<Play className="size-6 text-[var(--color-brown-70)] ml-1" />
					</button>
				</div>
				<div className="absolute bottom-0 left-0 right-0 flex justify-between p-4 text-xs text-white">
					<span>05:06</span>
					<div className="w-24 h-1 bg-white/30 rounded-full mt-1 relative">
						<div className="w-1/2 h-1 bg-white rounded-full absolute left-0"></div>
					</div>
				</div>
			</div>

			<div className="flex-1 bg-white rounded-t-3xl -mt-5 p-6 text-[var(--color-gray-100)]">
				<h1 className="text-xl font-bold mb-3">Why should we be mindful?</h1>

				<p className="text-sm text-muted-foreground mb-4">
					Mindfulness: the practice of being fully present and engaged in the
					moment, has become increasingly important in our fast-paced world.
					It's not just a trend, it's a vital tool for enhancing overall
					well-being.
				</p>

				<div className="flex mb-6">
					<span className="bg-[var(--color-orange-20)] text-[var(--color-orange-60)] text-xs rounded-full px-3 py-1 mr-2">
						<span className="mr-1">●</span>
						Reduce Stress
					</span>
					<span className="bg-[var(--color-orange-20)] text-[var(--color-orange-60)] text-xs rounded-full px-3 py-1">
						<span className="mr-1">●</span>
						Improve Health
					</span>
				</div>

				<Button
					variant="primary"
					size="lg"
					radius="pill"
					fullWidth
					icon={<Check className="size-5" />}>
					Mark As Completed
				</Button>
			</div>
		</div>
	);
};

export default MindfulnessDetail;
