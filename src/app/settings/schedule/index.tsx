import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { WorkScheduleMain } from './main';
import { WorkScheduleNew } from './new';

export const WorkSchedule = () => {
    return (
        <Routes>
            <Route index element={<WorkScheduleMain />} />
            <Route path="new" element={<WorkScheduleNew />} />
            <Route path="/:id/edit" element={<p>Edit</p>} />
            <Route path="" element={<p>404</p>} />
            <Route path="*" element={<Navigate to="/c/5454-4353-534f-3ef6/dashboard" />} />
        </Routes>
    );
};
