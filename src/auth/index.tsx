import { Navigate, Route, Routes } from 'react-router-dom';
import { Register } from './register';
import { Login } from './login';
import { ForgotPassword } from './forgot/forgotPassword';
import { ResetPassword } from './reset';
import { Confirm } from './confirm';

export const Auth = () => {
    return (
        <Routes>
            <Route path="auth/register" element={<Register />} />
            <Route path="auth/login" element={<Login />} />
            <Route path="auth/forgot-password" element={<ForgotPassword />} />
            <Route path="auth/reset-password" element={<ResetPassword />} />
            <Route path="auth/confirm" element={<Confirm />} />
            <Route path="*" element={<Navigate to="/auth/register" />} />
        </Routes>
    );
};
