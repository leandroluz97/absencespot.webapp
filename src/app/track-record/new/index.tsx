import DatePicker from 'react-datepicker';
import { Link, NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import Select from 'react-select';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { Avatar } from '@/_common/avatar';
import { URLSearch } from '@/constants/utils/URLSearch';
import { usePagination } from '@/hooks/usePagination';
import {
    add,
    eachDayOfInterval,
    eachHourOfInterval,
    eachMinuteOfInterval,
    endOfDay,
    endOfMonth,
    endOfWeek,
    format,
    isSameMonth,
    isToday,
    startOfDay,
    startOfMonth,
    startOfToday,
    startOfWeek,
    sub,
} from 'date-fns';
import { ChevronLeft, ChevronRight, Clock3 } from 'lucide-react';
import { useState } from 'react';

type IGroup = 'team' | 'office';
type IMapper = {
    team: string;
    office: string;
};

const options = [
    { value: 'Adam Bradley', label: 'Adam Bradley' },
    { value: 'Cecilia Hernandez', label: 'Cecilia Hernandez' },
    { value: 'Marie', label: 'Willis' },
];
const startPeriod = [
    { value: 'morning', label: 'Morning' },
    { value: 'midday', label: 'Midday' },
];
const periods = [
    { value: 'am', label: 'AM' },
    { value: 'pm', label: 'PM' },
];

export const TrackRecordNew = () => {
    const { pageNumber } = usePagination();
    const QUERIES = URLSearch.queries();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const today = new Date(QUERIES.date || startOfToday());
    const days = eachDayOfInterval({
        start: startOfWeek(startOfMonth(today)),
        end: endOfWeek(endOfMonth(today)),
    });
    const hours = eachMinuteOfInterval(
        {
            start: startOfDay(new Date()),
            end: endOfDay(new Date()),
        },
        { step: 5 }
    )
        .splice(0, 12 * (60 / 5))
        .map((h) => ({
            // value: format(h, "hh : mm aaaaa'm'"),
            value: format(h, 'hh:mm'),
            label: format(h, 'hh:mm'),
        }));

    console.log(hours);

    const mapper: IMapper = {
        team: 'Team',
        office: 'Office',
    };

    const currentMonth = new Date(QUERIES.date || today);
    const selectedDate = new Date(QUERIES.selectedDate || today);
    const previousMonth = format(sub(currentMonth, { months: 1 }), 'yyyy-MM-dd');
    const nextMonth = format(add(currentMonth, { months: 1 }), 'yyyy-MM-dd');

    return (
        <article className="h-auto md:h-full overflow-y-auto md:overflow-hidden flex flex-col md:flex-row  gap-[3px]">
            <section className="flex-1 h-auto md:h-full md:overflow-y-auto p-2 md:p-10">
                <div className="">
                    <div className="flex flex-col max-w-4xl mx-auto space-y-4 text-sm">
                        {/* <div className="space-y-2 ">
                            <span className="text-slate-500">On behalf of</span>
                            <Select
                                options={options}
                                unstyled
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
                        </div> */}
                        {/* <div className="space-y-2 text-sm">
                            <span className="text-slate-500">Type</span>
                            <Select
                                options={options}
                                unstyled
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
                        </div> */}
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="flex-1 space-y-2">
                                <span className="text-slate-500">On behalf of</span>
                                <Select
                                    options={options}
                                    unstyled
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
                            <div className="flex-1 space-y-2">
                                <span className="text-slate-500">Date</span>
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
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="flex-1 space-y-2">
                                <span className="text-slate-500">Check in</span>
                                <Select
                                    options={hours}
                                    unstyled
                                    //styles={{ control }}
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
                            <div className="flex-1 space-y-2">
                                <span className="text-slate-100">--</span>
                                <Select
                                    options={periods}
                                    unstyled
                                    //styles={{ control }}
                                    defaultValue={periods[0]}
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
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="flex-1 space-y-2">
                                <span className="text-slate-500">Check out</span>
                                <Select
                                    options={hours}
                                    unstyled
                                    //styles={{ control }}
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
                            <div className="flex-1 space-y-2">
                                <span className="text-slate-100">--</span>
                                <Select
                                    options={periods}
                                    unstyled
                                    //styles={{ control }}
                                    defaultValue={periods[0]}
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
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="flex-1 space-y-2">
                                <span className="text-slate-500">Break</span>
                                <Select
                                    options={periods}
                                    unstyled
                                    //styles={{ control }}
                                    defaultValue={periods[0]}
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
                            <div className="flex-1 space-y-2">
                                <span className="text-slate-100">--</span>
                                <Select
                                    options={periods}
                                    unstyled
                                    //styles={{ control }}
                                    defaultValue={periods[0]}
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
                            <div className="flex-1 space-y-2">
                                <span className="text-slate-100">--</span>
                                <Select
                                    options={periods}
                                    unstyled
                                    //styles={{ control }}
                                    defaultValue={periods[0]}
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
                            <div className="flex-1 space-y-2">
                                <span className="text-slate-100">--</span>
                                <Select
                                    options={periods}
                                    unstyled
                                    //styles={{ control }}
                                    defaultValue={periods[0]}
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
                        <div className="space-y-2 ">
                            <span className="text-slate-500">Note</span>
                            <RadioGroup.Root defaultValue="2" className="flex gap-4">
                                <div className="flex gap-2">
                                    <RadioGroup.Item
                                        value="1"
                                        className="flex justify-between items-center w-4 h-4 rounded-full border-4 border-slate-400 bg-slate-100  aria-checked:border-primary-900 "
                                    >
                                        <RadioGroup.Indicator className="flex w-2 h-2">
                                            {/* <div className="block w-1 h-1 rounded-full bg-primary-900"></div> */}
                                        </RadioGroup.Indicator>
                                    </RadioGroup.Item>
                                    On site
                                </div>

                                <div className="flex gap-2">
                                    <RadioGroup.Item
                                        value="2"
                                        className="flex justify-between items-center w-4 h-4 rounded-full border-4 border-slate-400 bg-slate-100  aria-checked:border-primary-900 "
                                    >
                                        <RadioGroup.Indicator className="flex w-2 h-2">
                                            {/* <div className="block w-1 h-1 rounded-full bg-primary-900"></div> */}
                                        </RadioGroup.Indicator>
                                    </RadioGroup.Item>
                                    Remote
                                </div>
                                <RadioGroup.Item value="2" />
                            </RadioGroup.Root>
                        </div>
                        <div className="space-y-2 ">
                            <span className="text-slate-500">Note</span>
                            <textarea
                                className="w-full rounded-lg outline-primary-900 p-3 resize-none"
                                name="note"
                                id="note"
                                rows={3}
                                placeholder="Write text here ..."
                            ></textarea>
                        </div>
                    </div>
                </div>
            </section>
            <aside className="order-1 md:order-2 small-scroll flex-grow-3 md:bg-white h-auto md:h-full w-full md:max-w-xs rounded text-sm">
                <div className="md:overflow-hidden h-full flex flex-col">
                    <div className="p-4 space-y-4 md:overflow-y-auto">
                        <div className="flex flex-col justify-evenly items-center mx-auto w-full max-w-lg">
                            <div className="flex flex-col gap-4 w-full text-left p-2">
                                <div className="text-center">
                                    <Avatar.Root className="w-14 h-14 mx-auto mb-2">
                                        <Avatar.Initials className="text-slate-700 font-bold text-lg">
                                            MM
                                        </Avatar.Initials>
                                    </Avatar.Root>
                                    <p className="text-slate-700 text-lg font-bold">Maya Miller</p>
                                    <p className="text-slate-700">Web Designer</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-slate-700 text-lg font-bold">
                                        Full-time 40 hrs
                                    </p>
                                    <p className="text-slate-700">Work Schedule</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-[2px] w-full bg-slate-100"></div>
                        <div className="flex flex-col justify-evenly items-center mx-auto w-full max-w-lg">
                            <div className="flex flex-col gap-5 w-full text-left p-2">
                                <div>
                                    <Clock3 className="text-primary-900 mb-1" size={18} />
                                    <p className="text-slate-700 leading-none">
                                        <span className=" text-lg font-bold">160</span> hrs
                                    </p>
                                    <p className="text-slate-500 leading-none">Monthly required</p>
                                </div>
                                <div>
                                    <Clock3 className="text-primary-900 mb-1" size={18} />
                                    <p className="text-slate-700 leading-none">
                                        <span className=" text-lg font-bold">75</span> hrs
                                    </p>
                                    <p className="text-slate-500 leading-none">
                                        Report time this month
                                    </p>
                                </div>
                                <div>
                                    <Clock3 className="text-primary-900 mb-1" size={18} />
                                    <p className="text-slate-700 leading-none">
                                        <span className=" text-lg font-bold">02</span> hrs
                                    </p>
                                    <p className="text-slate-500 leading-none">
                                        Overtime this month
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="h-[2px] w-full bg-slate-100"></div>
                        <div className="flex flex-col w-full text-left p-2">
                            {/* <span className='text-slate-400 group-hover:text-primary-500 after:absolute after:left-1/2 after:text-primary-900 after:-translate-x-1/2 after:-bottom-1 after:content-['•']'></span> */}
                            <section className="space-y-4">
                                <header className="flex justify-between items-center">
                                    <NavLink
                                        className="p-1 hover:bg-slate-100 rounded text-slate-400"
                                        to={`?date=${previousMonth}`}
                                    >
                                        <ChevronLeft />
                                    </NavLink>
                                    <h4 className="text-slate-600 text-sm font-bold">
                                        {format(today, 'MMM yyyy')}
                                    </h4>

                                    <NavLink
                                        className="p-1 hover:bg-slate-100 rounded text-slate-400"
                                        to={`?date=${nextMonth}`}
                                    >
                                        <ChevronRight />
                                    </NavLink>
                                </header>
                                <div className="grid grid-cols-7">
                                    <span className="text-slate-400 text-center">Sun</span>
                                    <span className="text-slate-400 text-center">Mon</span>
                                    <span className="text-slate-400 text-center">Tue</span>
                                    <span className="text-slate-400 text-center">Wed</span>
                                    <span className="text-slate-400 text-center">Thu</span>
                                    <span className="text-slate-400 text-center">Fri</span>
                                    <span className="text-slate-400 text-center">Sat</span>
                                </div>
                                <div className="grid grid-cols-7 gap-1">
                                    {days.map((day) => (
                                        <Link
                                            tabIndex={1}
                                            key={day.toDateString()}
                                            to={URLSearch.set({
                                                selectedDate: format(day, 'yyyy-MM-dd'),
                                            })}
                                            className={twMerge(
                                                'col-span-1 font-bold text-slate-700  p-2 text-sm text-center cursor-pointer rounded-full hover:bg-slate-100 transition-all ease-in duration-200 ',
                                                !isSameMonth(day, today) ? ' text-slate-300 ' : '',
                                                isToday(day) ? 'bg-slate-200 rounded-full' : '',
                                                format(day, 'yyyy-MM-dd') ===
                                                    format(selectedDate, 'yyyy-MM-dd')
                                                    ? ' bg-primary-900 hover:bg-primary-950 rounded-full text-white '
                                                    : ''
                                            )}
                                        >
                                            {format(day, 'd')}
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </aside>
        </article>
    );
};
