import React, { ReactNode } from 'react';
import {
    Bell,
    Building2,
    Calendar,
    ChevronDownIcon,
    Clock3,
    Crown,
    FilePieChart,
    Flame,
    LayoutDashboard,
    Settings,
    UserCheck2,
    Users2,
} from 'lucide-react';
import absenceSpotLogo from '@/assets/absence-spot-logo.svg';
import * as Accordion from '@radix-ui/react-accordion';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Menu } from '../Menu';

interface Props {
    children: ReactNode;
}

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger
            className={twMerge(
                'w-full flex justify-between items-center text-primary-900 bg-slate-100 pr-2 rounded',
                className
            )}
            {...props}
            ref={forwardedRef}
        >
            {children}
            <ChevronDownIcon size={26} className="" aria-hidden />
        </Accordion.Trigger>
    </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content className={twMerge('ml-6', className)} {...props} ref={forwardedRef}>
        <div className="ml-6">{children}</div>
    </Accordion.Content>
));

export const MainLayout = () => {
    const { id } = useParams();
    const { pathname } = useLocation();

    return (
        <React.Fragment>
            <section className=" h-screen flex bg-slate-100">
                <article className="h-screen ">
                    <nav className="h-full w-64 p-4 space-y-6 flex flex-col bg-white">
                        <Link to={`/c/${id}/dashboard`} className="">
                            <img src={absenceSpotLogo} alt="absence spot" className="w-40" />
                        </Link>
                        <ul className="h-full w-full flex flex-col justify-between items-center overflow-y-auto pr-2 space-y-2">
                            <div className="w-full space-y-2">
                                <li>
                                    <Menu.Root to={`/c/${id}/dashboard`}>
                                        <Menu.Content className="w-full flex gap-2">
                                            <Menu.Icon
                                                isActive={pathname.includes('dashboard')}
                                                Icon={LayoutDashboard}
                                            />
                                            <Menu.Title isActive={pathname.includes('dashboard')}>
                                                Dashboard
                                            </Menu.Title>
                                        </Menu.Content>
                                    </Menu.Root>
                                </li>
                                <li>
                                    <Menu.Root to={`/c/${id}/calendar`}>
                                        <Menu.Content className="w-full flex gap-2">
                                            <Menu.Icon
                                                isActive={pathname.includes('calendar')}
                                                Icon={Calendar}
                                            />
                                            <Menu.Title isActive={pathname.includes('calendar')}>
                                                Calendar
                                            </Menu.Title>
                                            {/* <Menu.Info className="w-5 h-5 bg-primary-900 rounded-full ml-auto text-center">
                                                <p className="text-white">1</p>
                                            </Menu.Info> */}
                                        </Menu.Content>
                                    </Menu.Root>
                                </li>
                                <li>
                                    <Accordion.Root
                                        className="AccordionRoot"
                                        type="single"
                                        defaultValue="item-2"
                                        collapsible
                                    >
                                        <Accordion.Item className="AccordionItem" value="item-1">
                                            <Accordion.Header className="AccordionHeader">
                                                <Accordion.Trigger
                                                    className={twMerge(
                                                        'AccordionTrigger w-full flex justify-between items-center pr-2 rounded hover:bg-slate-100 hover:text-primary-900',
                                                        pathname.includes('request')
                                                            ? 'bg-slate-100 text-primary-900 '
                                                            : ''
                                                    )}
                                                >
                                                    <Menu.Root
                                                        to={`/c/${id}/request`}
                                                        className="w-full hover:bg-transparent"
                                                    >
                                                        <Menu.Content className="w-full flex gap-2">
                                                            <Menu.Icon
                                                                isActive={pathname.includes(
                                                                    'request'
                                                                )}
                                                                Icon={FilePieChart}
                                                            />
                                                            <Menu.Title
                                                                isActive={pathname.includes(
                                                                    'request'
                                                                )}
                                                            >
                                                                Request
                                                            </Menu.Title>
                                                        </Menu.Content>
                                                    </Menu.Root>
                                                    <ChevronDownIcon
                                                        size={26}
                                                        className="text-slate-400 rounded hover:bg-slate-50 AccordionChevron"
                                                        aria-hidden
                                                    />
                                                </Accordion.Trigger>
                                            </Accordion.Header>
                                            <div style={{ marginLeft: '25px' }}>
                                                <Accordion.Content className="transition-all AccordionContent">
                                                    <Menu.Root
                                                        to={`/c/${id}/request?filter=approved`}
                                                        className="mt-2"
                                                    >
                                                        <Menu.Content className="w-full flex gap-2">
                                                            <Menu.Title
                                                                isActive={pathname.includes(
                                                                    'request'
                                                                )}
                                                            >
                                                                Approved
                                                            </Menu.Title>
                                                        </Menu.Content>
                                                    </Menu.Root>
                                                    <Menu.Root
                                                        to={`/c/${id}/request?filter=pending`}
                                                    >
                                                        <Menu.Content className="w-full flex gap-2">
                                                            <Menu.Title
                                                                isActive={pathname.includes(
                                                                    'request'
                                                                )}
                                                            >
                                                                Pending
                                                            </Menu.Title>
                                                        </Menu.Content>
                                                    </Menu.Root>
                                                    <Menu.Root
                                                        to={`/c/${id}/request?filter=reject`}
                                                    >
                                                        <Menu.Content className="w-full flex gap-2">
                                                            <Menu.Title
                                                                isActive={pathname.includes(
                                                                    'request'
                                                                )}
                                                            >
                                                                Reject
                                                            </Menu.Title>
                                                        </Menu.Content>
                                                    </Menu.Root>
                                                </Accordion.Content>
                                            </div>
                                        </Accordion.Item>
                                    </Accordion.Root>
                                </li>
                                <li>
                                    <Menu.Root to={`/c/${id}/track-records`}>
                                        <Menu.Content className="w-full flex gap-2">
                                            <Menu.Icon
                                                isActive={pathname.includes('track-records')}
                                                Icon={Clock3}
                                            />
                                            <Menu.Title
                                                isActive={pathname.includes('track-records')}
                                            >
                                                Track Records
                                            </Menu.Title>
                                        </Menu.Content>
                                    </Menu.Root>
                                </li>
                                <li>
                                    <Menu.Root to={`/c/${id}/employees`}>
                                        <Menu.Content className="w-full flex gap-2">
                                            <Menu.Icon
                                                isActive={pathname.includes('employees')}
                                                Icon={UserCheck2}
                                            />
                                            <Menu.Title isActive={pathname.includes('employees')}>
                                                Employees
                                            </Menu.Title>
                                        </Menu.Content>
                                    </Menu.Root>
                                </li>
                                <li>
                                    <Menu.Root to={`/c/${id}/teams`}>
                                        <Menu.Content className="w-full flex gap-2">
                                            <Menu.Icon
                                                isActive={pathname.includes('teams')}
                                                Icon={Users2}
                                            />
                                            <Menu.Title isActive={pathname.includes('teams')}>
                                                Teams
                                            </Menu.Title>
                                        </Menu.Content>
                                    </Menu.Root>
                                </li>
                                <li>
                                    <Menu.Root to={`/c/${id}/offices`}>
                                        <Menu.Content className="w-full flex gap-2">
                                            <Menu.Icon
                                                isActive={pathname.includes('offices')}
                                                Icon={Building2}
                                            />
                                            <Menu.Title isActive={pathname.includes('offices')}>
                                                Offices
                                            </Menu.Title>
                                        </Menu.Content>
                                    </Menu.Root>
                                </li>
                            </div>
                            <div className="w-full space-y-2">
                                <li>
                                    <Menu.Root to={`/c/${id}/notifications`}>
                                        <Menu.Content className="w-full flex gap-2">
                                            <Menu.Icon
                                                isActive={pathname.includes('notifications')}
                                                Icon={Bell}
                                            />
                                            <Menu.Title
                                                isActive={pathname.includes('notifications')}
                                            >
                                                Notifications
                                            </Menu.Title>
                                            <Menu.Info className="w-5 h-5 bg-primary-900 rounded-full ml-auto text-center">
                                                <p className="text-white">1</p>
                                            </Menu.Info>
                                        </Menu.Content>
                                    </Menu.Root>
                                </li>
                                <li>
                                    <Menu.Root to={`/c/${id}/settings`}>
                                        <Menu.Content className="w-full flex gap-2">
                                            <Menu.Icon
                                                isActive={pathname.includes('settings')}
                                                Icon={Settings}
                                            />
                                            <Menu.Title isActive={pathname.includes('settings')}>
                                                Settings
                                            </Menu.Title>
                                        </Menu.Content>
                                    </Menu.Root>
                                </li>
                                <li>
                                    <Menu.Root to={`/c/${id}/upgrade`}>
                                        <Menu.Content className="w-full flex gap-2">
                                            <Menu.Icon
                                                isActive={pathname.includes('upgrade')}
                                                Icon={Flame}
                                            />
                                            <Menu.Title isActive={pathname.includes('upgrade')}>
                                                Upgrade
                                            </Menu.Title>
                                        </Menu.Content>
                                    </Menu.Root>
                                </li>
                                <li>
                                    <NavLink
                                        to={`/c/${id}/profile`}
                                        className={({ isActive }) =>
                                            `group text-sm flex items-center gap-2 font-bold p-3 rounded hover:font-bold hover:bg-slate-100 hover:text-primary-900 ${
                                                isActive
                                                    ? ' text-primary-900 bg-slate-100'
                                                    : 'text-red-300'
                                            }`
                                        }
                                    >
                                        <div className=" w-10 h-10 bg-slate-200 rounded-full flex justify-center items-center">
                                            <p className="text-slate-600 leading-none">ES</p>
                                        </div>
                                        <span
                                            className={twMerge(
                                                'text-slate-500 group-hover:text-primary-900 ',
                                                pathname.includes('profile')
                                                    ? 'text-primary-900'
                                                    : ''
                                            )}
                                        >
                                            Emily Smith
                                        </span>
                                        <div className="ml-auto">
                                            <Crown className="text-yellow-400" />
                                        </div>
                                    </NavLink>
                                </li>
                            </div>
                        </ul>
                    </nav>
                </article>
                <Outlet />
            </section>
        </React.Fragment>
    );
};
