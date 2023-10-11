import { Navigate, Route, Routes } from 'react-router-dom';
import { Register } from './register';
import { Login } from './login';

export const Auth = () => {
    return (
        <Routes>
            <Route path="auth/register" element={<Register />} />
            <Route path="auth/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/auth/register" />} />
        </Routes>
    );
};
