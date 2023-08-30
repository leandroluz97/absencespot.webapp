import React from 'react';
import {
    Bell,
    Building2,
    Calendar,
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
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export const MainLayout = () => {
    const { id } = useParams();
    const { pathname } = useLocation();
    return (
        <React.Fragment>
            <section className="flex bg-slate-100">
                <article className="h-screen">
                    <nav className="h-full w-64 p-4 space-y-6 flex flex-col bg-white">
                        <Link to={`/c/${id}/dashboard`} className="">
                            <img src={absenceSpotLogo} alt="absence spot" className="w-40" />
                        </Link>
                        <ul className="h-full w-full flex flex-col justify-between items-center overflow-y-auto pr-2">
                            <div className="w-full space-y-2">
                                <li>
                                    <NavLink
                                        to={`/c/${id}/dashboard`}
                                        className={({ isActive }) =>
                                            `group text-sm flex gap-2 font-medium p-3 rounded hover:font-medium hover:bg-slate-100 hover:text-primary-900 ${
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
                                                pathname.includes('dashboard')
                                                    ? 'text-primary-900'
                                                    : ''
                                            )}
                                        />
                                        <span
                                            className={twMerge(
                                                'text-slate-500 group-hover:text-primary-900 ',
                                                pathname.includes('dashboard')
                                                    ? 'text-primary-900'
                                                    : ''
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
                                            `group text-sm flex gap-2 font-medium p-3 rounded hover:font-medium hover:bg-slate-100 hover:text-primary-900 ${
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
                                                pathname.includes('calendar')
                                                    ? 'text-primary-900'
                                                    : ''
                                            )}
                                        />
                                        <span
                                            className={twMerge(
                                                'text-slate-500 group-hover:text-primary-900 ',
                                                pathname.includes('calendar')
                                                    ? 'text-primary-900'
                                                    : ''
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
                                            `group text-sm flex gap-2 font-medium p-3 rounded hover:font-medium hover:bg-slate-100 hover:text-primary-900 ${
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
                                                pathname.includes('request')
                                                    ? 'text-primary-900'
                                                    : ''
                                            )}
                                        />
                                        <span
                                            className={twMerge(
                                                'text-slate-500 group-hover:text-primary-900 ',
                                                pathname.includes('request')
                                                    ? 'text-primary-900'
                                                    : ''
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
                                            `group text-sm flex gap-2 font-medium p-3 rounded hover:font-medium hover:bg-slate-100 hover:text-primary-900 ${
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
                                                pathname.includes('track-records')
                                                    ? 'text-primary-900'
                                                    : ''
                                            )}
                                        />
                                        <span
                                            className={twMerge(
                                                'text-slate-500 group-hover:text-primary-900 ',
                                                pathname.includes('track-records')
                                                    ? 'text-primary-900'
                                                    : ''
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
                                            `group text-sm flex gap-2 font-medium p-3 rounded hover:font-medium hover:bg-slate-100 hover:text-primary-900 ${
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
                                                pathname.includes('employees')
                                                    ? 'text-primary-900'
                                                    : ''
                                            )}
                                        />
                                        <span
                                            className={twMerge(
                                                'text-slate-500 group-hover:text-primary-900 ',
                                                pathname.includes('employees')
                                                    ? 'text-primary-900'
                                                    : ''
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
                                            `group text-sm flex gap-2 font-medium p-3 rounded hover:font-medium hover:bg-slate-100 hover:text-primary-900 ${
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
                                                pathname.includes('teams') ? 'text-primary-900' : ''
                                            )}
                                        />
                                        <span
                                            className={twMerge(
                                                'text-slate-500 group-hover:text-primary-900 ',
                                                pathname.includes('teams') ? 'text-primary-900' : ''
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
                                            `group text-sm flex gap-2 font-medium p-3 rounded hover:font-medium hover:bg-slate-100 hover:text-primary-900 ${
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
                                                pathname.includes('offices')
                                                    ? 'text-primary-900'
                                                    : ''
                                            )}
                                        />
                                        <span
                                            className={twMerge(
                                                'text-slate-500 group-hover:text-primary-900 ',
                                                pathname.includes('offices')
                                                    ? 'text-primary-900'
                                                    : ''
                                            )}
                                        >
                                            Offices
                                        </span>
                                    </NavLink>
                                </li>
                            </div>
                            <div className="w-full space-y-2">
                                <li>
                                    <NavLink
                                        to={`/c/${id}/notifications`}
                                        className={({ isActive }) =>
                                            `group text-sm flex gap-2 font-medium p-3 rounded hover:font-medium hover:bg-slate-100 hover:text-primary-900 ${
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
                                        <div className="w-5 h-5 bg-primary-900 rounded-full ml-auto text-center">
                                            <p className="text-white">1</p>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={`/c/${id}/settings`}
                                        className={({ isActive }) =>
                                            `group text-sm flex gap-2 font-medium p-3 rounded hover:font-medium hover:bg-slate-100 hover:text-primary-900 ${
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
                                                pathname.includes('settings')
                                                    ? 'text-primary-900'
                                                    : ''
                                            )}
                                        />
                                        <span
                                            className={twMerge(
                                                'text-slate-500 group-hover:text-primary-900 ',
                                                pathname.includes('settings')
                                                    ? 'text-primary-900'
                                                    : ''
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
                                            `group text-sm flex gap-2 font-medium p-3 rounded hover:font-medium hover:bg-slate-100 hover:text-primary-900 ${
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
                                                pathname.includes('upgrate')
                                                    ? 'text-primary-900'
                                                    : ''
                                            )}
                                        />
                                        <span
                                            className={twMerge(
                                                'text-slate-500 group-hover:text-primary-900 ',
                                                pathname.includes('upgrate')
                                                    ? 'text-primary-900'
                                                    : ''
                                            )}
                                        >
                                            Upgrate
                                        </span>
                                    </NavLink>
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
