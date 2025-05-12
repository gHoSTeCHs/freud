import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const radioButtonVariants = cva(
	'flex items-center justify-center gap-2 rounded-full transition-all cursor-pointer',
	{
		variants: {
			variant: {
				default:
					'border border-[var(--color-brown-30)] text-[var(--color-brown-70)]',
				selected: 'bg-[var(--color-green-60)] text-white border-none',
			},
			size: {
				sm: 'text-xs py-1.5 px-3 min-h-8',
				md: 'text-sm py-2 px-4 min-h-10',
				lg: 'text-base py-2.5 px-5 min-h-12',
			},
			shape: {
				pill: 'rounded-full',
				rounded: 'rounded-lg',
			},
			hasIcon: {
				true: '',
			},
		},
		compoundVariants: [
			{
				hasIcon: true,
				class: 'pl-3 pr-4',
			},
		],
		defaultVariants: {
			variant: 'default',
			size: 'md',
			shape: 'pill',
		},
	}
);

export interface RadioButtonProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
		VariantProps<typeof radioButtonVariants> {
	label: string;
	icon?: React.ReactNode;
	name: string;
	value: string;
	selectedValue?: string;
	onChange?: (value: string) => void;
}

const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
	(
		{
			className,
			variant: variantProp,
			size,
			shape,
			label,
			icon,
			name,
			value,
			selectedValue,
			onChange,
			...props
		},
		ref
	) => {
		// Determine if this radio button is selected
		const isSelected = selectedValue === value;

		// Set variant based on selection state
		const variant = isSelected ? 'selected' : 'default';

		// Handle click
		const handleChange = () => {
			if (onChange) {
				onChange(value);
			}
		};

		return (
			<label
				className={radioButtonVariants({
					variant,
					size,
					shape,
					hasIcon: !!icon,
					className,
				})}>
				<input
					type="radio"
					className="sr-only"
					name={name}
					value={value}
					checked={isSelected}
					onChange={handleChange}
					ref={ref}
					{...props}
				/>

				{icon && (
					<span className="flex items-center justify-center">{icon}</span>
				)}

				<span>{label}</span>
			</label>
		);
	}
);

RadioButton.displayName = 'RadioButton';

export default RadioButton;
