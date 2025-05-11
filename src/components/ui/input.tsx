import React, { useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';

const inputVariants = cva(
	'w-full transition-all outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive font-medium placeholder:text-[var(--color-gray-50)]',
	{
		variants: {
			variant: {
				default:
					'bg-[var(--color-brown-10)] text-[var(--color-gray-100)] border border-[var(--color-gray-30)]',
				filled:
					'bg-[var(--color-brown-20)] text-[var(--color-gray-100)] border border-[var(--color-brown-20)]',
				outline:
					'bg-transparent text-[var(--color-gray-100)] border border-[var(--color-gray-30)]',
				outlineAccent:
					'bg-transparent text-[var(--color-gray-100)] border border-[var(--color-orange-40)]',
			},
			size: {
				sm: 'text-xs px-3 py-1.5',
				md: 'text-sm px-4 py-2.5',
				lg: 'text-base px-6 py-3',
			},
			radius: {
				none: 'rounded-none',
				sm: 'rounded-sm',
				md: 'rounded-md',
				lg: 'rounded-lg',
				pill: 'rounded-full',
			},
			fullWidth: {
				true: 'w-full',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'md',
			radius: 'pill',
			fullWidth: true,
		},
	}
);

export interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
		VariantProps<typeof inputVariants> {
	label?: string;
	leftElement?: React.ReactNode;
	rightElement?: React.ReactNode;
	error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			variant,
			size,
			radius,
			fullWidth,
			label,
			leftElement,
			rightElement,
			error,
			...props
		},
		ref
	) => {
		return (
			<div className="flex flex-col gap-1 w-full">
				{label && (
					<label className="text-sm font-medium text-[var(--color-gray-80)]">
						{label}
					</label>
				)}
				<div className="relative flex items-center w-full">
					{leftElement && (
						<div className="absolute left-3 flex items-center pointer-events-none">
							{leftElement}
						</div>
					)}
					<input
						className={inputVariants({
							variant,
							size,
							radius,
							fullWidth,
							className: `${leftElement ? 'pl-10' : ''} ${
								rightElement ? 'pr-10' : ''
							} ${className}`,
						})}
						ref={ref}
						aria-invalid={!!error}
						{...props}
					/>
					{rightElement && (
						<div className="absolute right-3 flex items-center">
							{rightElement}
						</div>
					)}
				</div>
				{error && (
					<span className="text-xs text-[var(--color-destructive)]">
						{error}
					</span>
				)}
			</div>
		);
	}
);

Input.displayName = 'Input';

interface CountryOption {
	label: string;
	value: string;
	flag: string;
	dialCode: string;
}

const countries: CountryOption[] = [
	{ label: 'United States', value: 'us', flag: '🇺🇸', dialCode: '+1' },
	{ label: 'United Kingdom', value: 'gb', flag: '🇬🇧', dialCode: '+44' },
	{ label: 'Canada', value: 'ca', flag: '🇨🇦', dialCode: '+1' },
	{ label: 'Australia', value: 'au', flag: '🇦🇺', dialCode: '+61' },
	{ label: 'Germany', value: 'de', flag: '🇩🇪', dialCode: '+49' },
	{ label: 'France', value: 'fr', flag: '🇫🇷', dialCode: '+33' },
	{ label: 'Spain', value: 'es', flag: '🇪🇸', dialCode: '+34' },
	{ label: 'Mexico', value: 'mx', flag: '🇲🇽', dialCode: '+52' },
	{ label: 'Brazil', value: 'br', flag: '🇧🇷', dialCode: '+55' },
	{ label: 'Japan', value: 'jp', flag: '🇯🇵', dialCode: '+81' },
];

export interface PhoneInputProps extends Omit<InputProps, 'leftElement'> {
	countryCode?: string;
	onCountryChange?: (country: CountryOption) => void;
}

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
	(
		{
			className,
			variant = 'default',
			size = 'md',
			radius = 'pill',
			fullWidth = true,
			label = 'Phone Number',
			countryCode = 'us',
			onCountryChange,
			...props
		},
		ref
	) => {
		const [selectedCountry, setSelectedCountry] = useState<CountryOption>(
			countries.find((country) => country.value === countryCode) || countries[0]
		);
		const [showDropdown, setShowDropdown] = useState(false);

		const handleCountrySelect = (country: CountryOption) => {
			setSelectedCountry(country);
			setShowDropdown(false);
			if (onCountryChange) {
				onCountryChange(country);
			}
		};

		return (
			<div className="flex flex-col gap-1 w-full">
				{label && (
					<label className="text-sm font-medium text-[var(--color-gray-80)]">
						{label}
					</label>
				)}
				<div className="relative flex items-center w-full">
					<div className="absolute left-3 flex items-center z-10">
						<div className="relative">
							<button
								type="button"
								className="flex items-center gap-1 text-sm"
								onClick={() => setShowDropdown(!showDropdown)}>
								<span>{selectedCountry.flag}</span>
								<ChevronDown size={16} />
							</button>
							{showDropdown && (
								<div className="absolute top-full left-0 mt-1 bg-white border border-[var(--color-gray-30)] rounded-lg shadow-lg w-64 max-h-64 overflow-y-auto z-20">
									<div className="p-2 grid grid-cols-4 gap-2">
										{countries.map((country) => (
											<button
												key={country.value}
												type="button"
												className="flex items-center justify-center p-2 hover:bg-[var(--color-brown-20)] rounded-md transition-colors"
												onClick={() => handleCountrySelect(country)}>
												<span className="text-xl">{country.flag}</span>
											</button>
										))}
									</div>
								</div>
							)}
						</div>
					</div>
					<input
						className={inputVariants({
							variant,
							size,
							radius,
							fullWidth,
							className: `pl-12 ${className}`,
						})}
						ref={ref}
						type="tel"
						placeholder={`${selectedCountry.dialCode} (234-567-89)`}
						{...props}
					/>
					{/* Clear button on the right */}
					<div className="absolute right-3 flex items-center">
						<button
							type="button"
							className="p-1 rounded-full hover:bg-[var(--color-brown-20)] transition-colors"
							title="Clear"
							onClick={() => {
								const inputEl = ref as React.RefObject<HTMLInputElement>;
								if (inputEl && inputEl.current) {
									inputEl.current.value = '';
									inputEl.current.focus();
								}
							}}>
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM11.5 10.1L10.1 11.5L8 9.4L5.9 11.5L4.5 10.1L6.6 8L4.5 5.9L5.9 4.5L8 6.6L10.1 4.5L11.5 5.9L9.4 8L11.5 10.1Z"
									fill="#ACACA5"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		);
	}
);

PhoneInput.displayName = 'PhoneInput';

export interface SliderProps {
	min?: number;
	max?: number;
	step?: number;
	value?: number;
	onChange?: (value: number) => void;
	label?: string;
	showPercentage?: boolean;
}

export const Slider = ({
	min = 0,
	max = 100,
	step = 1,
	value = 50,
	onChange,
	label,
	showPercentage = true,
}: SliderProps) => {
	const [currentValue, setCurrentValue] = useState(value);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value);
		setCurrentValue(newValue);
		if (onChange) {
			onChange(newValue);
		}
	};

	const percentage = ((currentValue - min) / (max - min)) * 100;

	return (
		<div className="flex flex-col gap-2 w-full">
			{label && (
				<div className="flex justify-between items-center">
					<label className="text-sm font-medium text-[var(--color-gray-80)]">
						{label}
					</label>
					{showPercentage && (
						<span className="text-sm text-[var(--color-gray-60)]">
							{`${percentage.toFixed(0)}%`}
						</span>
					)}
				</div>
			)}
			<div className="relative w-full h-6 flex items-center">
				<input
					type="range"
					min={min}
					max={max}
					step={step}
					value={currentValue}
					onChange={handleChange}
					className="absolute w-full h-2 appearance-none bg-[var(--color-gray-30)] rounded-full outline-none"
					style={{
						background: `linear-gradient(to right, var(--color-green-50) 0%, var(--color-green-50) ${percentage}%, var(--color-gray-30) ${percentage}%, var(--color-gray-30) 100%)`,
					}}
				/>
				<div
					className="absolute w-6 h-6 bg-[var(--color-green-50)] rounded-full cursor-pointer"
					style={{
						left: `calc(${percentage}% - 12px)`,
					}}
				/>
			</div>
		</div>
	);
};

export interface RangeSliderProps {
	min?: number;
	max?: number;
	step?: number;
	value?: [number, number];
	onChange?: (value: [number, number]) => void;
	label?: string;
}

export const RangeSlider = ({
	min = 0,
	max = 100,
	step = 1,
	value = [25, 75],
	onChange,
	label,
}: RangeSliderProps) => {
	const [currentValue, setCurrentValue] = useState<[number, number]>(value);

	const handleChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = [
			Math.min(Number(e.target.value), currentValue[1] - step),
			currentValue[1],
		];
		setCurrentValue(newValue as [number, number]);
		if (onChange) {
			onChange(newValue as [number, number]);
		}
	};

	const handleChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = [
			currentValue[0],
			Math.max(Number(e.target.value), currentValue[0] + step),
		];
		setCurrentValue(newValue as [number, number]);
		if (onChange) {
			onChange(newValue as [number, number]);
		}
	};

	const minPercentage = ((currentValue[0] - min) / (max - min)) * 100;
	const maxPercentage = ((currentValue[1] - min) / (max - min)) * 100;

	return (
		<div className="flex flex-col gap-2 w-full">
			{label && (
				<div className="flex justify-between items-center">
					<label className="text-sm font-medium text-[var(--color-gray-80)]">
						{label}
					</label>
					<div className="flex gap-2 text-sm text-[var(--color-gray-60)]">
						<span>{currentValue[0]}</span>
						<span>-</span>
						<span>{currentValue[1]}</span>
					</div>
				</div>
			)}
			<div className="relative w-full h-6">
				<div
					className="absolute top-1/2 h-2 rounded-full bg-[var(--color-green-50)]"
					style={{
						left: `${minPercentage}%`,
						right: `${100 - maxPercentage}%`,
						transform: 'translateY(-50%)',
					}}
				/>
				<div
					className="absolute w-full h-2 top-1/2 transform -translate-y-1/2 bg-[var(--color-gray-30)] rounded-full"
					style={{
						background: `linear-gradient(to right, 
              var(--color-gray-30) 0%, 
              var(--color-gray-30) ${minPercentage}%, 
              var(--color-green-50) ${minPercentage}%, 
              var(--color-green-50) ${maxPercentage}%, 
              var(--color-gray-30) ${maxPercentage}%, 
              var(--color-gray-30) 100%)`,
					}}
				/>
				<input
					type="range"
					min={min}
					max={max}
					step={step}
					value={currentValue[0]}
					onChange={handleChangeMin}
					className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none"
				/>
				<input
					type="range"
					min={min}
					max={max}
					step={step}
					value={currentValue[1]}
					onChange={handleChangeMax}
					className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none"
				/>
				<div
					className="absolute w-6 h-6 bg-[var(--color-green-50)] rounded-full cursor-pointer top-1/2 transform -translate-y-1/2 z-10"
					style={{
						left: `calc(${minPercentage}% - 12px)`,
					}}
				/>
				<div
					className="absolute w-6 h-6 bg-[var(--color-green-50)] rounded-full cursor-pointer top-1/2 transform -translate-y-1/2 z-10"
					style={{
						left: `calc(${maxPercentage}% - 12px)`,
					}}
				/>
			</div>
		</div>
	);
};

export interface LLMScaleProps {
	min?: number;
	max?: number;
	step?: number;
	value?: number;
	onChange?: (value: number) => void;
	label?: string;
}

export const LLMScale = ({
	min = 1,
	max = 5,
	step = 0.1,
	value = 3,
	onChange,
	label = 'Freud LLM Scale',
}: LLMScaleProps) => {
	const [currentValue, setCurrentValue] = useState(value);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value);
		setCurrentValue(newValue);
		if (onChange) {
			onChange(newValue);
		}
	};

	const percentage = ((currentValue - min) / (max - min)) * 100;

	return (
		<div className="flex flex-col gap-2 w-full">
			{label && (
				<label className="text-sm font-medium text-[var(--color-gray-80)]">
					{label}
				</label>
			)}
			<div className="relative w-full h-6 flex items-center">
				<input
					type="range"
					min={min}
					max={max}
					step={step}
					value={currentValue}
					onChange={handleChange}
					className="absolute w-full h-2 appearance-none bg-[var(--color-gray-30)] rounded-full outline-none"
					style={{
						background: `linear-gradient(to right, var(--color-green-50) 0%, var(--color-green-50) ${percentage}%, var(--color-gray-30) ${percentage}%, var(--color-gray-30) 100%)`,
					}}
				/>
				<div
					className="absolute w-6 h-6 bg-[var(--color-green-50)] rounded-full cursor-pointer"
					style={{
						left: `calc(${percentage}% - 12px)`,
					}}
				/>
			</div>
			<div className="flex justify-between mt-1">
				<span className="text-sm text-[var(--color-gray-60)]">{min}</span>
				<span className="text-sm text-[var(--color-gray-60)]">
					{Math.round((min + max) / 2)}
				</span>
				<span className="text-sm text-[var(--color-gray-60)]">{max}</span>
			</div>
		</div>
	);
};

export interface MegaInputProps {
	value?: string | number;
	onChange?: (value: string) => void;
	variant?: 'default' | 'outlined' | 'filled';
	size?: 'sm' | 'md' | 'lg';
	active?: boolean;
}

export const MegaInput = ({
	value = '',
	onChange,
	variant = 'default',
	size = 'md',
	active = false,
}: MegaInputProps) => {
	const [isFocused, setIsFocused] = useState(active);

	const getSize = () => {
		switch (size) {
			case 'sm':
				return 'w-16 h-16';
			case 'md':
				return 'w-24 h-24';
			case 'lg':
				return 'w-32 h-32';
			default:
				return 'w-24 h-24';
		}
	};

	const getVariant = () => {
		if (isFocused) {
			return 'bg-[var(--color-green-50)] text-white border-2 border-[var(--color-green-50)]';
		}

		switch (variant) {
			case 'outlined':
				return 'bg-transparent text-[var(--color-gray-100)] border border-[var(--color-gray-30)]';
			case 'filled':
				return 'bg-[var(--color-gray-20)] text-[var(--color-gray-100)] border border-[var(--color-gray-20)]';
			default:
				return 'bg-white text-[var(--color-gray-100)] border border-[var(--color-gray-30)]';
		}
	};

	return (
		<div className={`${getSize()} relative`}>
			<input
				type="text"
				value={value}
				onChange={(e) => onChange?.(e.target.value)}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				className={`${getSize()} ${getVariant()} rounded-full flex items-center justify-center text-center text-4xl font-bold outline-none transition-all`}
			/>
		</div>
	);
};
