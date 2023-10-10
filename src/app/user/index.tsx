import { Route, Routes } from 'react-router-dom';
import { Layout } from './_common/layout';
import { Profile } from './profile';
import { Credential } from './credential';
import { Notification } from './notification';

export const User = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="credentials" element={<Credential />} />
                <Route path="notifications" element={<Notification />} />
                <Route path="*" element={<Profile />} />
            </Route>
        </Routes>
    );
};
