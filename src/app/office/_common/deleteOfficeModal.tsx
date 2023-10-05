import * as Dialog from '@radix-ui/react-dialog';
import { AlertTriangle, X } from 'lucide-react';
import { Avatar } from '@/_common/avatar';

export const DeleteOfficeModal = () => {
    return (
        <Dialog.Root open={true}>
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
                        <header className="flex gap-2 justify-center items-center w-full">
                            <div className="flex flex-col gap-2 items-center ">
                                <AlertTriangle size={80} className="text-slate-300" />
                                <h4 className="truncate text-slate-700 text-2xl font-medium">
                                    Delete Lisbon's Office
                                </h4>
                            </div>
                        </header>
                        <div>
                            <p className="text-slate-500 text-base text-center">
                                Are you sure you want to eliminate this office? It won't be possible
                                to reverse this action.
                            </p>
                        </div>
                        <input
                            type="text"
                            placeholder="type here..."
                            className="block bg-slate-100 rounded-lg p-2 outline-primary-900 w-full text-slate-700 placeholder-slate-400 max-w-sm mx-auto"
                        />
                        <div className="h-[1px] w-full bg-slate-100 "></div>
                        <footer className="space-y-4">
                            <div className="flex justify-center gap-2">
                                <Dialog.Close asChild>
                                    <button
                                        type="button"
                                        className="px-6 text-slate-700 text-sm bg-slate-100 p-2 rounded-lg hover:bg-slate-200 transition-all ease-in-out duration-300"
                                    >
                                        Cancel
                                    </button>
                                </Dialog.Close>
                                <button
                                    type="button"
                                    className="px-6 text-white text-sm bg-red-500 p-2 rounded-lg hover:bg-red-600 transition-all ease-in-out duration-300"
                                >
                                    Delete
                                </button>
                            </div>
                        </footer>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};
