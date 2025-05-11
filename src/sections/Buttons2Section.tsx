import { ChevronRight, Settings } from 'lucide-react';
import SwipeActionButton from '../components/ui/swipe-action-button';
import ToggleButton from '../components/ui/toggle-button';
import DatePickerPill from '../components/ui/date-picker-pill';
import { useState } from 'react';
import RadioButton from '../components/ui/radio-button';

const Buttons2Section = () => {
	const [selectedDate, setSelectedDate] = useState('25');
	const [selectedPatient, setSelectedPatient] = useState('patient1');
	// const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	return (
		<div>
			<section className="mb-12">
				<h2 className="text-lg font-semibold text-[var(--color-brown-70)] mb-6 flex items-center">
					<span className="h-2 w-2 rounded-full bg-[var(--color-green-60)] mr-2"></span>
					Button Toggle
				</h2>

				<div className="border border-dashed border-[var(--color-gray-30)] p-6 rounded-lg">
					<div className="grid grid-cols-2 gap-8">
						<div className="space-y-4">
							<ToggleButton />
							<ToggleButton defaultChecked />
							<ToggleButton color="green" />
							<ToggleButton color="green" defaultChecked />
						</div>

						<div className="space-y-4">
							<ToggleButton showLabels label="AI Autosuggest" />
							<ToggleButton showLabels label="AI Autosuggest" defaultChecked />
							<ToggleButton
								showLabels
								label="AI Autosuggest"
								sublabel="Mental Health Detection"
								color="green"
							/>
							<ToggleButton
								showLabels
								label="AI Autosuggest"
								sublabel="Mental Health Detection"
								color="green"
								defaultChecked
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="mb-12">
				<h2 className="text-lg font-semibold text-[var(--color-brown-70)] mb-6 flex items-center">
					<span className="h-2 w-2 rounded-full bg-[var(--color-green-60)] mr-2"></span>
					Button Swipe Action
				</h2>

				<div className="border border-dashed border-[var(--color-gray-30)] p-6 rounded-lg">
					<div className="flex flex-col gap-4">
						<SwipeActionButton
							variant="primary"
							icon={<ChevronRight />}
							text="Swipe for AI suggestions"
						/>

						<SwipeActionButton
							variant="secondary"
							icon={<ChevronRight />}
							text="Swipe for AI suggestions"
						/>

						<SwipeActionButton
							variant="green"
							icon={<ChevronRight />}
							text="Swipe for AI suggestions"
						/>
					</div>
				</div>
			</section>

			<section className="mb-12">
				<h2 className="text-lg font-semibold text-[var(--color-brown-70)] mb-6 flex items-center">
					<span className="h-2 w-2 rounded-full bg-[var(--color-green-60)] mr-2"></span>
					Button Date Picker Pill
				</h2>

				<div className="border border-dashed border-[var(--color-gray-30)] p-6 rounded-lg">
					<div className="grid grid-cols-3 gap-4">
						<DatePickerPill day="Mon" date="25" />
						<DatePickerPill day="Mon" date="25" selected />
						<DatePickerPill day="Mon" date="25" disabled />

						<DatePickerPill day="Mon" date="12" />
						<DatePickerPill day="Mon" date="12" selected />
						<DatePickerPill day="Mon" date="12" disabled />
					</div>

					<div className="mt-6 grid grid-cols-7 gap-2">
						{['25', '26', '27', '28', '29', '30', '31'].map((date) => (
							<DatePickerPill
								key={date}
								day="Mon"
								date={date}
								selected={selectedDate === date}
								onDateSelect={(_, date) => setSelectedDate(date.toString())}
							/>
						))}
					</div>
				</div>
			</section>

			<section className="mb-12">
				<h2 className="text-lg font-semibold text-[var(--color-brown-70)] mb-6 flex items-center">
					<span className="h-2 w-2 rounded-full bg-[var(--color-green-60)] mr-2"></span>
					Button Radio
				</h2>

				<div className="border border-dashed border-[var(--color-gray-30)] p-6 rounded-lg">
					<div className="grid grid-cols-2 gap-6">
						<div className="space-y-3">
							<RadioButton
								name="patient"
								value="patient1"
								label="Patient"
								selectedValue={selectedPatient}
								onChange={setSelectedPatient}
							/>
							<RadioButton
								name="patient"
								value="patient2"
								label="Patient"
								selectedValue={selectedPatient}
								onChange={setSelectedPatient}
							/>
							<RadioButton
								name="patient"
								value="patient3"
								label="Patient"
								selectedValue={selectedPatient}
								onChange={setSelectedPatient}
							/>
						</div>

						<div className="space-y-3">
							<RadioButton
								name="patient"
								value="patient4"
								label="Patient"
								icon={<Settings size={16} />}
								selectedValue={selectedPatient}
								onChange={setSelectedPatient}
							/>
							<RadioButton
								name="patient"
								value="patient5"
								label="Patient"
								icon={<Settings size={16} />}
								selectedValue={selectedPatient}
								onChange={setSelectedPatient}
							/>
							<RadioButton
								name="patient"
								value="patient6"
								label="Patient"
								icon={<Settings size={16} />}
								selectedValue={selectedPatient}
								onChange={setSelectedPatient}
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Buttons2Section;
