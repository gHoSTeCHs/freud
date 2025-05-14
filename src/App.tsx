import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/tabs/Home/Home';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import FreudScorePage from './pages/tabs/Home/pages/freud-score';
import MentalInsights from './pages/tabs/Home/pages/mental-insights';
import AIScoreSuggestions from './pages/tabs/Home/pages/ai-score-suggestions';

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
			</Routes>
		</BrowserRouter>
	);
}

export default App;
