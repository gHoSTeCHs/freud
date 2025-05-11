import { useState } from 'react';

import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import Button from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import AuthLayout from './layout/auth-layout';
import { Link } from 'react-router';

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	const handleSubmit = () => {
		console.log('Login with:', email, password);
	};

	return (
		<AuthLayout>
			<div className="flex-1 px-4 flex flex-col">
				<h1 className="text-brown-80 text-3xl text-center font-extrabold mb-8">
					Sign In To freud.ai
				</h1>

				<div className="flex flex-col gap-4">
					<Input
						label="Email Address"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						leftElement={<div className="text-gray-50">✉️</div>}
						rightElement={<div className="text-gray-50">▼</div>}
						placeholder="princesskaguya@gmail.com"
					/>

					<Input
						label="Password"
						type={showPassword ? 'text' : 'password'}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						leftElement={<div className="text-[var(--color-gray-50)]">🔒</div>}
						rightElement={
							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="text-[var(--color-gray-50)]">
								{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
							</button>
						}
						placeholder="Enter your password..."
					/>

					<div className="mt-4">
						<Button
							variant="primary"
							size="lg"
							fullWidth
							icon={<ArrowRight />}
							iconPosition="right"
							onClick={handleSubmit}>
							Sign In
						</Button>
					</div>
				</div>

				<div className="flex justify-center gap-6 mt-8">
					<button className="w-12 h-12 rounded-full bg-brown-20 flex items-center justify-center text-[#8B4513]">
						<span className="text-xl font-semibold">f</span>
					</button>
					<button className="w-12 h-12 rounded-full bg-brown-20 flex items-center justify-center text-[#8B4513]">
						<span className="text-xl font-semibold">G</span>
					</button>
					<button className="w-12 h-12 rounded-full bg-brown-20 flex items-center justify-center text-[#8B4513]">
						<span className="text-xl">📷</span>
					</button>
				</div>

				<div className="text-center mt-6">
					<p className="text-sm text-gray-80">
						Don't have an account?
						<Link to="/register" className="text-orange-50 ml-1">
							Sign Up
						</Link>
					</p>
					<Link to="#" className="text-sm text-orange-50 mt-2 block">
						Forgot Password
					</Link>
				</div>
			</div>
		</AuthLayout>
	);
}
