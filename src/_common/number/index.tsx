import React from 'react';

type NumberProps = {
    label: string;
    min: number;
};
export const Number = ({ label, min }: NumberProps) => {
    return (
        <div className="flex items-stretch focus:outline-primary-900 rounded-lg ">
            <div>
                <input
                    type="number"
                    min={min}
                    className="rounded-s-lg p-2 outline-none h-full w-full"
                />
            </div>
            {/* <div className="flex flex-col h-full justify-between bg-white-500 bg-white p-1 ">
                <button
                    role="button"
                    className="block hover:bg-slate-100 rounded transition-all ease-in-out duration-300"
                >
                    <ChevronUp size={15} className="text-slate-500" />
                </button>
                <button
                    role="button"
                    className="block hover:bg-slate-100 rounded transition-all ease-in-out duration-300"
                >
                    <ChevronDown size={15} className="text-slate-500" />
                </button>
            </div> */}
            <div className="bg-slate-200 rounded-e-lg p-2 px-3 text-slate-600">{label}</div>
        </div>
    );
};
