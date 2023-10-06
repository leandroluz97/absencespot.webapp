import React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as LabelPrimitive from '@radix-ui/react-label';
import { twMerge } from 'tailwind-merge';

export const Integration = () => {
    return (
        <article className="space-y-10">
            <header>
                <h2 className="text-lg text-slate-500 font-bold">Integration</h2>
                <p className="text-slate-400">
                    Use integrations to fit hrearmark seamlessly into your workflow.
                </p>
            </header>
            <section className="space-y-7">
                <div className="space-y-1">
                    <div className="flex gap-4 py-2">
                        <svg
                            className="scale-125"
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                        >
                            <path
                                d="M21.456 8.87837H20.5833V8.83341H10.8333V13.1667H16.9558C16.0626 15.6893 13.6625 17.5001 10.8333 17.5001C7.24371 17.5001 4.33333 14.5897 4.33333 11.0001C4.33333 7.41046 7.24371 4.50008 10.8333 4.50008C12.4903 4.50008 13.9977 5.12516 15.1455 6.14621L18.2097 3.082C16.2749 1.27879 13.6868 0.166748 10.8333 0.166748C4.85062 0.166748 0 5.01737 0 11.0001C0 16.9828 4.85062 21.8334 10.8333 21.8334C16.816 21.8334 21.6667 16.9828 21.6667 11.0001C21.6667 10.2737 21.5919 9.56466 21.456 8.87837Z"
                                fill="#FFC107"
                            />
                            <path
                                d="M1.24902 5.95771L4.80832 8.568C5.7714 6.18358 8.10382 4.50008 10.8333 4.50008C12.4902 4.50008 13.9977 5.12516 15.1455 6.14621L18.2097 3.082C16.2749 1.27879 13.6868 0.166748 10.8333 0.166748C6.67219 0.166748 3.06361 2.51596 1.24902 5.95771Z"
                                fill="#FF3D00"
                            />
                            <path
                                d="M10.8329 21.8335C13.6311 21.8335 16.1737 20.7626 18.0961 19.0211L14.7431 16.1839C13.6555 17.0078 12.3035 17.5001 10.8329 17.5001C8.0151 17.5001 5.62256 15.7034 4.72123 13.196L1.18848 15.9179C2.98139 19.4263 6.62248 21.8335 10.8329 21.8335Z"
                                fill="#4CAF50"
                            />
                            <path
                                d="M21.4556 8.8787H20.583V8.83374H10.833V13.1671H16.9555C16.5265 14.3788 15.747 15.4237 14.7417 16.1847L14.7433 16.1836L18.0962 19.0209C17.859 19.2364 21.6663 16.4171 21.6663 11.0004C21.6663 10.274 21.5916 9.56499 21.4556 8.8787Z"
                                fill="#1976D2"
                            />
                        </svg>
                        <h5 className="text-slate-700 text-base font-semibold">Google Calendar</h5>
                    </div>
                    <div className="flex justify-between">
                        <LabelPrimitive.Label
                            htmlFor="google"
                            className="select-none text-sm font-medium text-slate-400 max-w-2xl"
                        >
                            Synchronise your time off with your Google calendar.
                        </LabelPrimitive.Label>
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
                    </div>
                </div>
                <div className="space-y-1">
                    <div className="flex gap-4 py-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="22"
                            viewBox="0 0 21 22"
                            fill="none"
                        >
                            <path
                                d="M9.3335 9.83325L0.000162125 9.83325L0.000162125 0.499918L9.3335 0.499918L9.3335 9.83325Z"
                                fill="#FF5722"
                            />
                            <path
                                d="M21.0005 9.83325L11.6672 9.83325L11.6672 0.499918L21.0005 0.499918V9.83325Z"
                                fill="#4CAF50"
                            />
                            <path
                                d="M21.0005 21.4998H11.6672L11.6672 12.1664L21.0005 12.1664V21.4998Z"
                                fill="#FFC107"
                            />
                            <path
                                d="M9.3335 21.4998H0.000162125L0.000162125 12.1664L9.3335 12.1664L9.3335 21.4998Z"
                                fill="#03A9F4"
                            />
                        </svg>
                        <h5 className="text-slate-700 text-base font-semibold">
                            Microsoft Integration
                        </h5>
                    </div>
                    <div className="flex justify-between">
                        <LabelPrimitive.Label
                            htmlFor="google"
                            className="select-none text-sm font-medium text-slate-400 max-w-2xl"
                        >
                            Synchronise your time off with your Microsoft workplace.
                        </LabelPrimitive.Label>
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
                    </div>
                </div>
            </section>
        </article>
    );
};
