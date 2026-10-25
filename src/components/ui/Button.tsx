import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth, children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      primary:
        'bg-[#292925] text-[#FCFAF6] hover:bg-[#3d3d37] focus-visible:ring-[#292925]',
      secondary:
        'bg-[#626A43] text-white hover:bg-[#343D2D] focus-visible:ring-[#626A43]',
      outline:
        'border border-[#292925] text-[#292925] bg-transparent hover:bg-[#292925] hover:text-[#FCFAF6] focus-visible:ring-[#292925]',
      ghost:
        'text-[#292925] bg-transparent hover:bg-[#F6F3EC] focus-visible:ring-[#292925]',
      link:
        'text-[#292925] underline-offset-4 hover:underline bg-transparent p-0 h-auto',
    };

    const sizes = {
      sm: 'h-9 px-4 text-xs tracking-widest uppercase',
      md: 'h-11 px-6 text-xs tracking-widest uppercase',
      lg: 'h-13 px-8 text-sm tracking-widest uppercase',
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
