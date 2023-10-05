import { Avatar } from '@/_common/avatar';
import React from 'react';

export const NotificationRow = () => {
    return (
        <div className="bg-white flex justify-between items-start p-5 rounded">
            <div className="flex gap-4">
                <div className=" self-start flex gap-2 items-center flex-shrink-0">
                    <Avatar.Root>
                        <Avatar.Initials>CH</Avatar.Initials>
                    </Avatar.Root>
                </div>
                <div>
                    <div className="flex flex-col  flex:row md:gap-2 mt-2">
                        <p className="truncate text-slate-500 text-md font-bold">Adam Bradley</p>
                        <span className="text-slate-500">
                            added new request. (Vacation: 23 May - 29 Jul){' '}
                        </span>
                    </div>
                    <div className="flex gap-1 truncate text-slate-500 text-sm">
                        <p className="truncate text-slate-400 text-sm">
                            1h ago &bull; Marketing team
                        </p>
                    </div>
                    {/* <div className="py-2">
                                        <p className="text-slate-500">
                                            <span className="font-bold text-green-500">
                                                Vacation
                                            </span>
                                            : 23 May - 29 Jul
                                        </p>
                                    </div> */}
                    <div className="flex  gap-2 mt-3">
                        <button
                            type="button"
                            className="px-6 text-slate-700 text-sm bg-slate-100 p-2 rounded-lg hover:bg-slate-200 transition-all ease-in-out duration-300"
                        >
                            Reject
                        </button>
                        <button
                            type="button"
                            className="px-6 text-white text-sm bg-primary-900 p-2 rounded-lg hover:bg-primary-950 transition-all ease-in-out duration-300"
                        >
                            Approve
                        </button>
                    </div>
                </div>
            </div>
            <p className="font-bold text-sm bg-violet-100 text-violet-800 rounded-lg p-1 px-3">
                Pending
            </p>
        </div>
    );
};
