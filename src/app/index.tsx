import { MainLayout } from '@/_common/layout/MainLayout';
import { Navigate, Route, Routes } from 'react-router-dom';

export const Application = () => {
    console.log('RESSS');

    return (
        <Routes>
            <Route path="/c/:id" element={<MainLayout />}>
                <Route path="dashboard" element={<p className="text-red-500">Dashboard</p>} />
                <Route path="" element={<p>404</p>} />
            </Route>
            <Route path="*" element={<Navigate to="/c/5454-4353-534f-3ef6/dashboard" />} />
        </Routes>
    );
};
