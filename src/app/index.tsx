import { MainLayout } from '@/_common/layout/MainLayout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard } from './dashboard';
import { Calendar } from './calendar';
import { Request } from './request';
import { TrackRecord } from './track-record';
import { Employee } from './employee';
import { Team } from './team';
import { Office } from './office';
import { Notification } from './notification';
import { Settings } from './settings';
import { User } from './user';
import { Onboarding } from './onboarding';

export const Application = () => {
    return (
        <Routes>
            <Route path="/c/:id" element={<MainLayout />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="request/*" element={<Request />} />
                <Route path="track-records/*" element={<TrackRecord />} />
                <Route path="employees/*" element={<Employee />} />
                <Route path="teams/*" element={<Team />} />
                <Route path="offices/*" element={<Office />} />
                <Route path="notifications" element={<Notification />} />
                <Route path="settings/*" element={<Settings />} />
                <Route path="upgrade" element={<p className="text-slate-800">upgrade</p>} />
                <Route path="user/*" element={<User />} />
                <Route path="" element={<p>404</p>} />
            </Route>
            <Route path="/onboarding/:id" element={<Onboarding />} />
            <Route path="*" element={<Navigate to="/c/5454-4353-534f-3ef6/dashboard" />} />
        </Routes>
    );
};
