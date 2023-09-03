import { Search } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Dashboard = () => {
    return (
        <article className="flex h-full">
            <div className="flex-grow-9">
                <p>
                    Dashboardxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxddddddddddxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    dsdsdsd sdsdsdsds sadas
                </p>
                <p>Dashboard</p>
                <p>Dashboard</p>
            </div>
            <aside className="flex-grow-3 bg-white h-full">
                <div className="p-4 flex justify-between items-center">
                    <h3 className="text-slate-500 font-bold">Calendar</h3>
                    <button className="text-white text-sm bg-primary-900 p-3 px-4 rounded-lg hover:bg-primary-950 transition-all ease-in-out duration-300">
                        View All
                    </button>
                </div>
                <div className="p-4 ">
                    <h4 className="mb-4">May, 2023</h4>
                    <div className="flex gap-2 justify-between">
                        <div className="group p-2 px-3 rounded text-center">
                            <p className="text-slate-800 font-bold">1</p>
                            <p className="text-slate-400">Su</p>
                        </div>
                        <div className="p-2 px-3 rounded text-center">
                            <p className="text-slate-800 font-bold">2</p>
                            <p className="text-slate-400">Mo</p>
                        </div>
                        <div className="p-2 px-3 rounded text-center">
                            <p className="text-slate-800 font-bold">3</p>
                            <p className="text-slate-400">Tu</p>
                        </div>
                        <div className="p-2 px-3 rounded text-center">
                            <p className="text-slate-800 font-bold">4</p>
                            <p className="text-slate-400">We</p>
                        </div>
                        <div className="froup p-2 px-3 bg-primary-100 rounded text-center">
                            <p className="text-primary-900 font-bold ">5</p>
                            <p className="text-primary-500">Th</p>
                        </div>
                        <div className="p-2 px-3 rounded text-center">
                            <p className="text-slate-800 font-bold">6</p>
                            <p className="text-slate-400">Fr</p>
                        </div>
                        <div className="p-2 px-3 rounded text-center">
                            <p className="text-slate-800 font-bold">7</p>
                            <p className="text-slate-400">Sa</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="relative max-w-full w-full">
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

                        <div className="mt-4 space-y-2">
                            <Tabs.Root className="TabsRoot" defaultValue="tab1">
                                <Tabs.List
                                    className="TabsList flex justify-between "
                                    aria-label="Filter by absence types"
                                >
                                    <Tabs.Trigger
                                        className="TabsTrigger p-2 font-semibold text-slate-600 relative "
                                        value="tab1"
                                    >
                                        <NavLink
                                            to={''}
                                            className="inline-block before:md:absolute before:md:w-full before:md:h-1 before:md:bg-primary-800 before:md:left-0 before:md:bottom-0 before:md:rounded-t-lg"
                                        >
                                            Leaves
                                        </NavLink>
                                    </Tabs.Trigger>
                                    <Tabs.Trigger
                                        className="TabsTrigger p-2 font-semibold text-slate-600"
                                        value="tab2"
                                    >
                                        Remote
                                    </Tabs.Trigger>
                                    <Tabs.Trigger
                                        className="TabsTrigger p-2 font-semibold text-slate-600"
                                        value="tab1"
                                    >
                                        Holiday
                                    </Tabs.Trigger>
                                    <Tabs.Trigger
                                        className="TabsTrigger p-2 font-semibold text-slate-600"
                                        value="tab2"
                                    >
                                        Birthday
                                    </Tabs.Trigger>
                                </Tabs.List>
                            </Tabs.Root>
                            <div className="flex gap-2 p-2 rounded-lg hover:bg-slate-100 cursor-pointer transition-all ease-in-out duration-300">
                                <div className="w-10 h-10 bg-slate-200 rounded-full flex justify-center items-center">
                                    <p className="text-slate-600 leading-none font-bold">CH</p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold">
                                        Cecilia Hernández
                                    </p>
                                    <p className="text-sm text-slate-400">Maternity</p>
                                </div>
                            </div>
                            <div className="flex gap-2 p-2 rounded-lg hover:bg-slate-100 cursor-pointer transition-all ease-in-out duration-300">
                                <div className="w-10 h-10 bg-slate-200 rounded-full flex justify-center items-center">
                                    <p className="text-slate-600 leading-none font-bold">CH</p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold">
                                        Cecilia Hernández
                                    </p>
                                    <p className="text-sm text-slate-400">Maternity</p>
                                </div>
                            </div>
                            <div className="flex gap-2 p-2 rounded-lg hover:bg-slate-100 cursor-pointer transition-all ease-in-out duration-300">
                                <div className="w-10 h-10 bg-slate-200 rounded-full flex justify-center items-center">
                                    <p className="text-slate-600 leading-none font-bold">CH</p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold">
                                        Cecilia Hernández
                                    </p>
                                    <p className="text-sm text-slate-400">Maternity</p>
                                </div>
                            </div>
                            <div className="flex gap-2 p-2 rounded-lg hover:bg-slate-100 cursor-pointer transition-all ease-in-out duration-300">
                                <div className="w-10 h-10 bg-slate-200 rounded-full flex justify-center items-center">
                                    <p className="text-slate-600 leading-none font-bold">CH</p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold">
                                        Cecilia Hernández
                                    </p>
                                    <p className="text-sm text-slate-400">Maternity</p>
                                </div>
                            </div>
                            {/* <div className="flex gap-2 p-2 rounded-lg hover:bg-slate-100 cursor-pointer transition-all ease-in-out duration-300">
                                <div className="w-10 h-10 bg-slate-200 rounded-full flex justify-center items-center">
                                    <p className="text-slate-600 leading-none font-bold">CH</p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold">
                                        Cecilia Hernández
                                    </p>
                                    <p className="text-sm text-slate-400">Maternity</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </aside>
        </article>
    );
};
