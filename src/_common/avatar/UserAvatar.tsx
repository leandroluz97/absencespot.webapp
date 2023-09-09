import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type PropsRoot = ComponentProps<'div'> & {
    children: ReactNode;
};
export const AvatarRoot = ({ children, ...props }: PropsRoot) => {
    return (
        <div
            className={twMerge(
                'w-10 h-10 bg-slate-200 rounded-full flex justify-center items-center ',
                props.className
            )}
        >
            {children}
        </div>
    );
};

type PropsInitals = ComponentProps<'div'> & {
    children: ReactNode;
};
export const AvatarInitials = ({ children, ...props }: PropsInitals) => {
    return (
        <p className={twMerge('text-slate-600 leading-none font-bold ', props.className)}>
            {children}
        </p>
    );
};

export const AvatarPicture = ({ ...props }: ComponentProps<'img'>) => {
    return <img {...props} className={twMerge('rounded-full', props.className)} />;
};
