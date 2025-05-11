import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const iconButtonVariants = cva(
	'flex items-center justify-center rounded-full transition-all',
	{
		variants: {
			variant: {
				primary: 'bg-[var(--color-brown-70)] text-white',
				secondary: 'bg-[var(--color-brown-20)] text-[var(--color-brown-70)]',
				green: 'bg-[var(--color-green-60)] text-white',
				orange: 'bg-[var(--color-orange-50)] text-white',
				light:
					'bg-[var(--color-brown-10)] text-[var(--color-brown-70)] border border-[var(--color-brown-30)]',
				outline:
					'bg-transparent text-[var(--color-brown-70)] border border-[var(--color-brown-70)]',
			},
			size: {
				xs: 'h-8 w-8',
				sm: 'h-10 w-10',
				md: 'h-12 w-12',
				lg: 'h-16 w-16',
				xl: 'h-20 w-20',
			},
			disabled: {
				true: 'opacity-50 cursor-not-allowed',
				false: 'hover:opacity-90 active:scale-95 cursor-pointer',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'md',
			disabled: false,
		},
	}
);

export interface IconButtonProps
	extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'>,
		VariantProps<typeof iconButtonVariants> {
	icon: React.ReactNode;
	ariaLabel: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
	({ className, variant, size, disabled, icon, ariaLabel, ...props }, ref) => {
		// Adjust icon size based on button size
		const iconSizeMap = {
			xs: 16,
			sm: 18,
			md: 20,
			lg: 24,
			xl: 32,
		};

		// Get the appropriate icon size or default to md
		const iconSize = size ? iconSizeMap[size] : iconSizeMap.md;

		return (
			<button
				className={iconButtonVariants({ variant, size, disabled, className })}
				disabled={disabled}
				aria-label={ariaLabel}
				ref={ref}
				{...props}>
				{React.isValidElement(icon)
					? React.cloneElement(icon as React.ReactElement, {
							size: iconSize,
							...((icon as React.ReactElement).props || {}),
					  })
					: icon}
			</button>
		);
	}
);

IconButton.displayName = 'IconButton';

export default IconButton;
