import { ComponentProps, ElementType, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type PropsRoot = ComponentProps<'div'> & {
    children: ReactNode;
};
type PropsTitle = ComponentProps<'h5'> & {
    children: ReactNode;
};
type PropsDescription = ComponentProps<'p'> & {
    children: ReactNode;
};
type PropsIcon = ComponentProps<'p'> & {
    Icon: ElementType;
    isActive: boolean;
};

export const BasicMetricRoot = ({ children, ...props }: PropsRoot) => {
    return (
        <div
            className={twMerge(
                'text-center p-2 md:p-2 flex flex-col items-center justify-center',
                props.className
            )}
        >
            {children}
        </div>
    );
};

export const BasicMetricContent = ({ children, ...props }: PropsRoot) => {
    return <div {...props}>{children}</div>;
};

export const BasicMetricIcon = ({ Icon, isActive, ...props }: PropsIcon) => {
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

export const BasicMetricTitle = ({ children, ...props }: PropsTitle) => {
    return (
        <h5 className={twMerge('text-slate-700 font-extrabold text-xl', props.className)}>
            {children}
        </h5>
    );
};

export const BasicMetricDescription = ({ children, ...props }: PropsDescription) => {
    return <p className={twMerge('text-slate-400 text-sm', props.className)}>{children}</p>;
};
