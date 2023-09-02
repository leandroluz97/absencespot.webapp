import { ComponentProps, ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = ComponentProps<'svg'> & {
    Icon: ElementType;
    isActive: boolean;
};

export const MenuIcon = ({ Icon, isActive, ...props }: Props) => {
    return (
        <Icon
            size={20}
            {...props}
            className={twMerge(
                'text-slate-400 group-hover:text-primary-900 ',
                isActive ? 'text-primary-900' : '',
                props.className
            )}
        />
    );
};
