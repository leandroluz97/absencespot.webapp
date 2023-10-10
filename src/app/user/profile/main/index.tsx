import { Link, useSearchParams } from 'react-router-dom';
import * as R from 'ramda';
import { Avatar } from '@/_common/avatar';
import { URLSearch } from '@/constants/utils/URLSearch';
import { BasicTabs } from '@/_common/tabs';
const options = [
    { value: 'organization', label: 'Organization' },
    { value: 'office', label: 'Office' },
    { value: 'team', label: 'Team' },
];

export const ProfileMain = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const QUERIES = URLSearch.queries();

    return (
        <article className="space-y-6">
            <header className="flex justify-between">
                <h2 className="text-lg text-slate-500 font-bold">Personal Information</h2>
                <Link
                    to="new"
                    type="button"
                    className="px-6 text-white text-sm bg-primary-900 p-2 rounded-lg hover:bg-primary-950 transition-all ease-in-out duration-300"
                >
                    Edit
                </Link>
            </header>
            <section className="space-y-4 flex gap-4">
                <Avatar.Root className="w-16 h-16">
                    <Avatar.Initials>ES</Avatar.Initials>
                </Avatar.Root>
                <div>
                    <p className="text-slate-600 font-bold">Emily Smith</p>
                    <p className="text-slate-400 ">emily.smith@absencespot.com</p>
                </div>
            </section>
            <div className="h-[1px] w-full bg-slate-100"></div>
            <section className="space-y-4">
                <h3 className="text-slate-400 font-bold">Personal information</h3>
                <div className="grid grid-cols-4 gap-2">
                    <div className="space-y-2">
                        <p className="text-slate-500 font-semibold">Email:</p>
                        <p className="text-slate-400 ">emily.smith@absencespot.com</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-slate-500 font-semibold">Adress:</p>
                        <p className="text-slate-400 ">unknown</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-slate-500 font-semibold">Birthday:</p>
                        <p className="text-slate-400 ">20/12/2023</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-slate-500 font-semibold">Emergency Contact:</p>
                        <p className="text-slate-400 ">999 999 999 </p>
                    </div>
                </div>
            </section>
            <div className="h-[1px] w-full bg-slate-100"></div>
            <section className="space-y-4">
                <h3 className="text-slate-400 font-bold">Employee information</h3>
                <div className="grid grid-cols-4 gap-2">
                    <div className="space-y-2">
                        <p className="text-slate-500 font-semibold">Post:</p>
                        <p className="text-slate-400 ">emily.smith@absencespot.com</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-slate-500 font-semibold">Employee ID:</p>
                        <p className="text-slate-400 ">unknown</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-slate-500 font-semibold">Employee since:</p>
                        <p className="text-slate-400 ">20/12/2023</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-slate-500 font-semibold">Team:</p>
                        <p className="text-slate-400 ">Human Resources</p>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                    <div className="space-y-2">
                        <p className="text-slate-500 font-semibold">Office:</p>
                        <p className="text-slate-400 ">Lisbon - Marquês Pombal</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-slate-500 font-semibold">Work Phone:</p>
                        <p className="text-slate-400 ">999 999 999</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-slate-500 font-semibold">Role:</p>
                        <p className="text-slate-400 ">Admin</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-slate-500 font-semibold">Approvers:</p>
                        <p className="text-slate-400 ">999 999 999 </p>
                    </div>
                </div>
            </section>
            <div className="h-[1px] w-full bg-slate-100"></div>
            <section className="space-y-4">
                <div className="flex justify-between">
                    <h2 className="text-lg text-slate-500 font-bold">Working Days</h2>
                    <Link
                        to="new"
                        type="button"
                        className="px-6 text-white text-sm bg-primary-900 p-2 rounded-lg hover:bg-primary-950 transition-all ease-in-out duration-300"
                    >
                        Edit
                    </Link>
                </div>
                <div className="grid grid-cols-4 gap-2">
                    <div className="space-y-2">
                        <p className="text-slate-500 font-semibold">Working Days:</p>
                        <p className="text-slate-400 ">5 days a week </p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-slate-500 font-semibold">Working hours:</p>
                        <p className="text-slate-400 ">35 hours a week</p>
                    </div>
                </div>
            </section>
            <div className="h-[1px] w-full bg-slate-100"></div>
            <section className="space-y-4">
                <div className="flex justify-between">
                    <h2 className="text-lg text-slate-500 font-bold">Leave quotas</h2>
                </div>

                <div className="flex flex-col">
                    <BasicTabs.Root>
                        <BasicTabs.List
                            className="flex justify-start gap-4"
                            aria-label="Filter by absence types"
                        >
                            <BasicTabs.Trigger value="vacation" className="p-0">
                                <BasicTabs.Link
                                    className="p-2"
                                    to={URLSearch.set({ type: 'vacation' })}
                                    isActive={QUERIES.type === 'vacation' || R.isNil(QUERIES.type)}
                                >
                                    Vacation
                                </BasicTabs.Link>
                            </BasicTabs.Trigger>
                            <BasicTabs.Trigger value="sick" className="p-0">
                                <BasicTabs.Link
                                    className="p-2"
                                    to={URLSearch.set({ type: 'sick' })}
                                    isActive={QUERIES.type === 'sick'}
                                >
                                    Sick Leave
                                </BasicTabs.Link>
                            </BasicTabs.Trigger>
                        </BasicTabs.List>
                    </BasicTabs.Root>
                </div>
                <div className="grid grid-cols-4 ">
                    <div className="space-y-2 text-center">
                        <p className="text-slate-500 text-xs font-semibold">
                            Previous year's holidays
                        </p>
                        <p className="text-slate-700 font-bold text-lg">02</p>
                    </div>
                    <div className="space-y-2 text-center">
                        <p className="text-slate-500 text-xs font-semibold">Annual Vacation</p>
                        <p className="text-slate-700 font-bold text-lg">22</p>
                    </div>
                    <div className="space-y-2 text-center">
                        <p className="text-slate-500 text-xs font-semibold">Planned</p>
                        <p className="text-slate-700 font-bold text-lg">04</p>
                    </div>
                    <div className="space-y-2 text-center">
                        <p className="text-slate-500 text-xs font-semibold">
                            Total available leave
                        </p>
                        <p className="text-slate-700 font-bold text-lg">18</p>
                    </div>
                </div>
            </section>
        </article>
    );
};
