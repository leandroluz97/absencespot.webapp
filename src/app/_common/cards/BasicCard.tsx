import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type PropsRoot = ComponentProps<'div'> & {
    children: ReactNode;
};
export const BasicCardRoot = ({ children, ...props }: PropsRoot) => {
    return (
        <div
            className={twMerge(
                'flex gap-2 p-2 rounded-lg hover:bg-slate-100 cursor-pointer transition-all ease-in-out duration-300 ',
                props.className
            )}
        >
            {children}
        </div>
    );
};

type PropsContent = ComponentProps<'div'> & {
    children: ReactNode;
};
export const BasicCardContent = ({ children, ...props }: PropsContent) => {
    return <div {...props}>{children}</div>;
};

type PropsItem = ComponentProps<'p'> & {
    children: ReactNode;
};
export const BasicCardItem = ({ children, ...props }: PropsItem) => {
    return <p {...props}>{children}</p>;
};
