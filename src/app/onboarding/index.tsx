import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Banner } from '@/_common/layout/Banner';
import absenceSpotLogo from '@/assets/absence-spot-logo.svg';

export const Onboarding = () => {
    return (
        <article className="h-screen flex relative overflow-hidden text-sm">
            <section className="w-full md:w-1/2 overflow-hidden">
                <div className="flex flex-col h-full overflow-hidden">
                    <header className="flex flex-col md:flex-row justify-between items-center gap-4 p-3 md:p-8">
                        <Link to={`/auth/register`} className="">
                            <img src={absenceSpotLogo} alt="absence spot" className="w-40" />
                        </Link>
                    </header>
                    <section className="flex-1 flex overflow-y-auto ">
                        <div className="w-full h-auto flex-1 flex justify-center items-center p-3 md:p-8">
                            <div className="flex-1 space-y-10 max-w-md ">
                                <header className="space-y-2 text-center md:text-left">
                                    <h1 className="text-slate-700 font-bold text-2xl">
                                        Create your workspace
                                    </h1>
                                    <p className="text-slate-500 text-base ">
                                        Tell us your company name...
                                    </p>
                                </header>
                                <form action="" className="space-y-5">
                                    <div className="space-y-2">
                                        <label className="text-slate-500" htmlFor="name">
                                            Company name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="CompanyXYZ"
                                            className="block bg-slate-100 rounded-lg p-3 px-4 outline-primary-900 w-full text-slate-700 placeholder-slate-400"
                                        />
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full  px-6 text-white text-sm bg-primary-900 p-3 rounded-lg hover:bg-primary-950 transition-all ease-in-out duration-300"
                                        >
                                            Continue
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
