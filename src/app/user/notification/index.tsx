import React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as LabelPrimitive from '@radix-ui/react-label';
import Select from 'react-select';
import { twMerge } from 'tailwind-merge';
const options = [
    { value: 'organization', label: 'Organization' },
    { value: 'office', label: 'Office' },
    { value: 'team', label: 'Team' },
];

export const Notification = () => {
    return (
        <article className="space-y-6">
            <header>
                <h2 className="text-lg text-slate-500 font-bold">Notifications</h2>
                <p className="text-slate-400">Custumize and configure</p>
            </header>
            <div className="h-[1px] w-full bg-slate-100"></div>
            <section className="space-y-4">
                <div className="space-y-2">
                    <h4 className="text-slate-500 font-medium">Send emails</h4>
                    <div className="flex justify-between">
                        <LabelPrimitive.Label
                            htmlFor="privacy"
                            className="select-none text-sm font-medium text-slate-400 max-w-2xl"
                        >
                            Send email notifications (disable for example if you only want to use
                            Slack for notifications).
                        </LabelPrimitive.Label>
                        <SwitchPrimitive.Root
                            id="privacy"
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
