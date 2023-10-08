import { ReactNode } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

type Props = LinkProps & {
    children: ReactNode;
};

export const MenuRoot = ({ children, ...props }: Props) => {
    return (
        <NavLink
            {...props}
            className={({ isActive }) =>
                twMerge(
                    `group text-sm flex gap-2 font-semibold p-3 rounded  hover:bg-slate-100 hover:text-primary-900 transition-all ease-in duration-300  ${
                        isActive ? ' text-primary-900 bg-slate-100' : ''
                    }`,
                    props.className
                )
            }
        >
            {children}
        </NavLink>
    );
};
