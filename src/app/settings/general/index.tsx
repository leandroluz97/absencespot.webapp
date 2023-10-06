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

export const General = () => {
    return (
        <article className=" space-y-6">
            <header>
                <h2 className="text-lg text-slate-500 font-bold">General</h2>
                <p className="text-slate-400">Custumize and configure</p>
            </header>
            <div className="h-[1px] w-full bg-slate-100"></div>
            <section className="space-y-4">
                <h3 className="text-slate-400 font-bold">Configuration</h3>
                <div className="space-y-2">
                    <label className="text-slate-500" htmlFor="companyName">
                        Company Name
                    </label>
                    <input
                        id="companyName"
                        type="text"
                        placeholder=""
                        className="block bg-slate-50 rounded-lg p-2 px-4 outline-primary-900 w-full text-slate-700 placeholder-slate-400 max-w-sm"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-slate-500" htmlFor="companyName">
                        Display
                    </label>
                    <Select
                        options={options}
                        unstyled
                        defaultValue={options[0]}
                        className="max-w-sm "
                        placeholder="Marie Smith"
                        classNames={{
                            singleValue: () => 'text-slate-600',
                            option: (state) =>
                                twMerge(
                                    'p-1 rounded text-slate-600 font-medium hover:bg-slate-100 p-2 rounded outline-transparent cursor-pointer',
                                    state.isFocused ? ' bg-slate-100' : '',
                                    state.isSelected
                                        ? ' text-white bg-primary-900 hover:bg-primary-950'
                                        : ' '
                                ),
                            control: (state) =>
                                twMerge(
                                    'bg-slate-50 p-2 px-3 rounded-lg outline-primary-900 border-2 border-transparent',
                                    state.isFocused ? ' border-primary-900 ' : ''
                                ),
                            dropdownIndicator: () => 'text-slate-400',
                            menu: () =>
                                'bg-white rounded-lg mt-2 p-2 shadow-xl shadow-slate-400/10',
                            placeholder: () => 'text-slate-500',
                        }}
                    />
                </div>
                <div className="space-y-2">
                    <h4 className="text-slate-500 font-medium">Privacy Mode </h4>
                    <div className="flex justify-between">
                        <LabelPrimitive.Label
                            htmlFor="privacy"
                            className="select-none text-sm font-medium text-slate-400 max-w-2xl"
                        >
                            Don't show the leave type in calendars, daily and weekly notifications
                            or other places visible to the whole organization.
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
                <div className="space-y-2">
                    <h4 className="text-slate-500 font-medium">Book On Behalf Of Others </h4>
                    <div className="flex justify-between">
                        <LabelPrimitive.Label
                            htmlFor="book"
                            className="select-none text-sm font-medium text-slate-400 max-w-2xl"
                        >
                            Allow time off approvers to book time off on behalf of those they
                            approve for (otherwise only admins can do this).
                        </LabelPrimitive.Label>
                        <SwitchPrimitive.Root
                            id="book"
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
                <div className="space-y-2">
                    <h4 className="text-slate-500 font-medium">Send emails</h4>
                    <div className="flex justify-between">
                        <LabelPrimitive.Label
                            htmlFor="email"
                            className="select-none text-sm font-medium text-slate-400 max-w-2xl"
                        >
                            Send email notifications (disable for example if you only want to use
                            Slack for notifications).
                        </LabelPrimitive.Label>
                        <SwitchPrimitive.Root
                            id="email"
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
                <div className="space-y-2">
                    <h4 className="text-slate-500 font-medium">Email Links Require Login</h4>
                    <div className="flex justify-between">
                        <LabelPrimitive.Label
                            htmlFor="login"
                            className="select-none text-sm font-medium text-slate-400 max-w-2xl"
                        >
                            Approve/reject links from emails should only work if you are logged in.
                        </LabelPrimitive.Label>
                        <SwitchPrimitive.Root
                            id="login"
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
            <div className="h-[1px] w-full bg-slate-100"></div>
            <section className="space-y-4">
                <h3 className="text-slate-400 font-bold">Date and time settings</h3>
                <div className="space-y-2">
                    <label className="text-slate-500" htmlFor="companyName">
                        Data format
                    </label>
                    <Select
                        options={options}
                        unstyled
                        defaultValue={options[0]}
                        className="max-w-sm "
                        placeholder="Marie Smith"
                        classNames={{
                            singleValue: () => 'text-slate-600',
                            option: (state) =>
                                twMerge(
                                    'p-1 rounded text-slate-600 font-medium hover:bg-slate-100 p-2 rounded outline-transparent cursor-pointer',
                                    state.isFocused ? ' bg-slate-100' : '',
                                    state.isSelected
                                        ? ' text-white bg-primary-900 hover:bg-primary-950'
                                        : ' '
                                ),
                            control: (state) =>
                                twMerge(
                                    'bg-slate-50 p-2 px-3 rounded-lg outline-primary-900 border-2 border-transparent',
                                    state.isFocused ? ' border-primary-900 ' : ''
                                ),
                            dropdownIndicator: () => 'text-slate-400',
                            menu: () =>
                                'bg-white rounded-lg mt-2 p-2 shadow-xl shadow-slate-400/10',
                            placeholder: () => 'text-slate-500',
                        }}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-slate-500" htmlFor="companyName">
                        Time format
                    </label>
                    <Select
                        options={options}
                        unstyled
                        defaultValue={options[0]}
                        className="max-w-sm "
                        placeholder="Marie Smith"
                        classNames={{
                            singleValue: () => 'text-slate-600',
                            option: (state) =>
                                twMerge(
                                    'p-1 rounded text-slate-600 font-medium hover:bg-slate-100 p-2 rounded outline-transparent cursor-pointer',
                                    state.isFocused ? ' bg-slate-100' : '',
                                    state.isSelected
                                        ? ' text-white bg-primary-900 hover:bg-primary-950'
                                        : ' '
                                ),
                            control: (state) =>
                                twMerge(
                                    'bg-slate-50 p-2 px-3 rounded-lg outline-primary-900 border-2 border-transparent',
                                    state.isFocused ? ' border-primary-900 ' : ''
                                ),
                            dropdownIndicator: () => 'text-slate-400',
                            menu: () =>
                                'bg-white rounded-lg mt-2 p-2 shadow-xl shadow-slate-400/10',
                            placeholder: () => 'text-slate-500',
                        }}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-slate-500" htmlFor="companyName">
                        Timezone
                    </label>
                    <Select
                        options={options}
                        unstyled
                        defaultValue={options[0]}
                        className="max-w-sm "
                        placeholder="Marie Smith"
                        classNames={{
                            singleValue: () => 'text-slate-600',
                            option: (state) =>
                                twMerge(
                                    'p-1 rounded text-slate-600 font-medium hover:bg-slate-100 p-2 rounded outline-transparent cursor-pointer',
                                    state.isFocused ? ' bg-slate-100' : '',
                                    state.isSelected
                                        ? ' text-white bg-primary-900 hover:bg-primary-950'
                                        : ' '
                                ),
                            control: (state) =>
                                twMerge(
                                    'bg-slate-50 p-2 px-3 rounded-lg outline-primary-900 border-2 border-transparent',
                                    state.isFocused ? ' border-primary-900 ' : ''
                                ),
                            dropdownIndicator: () => 'text-slate-400',
                            menu: () =>
                                'bg-white rounded-lg mt-2 p-2 shadow-xl shadow-slate-400/10',
                            placeholder: () => 'text-slate-500',
                        }}
                    />
                </div>
            </section>
            <div className="h-[1px] w-full bg-slate-100"></div>
            <section className="space-y-4">
                <h3 className="text-slate-400 font-bold">Calendar settings</h3>
                <div className="space-y-2">
                    <label className="text-slate-500" htmlFor="companyName">
                        First day of the week
                    </label>
                    <Select
                        options={options}
                        unstyled
                        defaultValue={options[0]}
                        className="max-w-sm "
                        placeholder="Marie Smith"
                        classNames={{
                            singleValue: () => 'text-slate-600',
                            option: (state) =>
                                twMerge(
                                    'p-1 rounded text-slate-600 font-medium hover:bg-slate-100 p-2 rounded outline-transparent cursor-pointer',
                                    state.isFocused ? ' bg-slate-100' : '',
                                    state.isSelected
                                        ? ' text-white bg-primary-900 hover:bg-primary-950'
                                        : ' '
                                ),
                            control: (state) =>
                                twMerge(
                                    'bg-slate-50 p-2 px-3 rounded-lg outline-primary-900 border-2 border-transparent',
                                    state.isFocused ? ' border-primary-900 ' : ''
                                ),
                            dropdownIndicator: () => 'text-slate-400',
                            menu: () =>
                                'bg-white rounded-lg mt-2 p-2 shadow-xl shadow-slate-400/10',
                            placeholder: () => 'text-slate-500',
                        }}
                    />
                </div>
                <div className="space-y-2">
                    <h4 className="text-slate-500 font-medium">Birthday</h4>
                    <div className="flex justify-between">
                        <LabelPrimitive.Label
                            htmlFor="birthday"
                            className="select-none text-sm font-medium text-slate-400 max-w-2xl"
                        >
                            Show birthdays on the calendar.
                        </LabelPrimitive.Label>
                        <SwitchPrimitive.Root
                            id="birthday"
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
                <div className="space-y-2">
                    <h4 className="text-slate-500 font-medium">Absence</h4>
                    <div className="flex justify-between">
                        <LabelPrimitive.Label
                            htmlFor="absence"
                            className="select-none text-sm font-medium text-slate-400 max-w-2xl"
                        >
                            Show absence resulting from the work schedule on the calendar
                        </LabelPrimitive.Label>
                        <SwitchPrimitive.Root
                            id="absence"
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
