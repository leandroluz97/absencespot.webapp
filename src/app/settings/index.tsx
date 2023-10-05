import { Navigate, Route, Routes } from 'react-router-dom';
import { Submenu } from '../_common/submenu';

export const Settings = () => {
    return (
        <Routes>
            <Route
                element={
                    <div className="h-full flex flex-col md:flex-row gap-4 mt-16 md:mx-10 overflow-hidden">
                        <Submenu.Root></Submenu.Root>
                        <div className="flex-1 bg-white max-w-6xl rounded-lg h-auto md:h-full overflow-y-auto p-4">
                            {Array(100)
                                .fill(3)
                                .map((x) => (
                                    <p>Yess</p>
                                ))}
                        </div>
                    </div>
                }
            >
                <Route path="new" element={<p>test</p>} />
                <Route path="/:id/edit" element={<p>Edit</p>} />
                <Route path="" element={<p>404</p>} />
                <Route path="*" element={<Navigate to="/c/5454-4353-534f-3ef6/dashboard" />} />
            </Route>
        </Routes>
    );
};
