import { MainLayout } from '@/_common/layout/MainLayout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard } from './dashboard';
import { Calendar } from './calendar';
import { Request } from './request';
import { TrackRecord } from './track-record';
import { Employee } from './employee';
import { Team } from './team';

export const Application = () => {
    return (
        <Routes>
            <Route path="/c/:id" element={<MainLayout />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="request/*" element={<Request />} />
                <Route path="track-records/*" element={<TrackRecord />} />
                <Route path="employees" element={<Employee />} />
                <Route path="teams" element={<Team />} />
                <Route path="offices" element={<p className="text-slate-800">Teams</p>} />
                <Route path="notifications" element={<p className="text-slate-800">Offices</p>} />
                <Route
                    path="settings"
                    element={<p className="text-slate-800">Settingssssssssssssssssssssssssss</p>}
                />
                <Route path="upgrade" element={<p className="text-slate-800">upgrade</p>} />
                <Route path="profile" element={<p className="text-slate-800">profile</p>} />

                <Route path="" element={<p>404</p>} />
            </Route>
            <Route path="*" element={<Navigate to="/c/5454-4353-534f-3ef6/dashboard" />} />
        </Routes>
    );
};
