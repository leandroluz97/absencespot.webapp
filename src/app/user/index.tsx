import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './_common/layout';
import { Profile } from './profile';
import { Credential } from './credential';
import { Leave } from './leave';
import { Notification } from './notification';

export const User = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Profile />} />
                <Route path="leave/*" element={<Leave />} />
                <Route path="credential" element={<Credential />} />
                <Route path="notification/*" element={<Notification />} />
                <Route path="" element={<p>404</p>} />
                <Route path="*" element={<Navigate to="/c/5454-4353-534f-3ef6/dashboard" />} />
            </Route>
        </Routes>
    );
};
