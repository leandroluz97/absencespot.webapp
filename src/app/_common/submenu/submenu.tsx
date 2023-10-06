import { ComponentProps, ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

type RootProps = ComponentProps<'div'> & {
    children: ReactNode;
};
type ContentProps = ComponentProps<'div'> & {
    children: ReactNode;
};
type ListProps = ComponentProps<'div'> & {
    children: ReactNode;
};
type ItemProps = NavLinkProps & {
    children: ReactNode;
    className?: string;
    isActive: boolean;
};

export const SubmenuRoot = ({ children, ...props }: RootProps) => {
    return (
        <div
            className={twMerge(
                'submenu flex flex-col w-full md:max-w-[200px] text-sm overflow-x-auto',
                props.className
            )}
        >
            {children}
        </div>
    );
};

export const SubmenuContent = ({ children, ...props }: ContentProps) => {
    return <nav className={twMerge('flex-1 p-2 flex flex-col', props.className)}>{children}</nav>;
};

export const SubmenuList = ({ children, ...props }: ListProps) => {
    return (
        <ul
            className={twMerge(
                'h-full flex gap-2 md:gap-0 w-full md:flex-col flex-nowrap md:p-3',
                props.className
            )}
        >
            {children}
        </ul>
    );
};

export const SubmenuItem = ({ children, isActive, ...props }: ItemProps) => {
    return (
        <li className="">
            <NavLink
                {...props}
                className={() =>
                    twMerge(
                        'block w-full text-slate-500 font-semibold whitespace-nowrap p-2  hover:text-primary-900 transition-all ease-in-out duration-300',
                        isActive ? 'text-primary-900 ' : null,
                        props.className
                    )
                }
            >
                {children}
            </NavLink>
        </li>
    );
};
