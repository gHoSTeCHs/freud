import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const swipeButtonVariants = cva(
	'flex items-center gap-2 py-3 px-4 rounded-full font-medium text-sm transition-all',
	{
		variants: {
			variant: {
				primary: 'bg-[var(--color-brown-70)] text-white',
				secondary: 'bg-[var(--color-brown-20)] text-[var(--color-brown-80)]',
				green: 'bg-[var(--color-green-60)] text-white',
			},
			size: {
				sm: 'text-xs py-2 px-3',
				md: 'text-sm py-3 px-4',
				lg: 'text-base py-4 px-5',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'md',
		},
	}
);

export interface SwipeActionButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof swipeButtonVariants> {
	icon?: React.ReactNode;
	text: string;
}

const SwipeActionButton = React.forwardRef<
	HTMLButtonElement,
	SwipeActionButtonProps
>(({ className, variant, size, icon, text, ...props }, ref) => {
	return (
		<button
			className={swipeButtonVariants({ variant, size, className })}
			ref={ref}
			{...props}>
			{icon && (
				<span className="flex items-center justify-center w-6 h-6">{icon}</span>
			)}
			<span>{text}</span>
		</button>
	);
});

SwipeActionButton.displayName = 'SwipeActionButton';

export default SwipeActionButton;
