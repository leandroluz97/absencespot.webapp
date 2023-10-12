import { Auth } from '@/auth';

import { Route, Navigate, Routes } from 'react-router-dom';
// import { Auth } from '@/auth';
import { Application } from '@/app/index';

export const AppRoutes = () => {
    const user = false;
    // const { user } = useAuth();

    // const routes = user ? protectedRoutes : publicRoutes;

    // const element = useRoutes([...routes]);

    // return element;

    return (
        <Routes>
            <Route path="*" element={user ? <Application /> : <Auth />}></Route>
            <Route path="/login" element={<Navigate to="/" />} />
        </Routes>
    );
};
