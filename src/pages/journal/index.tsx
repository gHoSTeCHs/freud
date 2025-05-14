import { Link } from 'react-router';

const JournalPage = () => {
	const journalFeatures = [
		{
			title: 'Write Journal',
			description: 'Express your thoughts and feelings through writing',
			icon: '✏️',
			link: '/journal/new',
		},
		{
			title: 'Voice Journal',
			description: 'Record your thoughts when you prefer speaking',
			icon: '🎤',
			link: '/journal/voice',
		},
		{
			title: 'Journal Stats',
			description: 'Track your journaling progress and patterns',
			icon: '📊',
			link: '/journal/stats',
		},
		{
			title: 'My Journals',
			description: 'View and manage your previous journal entries',
			icon: '📚',
			link: '/journal/list',
		},
	];

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">Mental Health Journal</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{journalFeatures.map((feature, index) => (
					<Link
						key={index}
						to={feature.link}
						className="bg-card p-6 rounded-2xl hover:shadow-lg transition-shadow">
						<div className="text-3xl mb-4">{feature.icon}</div>
						<h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
						<p className="text-gray-600">{feature.description}</p>
					</Link>
				))}
			</div>

			<div className="mt-12 bg-primary/5 rounded-2xl p-6">
				<div className="flex items-center gap-4 mb-4">
					<span className="text-2xl">💡</span>
					<h2 className="text-xl font-semibold">Daily Tip</h2>
				</div>
				<p className="text-gray-700">
					Regular journaling can help you track your emotional patterns and
					identify triggers. Try to write for at least 5 minutes each day!
				</p>
			</div>
		</div>
	);
};

export default JournalPage;
