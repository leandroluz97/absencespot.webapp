import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Eye, EyeOff } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import absenceSpotLogo from '@/assets/absence-spot-logo.svg';
import { Banner } from '../../_common/layout/Banner';
import { GoogleLogo, MicrosoftLogo } from '../_common/assets/logos';

export const Login = () => {
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
                                to={'/auth/register'}
                            >
                                Sign in to your account?
                                <span className="font-bold"> Register</span>
                            </NavLink>
                        </nav>
                    </header>
                    <section className="flex-1 flex overflow-y-auto ">
                        <div className="w-full h-full flex justify-center  p-3 md:p-8">
                            <div className="flex-1 space-y-10 max-w-md ">
                                <header className="space-y-2 text-center md:text-left">
                                    <h1 className="text-slate-700 font-bold text-2xl">
                                        Sign in to your account!
                                    </h1>
                                    <p className="text-slate-500 text-base ">
                                        Welcome back! Select Login Method:
                                    </p>
                                </header>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <Link
                                        to={''}
                                        className="w-full md:w-1/2 p-3 flex justify-center items-center gap-2 border-solid rounded-md border border-slate-200 text-slate-600 text-sm hover:bg-slate-50 transition-all ease-in-out duration-300"
                                    >
                                        <GoogleLogo /> Sign in with Google
                                    </Link>
                                    <Link
                                        to={''}
                                        className="w-full md:w-1/2 p-3 flex justify-center items-center gap-2 border-solid rounded-md border border-slate-200 text-slate-600 text-sm hover:bg-slate-50 transition-all ease-in-out duration-300"
                                    >
                                        <MicrosoftLogo /> Sign in with Microsoft
                                    </Link>
                                </div>
                                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-slate-200 after:mt-0.5 after:flex-1 after:border-t after:border-slate-200">
                                    <p className="mx-4 mb-0 text-center  text-slate-300">
                                        Or continue with email
                                    </p>
                                </div>
                                <form action="" className="space-y-5">
                                    <div className="space-y-2">
                                        <label className="text-slate-500" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="johndoe@company.com"
                                            className="block bg-slate-100 rounded-lg p-3 px-4 outline-primary-900 w-full text-slate-700 placeholder-slate-400"
                                        />
                                    </div>
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
                                    <Link
                                        to="/auth/forgot-password"
                                        className="block text-right text-slate-400 hover:text-slate-600"
                                    >
                                        Forgot Password?
                                    </Link>
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full  px-6 text-white text-sm bg-primary-900 p-3 rounded-lg hover:bg-primary-950 transition-all ease-in-out duration-300"
                                        >
                                            Sign in
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
