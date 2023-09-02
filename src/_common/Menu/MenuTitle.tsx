import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = ComponentProps<'svg'> & {
    isActive: boolean;
    children: ReactNode;
};

export const MenuTitle = ({ children, isActive, ...props }: Props) => {
    return (
        <span
            className={twMerge(
                'text-slate-500 group-hover:text-primary-900 ',
                isActive ? 'text-primary-900' : '',
                props.className
            )}
        >
            {children}
        </span>
    );
};
