import { ComponentProps, ReactNode } from 'react';

type Props = ComponentProps<'div'> & {
    children: ReactNode;
};

export const MenuContent = ({ children, ...props }: Props) => {
    return <div {...props}>{children}</div>;
};
