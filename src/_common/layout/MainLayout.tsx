import React from 'react';
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
    Search,
    X,
    Menu as MenuIcon,
} from 'lucide-react';
import absenceSpotLogo from '@/assets/absence-spot-logo.svg';
import * as Accordion from '@radix-ui/react-accordion';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Menu } from '../Menu';

export const MainLayout = () => {
    const { id } = useParams();
    const { pathname, search } = useLocation();

    return (
        <React.Fragment>
            <section className="h-screen flex bg-slate-100 relative">
                <article className="hidden md:block h-screen w-full md:w-auto absolute z-10 -left-0 md:relative ">
                    <nav className="hidden h-full md:w-64 p-4 md:space-y-6 md:flex flex-col bg-white">
                        <Link
                            to={`/c/${id}/dashboard`}
                            className="hidden invisible md:block md:visible"
                        >
                            <img src={absenceSpotLogo} alt="absence spot" className="w-40" />
                        </Link>
                        <ul className="small-scroll h-full w-full flex flex-col  items-center overflow-y-auto pr-2 space-y-2">
                            <div className="order-2 md:order-1 w-full space-y-2">
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
                                                        'AccordionTrigger w-full flex justify-between items-center pr-2 rounded hover:bg-slate-100 hover:text-primary-900 transition-all ease-in duration-300',
                                                        pathname.includes('request')
                                                            ? 'bg-slate-100 text-primary-900 '
                                                            : ''
                                                    )}
                                                >
                                                    <Menu.Root
                                                        to={`/c/${id}/request`}
                                                        className="w-full hover:bg-transparent bg-transparent"
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
                                                        className="mt-2 hover:bg-transparent bg-transparent"
                                                    >
                                                        <Menu.Content className="w-full flex gap-2">
                                                            <Menu.Title
                                                                isActive={search.includes(
                                                                    'approved'
                                                                )}
                                                            >
                                                                Approved
                                                            </Menu.Title>
                                                        </Menu.Content>
                                                    </Menu.Root>
                                                    <Menu.Root
                                                        to={`/c/${id}/request?filter=pending`}
                                                        className="hover:bg-transparent bg-transparent"
                                                    >
                                                        <Menu.Content className="w-full flex gap-2">
                                                            <Menu.Title
                                                                isActive={search.includes(
                                                                    'pending'
                                                                )}
                                                            >
                                                                Pending
                                                            </Menu.Title>
                                                        </Menu.Content>
                                                    </Menu.Root>
                                                    <Menu.Root
                                                        to={`/c/${id}/request?filter=reject`}
                                                        className="hover:bg-transparent bg-transparent"
                                                    >
                                                        <Menu.Content className="w-full flex gap-2">
                                                            <Menu.Title
                                                                isActive={search.includes('reject')}
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
                            <div className="order-3 md:order-2" style={{ marginTop: 'auto' }}></div>
                            <div className="order-4 md:order-4 w-full space-y-2 mt-auto ">
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
                            </div>

                            <div className="pb-3 md:pb-0 order-1 md:order-4 w-full flex">
                                <li className="w-full">
                                    <Menu.Root to={`/c/${id}/profile`} className="w-full">
                                        <Menu.Content className="w-full flex gap-2 items-center">
                                            <div className="w-10 h-10 bg-slate-200 rounded-full flex justify-center items-center">
                                                <p className="text-slate-600 leading-none">ES</p>
                                            </div>
                                            <Menu.Title
                                                isActive={pathname.includes('profile')}
                                                className="font-bold"
                                            >
                                                Emily Smith
                                            </Menu.Title>
                                            <Menu.Info className="md:ml-auto ">
                                                <Crown className="text-yellow-400" />
                                            </Menu.Info>
                                        </Menu.Content>
                                    </Menu.Root>
                                </li>
                                <button className="block md:hidden p-2">
                                    <X />
                                </button>
                            </div>
                        </ul>
                    </nav>
                </article>
                <main className="flex flex-col w-full md:ml-[2px] gap-[3px] ">
                    {!pathname.includes('settings') && (
                        <header className="bg-white">
                            <div className="h-full p-3 flex flex-col md:flex-row justify-between items-center">
                                <div className="w-full flex justify-between items-center mb-3 md:mb-0">
                                    <MenuIcon className=" md:hidden" />
                                    <h2 className="text-slate-600 font-bold">Dashboard</h2>
                                    <div className=" md:hidden w-10 h-10 bg-slate-200 rounded-full flex justify-center items-center">
                                        <p className="text-slate-600 leading-none">ES</p>
                                    </div>
                                </div>
                                <div className="relative max-w-full md:max-w-xs w-full">
                                    <Search
                                        size={20}
                                        className="absolute top-2 left-4 translate-y-0.5 text-slate-400"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="bg-slate-100 rounded-lg p-2 pl-12 outline-primary-900 w-full text-slate-700 placeholder-slate-400"
                                    />
                                </div>
                            </div>
                        </header>
                    )}
                    <Outlet />
                </main>
            </section>
        </React.Fragment>
    );
};
