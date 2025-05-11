import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const toggleVariants = cva('relative inline-flex items-center cursor-pointer', {
	variants: {
		size: {
			sm: 'h-5 w-9',
			md: 'h-6 w-11',
			lg: 'h-7 w-12',
		},
		color: {
			primary: '',
			green: '',
			beige: '',
		},
	},
	defaultVariants: {
		size: 'md',
		color: 'primary',
	},
} as const);

const getSliderStyles = (
	checked: boolean,
	color: NonNullable<VariantProps<typeof toggleVariants>['color']> | undefined
) => {
	const baseStyles = 'absolute rounded-full transition-all duration-200';
	const backgroundStyles = checked
		? color === 'green'
			? 'bg-[var(--color-green-60)]'
			: color === 'beige'
			? 'bg-[var(--color-brown-30)]'
			: 'bg-[var(--color-brown-70)]'
		: 'bg-[var(--color-gray-40)]';

	return `${baseStyles} ${backgroundStyles}`;
};

const getCircleStyles = (
	checked: boolean,
	size: NonNullable<VariantProps<typeof toggleVariants>['size']> | undefined
) => {
	const sizeClasses = {
		sm: checked ? 'left-5' : 'left-0.5',
		md: checked ? 'left-6' : 'left-0.5',
		lg: checked ? 'left-7' : 'left-0.5',
	} as const;

	const dimensions = {
		sm: 'h-4 w-4',
		md: 'h-5 w-5',
		lg: 'h-6 w-6',
	};

	return `absolute ${sizeClasses[size || 'md']} top-0.5 ${
		dimensions[size || 'md']
	} bg-white rounded-full transition-all duration-200 shadow-md`;
};

export interface ToggleButtonProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'color'>,
		VariantProps<typeof toggleVariants> {
	label?: React.ReactNode;
	sublabel?: string;
	showLabels?: boolean;
}

const ToggleButton = React.forwardRef<HTMLInputElement, ToggleButtonProps>(
	(
		{
			className,
			checked,
			defaultChecked,
			size = 'md',
			color = 'primary',
			label,
			sublabel,
			showLabels = false,
			...props
		},
		ref
	) => {
		const [isChecked, setIsChecked] = React.useState(defaultChecked || false);

		// Use controlled or uncontrolled state
		const toggleChecked = checked !== undefined ? checked : isChecked;

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			if (checked === undefined) {
				setIsChecked(e.target.checked);
			}
			props.onChange?.(e);
		};

		return (
			<label className={`flex items-start gap-3 ${showLabels ? 'mb-2' : ''}`}>
				<div className={toggleVariants({ size, color, className })}>
					<input
						type="checkbox"
						className="sr-only"
						checked={toggleChecked}
						defaultChecked={defaultChecked}
						onChange={handleChange}
						ref={ref}
						{...props}
					/>
					<div
						className={`${getSliderStyles(
							toggleChecked,
							color
						)} inset-0 h-full w-full`}></div>
					<div className={getCircleStyles(toggleChecked, size)}></div>
				</div>

				{showLabels && label && (
					<div className="flex flex-col">
						<span className="text-[var(--color-gray-90)] font-medium text-sm">
							{label}
						</span>
						{sublabel && (
							<span className="text-[var(--color-gray-60)] text-xs">
								{sublabel}
							</span>
						)}
					</div>
				)}
			</label>
		);
	}
);

ToggleButton.displayName = 'ToggleButton';

export default ToggleButton;
