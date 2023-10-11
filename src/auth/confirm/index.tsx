import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { CheckIcon, Eye, EyeOff } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as LabelPrimitive from '@radix-ui/react-label';
import absenceSpotLogo from '@/assets/absence-spot-logo.svg';
import { Banner } from '../../_common/layout/Banner';

export const Confirm = () => {
    const [visibility, setVisibility] = useState({ old: false, new: true, confirm: true });
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
                                    <h1 className="text-slate-700 font-bold text-2xl">Welcome!</h1>
                                    <p className="text-slate-500 text-base ">
                                        Add your name and password to create your account.
                                    </p>
                                </header>

                                <form action="" className="space-y-5">
                                    <div className="space-y-2">
                                        <label className="text-slate-500" htmlFor="firstname">
                                            Firstname
                                        </label>
                                        <input
                                            id="firstname"
                                            type="text"
                                            placeholder="John"
                                            className="block bg-slate-100 rounded-lg p-3 px-4 outline-primary-900 w-full text-slate-700 placeholder-slate-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-slate-500" htmlFor="lastname">
                                            Lastname
                                        </label>
                                        <input
                                            id="text"
                                            type="lastname"
                                            placeholder="Doe"
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
                                    <div className="">
                                        <LabelPrimitive.Label
                                            htmlFor="c1"
                                            className="select-none text-sm font-medium text-slate-500 flex items-start gap-2"
                                        >
                                            <CheckboxPrimitive.Root
                                                id="c1"
                                                defaultChecked
                                                className={twMerge(
                                                    'rounded flex justify-between items-center flex-shrink-0 w-4 h-4 border-2 border-slate-400 bg-tranparent  aria-checked:border-primary-900 aria-checked:bg-primary-800  '
                                                )}
                                            >
                                                <CheckboxPrimitive.Indicator>
                                                    <CheckIcon className="h-3 w-3  self-center text-white" />
                                                </CheckboxPrimitive.Indicator>
                                            </CheckboxPrimitive.Root>
                                            Can send me product news, and occasional offers by
                                            email. I know I can unsubscribe at any time.
                                        </LabelPrimitive.Label>
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
