import { Table } from '@/_common/table';
import { URLSearch } from '@/constants/utils/URLSearch';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Clock3, Eye, FileText, MoreHorizontal, PauseCircle, Pencil } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export const TableRow = () => {
    return (
        <Table.Row className="p-3">
            <Table.Column className="col-span-2">
                <p className="truncate text-slate-500 text-sm">
                    <span className="font-bold">Mon</span> Apr 3, 2023
                </p>
            </Table.Column>
            <Table.Column className="col-span-1">
                <p className="truncate text-slate-500 text-sm font-semibold ">09:00 AM</p>
            </Table.Column>
            <Table.Column className="col-span-2">
                <p className="truncate text-slate-500 text-sm font-semibold ">09:00 AM</p>
            </Table.Column>
            <Table.Column className="col-span-3">
                <div className="flex gap-2">
                    <div>
                        <PauseCircle className="text-yellow-400" />
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-bold">1:00 hrs</p>
                        <p className="text-slate-500 text-sm">01:00 pm - 02:00pm</p>
                    </div>
                </div>
            </Table.Column>
            <Table.Column className="col-span-1">
                <p className="truncate text-slate-500 text-sm font-semibold">8 hrs</p>
            </Table.Column>
            <Table.Column className="col-span-1">
                <p className="truncate text-slate-500 text-sm font-semibold">0 hrs</p>
            </Table.Column>
            <Table.Column className="col-span-1 flex items-center justify-end">
                <FileText className="text-primary-800" />
            </Table.Column>
            <Table.Column className=" col-span-1 flex items-center justify-end">
                <DropdownMenu.Root key="filterBy">
                    <DropdownMenu.Trigger asChild>
                        <button
                            aria-label="options"
                            className="IconButton outline-none text-white text-sm p-2 rounded-lg hover:bg-slate-100 transition-all ease-in-out duration-300"
                        >
                            <MoreHorizontal className="text-slate-700" />
                        </button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                        <DropdownMenu.Content
                            className="DropdownMenuContent bg-white p-4 shadow-xl shadow-slate-400/20 rounded-lg w-[500px] max-w-[200px] h-full max-h-80 overflow-y-auto flex flex-col gap-1"
                            sideOffset={5}
                            align="center"
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
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
            </Table.Column>
        </Table.Row>
    );
};
