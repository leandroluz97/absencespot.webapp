import React from 'react';
import * as R from 'ramda';
import { Avatar } from '@/_common/avatar';
import { URLSearch } from '@/constants/utils/URLSearch';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { NavLink, useSearchParams } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Group, SlidersHorizontal } from 'lucide-react';
import { Pagination } from '@/_common/pagination';
import { usePagination } from '@/hooks/usePagination';
import { RequestTable } from './table/Table';

type IMapper = {
    team: string;
    office: string;
};

export const Request = () => {
    const { pageNumber, pageSize } = usePagination();
    const QUERIES = URLSearch.queries();

    const mapper: IMapper = {
        team: 'Team',
        office: 'Office',
    };

    return (
        <article className="h-full overflow-hidden flex flex-col gap-[3px]">
            <section className="flex-1 flex flex-col overflow-hidden">
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
                <div className="h-full flex flex-col overflow-hidden ">
                    <div className="flex-1 h-full overflow-y-auto">
                        <RequestTable />
                    </div>
                    <footer>
                        <Pagination pageNumber={pageNumber} totalPages={1} />
                    </footer>
                </div>
            </section>
        </article>
    );
};
