import { Navigate, Route, Routes } from 'react-router-dom';
import { ProfileMain } from './main';
import { ProfileNew } from './new';

export const Profile = () => {
    return (
        <Routes>
            <Route index element={<ProfileMain />} />
            <Route path="new" element={<ProfileNew />} />
            <Route path="" element={<p>404</p>} />
            <Route path="*" element={<Navigate to="/c/5454-4353-534f-3ef6/dashboard" />} />
        </Routes>
    );
};
