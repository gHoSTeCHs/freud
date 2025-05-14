import { ChevronLeft } from 'lucide-react';
import Button from '../../components/ui/button';

const SelectStressors = () => {
	return (
		<div className="bg-white rounded-3xl overflow-hidden h-[600px] flex flex-col">
			<div className="p-4">
				<div className="flex justify-start items-center">
					<ChevronLeft className="w-6 h-6 text-[var(--color-brown-80)]" />
				</div>
			</div>

			<div className="flex-grow flex flex-col px-6">
				<div className="mb-4">
					<h2 className="text-xl font-bold text-[var(--color-brown-80)]">
						Select Stressors
					</h2>
					<p className="text-sm text-[var(--color-brown-60)] mt-1">
						Our AI will decide how your stressor will impact your life in
						general.
					</p>
				</div>

				<div className="flex-grow relative">
					<div className="absolute left-1/4 top-20">
						<div className="w-24 h-24 rounded-full bg-[var(--color-brown-20)] flex items-center justify-center">
							<span className="text-sm text-[var(--color-brown-70)]">Work</span>
						</div>
					</div>

					<div className="absolute right-8 top-14">
						<div className="w-20 h-20 rounded-full bg-[var(--color-brown-20)] flex items-center justify-center">
							<span className="text-sm text-[var(--color-brown-70)]">Life</span>
						</div>
					</div>

					<div className="absolute left-4 top-36">
						<div className="w-16 h-16 rounded-full bg-[var(--color-brown-20)] flex items-center justify-center">
							<span className="text-xs text-[var(--color-brown-70)]">Kids</span>
						</div>
					</div>

					<div className="absolute right-1/4 bottom-20">
						<div className="w-24 h-24 rounded-full bg-[var(--color-brown-20)] flex items-center justify-center">
							<span className="text-sm text-[var(--color-brown-70)]">
								Other
							</span>
						</div>
					</div>

					<div className="absolute right-8 bottom-36">
						<div className="w-16 h-16 rounded-full bg-[var(--color-brown-20)] flex items-center justify-center">
							<span className="text-xs text-[var(--color-brown-70)]">
								Finance
							</span>
						</div>
					</div>

					<div className="absolute left-0 right-0 top-1/3 mx-auto w-32 h-32 rounded-full bg-[var(--color-green-40)] flex items-center justify-center">
						<span className="text-white">Loneliness</span>
					</div>

					<div className="absolute left-1/4 bottom-10">
						<div className="w-20 h-20 rounded-full bg-[var(--color-brown-20)] flex items-center justify-center">
							<span className="text-sm text-[var(--color-brown-70)]">
								Relationship
							</span>
						</div>
					</div>
				</div>

				<div className="mb-4">
					<div className="bg-[var(--color-orange-10)] rounded-full p-3 flex items-center">
						<div className="bg-[var(--color-orange-40)] w-6 h-6 rounded-full flex items-center justify-center mr-2">
							<span className="text-white text-xs">!</span>
						</div>
						<span className="text-sm text-[var(--color-brown-70)]">
							Life Impact: Very High
						</span>
					</div>
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

export default SelectStressors;
