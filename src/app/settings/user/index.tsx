import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserMain } from './main';
import { UserNew } from './new';

export const User = () => {
    return (
        <Routes>
            <Route index element={<UserMain />} />
            <Route path="new" element={<UserNew />} />
            <Route path="/:id/edit" element={<p>Edit</p>} />
            <Route path="" element={<p>404</p>} />
            <Route path="*" element={<Navigate to="/c/5454-4353-534f-3ef6/dashboard" />} />
        </Routes>
    );
};
