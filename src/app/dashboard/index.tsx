import { Check, Search, X } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';
import { NavLink } from 'react-router-dom';

export const Dashboard = () => {
    return (
        <article className="flex h-full gap-[3px]">
            <div className="flex-grow-10 flex flex-col gap-[3px]">
                <div className="flex flex-col flex-1 gap-[3px] rounded">
                    <div className="rounded p-3">
                        <h2 className="text-slate-600 text-xl font-bold">Hello, Emily Smith 👋</h2>
                        <p className="text-slate-400">
                            Here is what’s happening at
                            <span className="font-bold">AbsenceSpot</span>
                        </p>
                    </div>
                    <div className="flex-1 flex gap-[3px]">
                        <div className="w-1/2 bg-white rounded">
                            <div className="h-full flex flex-col justify-center p-6 gap-3">
                                <div className="flex justify-between">
                                    <div className="text-center p-2">
                                        <p className="text-slate-700 font-extrabold">06</p>
                                        <p className="text-slate-400">Planned</p>
                                    </div>
                                    <div className="text-center p-2">
                                        <p className="text-slate-700 font-extrabold">06</p>
                                        <p className="text-slate-400">Planned</p>
                                    </div>
                                    <div className="text-center p-2">
                                        <p className="text-slate-700 font-extrabold">06</p>
                                        <p className="text-slate-400">Planned</p>
                                    </div>
                                    <div className="text-center p-2">
                                        <p className="text-slate-700 font-extrabold">06</p>
                                        <p className="text-slate-400">Planned</p>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-center p-2">
                                        <p className="text-slate-700 font-extrabold">06</p>
                                        <p className="text-slate-400">Planned</p>
                                    </div>
                                    <div className="text-center p-2">
                                        <p className="text-slate-700 font-extrabold">06</p>
                                        <p className="text-slate-400">Planned</p>
                                    </div>
                                    <div className="text-center p-2">
                                        <p className="text-slate-700 font-extrabold">06</p>
                                        <p className="text-slate-400">Planned</p>
                                    </div>
                                    <div className="text-center p-2">
                                        <p className="text-slate-700 font-extrabold">06</p>
                                        <p className="text-slate-400">Planned</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 bg-white rounded">Right</div>
                    </div>
                </div>
                <div className="p-3 rounded">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-slate-600 text-xl font-bold">Upcoming Requests</h2>
                            <p className="text-slate-400">Future and pending absences</p>
                        </div>
                        <button className="text-white text-sm bg-primary-900 p-3 px-4 rounded-lg hover:bg-primary-950 transition-all ease-in-out duration-300">
                            View All
                        </button>
                    </div>
                </div>
                <div className="flex-1 rounded">
                    <div className="space-y-[3px]">
                        <div className=" justify-between bg-white p-3 rounded grid grid-cols-12">
                            <div className="text-slate-600 font-bold col-span-3">Employee</div>
                            <div className="text-slate-600 font-bold col-span-2">Type</div>
                            <div className="text-slate-600 font-bold col-span-2">Date</div>
                            <div className="text-slate-600 font-bold col-span-1">Duration</div>
                            <div className="text-slate-600 font-bold col-span-2 text-right">
                                Status
                            </div>
                            <div className="text-slate-600 font-bold col-span-3"></div>
                        </div>
                        <div className="justify-between items-center bg-white p-3 rounded grid gap-x-2 grid-cols-12">
                            <div className="col-span-3">
                                <div className="flex gap-2 items-center">
                                    <div className="w-8 h-8 bg-slate-200 rounded-full flex flex-shrink-0 justify-center items-center">
                                        <p className="text-slate-600 leading-none font-bold text-sm">
                                            CH
                                        </p>
                                    </div>
                                    <p className="truncate text-slate-500 text-sm">Justine Andre</p>
                                </div>
                            </div>
                            <div className="col-span-2 flex items-center">
                                <p className="font-bold text-green-500">Vacation</p>
                            </div>
                            <div className="col-span-2 flex items-center ">
                                <p className="text-slate-500 text-sm">Jun 26</p>
                            </div>
                            <div className="col-span-1 flex items-center">
                                <p className="text-slate-500 text-sm">1 Days</p>
                            </div>
                            <div className="col-span-2 flex items-center text-slate-500 justify-end">
                                <p className="font-bold text-sm bg-violet-100 text-violet-800 rounded-lg p-1 px-3">
                                    Pending
                                </p>
                            </div>
                            <div className="col-span-2 flex items-center text-slate-500 gap-2 justify-end">
                                <button className="text-white text-sm bg-slate-100 p-2 rounded-lg hover:bg-slate-200 transition-all ease-in-out duration-300">
                                    <X className="text-slate-400" />
                                </button>
                                <button className="text-white text-sm bg-primary-900 p-2 rounded-lg hover:bg-primary-950 transition-all ease-in-out duration-300">
                                    <Check />
                                </button>
                            </div>
                        </div>
                        <div className="justify-between items-center bg-white p-3 rounded grid gap-x-2 grid-cols-12">
                            <div className="col-span-3">
                                <div className="flex gap-2 items-center">
                                    <div className="w-8 h-8 bg-slate-200 rounded-full flex flex-shrink-0 justify-center items-center">
                                        <p className="text-slate-600 leading-none font-bold text-sm">
                                            CH
                                        </p>
                                    </div>
                                    <p className="truncate text-slate-500 text-sm">Justine Andre</p>
                                </div>
                            </div>
                            <div className="col-span-2 flex items-center">
                                <p className="font-bold text-green-500">Vacation</p>
                            </div>
                            <div className="col-span-2 flex items-center ">
                                <p className="text-slate-500 text-sm">Jun 26</p>
                            </div>
                            <div className="col-span-1 flex items-center">
                                <p className="text-slate-500 text-sm">1 Days</p>
                            </div>
                            <div className="col-span-2 flex items-center text-slate-500 justify-end">
                                <p className="font-bold text-sm bg-violet-100 text-violet-800 rounded-lg p-1 px-3">
                                    Pending
                                </p>
                            </div>
                            <div className="col-span-2 flex items-center text-slate-500 gap-2 justify-end">
                                <button className="text-white text-sm bg-slate-100 p-2 rounded-lg hover:bg-slate-200 transition-all ease-in-out duration-300">
                                    <X className="text-slate-400" />
                                </button>
                                <button className="text-white text-sm bg-primary-900 p-2 rounded-lg hover:bg-primary-950 transition-all ease-in-out duration-300">
                                    <Check />
                                </button>
                            </div>
                        </div>
                        <div className="justify-between items-center bg-white p-3 rounded grid gap-x-2 grid-cols-12">
                            <div className="col-span-3">
                                <div className="flex gap-2 items-center">
                                    <div className="w-8 h-8 bg-slate-200 rounded-full flex flex-shrink-0 justify-center items-center">
                                        <p className="text-slate-600 leading-none font-bold text-sm">
                                            CH
                                        </p>
                                    </div>
                                    <p className="truncate text-slate-500 text-sm">Justine Andre</p>
                                </div>
                            </div>
                            <div className="col-span-2 flex items-center">
                                <p className="font-bold text-green-500">Vacation</p>
                            </div>
                            <div className="col-span-2 flex items-center ">
                                <p className="text-slate-500 text-sm">Jun 26</p>
                            </div>
                            <div className="col-span-1 flex items-center">
                                <p className="text-slate-500 text-sm">1 Days</p>
                            </div>
                            <div className="col-span-2 flex items-center text-slate-500 justify-end">
                                <p className="font-bold text-sm bg-violet-100 text-violet-800 rounded-lg p-1 px-3">
                                    Pending
                                </p>
                            </div>
                            <div className="col-span-2 flex items-center text-slate-500 gap-2 justify-end">
                                <button className="text-white text-sm bg-slate-100 p-2 rounded-lg hover:bg-slate-200 transition-all ease-in-out duration-300">
                                    <X className="text-slate-400" />
                                </button>
                                <button className="text-white text-sm bg-primary-900 p-2 rounded-lg hover:bg-primary-950 transition-all ease-in-out duration-300">
                                    <Check />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <aside className="flex-grow-3 bg-white h-full max-w-sm rounded">
                <div className="p-4 flex justify-between items-center">
                    <h3 className="text-slate-500 font-bold">Calendar</h3>
                    <button className="text-white text-sm bg-primary-900 p-3 px-4 rounded-lg hover:bg-primary-950 transition-all ease-in-out duration-300">
                        View All
                    </button>
                </div>
                <div className="p-4">
                    <h4 className="mb-4 text-sm font-bold text-slate-500 ">May, 2023</h4>
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
                                        className="TabsTrigger p-2 font-semibold text-slate-600 text-sm relative "
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
                                        className="TabsTrigger p-2 font-semibold text-slate-600 text-sm"
                                        value="tab2"
                                    >
                                        Remote
                                    </Tabs.Trigger>
                                    <Tabs.Trigger
                                        className="TabsTrigger p-2 font-semibold text-slate-600 text-sm"
                                        value="tab1"
                                    >
                                        Holiday
                                    </Tabs.Trigger>
                                    <Tabs.Trigger
                                        className="TabsTrigger p-2 font-semibold text-slate-600 text-sm"
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
