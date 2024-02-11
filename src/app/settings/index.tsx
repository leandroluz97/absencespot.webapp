import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './_common/layout';
import { General } from './general';
import { User } from './user';
import { Integration } from './integration';
import { LeaveTypes } from './leave';
import { WorkSchedule } from './schedule';
import { Plans } from './plans';
import { Payment } from './payment';

export const Settings = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<General />} />
                <Route path="user/*" element={<User />} />
                <Route path="leave-types/*" element={<LeaveTypes />} />
                <Route path="integration" element={<Integration />} />
                <Route path="work-schedule/*" element={<WorkSchedule />} />
                <Route path="plans" element={<Plans />} />
                <Route path="checkout" element={<Payment />} />
                <Route path="payment-method" element={<Payment />} />
                <Route path="payment-history" element={<Payment />} />
                <Route path="" element={<p>404</p>} />
                <Route path="*" element={<Navigate to="/c/5454-4353-534f-3ef6/dashboard" />} />
            </Route>
        </Routes>
    );
};
