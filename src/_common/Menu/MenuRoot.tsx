import { ReactNode } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';

type Props = LinkProps & {
    children: ReactNode;
};

export const MenuRoot = ({ children, ...props }: Props) => {
    return (
        <NavLink
            className={({ isActive }) =>
                `group text-sm flex gap-2 font-medium p-3 rounded hover:font-medium hover:bg-slate-100 hover:text-primary-900 ${
                    isActive ? ' text-primary-900 bg-slate-100' : ''
                }`
            }
            {...props}
        >
            {children}
        </NavLink>
    );
};
