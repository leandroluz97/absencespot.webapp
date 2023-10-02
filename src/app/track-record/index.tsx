import { TrackRecordDetails } from './detail';
import { Navigate, Route, Routes } from 'react-router-dom';
import { TrackRecordMain } from './main';

export const TrackRecord = () => {
    return (
        <Routes>
            <Route index element={<TrackRecordMain />} />
            <Route path=":userId" element={<TrackRecordDetails />} />
            <Route path="/:id/edit" element={<p>Edit</p>} />
            <Route path="" element={<p>404</p>} />
            <Route path="*" element={<Navigate to="/c/5454-4353-534f-3ef6/dashboard" />} />
        </Routes>
    );
};
