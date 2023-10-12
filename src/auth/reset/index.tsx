import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Eye, EyeOff } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import absenceSpotLogo from '@/assets/absence-spot-logo.svg';
import { Banner } from '../../_common/layout/Banner';
import { GoogleLogo, MicrosoftLogo } from '../_common/assets/logos';

export const ResetPassword = () => {
    const [visibility, setVisibility] = useState({ old: false, new: true, confirm: true });
    return (
        <article className="h-screen flex relative overflow-hidden text-sm">
            <section className="w-full md:w-1/2 overflow-hidden">
                <div className="flex flex-col h-full overflow-hidden">
                    <header className="flex flex-col md:flex-row justify-between items-center gap-4 p-3 md:p-8">
                        <Link to={`/auth/register`} className="">
                            <img src={absenceSpotLogo} alt="absence spot" className="w-40" />
                        </Link>

                        <nav className="flex gap-4">
                            <NavLink
                                className={({ isActive }) =>
                                    twMerge(
                                        'text-slate-400 hover:text-slate-800 transition duration-200 ease-in-out',
                                        isActive && 'text-slate-800'
                                    )
                                }
                                to={'/auth/login'}
                            >
                                Already have an account? <span className="font-bold"> Login</span>
                            </NavLink>
                        </nav>
                    </header>
                    <section className="flex-1 flex overflow-y-auto ">
                        <div className="w-full h-full flex justify-center  p-3 md:p-8">
                            <div className="flex-1 space-y-10 max-w-md ">
                                <header className="space-y-2 text-center md:text-left">
                                    <h1 className="text-slate-700 font-bold text-2xl">
                                        Create New Password!
                                    </h1>
                                    <p className="text-slate-500 text-base ">
                                        Enter a new password to recover your account.
                                    </p>
                                </header>

                                <form action="" className="space-y-5">
                                    <div className="space-y-2">
                                        <label className="text-slate-500 space-x-2" htmlFor="old">
                                            Password
                                        </label>
                                        <div className="relative w-full container mx-auto mt-20">
                                            <input
                                                id="old"
                                                type={visibility.old ? 'text' : 'password'}
                                                placeholder="•••••••••"
                                                className="w-full px-4 py-3 text-base rounded-lg  bg-slate-100  p-2  outline-primary-900  text-slate-700 placeholder-slate-400"
                                            />
                                            <button
                                                onClick={() => {
                                                    setVisibility((v) => ({ ...v, old: !v.old }));
                                                }}
                                                type="button"
                                                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                                            >
                                                {visibility.old ? (
                                                    <Eye size={20} className="text-slate-400" />
                                                ) : (
                                                    <EyeOff size={20} className="text-slate-400" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-slate-500 space-x-2" htmlFor="old">
                                            Confirm Password
                                        </label>
                                        <div className="relative w-full container mx-auto mt-20">
                                            <input
                                                id="old"
                                                type={visibility.old ? 'text' : 'password'}
                                                placeholder="•••••••••"
                                                className="w-full px-4 py-3 text-base rounded-lg  bg-slate-100  p-2  outline-primary-900  text-slate-700 placeholder-slate-400"
                                            />
                                            <button
                                                onClick={() => {
                                                    setVisibility((v) => ({ ...v, old: !v.old }));
                                                }}
                                                type="button"
                                                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                                            >
                                                {visibility.old ? (
                                                    <Eye size={20} className="text-slate-400" />
                                                ) : (
                                                    <EyeOff size={20} className="text-slate-400" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full  px-6 text-white text-sm bg-primary-900 p-3 rounded-lg hover:bg-primary-950 transition-all ease-in-out duration-300"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <Banner
                title="Management with AbsenceSpot!"
                description="The all-in-one solution for effortless time-off requests, seamless vacation and sick day tracking, and efficient employee schedule management."
            />
        </article>
    );
};
