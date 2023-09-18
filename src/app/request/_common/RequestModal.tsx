import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Paperclip, X } from 'lucide-react';
import { Avatar } from '@/_common/avatar';
import { NavLink } from 'react-router-dom';
import { IRequest } from '@/types';
import { format, sub } from 'date-fns';

type RequestModalProps = { data: IRequest };

export const RequestModal = ({ data, ...props }: RequestModalProps) => {
    const { firstName, lastName, type, start, end, notes } = data;
    console.log(start);
    console.log(end);

    return (
        <Dialog.Root open={false}>
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
                                    <Avatar.Initials>
                                        {firstName.charAt(0)}
                                        {lastName.charAt(0)}
                                    </Avatar.Initials>
                                </Avatar.Root>
                                <p className="truncate text-slate-500 text">
                                    {firstName + ' ' + lastName}
                                </p>
                            </div>
                            <NavLink to={''}>Edit</NavLink>
                        </header>
                        <div className="h-[1px] w-full bg-slate-100"></div>
                        <div className="flex py-4 justify-between items-center">
                            <p className="font-bold text-green-500">{type}</p>
                            <p className="font-bold text-sm bg-violet-100 text-violet-800 rounded-lg p-1 px-3">
                                Pending
                            </p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-slate-600 font-bold">Days</p>
                                <p className="text-slate-500 text-sm">
                                    {Math.round(
                                        (new Date(end) - new Date(start)) / (24 * 60 * 60 * 1000)
                                    )}
                                </p>
                            </div>
                            <div>
                                <p className="text-slate-600 font-bold">Start On</p>
                                <p className="text-slate-500 text-sm">
                                    {format(new Date(start), 'eee, MMM dd, yyyy')}
                                </p>
                            </div>
                            <div>
                                <p className="text-slate-600 font-bold">End On</p>
                                <p className="text-slate-500 text-sm">
                                    {format(new Date(end), 'eee, MMM dd, yyyy')}
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-slate-600 font-bold">Notes</p>
                            <p className="text-slate-500 text-sm">{notes}</p>
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
    );
};
