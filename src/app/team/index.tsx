import { Navigate, Route, Routes } from 'react-router-dom';
import { TeamMain } from './main';
import { TeamNew } from './new';

export const Team = () => {
    return (
        <Routes>
            <Route index element={<TeamMain />} />
            <Route path="new" element={<TeamNew />} />
            <Route path="*" element={<Navigate to="/c/5454-4353-534f-3ef6/dashboard" />} />
        </Routes>
    );
};
