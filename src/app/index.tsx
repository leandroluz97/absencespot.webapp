import { MainLayout } from '@/_common/layout/MainLayout';
import { Route, Routes } from 'react-router-dom';

export const Application = () => {
    return (
        <Routes>
            <Route path="/c/:id" element={<MainLayout />}>
                <Route path="dashboard" element={<p>Dashboard</p>} />
                <Route path="" element={<p>404</p>} />
            </Route>
        </Routes>
    );
};
