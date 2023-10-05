import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as LabelPrimitive from '@radix-ui/react-label';
import { CheckIcon } from 'lucide-react';
import Select from 'react-select';
import { twMerge } from 'tailwind-merge';

const options = [
    { value: 'maria', label: 'Maria Willis' },
    { value: 'williams', label: 'Williams' },
    { value: 'vanilla', label: 'Vanilla' },
];

export const TeamNew = () => {
    return (
        <article className="h-auto md:h-full overflow-y-auto md:overflow-hidden flex flex-col md:flex-row  gap-[3px]">
            <section className="flex-1 h-auto md:h-full md:overflow-y-auto p-2 md:p-10">
                <div className="">
                    <div className="flex flex-col max-w-4xl mx-auto space-y-4 text-sm">
                        <div className="space-y-2 text-sm">
                            <span className="text-slate-500">Name</span>
                            <input
                                type="text"
                                className="w-full text-slate-600 rounded-lg outline-primary-900 p-2"
                            />
                        </div>
                        <div className="space-y-2 ">
                            <span className="text-slate-500">Team manager</span>
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
                        <div className="space-y-2 ">
                            <span className="text-slate-500 rounded">Team manager</span>
                            <Select
                                isMulti
                                options={options}
                                unstyled
                                //styles={{ control }}
                                placeholder="Marie Smith"
                                classNames={{
                                    clearIndicator: () => 'text-slate-400',
                                    multiValueRemove: () =>
                                        'hover:text-red-500 hover:bg-red-200 rounded-sm p-[2px] px-1 text-xl',
                                    multiValue: () =>
                                        'p-1 px-2 bg-slate-200 rounded text-slate-500 m-1 gap-1 ',
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
                        <div className="flex items-center gap-2">
                            {/* <span className="text-slate-500 rounded">Team manager</span> */}
                            <CheckboxPrimitive.Root
                                id="c1"
                                defaultChecked
                                className={twMerge(
                                    'rounded flex justify-between items-center flex-shrink-0 w-4 h-4 border-2 border-slate-400 bg-tranparent  aria-checked:border-primary-900 aria-checked:bg-primary-800  '
                                )}
                            >
                                <CheckboxPrimitive.Indicator>
                                    <CheckIcon className="h-3 w-3  self-center text-white" />
                                </CheckboxPrimitive.Indicator>
                            </CheckboxPrimitive.Root>

                            <LabelPrimitive.Label
                                htmlFor="c1"
                                className="select-none text-sm font-medium text-slate-500"
                            >
                                Automatically approve requests (approver is just notified instead)
                            </LabelPrimitive.Label>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
};
