import { MainLayout } from '@/_common/layout/MainLayout';
import { Navigate, Route, Routes } from 'react-router-dom';

export const Application = () => {
    return (
        <Routes>
            <Route path="/c/:id" element={<MainLayout />}>
                <Route path="dashboard" element={<p className="text-slate-800">Dashboard</p>} />
                <Route path="calendar" element={<p className="text-slate-800">Calendar</p>} />
                <Route path="request" element={<p className="text-slate-800">Request</p>} />
                <Route
                    path="track-records"
                    element={<p className="text-slate-800">Track Records</p>}
                />
                <Route path="employees" element={<p className="text-slate-800">Employees</p>} />
                <Route path="teams" element={<p className="text-slate-800">Dashboard</p>} />
                <Route path="offices" element={<p className="text-slate-800">Teams</p>} />
                <Route path="notifications" element={<p className="text-slate-800">Offices</p>} />
                <Route path="settings" element={<p className="text-slate-800">Settings</p>} />
                <Route path="upgrate" element={<p className="text-slate-800">upgrate</p>} />
                <Route path="profile" element={<p className="text-slate-800">profile</p>} />

                <Route path="" element={<p>404</p>} />
            </Route>
            <Route path="*" element={<Navigate to="/c/5454-4353-534f-3ef6/dashboard" />} />
        </Routes>
    );
};
