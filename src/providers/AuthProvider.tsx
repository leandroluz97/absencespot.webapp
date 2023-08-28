import { ReactNode } from 'react';

interface IPropsAuthProvider {
    children: ReactNode;
}

export const AuthProvider = ({ children }: IPropsAuthProvider) => {
    return <div>{children}</div>;
};
