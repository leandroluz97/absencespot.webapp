import { Table } from '@/_common/table';
import { URLSearch } from '@/constants/utils/URLSearch';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Eye, FileText, MoreHorizontal, Pencil } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export const TableRow = () => {
    return (
        <Table.Row className="p-2 bg-slate-50 rounded-lg">
            <Table.Column className="col-span-6">
                <div className="flex gap-2 items-center">
                    <div className="w-8 h-8 bg-slate-200 rounded-full flex flex-shrink-0 justify-center items-center">
                        <p className="text-slate-600 leading-none font-bold text-sm">CH</p>
                    </div>
                    <div>
                        <p className="truncate text-slate-500 text-sm font-semibold">
                            Justine Andre
                        </p>
                        <p className="text-slate-400">justin.andre@absencespot.com</p>
                    </div>
                </div>
            </Table.Column>
            <Table.Column className="col-span-4">
                <p className="text-slate-500 text-sm">User</p>
            </Table.Column>
            <Table.Column className="col-span-2 flex items-center justify-end">
                <DropdownMenu.Root key="filterBy">
                    <DropdownMenu.Trigger asChild>
                        <button
                            aria-label="options"
                            className="IconButton outline-none text-white text-sm p-2 rounded-lg hover:bg-slate-100 transition-all ease-in-out duration-300"
                        >
                            <MoreHorizontal className="text-slate-400" />
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
