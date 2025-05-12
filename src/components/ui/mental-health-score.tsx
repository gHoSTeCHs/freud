import React from 'react';

interface MentalScoreProps {
	score: number;
	maxScore?: number;
	size?: number;
}

const MentalScore: React.FC<MentalScoreProps> = ({
	score,
	maxScore = 10,
	size = 64,
}) => {
	const center = size / 2;
	const strokeWidth = size / 8;
	const radius = center - strokeWidth / 2;
	const circumference = 2 * Math.PI * radius;

	const validScore = Math.max(0, Math.min(score, maxScore));

	const offset = circumference * (1 - validScore / maxScore);

	const getStrokeColor = (
		currentScore: number,
		maximumScore: number
	): string => {
		const percentage = (currentScore / maximumScore) * 100;
		if (percentage < 33) return '#FF6347';
		if (percentage < 66) return '#FFD700';
		return '#9370DB';
	};

	const strokeColor = getStrokeColor(validScore, maxScore);
	const fontSize = size / 3.3;

	return (
		<div className={`relative`} style={{ width: size, height: size }}>
			<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
				<circle
					cx={center}
					cy={center}
					r={radius}
					fill="none"
					stroke="#e0e0e0"
					strokeWidth={strokeWidth}
				/>

				<circle
					cx={center}
					cy={center}
					r={radius}
					fill="none"
					stroke={strokeColor}
					strokeWidth={strokeWidth}
					strokeDasharray={circumference}
					strokeDashoffset={offset}
					transform={`rotate(-90 ${center} ${center})`}
					style={{
						transition: 'stroke-dashoffset 0.5s ease-out, stroke 0.5s ease-out',
					}}
					strokeLinecap="round"
				/>

				<text
					x="50%"
					y="50%"
					dy=".3em"
					textAnchor="middle"
					fill="#444"
					fontSize={fontSize}
					fontWeight="bold">
					{validScore}
				</text>
			</svg>
		</div>
	);
};

export default MentalScore;
