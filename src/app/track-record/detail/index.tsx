import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as R from 'ramda';
import { ChevronLeft, ChevronRight, Clock3, Group, SlidersHorizontal } from 'lucide-react';
import { URLSearch } from '@/constants/utils/URLSearch';
import { twMerge } from 'tailwind-merge';
import { Link, NavLink } from 'react-router-dom';
import { usePagination } from '@/hooks/usePagination';
import { Pagination } from '@/_common/pagination';
import { TrackRecordDetailsTable } from './table/Table';
import { Avatar } from '@/_common/avatar';
import {
    add,
    eachDayOfInterval,
    endOfMonth,
    endOfWeek,
    format,
    isEqual,
    isSameMonth,
    isToday,
    startOfMonth,
    startOfToday,
    startOfWeek,
    sub,
} from 'date-fns';

type IGroup = 'team' | 'office';
type IMapper = {
    team: string;
    office: string;
};

export const TrackRecordDetails = () => {
    const { pageNumber } = usePagination();
    const QUERIES = URLSearch.queries();
    const today = new Date(QUERIES.date || startOfToday());
    const days = eachDayOfInterval({
        start: startOfWeek(startOfMonth(today)),
        end: endOfWeek(endOfMonth(today)),
    });
    const mapper: IMapper = {
        team: 'Team',
        office: 'Office',
    };

    const currentMonth = new Date(QUERIES.date || today);
    const selectedDate = new Date(QUERIES.selectedDate || today);
    const previousMonth = format(sub(currentMonth, { months: 1 }), 'yyyy-MM-dd');
    const nextMonth = format(add(currentMonth, { months: 1 }), 'yyyy-MM-dd');

    return (
        <article className="h-auto md:h-full overflow-y-auto md:overflow-hidden flex flex-col md:flex-row  gap-[3px]">
            <section className="order-2 md:order-1 flex-1 flex flex-col md:overflow-hidden">
                <div className="flex gap-6 p-4">
                    <div className="flex gap-2 text-slate-600 font-medium">
                        <DropdownMenu.Root key="groupBy">
                            <DropdownMenu.Trigger asChild>
                                <button
                                    className="IconButton flex gap-2 outline-none"
                                    aria-label="Customise options"
                                >
                                    <Group /> Group by:{' '}
                                    {mapper[QUERIES.groupBy as IGroup] || mapper.team}
                                </button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Portal>
                                <DropdownMenu.Content
                                    className="DropdownMenuContent bg-white p-4 shadow-xl shadow-slate-400/20 rounded-lg w-[500px] max-w-[200px] h-full max-h-80 overflow-y-auto flex flex-col gap-1"
                                    sideOffset={10}
                                    align="start"
                                >
                                    <NavLink to={URLSearch.set({ groupBy: 'team' })}>
                                        <DropdownMenu.Item
                                            className={twMerge(
                                                'DropdownMenuItem text-slate-600 font-medium hover:bg-slate-100 p-2 rounded outline-transparent cursor-pointer',
                                                QUERIES.groupBy === mapper.team.toLowerCase() ||
                                                    R.isNil(QUERIES.groupBy)
                                                    ? ' text-white bg-primary-900 hover:bg-primary-950'
                                                    : ''
                                            )}
                                        >
                                            Team
                                        </DropdownMenu.Item>
                                    </NavLink>
                                    <NavLink to={URLSearch.set({ groupBy: 'office' })}>
                                        <DropdownMenu.Item
                                            className={twMerge(
                                                'DropdownMenuItem text-slate-600 font-medium hover:bg-slate-100 p-2 rounded outline-transparent cursor-pointer',
                                                QUERIES.groupBy === mapper.office.toLowerCase()
                                                    ? ' text-white bg-primary-900 hover:bg-primary-950'
                                                    : ''
                                            )}
                                        >
                                            Office
                                        </DropdownMenu.Item>
                                    </NavLink>
                                </DropdownMenu.Content>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Root>
                    </div>
                    <div className="flex gap-2 text-slate-600 font-medium">
                        <DropdownMenu.Root key="groupBy">
                            <DropdownMenu.Trigger asChild>
                                <button
                                    className="IconButton flex gap-2 outline-none"
                                    aria-label="Customise options"
                                >
                                    <Group /> Group by:{' '}
                                    {mapper[QUERIES.groupBy as IGroup] || mapper.team}
                                </button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Portal>
                                <DropdownMenu.Content
                                    className="DropdownMenuContent bg-white p-4 shadow-xl shadow-slate-400/20 rounded-lg w-[500px] max-w-[200px] h-full max-h-80 overflow-y-auto flex flex-col gap-1"
                                    sideOffset={10}
                                    align="start"
                                >
                                    <NavLink to={URLSearch.set({ groupBy: 'team' })}>
                                        <DropdownMenu.Item
                                            className={twMerge(
                                                'DropdownMenuItem text-slate-600 font-medium hover:bg-slate-100 p-2 rounded outline-transparent cursor-pointer',
                                                QUERIES.groupBy === mapper.team.toLowerCase() ||
                                                    R.isNil(QUERIES.groupBy)
                                                    ? ' text-white bg-primary-900 hover:bg-primary-950'
                                                    : ''
                                            )}
                                        >
                                            Team
                                        </DropdownMenu.Item>
                                    </NavLink>
                                    <NavLink to={URLSearch.set({ groupBy: 'office' })}>
                                        <DropdownMenu.Item
                                            className={twMerge(
                                                'DropdownMenuItem text-slate-600 font-medium hover:bg-slate-100 p-2 rounded outline-transparent cursor-pointer',
                                                QUERIES.groupBy === mapper.office.toLowerCase()
                                                    ? ' text-white bg-primary-900 hover:bg-primary-950'
                                                    : ''
                                            )}
                                        >
                                            Office
                                        </DropdownMenu.Item>
                                    </NavLink>
                                </DropdownMenu.Content>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Root>
                    </div>
                    <div className="flex gap-2 text-slate-600 font-medium">
                        <DropdownMenu.Root key="filterBy">
                            <DropdownMenu.Trigger asChild>
                                <button
                                    className="IconButton flex gap-2 outline-none"
                                    aria-label="Customise options"
                                >
                                    <SlidersHorizontal /> Filter By: {'Team A'}
                                </button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Portal>
                                <DropdownMenu.Content
                                    className="DropdownMenuContent bg-white p-4 shadow-xl shadow-slate-400/20 rounded-lg w-[500px] max-w-[200px] h-full max-h-80 overflow-y-auto flex flex-col gap-1"
                                    sideOffset={10}
                                    align="start"
                                >
                                    <NavLink to={URLSearch.set({ filterBy: 'teamA' })}>
                                        <DropdownMenu.Item
                                            className={twMerge(
                                                'DropdownMenuItem text-slate-600 font-medium hover:bg-slate-100 p-2 rounded outline-transparent cursor-pointer',
                                                QUERIES.filterBy === 'teamA' ||
                                                    R.isNil(QUERIES.filterBy)
                                                    ? ' text-white bg-primary-900 hover:bg-primary-950'
                                                    : ''
                                            )}
                                        >
                                            Team A
                                        </DropdownMenu.Item>
                                    </NavLink>
                                    <NavLink to={URLSearch.set({ filterBy: 'teamB' })}>
                                        <DropdownMenu.Item
                                            className={twMerge(
                                                'DropdownMenuItem text-slate-600 font-medium hover:bg-slate-100 p-2 rounded outline-transparent cursor-pointer',
                                                QUERIES.filterBy === 'teamB'
                                                    ? ' text-white bg-primary-900 hover:bg-primary-950'
                                                    : ''
                                            )}
                                        >
                                            Team B
                                        </DropdownMenu.Item>
                                    </NavLink>
                                    <NavLink to={URLSearch.set({ filterBy: 'teamC' })}>
                                        <DropdownMenu.Item
                                            className={twMerge(
                                                'DropdownMenuItem text-slate-600 font-medium hover:bg-slate-100 p-2 rounded outline-transparent cursor-pointer',
                                                QUERIES.filterBy === 'teamC'
                                                    ? ' text-white bg-primary-900 hover:bg-primary-950'
                                                    : ''
                                            )}
                                        >
                                            Team C
                                        </DropdownMenu.Item>
                                    </NavLink>
                                </DropdownMenu.Content>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Root>
                    </div>
                </div>
                <div className="h-full flex flex-col overflow-hidden ">
                    <div className="flex-1 h-full overflow-auto">
                        <TrackRecordDetailsTable />
                    </div>
                    <footer>
                        <Pagination pageNumber={pageNumber} totalPages={1} />
                    </footer>
                </div>
            </section>
            <aside className="order-1 md:order-2 small-scroll flex-grow-3 md:bg-white h-auto md:h-full w-full md:max-w-xs rounded text-sm">
                <div className="md:overflow-hidden h-full flex flex-col">
                    <div className="p-4 space-y-4 md:overflow-y-auto">
                        <div className="flex flex-col justify-evenly items-center mx-auto w-full max-w-lg">
                            <div className="flex flex-col gap-4 w-full text-left p-2">
                                <div className="text-center">
                                    <Avatar.Root className="w-14 h-14 mx-auto mb-2">
                                        <Avatar.Initials className="text-slate-700 font-bold text-lg">
                                            MM
                                        </Avatar.Initials>
                                    </Avatar.Root>
                                    <p className="text-slate-700 text-lg font-bold">Maya Miller</p>
                                    <p className="text-slate-700">Web Designer</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-slate-700 text-lg font-bold">
                                        Full-time 40 hrs
                                    </p>
                                    <p className="text-slate-700">Work Schedule</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-[2px] w-full bg-slate-100"></div>
                        <div className="flex flex-col justify-evenly items-center mx-auto w-full max-w-lg">
                            <div className="flex flex-col gap-5 w-full text-left p-2">
                                <div>
                                    <Clock3 className="text-primary-900 mb-1" size={18} />
                                    <p className="text-slate-700 leading-none">
                                        <span className=" text-lg font-bold">160</span> hrs
                                    </p>
                                    <p className="text-slate-500 leading-none">Monthly required</p>
                                </div>
                                <div>
                                    <Clock3 className="text-primary-900 mb-1" size={18} />
                                    <p className="text-slate-700 leading-none">
                                        <span className=" text-lg font-bold">75</span> hrs
                                    </p>
                                    <p className="text-slate-500 leading-none">
                                        Report time this month
                                    </p>
                                </div>
                                <div>
                                    <Clock3 className="text-primary-900 mb-1" size={18} />
                                    <p className="text-slate-700 leading-none">
                                        <span className=" text-lg font-bold">02</span> hrs
                                    </p>
                                    <p className="text-slate-500 leading-none">
                                        Overtime this month
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="h-[2px] w-full bg-slate-100"></div>
                        <div className="flex flex-col w-full text-left p-2">
                            {/* <span className='text-slate-400 group-hover:text-primary-500 after:absolute after:left-1/2 after:text-primary-900 after:-translate-x-1/2 after:-bottom-1 after:content-['•']'></span> */}
                            <section className="space-y-4">
                                <header className="flex justify-between items-center">
                                    <NavLink
                                        className="p-1 hover:bg-slate-100 rounded text-slate-400"
                                        to={`?date=${previousMonth}`}
                                    >
                                        <ChevronLeft />
                                    </NavLink>
                                    <h4 className="text-slate-600 text-sm font-bold">
                                        {format(today, 'MMM yyyy')}
                                    </h4>

                                    <NavLink
                                        className="p-1 hover:bg-slate-100 rounded text-slate-400"
                                        to={`?date=${nextMonth}`}
                                    >
                                        <ChevronRight />
                                    </NavLink>
                                </header>
                                <div className="grid grid-cols-7">
                                    <span className="text-slate-400 text-center">Sun</span>
                                    <span className="text-slate-400 text-center">Mon</span>
                                    <span className="text-slate-400 text-center">Tue</span>
                                    <span className="text-slate-400 text-center">Wed</span>
                                    <span className="text-slate-400 text-center">Thu</span>
                                    <span className="text-slate-400 text-center">Fri</span>
                                    <span className="text-slate-400 text-center">Sat</span>
                                </div>
                                <div className="grid grid-cols-7 gap-1">
                                    {days.map((day) => (
                                        <Link
                                            tabIndex={1}
                                            key={day.toDateString()}
                                            to={URLSearch.set({
                                                selectedDate: format(day, 'yyyy-MM-dd'),
                                            })}
                                            className={twMerge(
                                                'col-span-1 font-bold text-slate-700  p-2 text-sm text-center cursor-pointer rounded-full hover:bg-slate-100 transition-all ease-in duration-200 ',
                                                !isSameMonth(day, today) ? ' text-slate-300 ' : '',
                                                isToday(day) ? 'bg-slate-200 rounded-full' : '',
                                                format(day, 'yyyy-MM-dd') ===
                                                    format(selectedDate, 'yyyy-MM-dd')
                                                    ? ' bg-primary-900 hover:bg-primary-950 rounded-full text-white '
                                                    : ''
                                            )}
                                        >
                                            {format(day, 'd')}
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </aside>
            {/* <RequestModal data={data} /> */}
        </article>
    );
};
