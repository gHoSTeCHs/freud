import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/tabs/Home/Home';
import Login from './pages/auth/login';
import Register from './pages/auth/register';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
