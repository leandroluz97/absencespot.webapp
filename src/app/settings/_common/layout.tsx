import { SimpleLayout } from '@/_common/layout/SimpleLayout';
import { Submenu } from '@/app/_common/submenu';
import { Outlet, useLocation } from 'react-router-dom';

export const Layout = () => {
    const { pathname } = useLocation();
    return (
        <SimpleLayout>
            <Submenu.Root>
                <Submenu.Content>
                    <Submenu.List>
                        <Submenu.Item to="" isActive={pathname.endsWith('settings')}>
                            General
                        </Submenu.Item>
                        <Submenu.Item to="user" isActive={pathname.includes('user')}>
                            Users
                        </Submenu.Item>
                        <Submenu.Item to="leave-types" isActive={pathname.includes('leave-types')}>
                            Leave Types
                        </Submenu.Item>
                        <Submenu.Item to="integration" isActive={pathname.includes('integration')}>
                            Integration
                        </Submenu.Item>
                        <Submenu.Item
                            to="work-schedule"
                            isActive={pathname.includes('work-schedule')}
                        >
                            Work Schedule
                        </Submenu.Item>
                        <Submenu.Item to="plans" isActive={pathname.includes('plans')}>
                            Plans
                        </Submenu.Item>
                    </Submenu.List>
                </Submenu.Content>
            </Submenu.Root>
            <div className="flex-1 bg-white max-w-6xl rounded-lg h-auto md:h-full overflow-hidden p-2">
                <div className="p-2 md:p-10 h-full overflow-y-auto text-sm">
                    <Outlet />
                </div>
            </div>
        </SimpleLayout>
    );
};
