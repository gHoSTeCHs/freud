import { Input } from '../../../../components/ui/input';
import images from '../../../../constants/images';
import { Bell, Calendar, Search, Shield, Star } from 'lucide-react';

const PersonalSection = () => {
	return (
		<div className="bg-brown-70 space-y-4 rounded-b-[40px] p-4 px-5 pb-6">
			<div className="flex justify-between">
				<div className="flex gap-1 items-center">
					<Calendar className="text-brown-10" size={18} />{' '}
					<p className="text-brown-10 text-sm">Tue, 25 Jan 2025</p>
				</div>
				<div className="flex items-center justify-center w-[48px] h-[48px] border border-orange-40 rounded-full relative">
					<Bell className="text-brown-10" size={20} />
					<div className="absolute top-0 right-0 w-4 h-4 bg-orange-40 rounded-full flex items-center justify-center">
						<span className="text-brown-10 text-xs font-bold">2</span>
					</div>
				</div>
			</div>

			<div className="flex items-center gap-4 mt-2">
				<div>
					<img
						className="w-[64px] h-[64px] rounded-full "
						src={images.user1}
						alt="user profile image"
					/>
				</div>
				<div className="flex flex-col">
					<h1 className="text-2xl font-bold text-brown-10">Hi, Shinomiya!</h1>
					<div className="flex items-center gap-2 mt-1">
						<div className="flex items-center gap-1">
							<Star className="text-green-40" size={16} fill="#b4c48d" />
							<span className="text-green-40 text-xs font-medium">
								Pro Member
							</span>
						</div>
						<div className="flex items-center gap-1">
							<Shield className="text-purple-40" size={16} fill="#a694ff" />
							<span className="text-purple-40 text-xs font-medium">80%</span>
						</div>
						<div className="flex items-center gap-1">
							<span className="text-yellow-40 text-sm">😊</span>
							<span className="text-yellow-40 text-xs font-medium">Happy</span>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-4">
				<Input
					placeholder="Search anything..."
					variant="default"
					size="md"
					radius="pill"
					rightElement={<Search className="text-gray-50" size={18} />}
					className="bg-brown-10 shadow-lg"
				/>
			</div>
		</div>
	);
};

export default PersonalSection;
