import Buttons2Section from './sections/Buttons2Section';
import ButtonSection from './sections/ButtonSection';
import { InputsSection } from './sections/InputsSection';

function App() {
	return (
		<div className="p-8 bg-[var(--color-brown-10)] font-sans space-y-6">
			<ButtonSection />
			<Buttons2Section />
			<InputsSection />
		</div>
	);
}

export default App;
