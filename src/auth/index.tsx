import { Navigate, Route, Routes } from 'react-router-dom';

export const Auth = () => {
    return (
        <Routes>
            <Route path="/auth/register" element={<p>register</p>} />
            <Route path="" element={<Navigate to="/auth/register" />} />
        </Routes>
    );
};
