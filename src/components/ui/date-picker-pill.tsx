import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const datePillVariants = cva(
	'flex flex-col items-center justify-center p-2 rounded-full transition-all cursor-pointer',
	{
		variants: {
			variant: {
				default: 'hover:bg-[var(--color-brown-20)]',
				selected: 'bg-[var(--color-green-60)] text-white',
				disabled: 'opacity-50 cursor-not-allowed',
			},
			size: {
				sm: 'h-14 w-14',
				md: 'h-16 w-16',
				lg: 'h-20 w-20',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'md',
		},
	}
);

export interface DatePickerPillProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'>,
		VariantProps<typeof datePillVariants> {
	day: string;
	date: string | number;
	selected?: boolean;
	disabled?: boolean;
	onDateSelect?: (day: string, date: string | number) => void;
}

const DatePickerPill = React.forwardRef<HTMLDivElement, DatePickerPillProps>(
	(
		{
			className,
			variant: variantProp,
			size,
			day,
			date,
			selected,
			disabled,
			onDateSelect,
			...props
		},
		ref
	) => {
		// Determine variant based on props
		const variant = disabled ? 'disabled' : selected ? 'selected' : variantProp;

		const handleClick = () => {
			if (!disabled && onDateSelect) {
				onDateSelect(day, date);
			}
		};

		return (
			<div
				className={datePillVariants({ variant, size, className })}
				ref={ref}
				onClick={handleClick}
				{...props}>
				<span className="text-xs font-medium">{day}</span>
				<span className="text-lg font-bold">{date}</span>
				{selected && (
					<span className="h-1 w-1 rounded-full bg-white mt-1"></span>
				)}
			</div>
		);
	}
);

DatePickerPill.displayName = 'DatePickerPill';

export default DatePickerPill;
