import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/tabs/Home/Home';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import FreudScorePage from './pages/tabs/Home/pages/freud-score';
import MentalInsights from './pages/tabs/Home/pages/mental-insights';
import AIScoreSuggestions from './pages/tabs/Home/pages/ai-score-suggestions';
import MoodInput from './pages/mood-tracker/input/MoodInput';
import MoodHistory from './components/mood-history';

// Journal routes
import NewJournalEntry from './pages/journal/new-entry';
import VoiceEntry from './pages/journal/voice-entry';
import JournalStats from './pages/journal/stats';
import JournalEntryDetails from './pages/journal/entry-details';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="home/freud-score" element={<FreudScorePage />} />
				<Route path="mental-insights" element={<MentalInsights />} />
				<Route path="ai-score-suggestions" element={<AIScoreSuggestions />} />
				<Route path="mood-tracker/input/:level" element={<MoodInput />} />
				<Route path="mood-history" element={<MoodHistory entries={[]} />} />

				{/* Journal routes */}
				<Route path="journal/new" element={<NewJournalEntry />} />
				<Route path="journal/voice" element={<VoiceEntry />} />
				<Route path="journal/stats" element={<JournalStats />} />
				<Route path="journal/:id" element={<JournalEntryDetails />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
