import { useState } from 'react';
import { URLSearch } from '@/constants/utils/URLSearch';
import * as R from 'ramda';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Checkbox from '@radix-ui/react-checkbox';
import {
    eachDayOfInterval,
    endOfMonth,
    endOfWeek,
    format,
    startOfMonth,
    startOfWeek,
    isToday,
    isSameMonth,
    startOfToday,
    add,
    sub,
    isSameDay,
} from 'date-fns';
import {
    Check,
    CheckIcon,
    ChevronLeft,
    ChevronRight,
    Group,
    Palmtree,
    SlidersHorizontal,
} from 'lucide-react';
import React from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Avatar } from '@/_common/avatar';

type IMapper = {
    team: string;
    office: string;
};

type IFilter = {
    categories: string[];
};
export const Calendar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filter, setFilter] = useState<IFilter>({ categories: [] });
    const QUERIES = URLSearch.queries();
    const today = new Date(QUERIES.date || startOfToday());
    const days = eachDayOfInterval({
        start: startOfWeek(startOfMonth(today)),
        end: endOfWeek(endOfMonth(today)),
    });
    const currentMonth = new Date(QUERIES.date || today);
    const previousMonth = format(sub(currentMonth, { months: 1 }), 'yyyy-MM-dd');
    const nextMonth = format(add(currentMonth, { months: 1 }), 'yyyy-MM-dd');

    const mapper: IMapper = {
        team: 'Team',
        office: 'Office',
    };

    const vacation = eachDayOfInterval({
        start: startOfWeek(today),
        end: add(endOfWeek(today), { days: 1 }),
    });

    const vocationDays = [
        { order: 1, name: 'Maria Willis', color: 'red', days: vacation },
        { order: 2, name: 'Leandro Luz', color: 'blue', days: vacation },
        { order: 3, name: 'Leia Reis', color: 'green', days: vacation },
        { order: 4, name: 'Brandon Carlson', color: 'yellow', days: vacation },
        { order: 5, name: 'Cecilia Hernández', color: 'indigo', days: [today] },
        { order: 6, name: 'Christina Fowler', color: 'purple', days: [today] },
    ];

    const categories = [
        { name: 'vacation', color: 'green' },
        { name: 'sick leave', color: 'orange' },
        { name: 'paid leave', color: 'yellow' },
        { name: 'unpaid leave', color: 'red' },
        { name: 'maternity leave', color: 'cyan' },
        { name: 'paternity leave', color: 'teal' },
    ];

    const getStyle = (cat) => {
        const hasName = filter.categories.includes(cat.name);
        if (cat.color === 'red') {
            return twMerge(
                ` bg-red-500 border-2 border-red-500 rounded`,
                hasName ? ` bg-white border-red-300 border-2` : ''
            );
        }
        if (cat.color === 'green') {
            return twMerge(
                ` bg-green-500 border-2 border-green-500 rounded`,
                hasName ? ` bg-white border-green-300 border-2` : ''
            );
        }
        if (cat.color === 'orange') {
            return twMerge(
                ` bg-orange-500 border-2 border-orange-500 rounded`,
                hasName ? ` bg-white border-orange-300 border-2` : ''
            );
        }
        if (cat.color === 'yellow') {
            return twMerge(
                ` bg-yellow-500 border-2 border-yellow-500 rounded`,
                hasName ? ` bg-white border-yellow-300 border-2` : ''
            );
        }
        if (cat.color === 'cyan') {
            return twMerge(
                ` bg-cyan-500 border-2 border-cyan-500 rounded`,
                hasName ? ` bg-white border-cyan-300 border-2` : ''
            );
        }
        if (cat.color === 'teal') {
            return twMerge(
                ` bg-teal-500 border-2 border-teal-500 rounded`,
                hasName ? ` bg-white border-teal-300 border-2` : ''
            );
        }
    };

    return (
        <article className="h-full md:h-full overflow-y-auto md:overflow-hidden flex flex-col md:flex-row  gap-[3px]">
            <section className="flex-1 h-auto md:h-full flex flex-col">
                <div className="flex gap-6 p-4">
                    <div className="flex gap-2 text-slate-600 font-medium">
                        <DropdownMenu.Root key="groupBy">
                            <DropdownMenu.Trigger asChild>
                                <button
                                    className="IconButton flex gap-2 outline-none"
                                    aria-label="Customise options"
                                >
                                    <Group /> Group by: {mapper[QUERIES.groupBy] || mapper.team}
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
                        {/* <SlidersHorizontal /> <p>Filter By</p> */}
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
                <div className="flex justify-between items-center gap-8 mb-[2px] p-2 px-4 bg-white rounded-sm ">
                    <p className="font-bold text-slate-600 ">{format(currentMonth, 'MMM yyyy')}</p>
                    <div className="flex items-center ">
                        <NavLink
                            className="p-2 hover:bg-slate-100 rounded text-slate-600"
                            to={`?date=${previousMonth}`}
                        >
                            <ChevronLeft />
                        </NavLink>
                        <NavLink
                            className="p-2 hover:bg-slate-100 rounded text-slate-600"
                            to={`?date=${nextMonth}`}
                        >
                            <ChevronRight />
                        </NavLink>
                    </div>
                </div>
                <div className="grid grid-cols-7 gap-[2px] mb-[2px]">
                    <div className="col-span-1 font-bold text-slate-700 bg-white p-2 text-sm rounded-sm">
                        SUN
                    </div>
                    <div className="col-span-1 font-bold text-slate-700 bg-white p-2 text-sm rounded-sm">
                        MON
                    </div>
                    <div className="col-span-1 font-bold text-slate-700 bg-white p-2 text-sm rounded-sm">
                        TUE
                    </div>
                    <div className="col-span-1 font-bold text-slate-700 bg-white p-2 text-sm rounded-sm">
                        WED
                    </div>
                    <div className="col-span-1 font-bold text-slate-700 bg-white p-2 text-sm rounded-sm">
                        THU
                    </div>
                    <div className="col-span-1 font-bold text-slate-700 bg-white p-2 text-sm rounded-sm">
                        FRI
                    </div>
                    <div className="col-span-1 font-bold text-slate-700 bg-white p-2 text-sm rounded-sm">
                        SAT
                    </div>
                </div>
                <div className="grid grid-cols-7 h-full gap-[2px] overflow-x-hidden ">
                    {days.map((day, index) => (
                        <div
                            className={twMerge(
                                'col-span-1 font-bold text-slate-700 bg-white p-2 text-sm rounded-sm ',
                                !isSameMonth(day, today) ? ' text-slate-300 bg-slate-50' : ''
                            )}
                        >
                            <p
                                className={twMerge(
                                    '',
                                    isToday(day) ? ' text-primary-900 font-extrabold ' : ''
                                )}
                            >
                                {format(day, 'd')}
                            </p>
                            <div className="grid grid-row-6 gap-2">
                                {vocationDays.map((user, indx) => {
                                    console.log(user.days.includes(day));

                                    return user.days.map(
                                        (d, i) =>
                                            isSameDay(d, day) && (
                                                <div
                                                    className={twMerge(
                                                        'bg-green-300 rounded px-3 flex gap-1 items-center scale-[1.15] h-5 row-span-1 ',
                                                        user.color === 'red' && `bg-red-300`,
                                                        user.color === 'blue' && `bg-blue-300`,
                                                        user.color === 'green' && `bg-green-300`,
                                                        user.color === 'yellow' && `bg-yellow-300`,
                                                        user.color === 'indigo' && `bg-indigo-300`,
                                                        user.color === 'purple' && `bg-purple-300`,
                                                        user.order === 1 && 'row-start-1',
                                                        user.order === 2 && 'row-start-2',
                                                        user.order === 3 && 'row-start-3',
                                                        user.order === 4 && 'row-start-4',
                                                        user.order === 5 && 'row-start-5',
                                                        user.order === 6 && 'row-start-6',
                                                        user.order === 7 && 'row-start-7'
                                                    )}
                                                >
                                                    {i === 0 && (
                                                        <React.Fragment>
                                                            <Palmtree
                                                                size={15}
                                                                className={twMerge(
                                                                    'text-green-600',
                                                                    user.color === 'red' &&
                                                                        `text-red-600`,
                                                                    user.color === 'blue' &&
                                                                        `text-blue-600`,
                                                                    user.color === 'green' &&
                                                                        `text-green-600`,
                                                                    user.color === 'yellow' &&
                                                                        `text-yellow-600`,
                                                                    user.color === 'indigo' &&
                                                                        `text-indigo-600`,
                                                                    user.color === 'purple' &&
                                                                        `text-purple-600`
                                                                )}
                                                            />
                                                            <p className="text-slate-600 font-bold  text-xs">
                                                                {user.name}
                                                            </p>
                                                        </React.Fragment>
                                                    )}
                                                </div>
                                            )
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <aside className="h-auto md:h-full small-scroll bg-a flex-grow-3 bg-white w-full md:max-w-sm rounded">
                <div className="overflow-hidden h-full flex flex-col">
                    <div className="p-4 space-y-6 overflow-y-auto">
                        <section>
                            <h3 className="font-bold text-slate-700 mb-3">Categories</h3>
                            <div className="flex flex-col gap-2">
                                {categories.map((cat) => (
                                    <button
                                        className="flex gap-2 items-center"
                                        role="checkbox"
                                        aria-checked={
                                            filter.categories.includes(cat.name) ? 'true' : 'false'
                                        }
                                        value={filter.categories.includes(cat.name) ? 'on' : 'off'}
                                        data-state={
                                            filter.categories.includes(cat.name)
                                                ? 'checked'
                                                : 'uncheck'
                                        }
                                        id={cat.name}
                                        onClick={() =>
                                            setFilter({
                                                ...filter,
                                                categories: filter.categories.includes(cat.name)
                                                    ? filter.categories.filter(
                                                          (c) => c !== cat.name
                                                      )
                                                    : [...filter.categories, cat.name],
                                            })
                                        }
                                    >
                                        <div className={getStyle(cat)}>
                                            <CheckIcon className="text-white" size={15} />
                                        </div>
                                        <label htmlFor={cat.name}>{cat.name}</label>
                                    </button>
                                ))}
                            </div>
                        </section>
                        <section>
                            <h3 className="font-bold text-slate-700 mb-3">
                                Request Awaiting Approval
                            </h3>
                            <div
                                key={9}
                                className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                            >
                                <Avatar.Root>
                                    <Avatar.Initials>CH</Avatar.Initials>
                                </Avatar.Root>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold">
                                        Cecilia Hernández
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        Vacation: May 24 - Jun 24
                                    </p>
                                </div>
                                <button className="text-white text-sm bg-primary-900 p-2 rounded-lg ml-auto hover:bg-primary-950 transition-all ease-in-out duration-300">
                                    <Check />
                                </button>
                            </div>
                        </section>
                        <section>
                            <h3 className="font-bold text-slate-700 mb-3">Upcoming </h3>
                            <div
                                key={9}
                                className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                            >
                                <Avatar.Root>
                                    <Avatar.Initials>VF</Avatar.Initials>
                                </Avatar.Root>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold">
                                        Victoria Flores
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        Maternity : May 5 - Dec 1
                                    </p>
                                </div>
                            </div>
                            <div
                                key={9}
                                className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                            >
                                <Avatar.Root>
                                    <Avatar.Initials>VF</Avatar.Initials>
                                </Avatar.Root>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold">
                                        Victoria Flores
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        Maternity : May 5 - Dec 1
                                    </p>
                                </div>
                            </div>
                            <div
                                key={9}
                                className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                            >
                                <Avatar.Root>
                                    <Avatar.Initials>VF</Avatar.Initials>
                                </Avatar.Root>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold">
                                        Victoria Flores
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        Maternity : May 5 - Dec 1
                                    </p>
                                </div>
                            </div>
                            <div
                                key={9}
                                className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                            >
                                <Avatar.Root>
                                    <Avatar.Initials>VF</Avatar.Initials>
                                </Avatar.Root>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold">
                                        Victoria Flores
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        Maternity : May 5 - Dec 1
                                    </p>
                                </div>
                            </div>
                            <div
                                key={9}
                                className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                            >
                                <Avatar.Root>
                                    <Avatar.Initials>VF</Avatar.Initials>
                                </Avatar.Root>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold">
                                        Victoria Flores
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        Maternity : May 5 - Dec 1
                                    </p>
                                </div>
                            </div>
                            <div
                                key={9}
                                className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                            >
                                <Avatar.Root>
                                    <Avatar.Initials>VF</Avatar.Initials>
                                </Avatar.Root>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold">
                                        Victoria Flores
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        Maternity : May 5 - Dec 1
                                    </p>
                                </div>
                            </div>
                            <div
                                key={9}
                                className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                            >
                                <Avatar.Root>
                                    <Avatar.Initials>VF</Avatar.Initials>
                                </Avatar.Root>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold">
                                        Victoria Flores
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        Maternity : May 5 - Dec 1
                                    </p>
                                </div>
                            </div>
                            <div
                                key={9}
                                className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                            >
                                <Avatar.Root>
                                    <Avatar.Initials>VF</Avatar.Initials>
                                </Avatar.Root>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold">
                                        Victoria Flores
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        Maternity : May 5 - Dec 1
                                    </p>
                                </div>
                            </div>
                            <div
                                key={9}
                                className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                            >
                                <Avatar.Root>
                                    <Avatar.Initials>VF</Avatar.Initials>
                                </Avatar.Root>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold">
                                        Victoria Flores
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        Maternity : May 5 - Dec 1
                                    </p>
                                </div>
                            </div>
                            <div
                                key={9}
                                className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                            >
                                <Avatar.Root>
                                    <Avatar.Initials>VF</Avatar.Initials>
                                </Avatar.Root>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold">
                                        Victoria Flores
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        Maternity : May 5 - Dec 1
                                    </p>
                                </div>
                            </div>
                            <div
                                key={9}
                                className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                            >
                                <Avatar.Root>
                                    <Avatar.Initials>VF</Avatar.Initials>
                                </Avatar.Root>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold">
                                        Victoria Flores
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        Maternity : May 5 - Dec 1
                                    </p>
                                </div>
                            </div>
                            <div
                                key={9}
                                className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                            >
                                <Avatar.Root>
                                    <Avatar.Initials>VF</Avatar.Initials>
                                </Avatar.Root>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold">
                                        Victoria Flores
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        Maternity : May 5 - Dec 1
                                    </p>
                                </div>
                            </div>
                            <div
                                key={9}
                                className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                            >
                                <Avatar.Root>
                                    <Avatar.Initials>VF</Avatar.Initials>
                                </Avatar.Root>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold">
                                        Victoria Flores
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        Maternity : May 5 - Dec 1
                                    </p>
                                </div>
                            </div>
                            <div
                                key={9}
                                className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                            >
                                <Avatar.Root>
                                    <Avatar.Initials>VF</Avatar.Initials>
                                </Avatar.Root>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold">
                                        Victoria Flores
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        Maternity : May 5 - Dec 1
                                    </p>
                                </div>
                            </div>
                            <div
                                key={9}
                                className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                            >
                                <Avatar.Root>
                                    <Avatar.Initials>VF</Avatar.Initials>
                                </Avatar.Root>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold">
                                        Victoria Flores
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        Maternity : May 5 - Dec 1
                                    </p>
                                </div>
                            </div>
                            <div
                                key={9}
                                className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                            >
                                <Avatar.Root>
                                    <Avatar.Initials>VF</Avatar.Initials>
                                </Avatar.Root>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold">
                                        Victoria Flores
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        Maternity : May 5 - Dec 1
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </aside>
        </article>
    );
};
