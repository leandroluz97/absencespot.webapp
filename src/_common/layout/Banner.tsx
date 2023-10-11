import React, { ReactNode, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Dashboard } from '../../auth/_common/assets/dashboard';

type Props = {
    title: string;
    description: string;
    //  images: ReactNode[];
};

export const Banner = ({ title, description }: Props) => {
    const [counter, setCounter] = useState<number>(3);
    return (
        <section className="hidden md:block w-1/2 bg-primary-100">
            <div className="ml-24 mt-24 space-y-6">
                <h2 className="font-extrabold text-3xl text-slate-800">{title}</h2>
                <p className="text-base text-slate-500 max-w-xl">{description}</p>
                <div className="flex gap-2">
                    {[].map((_, index) => {
                        return (
                            <div
                                className={twMerge(
                                    'h-2 w-2 bg-primary-400 rounded-full cursor-pointer transition-all ease-in-out duration-200 ',
                                    index === counter ? ' w-4 bg-primary-900' : ''
                                )}
                            ></div>
                        );
                    })}
                </div>
                <div>
                    <Dashboard />
                </div>
            </div>
        </section>
    );
};
