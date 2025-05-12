import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/tabs/Home/Home';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import FreudScorePage from './pages/tabs/Home/pages/freud-score';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="home/freud-score" element={<FreudScorePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
