import React from 'react';
import { Heart, Eye } from 'lucide-react';

export interface ArticleComponentProps {
	image: string;
	title: string;
	tag: string;
	likes: number;
	views: number;
}

const ArticleComponent: React.FC<ArticleComponentProps> = ({
	image,
	title,
	tag,
	likes,
	views,
}) => {
	const fallbackImage = (
		<div className="h-16 w-16 rounded-xl bg-[var(--color-green-10)] flex items-center justify-center">
			<svg
				width="32"
				height="32"
				viewBox="0 0 24 24"
				fill="none"
				stroke="var(--color-green-60)"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round">
				<path d="M2 16V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
				<path d="m8 12 2 2 4-4" />
			</svg>
		</div>
	);

	return (
		<div className="bg-white rounded-3xl p-4 space-y-3 shadow-sm min-w-[230px]">
			{image ? (
				<img
					src={image}
					alt={title}
					className="h-16 w-16 rounded-xl object-cover"
				/>
			) : (
				fallbackImage
			)}

			<div className="bg-[var(--color-green-10)] text-[var(--color-green-60)] uppercase px-[10px] py-[6px] rounded-md inline-block text-xs font-extrabold">
				{tag || 'Mental Health'}
			</div>

			<div className="">
				<h2 className="text-base font-bold text-[var(--color-brown-80)]">
					{title}
				</h2>

				<div className="flex items-center mt-2 space-x-4 text-[var(--color-gray-60)]">
					<div className="flex items-center space-x-1">
						<Heart
							size={16}
							className="text-[var(--color-orange-50)]"
							fill="var(--color-orange-10)"
						/>
						<span className="text-sm">{likes.toLocaleString()}</span>
					</div>
					<div className="flex items-center space-x-1">
						<Eye size={16} className="text-[var(--color-green-60)]" />
						<span className="text-sm">{views.toLocaleString()} Views</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArticleComponent;
