import { Navigate, Route, Routes } from 'react-router-dom';
import { TeamMain } from './main';

export const Team = () => {
    return (
        <Routes>
            <Route index element={<TeamMain />} />
            <Route path="" element={<p>404</p>} />
            <Route path="*" element={<Navigate to="/c/5454-4353-534f-3ef6/dashboard" />} />
        </Routes>
    );
};
