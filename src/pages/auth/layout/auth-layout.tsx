import type React from 'react';
import logo from '../../../assets/logoLight.svg';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-col min-h-screen bg-brown-10 overflow-hidden">
			<div className="relative h-[960px] w-[960px] -mt-[800px] -ml-[260px] bg-[#a2b06f] rounded-full mb-8">
				<div className="absolute top-0 bottom-0">
					<p className="text-black text-2xl">Test</p>
					<img src={logo} alt="logo " />
				</div>
			</div>
			{children}
		</div>
	);
};

export default AuthLayout;
