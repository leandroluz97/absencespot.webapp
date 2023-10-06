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
                        <Submenu.Item to="" isActive={pathname.endsWith('/user')}>
                            Profile
                        </Submenu.Item>
                        <Submenu.Item to="leaves" isActive={pathname.includes('leaves')}>
                            Leaves
                        </Submenu.Item>
                        <Submenu.Item to="credentials" isActive={pathname.includes('credentials')}>
                            Credentials
                        </Submenu.Item>
                        <Submenu.Item
                            to="notifications"
                            isActive={pathname.includes('notifications')}
                        >
                            Notifications
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
