import { Avatar } from '@/_common/avatar';
import { Table } from '@/_common/table';
import { URLSearch } from '@/constants/utils/URLSearch';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Eye, MoreHorizontal, Pencil, Trash, Users2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export const TableCard = () => {
    return (
        <div className="bg-white p-4 py-6 space-y-4">
            <div className="flex justify-between">
                <div className="space-y-1">
                    <Users2 className="text-primary-900" />
                    <p className="text-slate-500 text-sm font-bold">Marketing</p>
                    <p className="text-slate-500 text-sm">Director of marketing</p>
                </div>
                <div>
                    <DropdownMenu.Root key="filterBy">
                        <DropdownMenu.Trigger asChild>
                            <button
                                aria-label="options"
                                className="IconButton outline-none text-white text-sm p-2 rounded-lg hover:bg-slate-100 transition-all ease-in-out duration-300"
                            >
                                <MoreHorizontal className="text-slate-500" />
                            </button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.Content
                                className="DropdownMenuContent bg-white p-4 shadow-xl shadow-slate-400/20 rounded-lg w-[500px] max-w-[200px] h-full max-h-80 overflow-y-auto flex flex-col gap-1"
                                sideOffset={5}
                                align="start"
                            >
                                <NavLink to={URLSearch.set({ filterBy: 'teamA' })}>
                                    <DropdownMenu.Item
                                        className={twMerge(
                                            'DropdownMenuItem flex gap-2 text-slate-600 font-medium hover:bg-slate-100 p-2 rounded outline-transparent cursor-pointer'
                                        )}
                                    >
                                        <Eye className="text-slate-400" size={20} />
                                        View
                                    </DropdownMenu.Item>
                                </NavLink>
                                <NavLink to={URLSearch.set({ filterBy: 'teamB' })}>
                                    <DropdownMenu.Item
                                        className={twMerge(
                                            'DropdownMenuItem flex gap-2 text-slate-600 font-medium hover:bg-slate-100 p-2 rounded outline-transparent cursor-pointer'
                                        )}
                                    >
                                        <Pencil className="text-slate-400" size={20} />
                                        Edit
                                    </DropdownMenu.Item>
                                </NavLink>
                                <DropdownMenu.Item
                                    className={twMerge(
                                        'DropdownMenuItem flex gap-2 text-red-600  bg-red-50 font-medium hover:bg-red-100 p-2 rounded outline-transparent cursor-pointer'
                                    )}
                                >
                                    <Trash className="text-red-400" size={20} />
                                    Delete
                                </DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                </div>
            </div>
            <div className="flex justify-end -space-x-1">
                <Avatar.Root className="text-xs w-8 h-8 border-2 border-white">
                    <Avatar.Initials>CH</Avatar.Initials>
                </Avatar.Root>
                <Avatar.Root className="text-xs w-8 h-8 border-2 border-white">
                    <Avatar.Initials>MW</Avatar.Initials>
                </Avatar.Root>
                <Avatar.Root className="text-xs w-8 h-8 border-2 border-white">
                    <Avatar.Initials>AL</Avatar.Initials>
                </Avatar.Root>
                <Avatar.Root className="text-xs w-8 h-8 border-2 border-white">
                    <Avatar.Initials>+6</Avatar.Initials>
                </Avatar.Root>
            </div>
        </div>
    );
};
