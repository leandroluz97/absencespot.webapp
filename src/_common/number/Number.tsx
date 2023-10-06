import React, { Children, ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type NumberProps = {
    label: string;
    min: number;
};

type RootProps = ComponentProps<'div'> & {
    children: ReactNode;
};
type InputProps = ComponentProps<'input'> & {};
type LabelProps = ComponentProps<'div'> & {};

export const Number = ({ label, min }: NumberProps) => {
    return (
        <div className="flex items-stretch focus:outline-primary-900 rounded-lg">
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
export const NumberRoot = ({ children, ...props }: RootProps) => {
    return (
        <div
            className={twMerge(
                'flex items-stretch focus:outline-primary-900 rounded-lg',
                props.className
            )}
        >
            {children}
        </div>
    );
};

export const NumberInput = ({ ...props }: InputProps) => {
    return (
        // <div>
        <input
            min={0}
            {...props}
            type="number"
            className={twMerge('rounded-s-lg p-2 outline-none h-full w-full', props.className)}
        />
        // </div>
    );
};
export const NumberLabel = ({ children, ...props }: LabelProps) => {
    return (
        <div
            className={twMerge(
                'bg-slate-200 rounded-e-lg p-2 px-3 text-slate-600',
                props.className
            )}
            role="label"
        >
            {children}
        </div>
    );
};
