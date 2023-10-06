import { ArrowLeft } from 'lucide-react';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { twMerge } from 'tailwind-merge';
const options = [
    { value: 'organization', label: 'Organization' },
    { value: 'office', label: 'Office' },
    { value: 'team', label: 'Team' },
];

export const UserNew = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <article className=" space-y-6">
            <header>
                <Link to={''} className="text-lg text-slate-500 font-bold flex gap-3">
                    <ArrowLeft className="text-slate-400" />
                    New User
                </Link>
            </header>
            <form className="space-y-4">
                <div className="flex gap-4">
                    <div className="space-y-2 flex-1">
                        <label className="text-slate-500" htmlFor="firstname">
                            First Name
                        </label>
                        <input
                            id="firstname"
                            type="text"
                            placeholder=""
                            className="block bg-slate-50 rounded-lg p-2 px-4 outline-primary-900 w-full text-slate-700 placeholder-slate-400"
                        />
                    </div>
                    <div className="space-y-2 flex-1">
                        <label className="text-slate-500" htmlFor="lastname">
                            Last Name
                        </label>
                        <input
                            id="lastname"
                            type="text"
                            placeholder=""
                            className="block bg-slate-50 rounded-lg p-2 px-4 outline-primary-900 w-full text-slate-700 placeholder-slate-400"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-slate-500" htmlFor="companyName">
                        Email
                    </label>
                    <input
                        id="companyName"
                        type="email"
                        placeholder=""
                        className="block bg-slate-50 rounded-lg p-2 px-4 outline-primary-900 w-full text-slate-700 placeholder-slate-400"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-slate-500" htmlFor="companyName">
                        Position
                    </label>
                    <input
                        id="companyName"
                        type="email"
                        placeholder=""
                        className="block bg-slate-50 rounded-lg p-2 px-4 outline-primary-900 w-full text-slate-700 placeholder-slate-400"
                    />
                </div>

                <div className="flex gap-4">
                    <div className="space-y-2 flex-1">
                        <label className="text-slate-500" htmlFor="team">
                            Team
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
                    <div className="space-y-2 flex-1">
                        <label className="text-slate-500" htmlFor="office">
                            Office
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
                </div>
                <div className="flex gap-4">
                    <div className="space-y-2 flex-1">
                        <label className="text-slate-500" htmlFor="team">
                            Work schedule
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
                    <div className="space-y-2 flex-1">
                        <label className="text-slate-500" htmlFor="office">
                            Start date
                        </label>
                        <DatePicker
                            className="bg-slate-50 text-slate-700 rounded-lg p-[9px] px-3 w-full outline-transparent focus:outline-primary-900 text-sm "
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            startDate={startDate}
                        />
                    </div>
                </div>
                <div className="text-right pt-10">
                    <button
                        type="submit"
                        className="px-6 text-white text-sm bg-primary-900 p-2 rounded-lg hover:bg-primary-950 transition-all ease-in-out duration-300"
                    >
                        Save
                    </button>
                </div>
            </form>
        </article>
    );
};
