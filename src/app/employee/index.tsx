import React from 'react';
import { EmployeeMain } from './main';
import { Navigate, Route, Routes } from 'react-router-dom';

export const Employee = () => {
    return (
        <Routes>
            <Route index element={<EmployeeMain />} />
            <Route path="" element={<p>404</p>} />
            <Route path="*" element={<Navigate to="/c/5454-4353-534f-3ef6/dashboard" />} />
        </Routes>
    );
};
