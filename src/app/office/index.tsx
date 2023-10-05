import { Navigate, Route, Routes } from 'react-router-dom';
import { OfficeMain } from './main';
import { OfficeNew } from './new';

export const Office = () => {
    return (
        <Routes>
            <Route index element={<OfficeMain />} />
            <Route path="new" element={<OfficeNew />} />
            <Route path="*" element={<Navigate to="/c/5454-4353-534f-3ef6/dashboard" />} />
        </Routes>
    );
};
