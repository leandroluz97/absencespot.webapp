import { ComponentProps, ReactNode } from 'react';

type Props = ComponentProps<'div'> & {
    children: ReactNode;
};

export const MenuInfo = ({ children, ...props }: Props) => {
    return (
        <div className="ml-auto" {...props}>
            {children}
        </div>
    );
};
