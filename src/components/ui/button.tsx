import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap font-extrabold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
	{
		variants: {
			variant: {
				primary: 'bg-[var(--color-brown-70)] text-[var(--color-brown-10)]',
				secondary: 'bg-[var(--color-brown-20)] text-[var(--color-brown-80)]',
				light:
					'bg-[var(--color-brown-10)] text-[var(--color-brown-70)] border border-[var(--color-brown-20)]',
				accent: 'bg-[var(--color-orange-50)] text-white',
				outline:
					'bg-transparent text-[var(--color-brown-70)] border border-[var(--color-brown-70)]',
				outlineLight:
					'bg-transparent text-[var(--color-brown-30)] border border-[var(--color-brown-30)]',
			},
			size: {
				xs: 'text-xs px-3 py-1.5',
				sm: 'text-xs px-4 py-2',
				md: 'text-sm px-5 py-2.5',
				lg: 'text-base px-6 py-3',
				xl: 'text-lg px-8 py-4',
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
			iconPosition: {
				left: 'flex-row-reverse',
				right: '',
				none: '',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'md',
			radius: 'pill',
			fullWidth: false,
			iconPosition: 'none',
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	children: React.ReactNode;
	icon?: React.ReactNode;
	iconPosition?: 'left' | 'right' | 'none';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			variant,
			size,
			radius,
			fullWidth,
			icon,
			iconPosition = icon ? 'right' : 'none',
			className,
			...props
		},
		ref
	) => {
		return (
			<button
				className={buttonVariants({
					variant,
					size,
					radius,
					fullWidth,
					iconPosition,
					className,
				})}
				ref={ref}
				{...props}>
				{children}
				{icon && iconPosition !== 'none' && (
					<span className={iconPosition === 'left' ? 'mr-1' : 'ml-1'}>
						{icon}
					</span>
				)}
			</button>
		);
	}
);

Button.displayName = 'Button';

export default Button;
