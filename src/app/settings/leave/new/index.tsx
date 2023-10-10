import { ArrowLeft } from 'lucide-react';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { twMerge } from 'tailwind-merge';

const options = [
    { value: 'organization', label: 'Organization' },
    { value: 'office', label: 'Office' },
    { value: 'team', label: 'Team' },
];

export const LeaveTypeNew = () => {
    return (
        <article className="space-y-6">
            <header>
                <Link
                    to={-1 as unknown as string}
                    className="text-lg text-slate-500 font-bold flex gap-3"
                >
                    <ArrowLeft className="text-slate-400" />
                    New absence type
                </Link>
            </header>
            <form className="space-y-4">
                <div className="space-y-2">
                    <label className="text-slate-500" htmlFor="name">
                        Name
                    </label>
                    <input
                        id="name"
                        type="email"
                        placeholder=""
                        className="block bg-slate-100 rounded-lg p-2 px-4 outline-primary-900 w-full text-slate-700 placeholder-slate-400"
                    />
                </div>
                <div className="flex gap-4">
                    <div className="space-y-2 flex-1">
                        <label className="text-slate-500" htmlFor="color">
                            Color
                        </label>
                        <input
                            id="color"
                            type="text"
                            placeholder=""
                            className="block bg-slate-100 rounded-lg p-2 px-4 outline-primary-900 w-full text-slate-700 placeholder-slate-400"
                        />
                    </div>
                    <div className="space-y-2 flex-1">
                        <label className="text-slate-500" htmlFor="Icon">
                            Icon
                        </label>
                        <Select
                            options={options}
                            unstyled
                            defaultValue={options[0]}
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
                                        'bg-slate-100 p-2 px-3 rounded-lg outline-primary-900 border-2 border-transparent',
                                        state.isFocused ? ' border-primary-900 ' : ''
                                    ),
                                dropdownIndicator: () => 'text-slate-400',
                                menu: () =>
                                    'bg-white rounded-lg mt-2 p-2 shadow-xl shadow-slate-400/30',
                                placeholder: () => 'text-slate-500',
                            }}
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-slate-500" htmlFor="companyName">
                        Position
                    </label>
                    <input
                        id="companyName"
                        type="email"
                        placeholder=""
                        className="block bg-slate-100 rounded-lg p-2 px-4 outline-primary-900 w-full text-slate-700 placeholder-slate-400"
                    />
                </div>
                <div className="space-y-2 ">
                    <RadioGroup.Root defaultValue="2" className="flex gap-4">
                        <div className="flex gap-2">
                            <RadioGroup.Item
                                id="approval"
                                value="1"
                                className="flex justify-between items-center flex-shrink-0 w-4 h-4 rounded-full border-4 border-slate-400 bg-slate-100  aria-checked:border-primary-900 "
                            >
                                <RadioGroup.Indicator className="flex w-2 h-2" />
                            </RadioGroup.Item>
                            <LabelPrimitive.Label
                                htmlFor="approval"
                                className="select-none text-sm font-medium text-slate-500 max-w-2xl"
                            >
                                Approval required
                            </LabelPrimitive.Label>
                        </div>
                        <div className="flex gap-2">
                            <RadioGroup.Item
                                id="reason"
                                value="2"
                                className="flex justify-between items-center flex-shrink-0 w-4 h-4 rounded-full border-4 border-slate-400 bg-slate-100  aria-checked:border-primary-900 "
                            >
                                <RadioGroup.Indicator className="flex w-2 h-2" />
                            </RadioGroup.Item>
                            <LabelPrimitive.Label
                                htmlFor="reason"
                                className="select-none text-sm font-medium text-slate-500 max-w-2xl"
                            >
                                Reason required
                            </LabelPrimitive.Label>
                        </div>
                        <div className="flex gap-2">
                            <RadioGroup.Item
                                id="quota"
                                value="3"
                                className="flex justify-between items-center flex-shrink-0 w-4 h-4 rounded-full border-4 border-slate-400 bg-slate-100  aria-checked:border-primary-900 "
                            >
                                <RadioGroup.Indicator className="flex w-2 h-2" />
                            </RadioGroup.Item>
                            <LabelPrimitive.Label
                                htmlFor="quota"
                                className="select-none text-sm font-medium text-slate-500 max-w-2xl"
                            >
                                Limited Quota
                            </LabelPrimitive.Label>
                        </div>
                    </RadioGroup.Root>
                </div>
                <div className="space-y-2">
                    <label className="text-slate-500" htmlFor="companyName">
                        Yearly Leave Quota
                    </label>
                    <input
                        id="companyName"
                        type="email"
                        placeholder=""
                        className="block bg-slate-100 rounded-lg p-2 px-4 outline-primary-900 w-full text-slate-700 placeholder-slate-400"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-slate-500" htmlFor="available">
                        Available in these offices
                    </label>
                    <Select
                        options={options}
                        unstyled
                        defaultValue={options[0]}
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
                                    'bg-slate-100 p-2 px-3 rounded-lg outline-primary-900 border-2 border-transparent',
                                    state.isFocused ? ' border-primary-900 ' : ''
                                ),
                            dropdownIndicator: () => 'text-slate-400',
                            menu: () =>
                                'bg-white rounded-lg mt-2 p-2 shadow-xl shadow-slate-400/30',
                            placeholder: () => 'text-slate-500',
                        }}
                    />
                </div>
                <div className="text-right pt-10">
                    <button
                        type="submit"
                        className=" w-full md:w-auto px-6 text-white text-sm bg-primary-900 p-2 rounded-lg hover:bg-primary-950 transition-all ease-in-out duration-300"
                    >
                        Save
                    </button>
                </div>
            </form>
        </article>
    );
};
