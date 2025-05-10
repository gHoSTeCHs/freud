import {
	ArrowRight,
	ArrowRightCircle,
	Mail,
	Phone,
	Calendar,
	Send,
} from 'lucide-react';
import Button from './components/ui/button';

function App() {
	return (
		<div className="p-8 bg-[var(--color-brown-10)] font-sans">
			<h1 className="text-3xl font-bold text-[var(--color-brown-80)] mb-6">
				Buttons
			</h1>

			<div className="border border-dashed border-[var(--color-gray-30)] p-6 rounded-lg">
				<h2 className="text-lg font-semibold text-[var(--color-brown-70)] mb-6">
					Button Master
				</h2>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
					<div className="space-y-4">
						<Button variant="primary" size="lg">
							Get In Touch
						</Button>
						<Button variant="primary" size="lg" icon={<ArrowRight />}>
							Get In Touch
						</Button>
						<Button variant="primary" size="md">
							Get In Touch
						</Button>
						<Button variant="primary" size="md" icon={<ArrowRight />}>
							Get In Touch
						</Button>
						<Button variant="primary" size="sm">
							Get In Touch
						</Button>
						<Button variant="primary" size="sm" icon={<ArrowRight />}>
							Get In Touch
						</Button>
						<Button variant="primary" size="xs">
							Get In Touch
						</Button>
						<Button variant="primary" size="xs" icon={<ArrowRight />}>
							Get In Touch
						</Button>
					</div>

					<div className="space-y-4">
						<Button variant="secondary" size="lg">
							Get In Touch
						</Button>
						<Button variant="secondary" size="lg" icon={<ArrowRightCircle />}>
							Get In Touch
						</Button>
						<Button variant="secondary" size="md">
							Get In Touch
						</Button>
						<Button variant="secondary" size="md" icon={<ArrowRightCircle />}>
							Get In Touch
						</Button>
						<Button variant="secondary" size="sm">
							Get In Touch
						</Button>
						<Button variant="secondary" size="sm" icon={<ArrowRightCircle />}>
							Get In Touch
						</Button>
						<Button variant="secondary" size="xs">
							Get In Touch
						</Button>
						<Button variant="secondary" size="xs" icon={<ArrowRightCircle />}>
							Get In Touch
						</Button>
					</div>

					<div className="space-y-4">
						<Button variant="outline" size="lg">
							Get In Touch
						</Button>
						<Button
							variant="outline"
							size="lg"
							icon={<Mail />}
							iconPosition="left">
							Email Us
						</Button>
						<Button variant="outline" size="md">
							Get In Touch
						</Button>
						<Button
							variant="outline"
							size="md"
							icon={<Phone />}
							iconPosition="left">
							Call Us
						</Button>
						<Button variant="outline" size="sm">
							Get In Touch
						</Button>
						<Button
							variant="outline"
							size="sm"
							icon={<Calendar />}
							iconPosition="left">
							Book Now
						</Button>
						<Button variant="outline" size="xs">
							Get In Touch
						</Button>
						<Button
							variant="outline"
							size="xs"
							icon={<Send />}
							iconPosition="left">
							Send
						</Button>
					</div>

					<div className="space-y-4">
						<Button variant="accent" size="lg">
							Get In Touch
						</Button>
						<Button variant="accent" size="lg" icon={<Send />}>
							Send Message
						</Button>
						<Button variant="accent" size="md">
							Get In Touch
						</Button>
						<Button variant="accent" size="md" icon={<Send />}>
							Send Message
						</Button>
						<Button variant="accent" size="sm">
							Get In Touch
						</Button>
						<Button variant="accent" size="sm" icon={<Send />}>
							Send Message
						</Button>
						<Button variant="accent" size="xs">
							Get In Touch
						</Button>
						<Button variant="accent" size="xs" icon={<Send />}>
							Send Message
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
