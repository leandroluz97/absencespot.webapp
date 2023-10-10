import { Navigate, Route, Routes } from 'react-router-dom';
import { CredentialNew } from './new';

export const Credential = () => {
    return (
        <Routes>
            <Route index element={<CredentialNew />} />
            <Route path="new" element={<CredentialNew />} />
            <Route path="/:id/edit" element={<p>Edit</p>} />
            <Route path="" element={<p>404</p>} />
            <Route path="*" element={<Navigate to="/c/5454-4353-534f-3ef6/dashboard" />} />
        </Routes>
    );
};
