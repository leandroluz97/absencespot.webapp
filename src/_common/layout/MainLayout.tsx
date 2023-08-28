import React from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
    return (
        <React.Fragment>
            <div>MainLayout</div>
            <Outlet />
        </React.Fragment>
    );
};
