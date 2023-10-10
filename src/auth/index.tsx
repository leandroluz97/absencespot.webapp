import { Navigate, Route, Routes } from 'react-router-dom';
import { Register } from './register';

export const Auth = () => {
    return (
        <Routes>
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/login" element={<p>login</p>} />
            <Route path="" element={<Navigate to="/auth/register" />} />
        </Routes>
    );
};
