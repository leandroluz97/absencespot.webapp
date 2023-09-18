import { Navigate, Route, Routes } from 'react-router-dom';
import { RequestMain } from './main';
import { RequestNew } from './new';

export const Request = () => {
    return (
        <Routes>
            <Route index element={<RequestMain />} />
            <Route path="new" element={<RequestNew />} />
            <Route path="/:id/edit" element={<p>Edit</p>} />
            <Route path="" element={<p>404</p>} />
            <Route path="*" element={<Navigate to="/c/5454-4353-534f-3ef6/dashboard" />} />
        </Routes>
    );
};
