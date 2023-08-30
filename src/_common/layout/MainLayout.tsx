import React from 'react';
import {
    Bell,
    Building2,
    Calendar,
    Clock3,
    FilePieChart,
    Flame,
    LayoutDashboard,
    Settings,
    UserCheck2,
    Users2,
} from 'lucide-react';
import absenceSpotLogo from '@/assets/absence-spot-logo.svg';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export const MainLayout = () => {
    const { id } = useParams();
    const { pathname } = useLocation();
    return (
        <React.Fragment>
            <section className="flex">
                <article className="h-screen">
                    <nav className="w-64  p-4">
                        <Link to={`/c/${id}/dashboard`}>
                            <img src={absenceSpotLogo} alt="absence spot" className="w-40" />
                        </Link>
                        <ul className="w-full space-y-2">
                            <li>
                                <NavLink
                                    to={`/c/${id}/dashboard`}
                                    className={({ isActive }) =>
                                        `group flex gap-2 font-medium p-3 rounded hover:font-medium hover:bg-slate-100 hover:text-primary-900 ${
                                            isActive
                                                ? ' text-primary-900 bg-slate-100'
                                                : 'text-red-300'
                                        }`
                                    }
                                >
                                    <LayoutDashboard
                                        size={20}
                                        className={twMerge(
                                            'text-slate-400 group-hover:text-primary-900 ',
                                            pathname.includes('dashboard') ? 'text-primary-900' : ''
                                        )}
                                    />
                                    <span
                                        className={twMerge(
                                            'text-slate-500 group-hover:text-primary-900 ',
                                            pathname.includes('dashboard') ? 'text-primary-900' : ''
                                        )}
                                    >
                                        Dashboard
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`/c/${id}/calendar`}
                                    className={({ isActive }) =>
                                        `group flex gap-2 font-medium p-3 rounded hover:font-medium hover:bg-slate-100 hover:text-primary-900 ${
                                            isActive
                                                ? ' text-primary-900 bg-slate-100'
                                                : 'text-red-300'
                                        }`
                                    }
                                >
                                    <Calendar
                                        size={20}
                                        className={twMerge(
                                            'text-slate-400 group-hover:text-primary-900 ',
                                            pathname.includes('calendar') ? 'text-primary-900' : ''
                                        )}
                                    />
                                    <span
                                        className={twMerge(
                                            'text-slate-500 group-hover:text-primary-900 ',
                                            pathname.includes('calendar') ? 'text-primary-900' : ''
                                        )}
                                    >
                                        Calendar
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`/c/${id}/request`}
                                    className={({ isActive }) =>
                                        `group flex gap-2 font-medium p-3 rounded hover:font-medium hover:bg-slate-100 hover:text-primary-900 ${
                                            isActive
                                                ? ' text-primary-900 bg-slate-100'
                                                : 'text-red-300'
                                        }`
                                    }
                                >
                                    <FilePieChart
                                        size={20}
                                        className={twMerge(
                                            'text-slate-400 group-hover:text-primary-900 ',
                                            pathname.includes('request') ? 'text-primary-900' : ''
                                        )}
                                    />
                                    <span
                                        className={twMerge(
                                            'text-slate-500 group-hover:text-primary-900 ',
                                            pathname.includes('request') ? 'text-primary-900' : ''
                                        )}
                                    >
                                        Request
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`/c/${id}/track-records`}
                                    className={({ isActive }) =>
                                        `group flex gap-2 font-medium p-3 rounded hover:font-medium hover:bg-slate-100 hover:text-primary-900 ${
                                            isActive
                                                ? ' text-primary-900 bg-slate-100'
                                                : 'text-red-300'
                                        }`
                                    }
                                >
                                    <Clock3
                                        size={20}
                                        className={twMerge(
                                            'text-slate-400 group-hover:text-primary-900 ',
                                            pathname.includes('calendar') ? 'text-primary-900' : ''
                                        )}
                                    />
                                    <span
                                        className={twMerge(
                                            'text-slate-500 group-hover:text-primary-900 ',
                                            pathname.includes('calendar') ? 'text-primary-900' : ''
                                        )}
                                    >
                                        Track Records
                                    </span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to={`/c/${id}/employees`}
                                    className={({ isActive }) =>
                                        `group flex gap-2 font-medium p-3 rounded hover:font-medium hover:bg-slate-100 hover:text-primary-900 ${
                                            isActive
                                                ? ' text-primary-900 bg-slate-100'
                                                : 'text-red-300'
                                        }`
                                    }
                                >
                                    <UserCheck2
                                        size={20}
                                        className={twMerge(
                                            'text-slate-400 group-hover:text-primary-900 ',
                                            pathname.includes('employees') ? 'text-primary-900' : ''
                                        )}
                                    />
                                    <span
                                        className={twMerge(
                                            'text-slate-500 group-hover:text-primary-900 ',
                                            pathname.includes('employees') ? 'text-primary-900' : ''
                                        )}
                                    >
                                        Employees
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`/c/${id}/teams`}
                                    className={({ isActive }) =>
                                        `group flex gap-2 font-medium p-3 rounded hover:font-medium hover:bg-slate-100 hover:text-primary-900 ${
                                            isActive
                                                ? ' text-primary-900 bg-slate-100'
                                                : 'text-red-300'
                                        }`
                                    }
                                >
                                    <Users2
                                        size={20}
                                        className={twMerge(
                                            'text-slate-400 group-hover:text-primary-900 ',
                                            pathname.includes('calendar') ? 'text-primary-900' : ''
                                        )}
                                    />
                                    <span
                                        className={twMerge(
                                            'text-slate-500 group-hover:text-primary-900 ',
                                            pathname.includes('calendar') ? 'text-primary-900' : ''
                                        )}
                                    >
                                        Teams
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`/c/${id}/offices`}
                                    className={({ isActive }) =>
                                        `group flex gap-2 font-medium p-3 rounded hover:font-medium hover:bg-slate-100 hover:text-primary-900 ${
                                            isActive
                                                ? ' text-primary-900 bg-slate-100'
                                                : 'text-red-300'
                                        }`
                                    }
                                >
                                    <Building2
                                        size={20}
                                        className={twMerge(
                                            'text-slate-400 group-hover:text-primary-900 ',
                                            pathname.includes('offices') ? 'text-primary-900' : ''
                                        )}
                                    />
                                    <span
                                        className={twMerge(
                                            'text-slate-500 group-hover:text-primary-900 ',
                                            pathname.includes('offices') ? 'text-primary-900' : ''
                                        )}
                                    >
                                        Offices
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`/c/${id}/notifications`}
                                    className={({ isActive }) =>
                                        `group flex gap-2 font-medium p-3 rounded hover:font-medium hover:bg-slate-100 hover:text-primary-900 ${
                                            isActive
                                                ? ' text-primary-900 bg-slate-100'
                                                : 'text-red-300'
                                        }`
                                    }
                                >
                                    <Bell
                                        size={20}
                                        className={twMerge(
                                            'text-slate-400 group-hover:text-primary-900 ',
                                            pathname.includes('notifications')
                                                ? 'text-primary-900'
                                                : ''
                                        )}
                                    />
                                    <span
                                        className={twMerge(
                                            'text-slate-500 group-hover:text-primary-900 ',
                                            pathname.includes('notifications')
                                                ? 'text-primary-900'
                                                : ''
                                        )}
                                    >
                                        Notifications
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`/c/${id}/settings`}
                                    className={({ isActive }) =>
                                        `group flex gap-2 font-medium p-3 rounded hover:font-medium hover:bg-slate-100 hover:text-primary-900 ${
                                            isActive
                                                ? ' text-primary-900 bg-slate-100'
                                                : 'text-red-300'
                                        }`
                                    }
                                >
                                    <Settings
                                        size={20}
                                        className={twMerge(
                                            'text-slate-400 group-hover:text-primary-900 ',
                                            pathname.includes('settings') ? 'text-primary-900' : ''
                                        )}
                                    />
                                    <span
                                        className={twMerge(
                                            'text-slate-500 group-hover:text-primary-900 ',
                                            pathname.includes('settings') ? 'text-primary-900' : ''
                                        )}
                                    >
                                        Settings
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`/c/${id}/upgrate`}
                                    className={({ isActive }) =>
                                        `group flex gap-2 font-medium p-3 rounded hover:font-medium hover:bg-slate-100 hover:text-primary-900 ${
                                            isActive
                                                ? ' text-primary-900 bg-slate-100'
                                                : 'text-red-300'
                                        }`
                                    }
                                >
                                    <Flame
                                        size={20}
                                        className={twMerge(
                                            'text-slate-400 group-hover:text-primary-900 ',
                                            pathname.includes('upgrate') ? 'text-primary-900' : ''
                                        )}
                                    />
                                    <span
                                        className={twMerge(
                                            'text-slate-500 group-hover:text-primary-900 ',
                                            pathname.includes('upgrate') ? 'text-primary-900' : ''
                                        )}
                                    >
                                        Upgrate
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`/c/${id}/offices`}
                                    className={({ isActive }) =>
                                        `group flex gap-2 font-medium p-3 rounded hover:font-medium hover:bg-slate-100 hover:text-primary-900 ${
                                            isActive
                                                ? ' text-primary-900 bg-slate-100'
                                                : 'text-red-300'
                                        }`
                                    }
                                >
                                    <Building2
                                        size={20}
                                        className={twMerge(
                                            'text-slate-400 group-hover:text-primary-900 ',
                                            pathname.includes('offices') ? 'text-primary-900' : ''
                                        )}
                                    />
                                    <span
                                        className={twMerge(
                                            'text-slate-500 group-hover:text-primary-900 ',
                                            pathname.includes('offices') ? 'text-primary-900' : ''
                                        )}
                                    >
                                        Emily Smith
                                    </span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </article>
                <Outlet />
            </section>
        </React.Fragment>
    );
};
