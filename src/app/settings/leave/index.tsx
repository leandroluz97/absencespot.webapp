import { Navigate, Route, Routes } from 'react-router-dom';
import { LeaveTypeMain } from './main';
import { LeaveTypeNew } from './new';

export const LeaveTypes = () => {
    return (
        <Routes>
            <Route index element={<LeaveTypeMain />} />
            <Route path="new" element={<LeaveTypeNew />} />
            <Route path="/:id/edit" element={<p>Edit</p>} />
            <Route path="" element={<p>404</p>} />
            <Route path="*" element={<Navigate to="/c/5454-4353-534f-3ef6/dashboard" />} />
        </Routes>
    );
};
