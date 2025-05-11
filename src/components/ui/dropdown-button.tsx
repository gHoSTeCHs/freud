import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';

const dropdownButtonVariants = cva(
	'flex items-center justify-between gap-2 rounded-full transition-all text-sm font-medium',
	{
		variants: {
			variant: {
				primary: 'bg-[var(--color-brown-70)] text-[var(--color-brown-10)]',
				secondary: 'bg-[var(--color-brown-20)] text-[var(--color-brown-70)]',
				green: 'bg-[var(--color-green-60)] text-white',
				light:
					'bg-[var(--color-brown-10)] text-[var(--color-brown-70)] border border-[var(--color-brown-30)]',
				outline:
					'bg-transparent text-[var(--color-brown-70)] border border-[var(--color-brown-70)]',
			},
			size: {
				sm: 'text-xs py-1.5 px-3',
				md: 'text-sm py-2 px-4',
				lg: 'text-base py-2.5 px-5',
			},
			fullWidth: {
				true: 'w-full',
				false: 'w-auto',
			},
			active: {
				true: 'ring-2 ring-[var(--color-brown-40)]',
				false: '',
			},
		},
		defaultVariants: {
			variant: 'light',
			size: 'md',
			fullWidth: false,
			active: false,
		},
	}
);

export interface DropdownButtonProps
	extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'>,
		VariantProps<typeof dropdownButtonVariants> {
	label: string;
	icon?: React.ReactNode;
	isOpen?: boolean;
	onOpenChange?: (isOpen: boolean) => void;
}

const DropdownButton = React.forwardRef<HTMLButtonElement, DropdownButtonProps>(
	(
		{
			className,
			variant,
			size,
			fullWidth,
			active,
			label,
			icon,
			isOpen,
			onOpenChange,
			...props
		},
		ref
	) => {
		const [isOpenInternal, setIsOpenInternal] = React.useState(false);

		const open = isOpen !== undefined ? isOpen : isOpenInternal;

		const handleToggle = () => {
			const newState = !open;
			if (isOpen === undefined) {
				setIsOpenInternal(newState);
			}
			if (onOpenChange) {
				onOpenChange(newState);
			}
		};

		return (
			<button
				className={dropdownButtonVariants({
					variant,
					size,
					fullWidth,
					active: active || open,
					className,
				})}
				onClick={handleToggle}
				ref={ref}
				{...props}>
				<span className="flex items-center gap-2">
					{icon && (
						<span className="flex items-center justify-center w-4 h-4">
							{icon}
						</span>
					)}
					<span>{label}</span>
				</span>
				<ChevronDown
					className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
				/>
			</button>
		);
	}
);

DropdownButton.displayName = 'DropdownButton';

export default DropdownButton;
