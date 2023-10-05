import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './_common/layout';
import { General } from './general';

export const Settings = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<General />} />
                <Route path="user" element={<p>test</p>} />
                <Route path="general" element={<p>test</p>} />
                <Route path="general" element={<p>test</p>} />
                <Route path="/:id/edit" element={<p>Edit</p>} />
                <Route path="" element={<p>404</p>} />
                <Route path="*" element={<Navigate to="/c/5454-4353-534f-3ef6/dashboard" />} />
            </Route>
        </Routes>
    );
};
