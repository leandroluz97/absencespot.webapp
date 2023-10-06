import { SimpleLayout } from '@/_common/layout/SimpleLayout';
import { Submenu } from '@/app/_common/submenu';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <SimpleLayout>
            <Submenu.Root>
                <Submenu.Content>
                    <Submenu.List>
                        <Submenu.Item to="">General</Submenu.Item>
                        <Submenu.Item to="user">Users</Submenu.Item>
                        <Submenu.Item to="leave-types">Leave Types</Submenu.Item>
                        <Submenu.Item to="integration">Integration</Submenu.Item>
                        <Submenu.Item to="work-schedule">Work Schedule</Submenu.Item>
                        <Submenu.Item to="plans">Plans</Submenu.Item>
                    </Submenu.List>
                </Submenu.Content>
            </Submenu.Root>
            <div className="flex-1 bg-white max-w-6xl rounded-lg h-auto md:h-full overflow-hidden p-2">
                <div className="p-10 h-full overflow-y-auto text-sm">
                    <Outlet />
                </div>
            </div>
        </SimpleLayout>
    );
};
