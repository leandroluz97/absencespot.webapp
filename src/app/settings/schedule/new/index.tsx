import { ArrowLeft } from 'lucide-react';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { twMerge } from 'tailwind-merge';
import { Number } from '@/_common/number';
import {
    eachDayOfInterval,
    eachMinuteOfInterval,
    endOfDay,
    endOfWeek,
    format,
    startOfDay,
    startOfWeek,
} from 'date-fns';

const options = [
    { value: 'organization', label: 'Organization' },
    { value: 'office', label: 'Office' },
    { value: 'team', label: 'Team' },
];

export const WorkScheduleNew = () => {
    const [selectedDays, setSelectedDays] = useState([]);
    const weekDays = eachDayOfInterval({
        start: startOfWeek(new Date()),
        end: endOfWeek(new Date()),
    });

    const hours = eachMinuteOfInterval(
        {
            start: startOfDay(new Date()),
            end: endOfDay(new Date()),
        },
        { step: 15 }
    )
        .splice(0, 12 * (60 / 5))
        .map((h) => ({
            // value: format(h, "hh : mm aaaaa'm'"),
            value: format(h, "hh : mm aaaaa'm'"),
            label: format(h, "hh : mm aaaaa'm'"),
        }));

    return (
        <article className="space-y-6">
            <header>
                <Link
                    to={-1 as unknown as string}
                    className="text-lg text-slate-500 font-bold flex gap-3"
                >
                    <ArrowLeft className="text-slate-400" />
                    New Work Schedule
                </Link>
            </header>
            <form className="space-y-6">
                <div className="space-y-2">
                    <label className="text-slate-500" htmlFor="name">
                        Name
                    </label>
                    <input
                        id="name"
                        type="email"
                        placeholder=""
                        className="block bg-slate-50 rounded-lg p-2 px-4 outline-primary-900 w-full text-slate-700 placeholder-slate-400"
                    />
                </div>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-slate-400 font-bold">Configuration</h3>
                        <p className="text-slate-400">Choose the hours and days of the week</p>
                    </div>
                    <div className="flex gap-2">
                        <RadioGroup.Root defaultValue="2" className="flex gap-4">
                            <LabelPrimitive.Label
                                htmlFor="default"
                                className="select-none text-sm font-medium text-slate-500 max-w-2xl flex gap-2 bg-slate-100 p-3 rounded-md aria-checked:bg-red-900"
                            >
                                <RadioGroup.Item
                                    id="default"
                                    value="1"
                                    className="flex justify-between items-center flex-shrink-0 w-4 h-4 rounded-full border-4 border-slate-400 bg-slate-100  aria-checked:border-primary-900 "
                                >
                                    <RadioGroup.Indicator className="flex w-2 h-2" />
                                </RadioGroup.Item>
                                <div className="space-y-1">
                                    <span className="block font-semibold text-slate-600">
                                        Default
                                    </span>
                                    <span className="block">
                                        A schedule with start and. Specify the start and end times
                                        of the workday with a specified number of hours.
                                    </span>
                                </div>
                            </LabelPrimitive.Label>
                            <LabelPrimitive.Label
                                htmlFor="flexible"
                                className="select-none text-sm font-medium text-slate-500 max-w-2xl flex gap-2 bg-slate-100 p-3 rounded-md aria-checked:bg-red-900"
                            >
                                <RadioGroup.Item
                                    id="flexible"
                                    value="2"
                                    className="flex justify-between items-center flex-shrink-0 w-4 h-4 rounded-full border-4 border-slate-400 bg-slate-100  aria-checked:border-primary-900 "
                                >
                                    <RadioGroup.Indicator className="flex w-2 h-2" />
                                </RadioGroup.Item>
                                <div className="space-y-1">
                                    <span className="block font-semibold text-slate-600">
                                        Flexible
                                    </span>
                                    <span className="block">
                                        There is a fixed start and end of the working day or a
                                        standardised number of working hours in accordance with the
                                        law.
                                    </span>
                                </div>
                            </LabelPrimitive.Label>
                        </RadioGroup.Root>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-slate-100"></div>
                <div className="flex gap-4">
                    <div className="space-y-5 flex-1">
                        <div className="space-y-2">
                            <h3 className="text-slate-400 font-bold">Work days</h3>
                            <p className="text-slate-400">Select the days of the week to be work</p>
                        </div>
                        <Number.Root>
                            <Number.Input className="bg-slate-50 w-full" />
                            <Number.Label>Days</Number.Label>
                        </Number.Root>
                    </div>
                    <div className="space-y-5 flex-1">
                        <div className="space-y-2">
                            <h3 className="text-slate-400 font-bold">Hours</h3>
                            <p className="text-slate-400">Set which hours want to be working</p>
                        </div>
                        <Number.Root>
                            <Number.Input className="bg-slate-50 w-full" />
                            <Number.Label>Hours</Number.Label>
                        </Number.Root>
                    </div>
                </div>
                <div className="space-y-6 gap-4">
                    <div className="space-y-5 flex-1">
                        <div className="space-y-2">
                            <h3 className="text-slate-400 font-bold">Work days</h3>
                            <p className="text-slate-400">Select the days of the week to be work</p>
                        </div>
                        <div className="flex gap-2">
                            {weekDays.map((day) => {
                                const isActive = format(day, 'yyyy-MM-dd');
                                return (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSelectedDays((d) =>
                                                d.includes(isActive)
                                                    ? d.filter((f) => f !== isActive)
                                                    : [...d, isActive]
                                            )
                                        }
                                        className={twMerge(
                                            'text-slate-600 bg-slate-100 p-2 px-4 rounded-lg font-semibold hover:bg-slate-200 transition-all ease-in-out duration-300',
                                            selectedDays.includes(isActive) &&
                                                'bg-primary-900 hover:bg-primary-950 text-white'
                                        )}
                                    >
                                        {format(day, 'E').substring(0, 3)}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="space-y-2">
                            <h3 className="text-slate-400 font-bold">Hours</h3>
                            <p className="text-slate-400">Set which hours want to be working</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <p className="text-right font-semibold text-slate-500">Week (5 days)</p>
                            <div className="flex items-center">
                                <Select
                                    options={hours}
                                    unstyled
                                    defaultValue={hours[0]}
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
                                            'bg-white rounded-lg mt-2 p-2 shadow-xl shadow-slate-400/10',
                                        placeholder: () => 'text-slate-500',
                                    }}
                                />
                                <span className="text-slate-600"> - </span>
                                <Select
                                    options={hours}
                                    unstyled
                                    defaultValue={hours[0]}
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
                                            'bg-white rounded-lg mt-2 p-2 shadow-xl shadow-slate-400/10',
                                        placeholder: () => 'text-slate-500',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
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
