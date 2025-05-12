import React from 'react';
import ArticleComponent from '../../../../components/article';

interface ArticleData {
	id: string;
	title: string;
	img?: string;
	likes: number;
	views: number;
	tag: string;
}

const ArticlesSection: React.FC = () => {
	const articles: ArticleData[] = [
		{
			id: '1',
			title: 'Will meditation help you get out from the rat race?',
			img: 'https://placehold.co/64x64',
			likes: 987,
			views: 5000,
			tag: 'Mental Health',
		},
		{
			id: '2',
			title: 'Understanding the power of mindfulness in daily life',
			img: 'https://placehold.co/64x64',
			likes: 456,
			views: 3200,
			tag: 'Wellness',
		},
		{
			id: '3',
			title: 'Breaking free from stress: Practical techniques',
			img: 'https://placehold.co/64x64',
			likes: 723,
			views: 4100,
			tag: 'Lifestyle',
		},
	];

	return (
		<div className="container mx-auto px-4 ">
			<div className="flex items-center mb-4">
				<h2 className="text-3xl font-bold text-[var(--color-brown-80)] mr-4">
					Articles
				</h2>
			</div>

			<div className="flex gap-2 overflow-scroll">
				{articles.map((article) => (
					<ArticleComponent
						key={article.id}
						title={article.title}
						tag={article.tag}
						likes={article.likes}
						views={article.views}
						image={article.img || ''}
					/>
				))}
			</div>
		</div>
	);
};

export default ArticlesSection;
