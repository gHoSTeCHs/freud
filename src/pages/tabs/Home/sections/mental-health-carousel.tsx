import { MoreVertical } from 'lucide-react';
import { useState } from 'react';
import type { MentalHealthCarouselProps } from '../../../..';
import MetricCard from '../../../../components/metric-card';

const MentalHealthCarousel = ({ metrics }: MentalHealthCarouselProps) => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className="w-full">
			<div className="flex items-center justify-between mb-3">
				<h2 className="text-brown-90 font-medium text-lg">
					Mental Health Metrics
				</h2>
				<button className="p-1" title="title">
					<MoreVertical className="text-gray-60" size={20} />
				</button>
			</div>

			<div className="relative">
				<div className="flex gap-4 overflow-x-auto pb-8 hide-scrollbar">
					{metrics.map((metric, index) => (
						<MetricCard key={index} metric={metric} />
					))}
				</div>

				<div className="flex justify-center gap-2 mt-2 absolute bottom-0 left-0 right-0">
					{metrics.map((_, index) => (
						<button
							key={index}
							className={`w-2 h-2 rounded-full ${
								index === activeIndex ? 'bg-brown-60' : 'bg-gray-30'
							}`}
							onClick={() => setActiveIndex(index)}
							title="title"
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default MentalHealthCarousel;
