import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ISlider, sliderData } from '@/constants/utils/slider';

export const Banner = () => {
    const [counter, setCounter] = useState<number>(1);
    const title = sliderData[counter].title;
    const description = sliderData[counter].description;
    const Image = sliderData[counter].image;

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((c) => (c === sliderData.length - 1 ? 0 : c + 1));
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="hidden md:block w-1/2 bg-primary-100">
            <div className="ml-24 mt-24 space-y-6">
                <React.Fragment>
                    <h2
                        id="title"
                        className="font-extrabold text-3xl text-slate-800 transition duration-700 ease-in-out"
                    >
                        {title}
                    </h2>
                    <p
                        id="description"
                        className="text-base text-slate-500 max-w-xl transition duration-200 ease-in-out"
                    >
                        {description}
                    </p>
                    <div className="flex gap-2">
                        {Array.from({ length: sliderData.length }).map((_, index) => {
                            return (
                                <div
                                    key={'_click' + index}
                                    role="button"
                                    onClick={() => setCounter(index)}
                                    className={twMerge(
                                        'h-2 w-2 bg-primary-400 rounded-full cursor-pointer transition-all ease-in-out duration-200 ',
                                        index === counter ? ' w-4 bg-primary-900' : ''
                                    )}
                                ></div>
                            );
                        })}
                    </div>
                    <div id="image">
                        <Image />
                    </div>
                </React.Fragment>
            </div>
        </section>
    );
};
