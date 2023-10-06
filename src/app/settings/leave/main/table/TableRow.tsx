import { Table } from '@/_common/table';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { URLSearch } from '@/constants/utils/URLSearch';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Eye, FileText, MoreHorizontal, Palmtree, Pencil } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export const TableRow = () => {
    return (
        <Table.Row className="p-2 bg-slate-50 rounded-lg">
            <Table.Column className="col-span-3">
                <p className="text-slate-500 text-sm">Vacation</p>
            </Table.Column>
            <Table.Column className="col-span-2">
                <Palmtree className="text-green-600" />
            </Table.Column>
            <Table.Column className="col-span-3">
                <p className="text-slate-500 text-sm">Yess</p>
            </Table.Column>
            <Table.Column className="col-span-2">
                <p className="text-slate-500 text-sm">--</p>
            </Table.Column>
            <Table.Column className="col-span-1">
                <SwitchPrimitive.Root
                    id="google"
                    className={twMerge(
                        'group',
                        'bg-slate-300',
                        'aria-checked:bg-primary-600',
                        'aria-unchecked:bg-slate-500',
                        'relative inline-flex h-[24px] w-[44px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out',
                        'focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-75'
                    )}
                >
                    <SwitchPrimitive.Thumb
                        className={twMerge(
                            'group-aria-checked:translate-x-5',
                            'group-aria-unchecked:translate-x-0',
                            'pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out'
                        )}
                    />
                </SwitchPrimitive.Root>
            </Table.Column>
            <Table.Column className="col-span-1 flex items-center justify-end">
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
