import { ArrowLeft, Eye, EyeOff, Search } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const CredentialNew = () => {
    const [visibility, setVisibility] = useState({ old: false, new: true, confirm: true });
    return (
        <article className="space-y-6">
            <header>
                <Link
                    to={-1 as unknown as string}
                    className="text-lg text-slate-500 font-bold flex gap-3"
                >
                    <ArrowLeft className="text-slate-400" />
                    Crendentials
                </Link>
            </header>
            <form className="space-y-4">
                <div className="space-y-2">
                    <label className="text-slate-500 space-x-2" htmlFor="old">
                        Old password
                    </label>
                    <div className="relative w-full container mx-auto mt-20">
                        <input
                            id="old"
                            type={visibility.old ? 'text' : 'password'}
                            placeholder="•••••••••"
                            className="w-full px-4 py-2 text-base rounded-lg  bg-slate-50  p-2  outline-primary-900  text-slate-700 placeholder-slate-400"
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
                    <label className="text-slate-500 space-x-2" htmlFor="new">
                        New password
                    </label>
                    <div className="relative w-full container mx-auto mt-20">
                        <input
                            id="new"
                            type={visibility.old ? 'text' : 'password'}
                            placeholder="•••••••••"
                            className="w-full px-4 py-2 text-base rounded-lg  bg-slate-50  p-2  outline-primary-900  text-slate-700 placeholder-slate-400"
                        />
                        <button
                            onClick={() => {
                                setVisibility((v) => ({ ...v, new: !v.new }));
                            }}
                            type="button"
                            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                        >
                            {visibility.new ? (
                                <Eye size={20} className="text-slate-400" />
                            ) : (
                                <EyeOff size={20} className="text-slate-400" />
                            )}
                        </button>
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-slate-500 space-x-2" htmlFor="confirm">
                        Confirm password
                    </label>
                    <div className="relative w-full container mx-auto mt-20">
                        <input
                            id="confirm"
                            type={visibility.confirm ? 'text' : 'password'}
                            placeholder="•••••••••"
                            className="w-full px-4 py-2 text-base rounded-lg  bg-slate-50  p-2  outline-primary-900  text-slate-700 placeholder-slate-400"
                        />
                        <button
                            onClick={() => {
                                setVisibility((v) => ({ ...v, confirm: !v.confirm }));
                            }}
                            type="button"
                            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                        >
                            {visibility.confirm ? (
                                <Eye size={20} className="text-slate-400" />
                            ) : (
                                <EyeOff size={20} className="text-slate-400" />
                            )}
                        </button>
                    </div>
                </div>
                {/* <div className="space-y-2">
                    <label className="text-slate-500" htmlFor="companyName">
                        New password
                    </label>
                    <input
                        id="companyName"
                        type="email"
                        placeholder=""
                        className="block bg-slate-50 rounded-lg p-2 px-4 outline-primary-900 w-full text-slate-700 placeholder-slate-400"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-slate-500" htmlFor="companyName">
                        Confirm password
                    </label>
                    <input
                        id="companyName"
                        type="email"
                        placeholder=""
                        className="block bg-slate-50 rounded-lg p-2 px-4 outline-primary-900 w-full text-slate-700 placeholder-slate-400"
                    />
                </div> */}
                <div className="text-right pt-10">
                    <button
                        type="submit"
                        className=" w-full md:w-auto px-6 text-white text-sm bg-primary-900 p-2 rounded-lg hover:bg-primary-950 transition-all ease-in-out duration-300"
                    >
                        Save
                    </button>
                </div>
            </form>
        </article>
    );
};
