import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export const SubmenuRoot = () => {
    return (
        <div className="submenu flex flex-col w-full md:max-w-[200px] text-sm overflow-x-auto">
            <nav className="flex-1 p-2 flex flex-col">
                <ul className="flex gap-2 w-full md:flex-col flex-nowrap md:p-3">
                    <li className="">
                        <NavLink
                            to="general"
                            className={({ isActive }) =>
                                twMerge(
                                    'text-slate-500 font-semibold whitespace-nowrap p-2 md:p-4 hover:text-primary-900 transition-all ease-in-out duration-300',
                                    isActive ? 'text-primary-900 ' : null
                                )
                            }
                        >
                            General
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink
                            to="user"
                            className={({ isActive }) =>
                                twMerge(
                                    'text-slate-500 font-semibold whitespace-nowrap p-2 md:p-4 hover:text-primary-900 transition-all ease-in-out duration-300',
                                    isActive ? 'text-primary-900 ' : null
                                )
                            }
                        >
                            User
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink
                            to="type-leaves"
                            className={({ isActive }) =>
                                twMerge(
                                    'text-slate-500 font-semibold whitespace-nowrap p-2 md:p-4 hover:text-primary-900 transition-all ease-in-out duration-300',
                                    isActive ? 'text-primary-900 ' : null
                                )
                            }
                        >
                            Type Leaves
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink
                            to="integration"
                            className={({ isActive }) =>
                                twMerge(
                                    'text-slate-500 font-semibold whitespace-nowrap p-2 md:p-4 hover:text-primary-900 transition-all ease-in-out duration-300',
                                    isActive ? 'text-primary-900 ' : null
                                )
                            }
                        >
                            Integration
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink
                            to="Work-schedule"
                            className={({ isActive }) =>
                                twMerge(
                                    'text-slate-500 font-semibold whitespace-nowrap p-2 md:p-4 hover:text-primary-900 transition-all ease-in-out duration-300',
                                    isActive ? 'text-primary-900 ' : null
                                )
                            }
                        >
                            Work Schedule
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink
                            to="plans"
                            className={({ isActive }) =>
                                twMerge(
                                    'text-slate-500 font-semibold whitespace-nowrap p-4 hover:text-primary-900 transition-all ease-in-out duration-300',
                                    isActive ? 'text-primary-900 ' : null
                                )
                            }
                        >
                            Plans
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
