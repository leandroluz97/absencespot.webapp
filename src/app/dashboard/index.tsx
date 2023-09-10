import { Check, Search, X } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { BarChart } from '../_common/charts/BarChart';
import { PieChart } from '../_common/charts/PieChart';
import { BasicMetric } from '../_common/metrics';
import { BasicTabs } from '@/_common/tabs';
import { BasicCard } from '../_common/cards';
import { Avatar } from '@/_common/avatar';
import { CalendarFilter } from './_common/CalendarFilter';
const dataCircularOne = [
    { name: 'Planned', value: 6 },
    { name: 'Left', value: 18 },
];
const dataCircularTwo = [
    { name: 'Planned', value: 3 },
    { name: 'Left', value: 1 },
];
const COLORS = ['#2693FF', '#C2E1FF'];

const data1 = [
    {
        name: 'Mo',
        'Worked Hours': 4000,
        Overtime: 2400,
        amt: 2400,
    },
    {
        name: 'Tu',
        'Worked Hours': 3000,
        Overtime: 1398,
        amt: 2210,
    },
    {
        name: 'We',
        'Worked Hours': 2000,
        Overtime: 800,
        amt: 2290,
    },
    {
        name: 'Th',
        'Worked Hours': 2780,
        Overtime: 3908,
        amt: 2000,
    },
    {
        name: 'Fr',
        'Worked Hours': 1890,
        Overtime: 4800,
        amt: 2181,
    },
    {
        name: 'Sa',
        'Worked Hours': 2390,
        Overtime: 3800,
        amt: 2500,
    },
    {
        name: 'Su',
        'Worked Hours': 3490,
        Overtime: 4300,
        amt: 2100,
    },
];

export const Dashboard = () => {
    return (
        <article className="flex h-full gap-[3px] overflow-hidden rounded">
            <div className="flex-grow-10 flex flex-col gap-[3px] overflow-y-auto">
                <div className="flex flex-col flex-1 gap-[3px] rounded">
                    <div className="rounded p-3 flex justify-center md:justify-between items-end">
                        <div className="hidden md:block ">
                            <h2 className="text-slate-600 text-xl font-bold">
                                Hello, Emily Smith 👋
                            </h2>
                            <p className="text-slate-400">
                                Here is what’s happening at
                                <span className="font-bold"> AbsenceSpot</span>
                            </p>
                        </div>
                        <div>
                            <BasicTabs.Root>
                                <BasicTabs.List aria-label="Filter by company/personal">
                                    <BasicTabs.Trigger value="company">
                                        <BasicTabs.Link to="" isActive>
                                            Company
                                        </BasicTabs.Link>
                                    </BasicTabs.Trigger>
                                    <BasicTabs.Trigger value="personal">
                                        <BasicTabs.Link to="" isActive={false}>
                                            Personal
                                        </BasicTabs.Link>
                                    </BasicTabs.Trigger>
                                </BasicTabs.List>
                            </BasicTabs.Root>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col lg:flex-row gap-[3px]">
                        <div className="w-full lg:w-1/2 bg-white rounded">
                            <div className="h-full flex flex-col p-6 gap-1">
                                <h4 className="text-slate-600 text-sm font-bold">Annual Leaves</h4>
                                <div className="flex justify-evenly items-center mx-auto w-full max-w-lg">
                                    <div className="text-left p-2">
                                        <h5 className="text-slate-400 text-sm font-medium pb-3">
                                            Vacation
                                        </h5>
                                        <PieChart data={dataCircularOne} width={100} height={100} />
                                    </div>
                                    <div className="flex-1 flex flex-row justify-evenly">
                                        <BasicMetric.Root>
                                            <BasicMetric.Title>06</BasicMetric.Title>
                                            <BasicMetric.Description>
                                                Planned
                                            </BasicMetric.Description>
                                        </BasicMetric.Root>
                                        <BasicMetric.Root>
                                            <BasicMetric.Title>18</BasicMetric.Title>
                                            <BasicMetric.Description>Left</BasicMetric.Description>
                                        </BasicMetric.Root>
                                        <BasicMetric.Root>
                                            <BasicMetric.Title>24</BasicMetric.Title>
                                            <BasicMetric.Description>
                                                Annual
                                            </BasicMetric.Description>
                                        </BasicMetric.Root>
                                    </div>
                                </div>
                                <div className="flex justify-evenly mx-auto w-full max-w-lg">
                                    <div className="text-left p-2">
                                        <h5 className="text-slate-400 text-sm font-medium pb-3">
                                            Others
                                        </h5>
                                        <PieChart data={dataCircularTwo} width={100} height={100} />
                                    </div>
                                    <div className="flex-1 flex flex-row justify-evenly">
                                        <BasicMetric.Root>
                                            <BasicMetric.Title>03</BasicMetric.Title>
                                            <BasicMetric.Description>
                                                Planned
                                            </BasicMetric.Description>
                                        </BasicMetric.Root>
                                        <BasicMetric.Root>
                                            <BasicMetric.Title>01</BasicMetric.Title>
                                            <BasicMetric.Description>Left</BasicMetric.Description>
                                        </BasicMetric.Root>
                                        <BasicMetric.Root>
                                            <BasicMetric.Title>04</BasicMetric.Title>
                                            <BasicMetric.Description>
                                                Annual
                                            </BasicMetric.Description>
                                        </BasicMetric.Root>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 bg-white rounded">
                            <div className="h-full flex flex-col p-6 gap-3">
                                <h4 className="text-slate-600 text-sm font-bold">
                                    Employee Time Tracking
                                </h4>
                                <div>
                                    <div className="flex gap-3 mb-3 mt-3 justify-center">
                                        <div className="flex items-center gap-1 text-sm">
                                            <div
                                                className="bg-primary-900 rounded"
                                                style={{ width: '14px', height: '14px' }}
                                            ></div>
                                            <p className="text-xs font-bold text-slate-600">
                                                Work Hours
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-1 text-sm">
                                            <div
                                                className="bg-primary-300 rounded"
                                                style={{ width: '14px', height: '14px' }}
                                            ></div>
                                            <p className="text-xs font-bold text-slate-600">
                                                Overtime
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-center items-center mx-auto max-w-lg">
                                        <BarChart data={data1} />
                                    </div>
                                </div>
                            </div>
                        </div>
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
                <div className="flex-1 shrink-0 rounded ">
                    <div className="space-y-[3px] overflow-x-auto">
                        <div
                            className="flex flex-col w-100 space-y-[3px]"
                            style={{ minWidth: '600px' }}
                        >
                            <div className="justify-between bg-white p-3 rounded grid grid-cols-12">
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
                                        <p className="truncate text-slate-500 text-sm">
                                            Justine Andre
                                        </p>
                                    </div>
                                </div>
                                <div className="col-span-2 flex items-center">
                                    <p className="font-bold text-green-500">Vacation</p>
                                </div>
                                <div className="col-span-2 flex items-center ">
                                    <p className="text-slate-500 text-sm">Jun 26 - Jun 27</p>
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
                                        <p className="truncate text-slate-500 text-sm">
                                            Justine Andre
                                        </p>
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
                                        <p className="truncate text-slate-500 text-sm">
                                            Justine Andre
                                        </p>
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
                                        <p className="truncate text-slate-500 text-sm">
                                            Justine Andre
                                        </p>
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
            </div>
            {/* <aside className="hidden xl:block flex-grow-3 bg-white h-full max-w-sm rounded">
                <div className="p-4 flex justify-between items-center">
                    <h3 className="text-slate-500 font-bold">Calendar</h3>
                    <button className="text-white text-sm bg-primary-900 p-3 px-4 rounded-lg hover:bg-primary-950 transition-all ease-in-out duration-300">
                        View All
                    </button>
                </div>
                <div className="p-4">
                    <h4 className="mb-4 text-sm font-bold text-slate-500 ">May, 2023</h4>
                    <div className="flex gap-2 justify-between">
                        <div className="group  py-3 px-3 rounded text-center relative hover:bg-primary-100 cursor-pointer transition-all ease-in-out duration-300">
                            <p className="text-slate-600 group-hover:text-primary-900 font-bold">
                                1
                            </p>
                            <p className="text-slate-400 group-hover:text-primary-500 after:absolute after:left-1/2 after:text-primary-900 after:-translate-x-1/2 after:-bottom-1 after:content-['•']">
                                Su
                            </p>
                        </div>
                        <div className="group  py-3 px-3 rounded text-center relative hover:bg-primary-100 cursor-pointer transition-all ease-in-out duration-300">
                            <p className="text-slate-600 font-bold group-hover:text-primary-900">
                                2
                            </p>
                            <p className="text-slate-400 group-hover:text-primary-500 after:absolute after:left-1/2 after:text-primary-900 after:-translate-x-1/2 after:-bottom-1 after:content-['•']">
                                Mo
                            </p>
                        </div>
                        <div className="group  py-3 px-3 rounded text-center relative hover:bg-primary-100 cursor-pointer transition-all ease-in-out duration-300">
                            <p className="text-slate-600 font-bold group-hover:text-primary-900">
                                3
                            </p>
                            <p className="text-slate-400 group-hover:text-primary-500 after:absolute after:left-1/2 after:text-primary-900 after:-translate-x-1/2 after:-bottom-1 after:content-['•']">
                                Tu
                            </p>
                        </div>
                        <div className="group  py-3 px-3 rounded text-center relative hover:bg-primary-100 cursor-pointer transition-all ease-in-out duration-300">
                            <p className="text-slate-600 font-bold group-hover:text-primary-900">
                                4
                            </p>
                            <p className="text-slate-400 group-hover:text-primary-500 after:absolute after:left-1/2 after:text-primary-900 after:-translate-x-1/2 after:-bottom-1 after:content-['•']">
                                We
                            </p>
                        </div>
                        <div className="group py-3 px-3 bg-primary-100 rounded text-center relative hover:bg-primary-100 cursor-pointer transition-all ease-in-out duration-300">
                            <p className="text-primary-900 font-bold group-hover:text-primary-900">
                                5
                            </p>
                            <p className="text-primary-500 after:absolute after:left-1/2 after:text-primary-900 after:-translate-x-1/2 after:-bottom-1 after:content-['•']">
                                Th
                            </p>
                        </div>
                        <div className="group  py-3 px-3 rounded text-center relative hover:bg-primary-100 cursor-pointer transition-all ease-in-out duration-300">
                            <p className="text-slate-600 font-bold group-hover:text-primary-900">
                                6
                            </p>
                            <p className="text-slate-400 group-hover:text-primary-500 after:absolute after:left-1/2 after:text-primary-900 after:-translate-x-1/2 after:-bottom-1 after:content-['•']">
                                Fr
                            </p>
                        </div>
                        <div className="group  py-3 px-3 rounded text-center relative hover:bg-primary-100 cursor-pointer transition-all ease-in-out duration-300">
                            <p className="text-slate-600 font-bold group-hover:text-primary-900">
                                7
                            </p>
                            <p className="text-slate-400 group-hover:text-primary-500">Sa</p>
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
                            <BasicTabs.Root>
                                <BasicTabs.List
                                    className="flex justify-between"
                                    aria-label="Filter by absence types"
                                >
                                    <BasicTabs.Trigger value="leaves">
                                        <BasicTabs.Link to="" isActive>
                                            Leaves
                                        </BasicTabs.Link>
                                    </BasicTabs.Trigger>
                                    <BasicTabs.Trigger value="remote">
                                        <BasicTabs.Link to="" isActive={false}>
                                            Remote
                                        </BasicTabs.Link>
                                    </BasicTabs.Trigger>
                                    <BasicTabs.Trigger value="holiday">
                                        <BasicTabs.Link to="" isActive={false}>
                                            Holiday
                                        </BasicTabs.Link>
                                    </BasicTabs.Trigger>
                                    <BasicTabs.Trigger value="birthday">
                                        <BasicTabs.Link to="" isActive={false}>
                                            Birthday
                                        </BasicTabs.Link>
                                    </BasicTabs.Trigger>
                                </BasicTabs.List>
                            </BasicTabs.Root>
                            <div className=" space-y-2">
                                <BasicCard.Root>
                                    <Avatar.Root>
                                        <Avatar.Initials>CH</Avatar.Initials>
                                    </Avatar.Root>
                                    <BasicCard.Content>
                                        <BasicCard.Item className="text-sm text-slate-500 font-bold">
                                            Cecilia Hernández
                                        </BasicCard.Item>
                                        <BasicCard.Item className="text-sm text-slate-400">
                                            Maternity
                                        </BasicCard.Item>
                                    </BasicCard.Content>
                                </BasicCard.Root>
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
                            </div>
                        </div>
                    </div>
                </div>
            </aside> */}
            <CalendarFilter />
        </article>
    );
};
