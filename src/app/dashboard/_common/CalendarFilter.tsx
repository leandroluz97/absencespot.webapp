import { twMerge } from 'tailwind-merge';
import * as R from 'ramda';
import * as datefns from 'date-fns';
import { MousePointerSquare, Search } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

import { Avatar } from '@/_common/avatar';
import { BasicTabs } from '@/_common/tabs';
import { debounce } from '@/constants/utils/debounce';
import { URLSearch } from '@/constants/utils/URLSearch';
//import { BasicCard, BasicCard } from '@/app/_common/cards';

export const CalendarFilter = () => {
    const QUERIES = URLSearch.queries();
    const [searchParams, setSearchParams] = useSearchParams();
    const DEBOUNCE_TIME = 1000;
    const STATE = false;
    const setSearchText = debounce(searchParams, setSearchParams, DEBOUNCE_TIME);
    const selectedDate = QUERIES.date || datefns.format(new Date(), 'yyyy-MM-dd');

    const weekDays = datefns.eachDayOfInterval({
        start: datefns.startOfWeek(new Date()),
        end: datefns.endOfWeek(new Date()),
    });

    return (
        <aside className="small-scroll hidden xl:block flex-grow-3 bg-white h-full max-w-sm rounded">
            <div className="p-4 flex flex-col h-full gap-6">
                <div className="flex justify-between items-center">
                    <h3 className="text-slate-500 font-bold">Calendar</h3>
                    <button className="text-white text-sm bg-primary-900 p-3 px-4 rounded-lg hover:bg-primary-950 transition-all ease-in-out duration-300">
                        View All
                    </button>
                </div>
                <div className="flex-1 flex flex-col overflow-hidden">
                    <h4 className="mb-4 text-sm font-bold text-slate-500 ">
                        {datefns.format(new Date(), 'MMM, yyyy')}
                    </h4>
                    <div className="flex gap-1 justify-between">
                        {weekDays.map((day) => {
                            const isActive = datefns.format(day, 'yyyy-MM-dd') === selectedDate;
                            return (
                                <Link
                                    key={datefns.format(day, 'd')}
                                    to={`?date=${datefns.format(day, 'yyyy-MM-dd')}`}
                                    className={twMerge(
                                        'group py-3 px-3 rounded text-center relative hover:bg-primary-100 cursor-pointer transition-all ease-in-out duration-300',
                                        isActive ? ' bg-primary-100' : ''
                                    )}
                                >
                                    <p
                                        className={twMerge(
                                            'text-slate-600 group-hover:text-primary-900 font-bold',
                                            isActive ? ' text-primary-500' : ''
                                        )}
                                    >
                                        {datefns.format(day, 'd')}
                                    </p>
                                    <p
                                        className={twMerge(
                                            "text-slate-400 group-hover:text-primary-500 after:absolute after:left-1/2 after:text-primary-900 after:-translate-x-1/2 after:-bottom-1 after:content-['•']",
                                            isActive ? ' text-primary-500' : ''
                                        )}
                                    >
                                        {datefns.format(day, 'E').substring(0, 2)}
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                    <div className="mt-6 flex-1 flex flex-col overflow-hidden p-1 ">
                        <div className="relative max-w-full w-full">
                            <Search
                                size={20}
                                className="absolute top-2 left-4 translate-y-0.5 text-slate-400"
                            />
                            <input
                                defaultValue={QUERIES.searchText || ''}
                                onChange={(e) => {
                                    setSearchText(['searchText', e.target.value]);
                                }}
                                type="text"
                                placeholder="Search"
                                className="bg-slate-100 rounded-lg p-2 pl-12 outline-primary-900 w-full text-slate-700 placeholder-slate-400"
                            />
                        </div>
                        <div className="mt-4 space-y-2 flex-1 flex flex-col overflow-hidden">
                            <BasicTabs.Root>
                                <BasicTabs.List
                                    className="flex justify-between"
                                    aria-label="Filter by absence types"
                                >
                                    <BasicTabs.Trigger value="leaves" className="p-0">
                                        <BasicTabs.Link
                                            className="p-2"
                                            to={URLSearch.set({ type: 'leaves' })}
                                            isActive={
                                                QUERIES.type === 'leaves' || R.isNil(QUERIES.type)
                                            }
                                        >
                                            Leaves
                                        </BasicTabs.Link>
                                    </BasicTabs.Trigger>
                                    <BasicTabs.Trigger value="remote" className="p-0">
                                        <BasicTabs.Link
                                            className="p-2"
                                            to={URLSearch.set({ type: 'remotes' })}
                                            isActive={QUERIES.type === 'remotes'}
                                        >
                                            Remote
                                        </BasicTabs.Link>
                                    </BasicTabs.Trigger>
                                    <BasicTabs.Trigger value="holiday" className="p-0">
                                        <BasicTabs.Link
                                            className="p-2"
                                            to={URLSearch.set({ type: 'holiday' })}
                                            isActive={QUERIES.type === 'holiday'}
                                        >
                                            Holiday
                                        </BasicTabs.Link>
                                    </BasicTabs.Trigger>
                                    <BasicTabs.Trigger value="birthday" className="p-0">
                                        <BasicTabs.Link
                                            className="p-2"
                                            to={URLSearch.set({ type: 'birthday' })}
                                            isActive={QUERIES.type === 'birthday'}
                                        >
                                            Birthday
                                        </BasicTabs.Link>
                                    </BasicTabs.Trigger>
                                </BasicTabs.List>
                            </BasicTabs.Root>
                            <div className="flex flex-col overflow-hidden ">
                                <div className=" space-y-2 overflow-y-auto">
                                    {
                                        STATE ? (
                                            Array(10)
                                                .fill(2)
                                                .map((_, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex gap-2 p-2 rounded-lg hover:bg-slate-100 cursor-pointer transition-all ease-in-out duration-300"
                                                    >
                                                        <Avatar.Root>
                                                            <Avatar.Initials>CH</Avatar.Initials>
                                                        </Avatar.Root>
                                                        <div>
                                                            <p className="text-sm text-slate-500 font-bold">
                                                                Cecilia Hernández
                                                            </p>
                                                            <p className="text-sm text-slate-400">
                                                                Maternity
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))
                                        ) : (
                                            <div className="mt-6">
                                                <div className="flex justify-center  m-4">
                                                    <MousePointerSquare
                                                        size={50}
                                                        className="text-primary-800"
                                                    />
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-lg text-slate-600 font-bold">
                                                        No absence found.
                                                    </p>
                                                    <p className="text-base text-slate-400">
                                                        There are no staff absences for the selected
                                                        date. Use a different time range!
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                        //   Array(3)
                                        //       .fill(2)
                                        //       .map((_, index) => (
                                        //           <div
                                        //               key={index}
                                        //               className="flex gap-2 p-2 rounded-lg hover:bg-slate-100 cursor-pointer transition-all ease-in-out duration-300 animate-pulse"
                                        //           >
                                        //               <Avatar.Root>
                                        //                   <Avatar.Initials>{''}</Avatar.Initials>
                                        //               </Avatar.Root>
                                        //               <div>
                                        //                   <p className="text-sm text-slate-500 font-bold bg-slate-200 w-56 h-4 rounded mb-2"></p>
                                        //                   <p className="text-sm text-slate-400 bg-slate-200 w-36 h-3 rounded"></p>
                                        //               </div>
                                        //           </div>
                                        //       ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};
