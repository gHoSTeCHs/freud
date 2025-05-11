import React from 'react';
import { ChevronDown } from 'lucide-react';
import {
	Input,
	LLMScale,
	MegaInput,
	PhoneInput,
	RangeSlider,
} from '../components/ui/input';

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
	<div className="mb-4 flex items-center">
		<div className="h-4 w-1 bg-[var(--color-green-50)] rounded-full mr-2"></div>
		<h3 className="text-[var(--color-gray-100)] text-sm font-medium">
			{children}
		</h3>
	</div>
);

export const InputsSection = () => {
	return (
		<div className="bg-[var(--color-brown-10)] p-8 rounded-lg max-w-4xl mx-auto">
			<div className="mb-8">
				<div className="flex items-center gap-2 mb-6">
					<div className="p-2 bg-[var(--color-brown-80)] rounded-full">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
							<path
								d="M10 4.5L5 9.5M10 4.5L15 9.5M10 4.5V15.5"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
					<h1 className="text-2xl font-bold text-[var(--color-brown-80)]">
						Inputs 1
					</h1>
				</div>

				<div className="flex items-center text-sm text-[var(--color-gray-60)] mb-12">
					<span>Design System</span>
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						className="mx-2">
						<path
							d="M6 12L10 8L6 4"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<span>Inputs 1</span>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="border border-dashed border-[var(--color-gray-30)] rounded-lg p-6">
					<SectionHeader>Input Phone Number</SectionHeader>
					<div className="space-y-4">
						<PhoneInput variant="default" />
						<PhoneInput variant="filled" />
						<PhoneInput variant="outline" />
						<PhoneInput variant="outlineAccent" />
					</div>
				</div>

				<div className="border border-dashed border-[var(--color-gray-30)] rounded-lg p-6">
					<SectionHeader>Input Flag</SectionHeader>
					<div className="grid grid-cols-4 gap-3">
						<button className="flex items-center justify-center p-3 bg-white border border-[var(--color-gray-30)] rounded-md hover:bg-[var(--color-brown-20)] transition-colors">
							<span className="text-xl">🇺🇸</span>
						</button>
						<button className="flex items-center justify-center p-3 bg-white border border-[var(--color-gray-30)] rounded-md hover:bg-[var(--color-brown-20)] transition-colors">
							<span className="text-xl">🇬🇧</span>
						</button>
						<button className="flex items-center justify-center p-3 bg-white border border-[var(--color-gray-30)] rounded-md hover:bg-[var(--color-brown-20)] transition-colors">
							<span className="text-xl">🇫🇷</span>
						</button>
						<button className="flex items-center justify-center p-3 bg-white border border-[var(--color-gray-30)] rounded-md hover:bg-[var(--color-brown-20)] transition-colors">
							<span className="text-xl">🇨🇦</span>
						</button>
						<button className="flex items-center justify-center p-3 bg-white border border-[var(--color-gray-30)] rounded-md hover:bg-[var(--color-brown-20)] transition-colors">
							<span className="text-xl">🇪🇸</span>
						</button>

						<button className="flex items-center justify-center p-3 bg-white border border-[var(--color-gray-30)] rounded-md hover:bg-[var(--color-brown-20)] transition-colors">
							<span className="text-xl">🇩🇪</span>
						</button>

						<button className="flex items-center justify-center p-3 bg-white border border-[var(--color-gray-30)] rounded-md hover:bg-[var(--color-brown-20)] transition-colors">
							<span className="text-xl">🇧🇷</span>
						</button>

						<button className="flex items-center justify-center p-3 bg-white border border-[var(--color-gray-30)] rounded-md hover:bg-[var(--color-brown-20)] transition-colors">
							<span className="text-xl">🇲🇽</span>
						</button>

						<button className="flex items-center justify-center p-3 bg-white border border-[var(--color-gray-30)] rounded-md hover:bg-[var(--color-brown-20)] transition-colors">
							<span className="text-xl">🇩🇰</span>
						</button>

						<button className="flex items-center justify-center p-3 bg-white border border-[var(--color-gray-30)] rounded-md hover:bg-[var(--color-brown-20)] transition-colors">
							<span className="text-xl">🇯🇵</span>
						</button>

						<button className="flex items-center justify-center p-3 bg-white border border-[var(--color-gray-30)] rounded-md hover:bg-[var(--color-brown-20)] transition-colors">
							<span className="text-xl">🇮🇹</span>
						</button>

						<button className="flex items-center justify-center p-3 bg-white border border-[var(--color-gray-30)] rounded-md hover:bg-[var(--color-brown-20)] transition-colors">
							<span className="text-xl">🇧🇪</span>
						</button>
					</div>
				</div>

				<div className="border border-dashed border-[var(--color-gray-30)] rounded-lg p-6">
					<SectionHeader>Input Text</SectionHeader>
					<div className="space-y-4">
						<Input
							label="Email Address"
							variant="default"
							placeholder="Enter your email..."
							rightElement={
								<button className="p-1 rounded-full hover:bg-[var(--color-brown-20)] transition-colors">
									<ChevronDown size={16} name="button" />
								</button>
							}
						/>
						<Input
							label="Email Address"
							variant="filled"
							placeholder="Enter your email..."
							leftElement={
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
									<path
										d="M2 4L8 9L14 4M2 4V12H14V4M2 4H14"
										stroke="var(--color-gray-60)"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							}
						/>
						<Input
							label="Email Address"
							variant="outline"
							placeholder="Enter your email..."
						/>
						<Input
							label="Email Address"
							variant="outlineAccent"
							placeholder="Enter your email..."
							leftElement={
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
									<path
										d="M2 4L8 9L14 4M2 4V12H14V4M2 4H14"
										stroke="var(--color-orange-40)"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							}
						/>
					</div>
				</div>

				<div className="border border-dashed border-[var(--color-gray-30)] rounded-lg p-6">
					<SectionHeader>Input Slider Range</SectionHeader>
					<div className="space-y-6">
						<RangeSlider value={[0, 25]} />
						<RangeSlider value={[25, 50]} />
						<RangeSlider value={[40, 60]} />
						<RangeSlider value={[0, 100]} />
						<RangeSlider value={[0, 40]} />
						<RangeSlider value={[60, 100]} />
						<RangeSlider value={[75, 100]} />
						<RangeSlider value={[75, 100]} />
					</div>
				</div>

				<div className="border border-dashed border-[var(--color-gray-30)] rounded-lg p-6">
					<SectionHeader>Input Slider</SectionHeader>
					<div className="space-y-6">
						<LLMScale />
						<LLMScale value={3} />
						<LLMScale value={5} />
						<LLMScale value={1} />
						<LLMScale value={3} />
						<LLMScale value={5} />
					</div>
				</div>

				<div className="border border-dashed border-[var(--color-gray-30)] rounded-lg p-6">
					<SectionHeader>Input Mega</SectionHeader>
					<div className="grid grid-cols-3 gap-4">
						<MegaInput value="9" variant="default" size="sm" />
						<MegaInput value="9" variant="default" size="md" />
						<MegaInput value="9" variant="default" size="lg" />

						<MegaInput value="9" variant="outlined" size="sm" />
						<MegaInput value="9" variant="outlined" size="md" />
						<MegaInput value="9" variant="outlined" size="lg" />

						<MegaInput value="9" variant="filled" size="sm" active={true} />
						<MegaInput value="9" variant="filled" size="md" active={true} />
						<MegaInput value="9" variant="filled" size="lg" active={true} />

						<MegaInput value="9" variant="default" size="sm" />
						<MegaInput value="9" variant="default" size="md" />
						<MegaInput value="9" variant="default" size="lg" />
					</div>
				</div>
			</div>
		</div>
	);
};
