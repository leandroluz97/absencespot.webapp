import DatePicker from 'react-datepicker';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as LabelPrimitive from '@radix-ui/react-label';
import { CheckIcon, ChevronDown, ChevronUp } from 'lucide-react';
import Select from 'react-select';
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import { Number } from '@/_common/number/Number';

const options = [
    { value: 'maria', label: 'Maria Willis' },
    { value: 'williams', label: 'Williams' },
    { value: 'vanilla', label: 'Vanilla' },
];

export const OfficeNew = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <article className="h-auto md:h-full overflow-y-auto md:overflow-hidden flex flex-col md:flex-row  gap-[3px]">
            <section className="flex-1 h-auto md:h-full md:overflow-y-auto p-2 md:p-10">
                <div className="">
                    <div className="flex flex-col max-w-4xl mx-auto space-y-10 text-sm">
                        <div className="space-y-4">
                            <div className="space-y-2 text-sm">
                                <span className="text-slate-500">Name</span>
                                <input
                                    type="text"
                                    className="w-full text-slate-600 rounded-lg outline-primary-900 p-2"
                                />
                            </div>
                            <div className="flex flex-col lg:flex-row gap-4">
                                <div className="flex-1 space-y-2">
                                    <span className="text-slate-500">Postal Code</span>
                                    <input
                                        type="text"
                                        className="w-full text-slate-600 rounded-lg outline-primary-900 p-2"
                                    />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <span className="text-slate-500">City</span>
                                    <input
                                        type="text"
                                        className="w-full text-slate-600 rounded-lg outline-primary-900 p-2"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-4">
                                <div className="flex-1 space-y-2">
                                    <span className="text-slate-500">Leave year start date</span>
                                    <div className="relative">
                                        {/* <Calendar
                                        size={20}
                                        className="absolute left-3 top-[8px] z-1 text-slate-300"
                                    /> */}
                                        <DatePicker
                                            className="bg-white text-slate-700 rounded-lg p-[9px] px-3 w-full outline-transparent focus:outline-primary-900 text-sm "
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            startDate={startDate}
                                        />
                                    </div>
                                </div>
                                <div className="flex-1 space-y-2">
                                    <span className="text-slate-500">Available leave types</span>
                                    <Select
                                        options={options}
                                        unstyled
                                        defaultValue={options[0]}
                                        //styles={{ control }}
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
                                                    'bg-white p-2 px-3 rounded-lg outline-primary-900 border-2 border-transparent',
                                                    state.isFocused ? ' border-primary-900 ' : ''
                                                ),
                                            dropdownIndicator: () => 'text-slate-400',
                                            menu: () =>
                                                'bg-white rounded-lg mt-2 p-2 shadow-xl shadow-slate-400/10',
                                            placeholder: () => 'text-slate-500',
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckboxPrimitive.Root
                                    id="c1"
                                    defaultChecked
                                    className={twMerge(
                                        'rounded flex justify-between items-center flex-shrink-0 w-4 h-4 border-2 border-slate-400 bg-tranparent  aria-checked:border-primary-900 aria-checked:bg-primary-800  '
                                    )}
                                >
                                    <CheckboxPrimitive.Indicator>
                                        <CheckIcon className="h-3 w-3 self-center text-white" />
                                    </CheckboxPrimitive.Indicator>
                                </CheckboxPrimitive.Root>

                                <LabelPrimitive.Label
                                    htmlFor="c1"
                                    className="select-none text-sm font-medium text-slate-500"
                                >
                                    Start each employee's leave year on their job start date
                                </LabelPrimitive.Label>
                            </div>
                        </div>
                        <div className="space-y-5">
                            <div className="space-y-3">
                                <h3 className="text-slate-700 font-bold">
                                    Year absence (Vacation)
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                                    <div className="space-y-2">
                                        <span className="text-slate-500">Allowance</span>
                                        <Number min={0} label="Days" />
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-slate-500">Monthly Accrual</span>
                                        <Number min={0} label="Days" />
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-slate-500">
                                            Carry over expires after
                                        </span>
                                        <Number min={0} label="Days" />
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-slate-500">Max carry over</span>
                                        <Number min={0} label="Days" />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-slate-700 font-bold">Year absence(Others)</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                                    <div className="space-y-2">
                                        <span className="text-slate-500">Allowance</span>
                                        <Number min={0} label="Days" />
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-slate-500">Monthly Accrual</span>
                                        <Number min={0} label="Days" />
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-slate-500">
                                            Carry over expires after
                                        </span>
                                        <Number min={0} label="Days" />
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-slate-500">Max carry over</span>
                                        <Number min={0} label="Days" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
};
