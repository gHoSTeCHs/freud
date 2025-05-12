import React from 'react';

const TrackerComponent = ({
	bg = 'white',
	leftComponent,
	leftComponentBg,
	leftComponentWidth,
	leftComponentRadius,
	header,
	middleComponent,
	description,
	rightComponent,
}: {
	bg?: string;
	leftComponent: React.ReactNode;
	leftComponentBg?: string;
	leftComponentWidth?: string;
	leftComponentRadius?: string;
	header: string;
	middleComponent?: React.ReactNode;
	description: string;
	rightComponent?: React.ReactNode;
}) => {
	return (
		<div
			className={`flex items-center justify-between p-4 rounded-[32px] ${
				bg || 'bg-white'
			} mb-4`}>
			<div className=" flex items-center gap-4">
				<div
					className={`${leftComponentBg} flex-shrink-0 ${
						leftComponentWidth ? leftComponentWidth : 'w-16'
					} h-16 ${
						leftComponentRadius ? leftComponentRadius : 'rounded-[24px]'
					} flex items-center justify-center bg-opacity-20`}>
					{leftComponent}
				</div>

				<div>
					<h3 className="font-extrabold text-lg text-[var(--color-brown-80)]">
						{header}
					</h3>
					<div className="text-sm font-semibold text-[var(--color-brown-70)]">
						{middleComponent ? (
							<div className="flex items-center gap-2">{middleComponent}</div>
						) : (
							description
						)}
					</div>
				</div>
			</div>

			<div className="flex-shrink-0">{rightComponent}</div>
		</div>
	);
};

export default TrackerComponent;
