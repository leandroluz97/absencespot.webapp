import * as R from 'ramda';
import { URLSearch } from '@/constants/utils/URLSearch';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Group, Paperclip, SlidersHorizontal, X } from 'lucide-react';
import { Pagination } from '@/_common/pagination';
import { usePagination } from '@/hooks/usePagination';
import { RequestTable } from './table/Table';
import * as Dialog from '@radix-ui/react-dialog';
import { Avatar } from '@/_common/avatar';

type IGroup = 'team' | 'office';
type IMapper = {
    team: string;
    office: string;
};

export const Request = () => {
    const { pageNumber } = usePagination();
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
                        <RequestTable />
                    </div>
                    <footer>
                        <Pagination pageNumber={pageNumber} totalPages={1} />
                    </footer>
                </div>
            </section>
            <Dialog.Root modal>
                {/* <Dialog.Trigger asChild>
                    <button className="Button violet">Edit profile</button>
                </Dialog.Trigger> */}
                <Dialog.Portal className="rounded-xl">
                    <Dialog.Overlay className="DialogOverlay" />
                    <Dialog.Content className="DialogContent p-12 w-full max-w-xl rounded-2xl ">
                        {/* <Dialog.Title className="DialogTitle text-lg">Edit profile</Dialog.Title> */}
                        <Dialog.Close asChild>
                            <button
                                aria-label="options"
                                className="absolute  right-2 top-2 outline-none text-white text-sm p-2 rounded-lg hover:bg-slate-50 transition-all ease-in-out duration-300"
                            >
                                <X className="text-slate-300 hover:text-slate-400 transition-all ease-in-out duration-300" />
                            </button>
                        </Dialog.Close>

                        <div className="space-y-6">
                            <header className="flex justify-between items-center py-4">
                                <div className="flex gap-2 items-center">
                                    <Avatar.Root>
                                        <Avatar.Initials>JA</Avatar.Initials>
                                    </Avatar.Root>
                                    <p className="truncate text-slate-500 text">Justine Andre</p>
                                </div>
                                <NavLink to={''}>Edit</NavLink>
                            </header>
                            <div className="h-[1px] w-full bg-slate-100"></div>
                            <div className="flex py-4 justify-between items-center">
                                <p className="font-bold text-green-500">Vacation</p>
                                <p className="font-bold text-sm bg-violet-100 text-violet-800 rounded-lg p-1 px-3">
                                    Pending
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-slate-600 font-bold">Days</p>
                                    <p className="text-slate-500 text-sm">2 day(s)</p>
                                </div>
                                <div>
                                    <p className="text-slate-600 font-bold">Start On</p>
                                    <p className="text-slate-500 text-sm">Wed, May 24, 2023 </p>
                                </div>
                                <div>
                                    <p className="text-slate-600 font-bold">End On</p>
                                    <p className="text-slate-500 text-sm">Thu, May 25, 2023</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-slate-600 font-bold">Notes</p>
                                <p className="text-slate-500 text-sm">
                                    I'm travelling to another country to visit my grandmother, it's
                                    important to approve this day
                                </p>
                            </div>
                            <div>
                                <p className="text-slate-600 font-bold">File(s)</p>
                                <p className="text-slate-500 text-sm flex gap-1">
                                    <Paperclip size={18} />
                                    Ticket.pdf
                                </p>
                            </div>
                            <div className="h-[1px] w-full bg-slate-100"></div>
                            <footer className="space-y-4">
                                <p className="text-slate-500 text-sm text-center">
                                    Created by Justine Andre: May 12, 2023
                                </p>
                                <div className="flex justify-center gap-2">
                                    <Dialog.Close asChild>
                                        <button
                                            type="button"
                                            className="px-6 text-slate-700 text-sm bg-slate-100 p-2 rounded-lg hover:bg-slate-200 transition-all ease-in-out duration-300"
                                        >
                                            Reject
                                        </button>
                                    </Dialog.Close>
                                    <button
                                        type="button"
                                        className="px-6 text-white text-sm bg-primary-900 p-2 rounded-lg hover:bg-primary-950 transition-all ease-in-out duration-300"
                                    >
                                        Approve
                                    </button>
                                </div>
                            </footer>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </article>
    );
};
