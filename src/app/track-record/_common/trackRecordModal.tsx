import * as Dialog from '@radix-ui/react-dialog';
import { Paperclip, X } from 'lucide-react';
import { Avatar } from '@/_common/avatar';
import { NavLink } from 'react-router-dom';
import { IRequest } from '@/types';
import { format } from 'date-fns';

type TrackRecordModalProps = { data: IRequest };

export const TrackRecordModal = ({ data, ...props }: TrackRecordModalProps) => {
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
                        <header className="flex gap-2 items-center">
                            <div className="flex gap-2 items-center ">
                                <Avatar.Root className="bg-slate-200">
                                    <Avatar.Initials>MM</Avatar.Initials>
                                </Avatar.Root>
                                <p className="truncate text-slate-500 text">Marie Menezes</p>
                            </div>
                            <p className="font-medium text-sm text-slate-700 "> | Remote</p>
                            {/* <NavLink to={''}>Edit</NavLink> */}
                        </header>
                        <div className="h-[1px] w-full bg-slate-100"></div>
                        {/* <div className="flex py-4 justify-between items-center">
                            <p className="font-bold text-green-500">{type}</p>
                            <p className="font-medium text-sm text-slate-700 ">Remote</p>
                        </div> */}
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-slate-600 font-bold">Days</p>
                                <p className="text-slate-500 text-sm">Mon, Apr 3, 2023</p>
                            </div>
                            <div>
                                <p className="text-slate-600 font-bold">Check in</p>
                                <p className="text-slate-500 text-sm">09:00 AM</p>
                            </div>
                            <div>
                                <p className="text-slate-600 font-bold">Check out</p>
                                <p className="text-slate-500 text-sm">09:00 AM</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-slate-600 font-bold">Notes</p>
                            <p className="text-slate-500 text-sm">
                                I need to work from home because I have a gas inspection today
                                during the day.
                            </p>
                        </div>
                        <div className="h-[1px] w-full bg-slate-100 "></div>
                        <footer className="space-y-4">
                            <p className="text-slate-500 text-sm text-center">
                                Created by Justine Andre: May 12, 2023
                            </p>
                        </footer>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};
