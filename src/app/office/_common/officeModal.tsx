import * as Dialog from '@radix-ui/react-dialog';
import { Building2, X } from 'lucide-react';

export const OfficeModal = () => {
    return (
        <Dialog.Root open={true}>
            {/* <Dialog.Trigger asChild>
                    <button className="Button violet">Edit profile</button>
                </Dialog.Trigger> */}
            <Dialog.Portal className="rounded-xl">
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent p-12 w-full max-w-xl rounded-2xl ">
                    <Dialog.Title className="DialogTitle text-lg sr-only">
                        lisbon office
                    </Dialog.Title>
                    <Dialog.Close asChild>
                        <button
                            aria-label="options"
                            className="absolute  right-2 top-2 outline-none text-white text-sm p-2 rounded-lg hover:bg-slate-50 transition-all ease-in-out duration-300"
                        >
                            <X className="text-slate-300 hover:text-slate-400 transition-all ease-in-out duration-300" />
                        </button>
                    </Dialog.Close>

                    <div className="space-y-6 text-sm">
                        <header className="flex gap-2 items-center">
                            <div className="flex flex-col gap-2  ">
                                <div>
                                    <Building2 className="text-primary-900" />
                                </div>
                                <h2 className="text-slate-500 text-sm font-bold">
                                    Lisbon, Portugal
                                </h2>
                            </div>
                        </header>
                        <div className="h-[1px] w-full bg-slate-100"></div>
                        <div className="space-y-4">
                            <h4 className="text-slate-400 text-sm">Location</h4>
                            <div className="flex justify-between items-center">
                                <div className="flex-1 space-y-2">
                                    <p className="text-slate-600 font-bold">Address</p>
                                    <p className="text-slate-500 text-sm">Postcode: 70123</p>
                                </div>
                                <div className="flex-1 text-left space-y-2">
                                    <p className="text-slate-600 font-bold">Time Zone</p>
                                    <p className="text-slate-500 text-sm">(GMT+01:00) Lisbon</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-[1px] w-full bg-slate-100"></div>
                        <div className="space-y-4">
                            <h4 className="text-slate-400 text-sm">Absence</h4>
                            <div className="flex justify-between items-center">
                                <div className="flex-1 space-y-2">
                                    <p className="text-slate-600 font-bold">Annual Vacation</p>
                                    <p className="text-slate-500 text-sm">
                                        <span className="text-slate-700 font-bold">04</span> Annual
                                    </p>
                                </div>
                                <div className="flex-1 text-left space-y-2">
                                    <p className="text-slate-600 font-bold">Others</p>
                                    <p className="text-slate-500 text-sm">
                                        <span className="text-slate-700 font-bold">04</span> Annual
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="h-[1px] w-full bg-slate-100"></div>
                        <div className="space-y-4">
                            <h4 className="text-slate-400 text-sm">Holidays</h4>
                            <div className="flex-1 space-y-3">
                                <h4 className="text-slate-600 font-bold">Annual Vacation</h4>
                                <div className="space-y-2">
                                    <p className="text-slate-500 text-sm">
                                        <span className="font-bold">Corpus Christian </span>
                                        National Holiday: 8 de Jun
                                    </p>
                                    <p className="text-slate-500 text-sm">
                                        <span className="font-bold">Portugal Day </span>
                                        National Holiday: 10 de Jun
                                    </p>
                                    <p className="text-slate-500 text-sm">
                                        <span className="font-bold">St. Anthony's Day </span>
                                        District Holiday: 13 de Jun (Lisbon, Vila Real)
                                    </p>
                                    <p className="text-slate-500 text-sm">
                                        <span className="font-bold">Assumption Day </span>
                                        National Holiday: 15 August
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};
