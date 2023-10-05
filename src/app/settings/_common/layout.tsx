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
            <Outlet />
        </SimpleLayout>
    );
};
