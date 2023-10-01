import DatePicker from 'react-datepicker';
import { URLSearch } from '@/constants/utils/URLSearch';
import Select from 'react-select';
import Dropzone from 'react-dropzone';
import { twMerge } from 'tailwind-merge';
import { Calendar, FileUp } from 'lucide-react';
import { BasicMetric } from '@/app/_common/metrics';
import { PieChart } from '@/app/_common/charts/PieChart';
import { useState } from 'react';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const dataCircularOne = [
    { name: 'Planned', value: 6 },
    { name: 'Left', value: 18 },
];
export const RequestNew = () => {
    const QUERIES = URLSearch.queries();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <article className="h-full overflow-y-auto md:overflow-hidden flex flex-col md:flex-row  gap-[3px]">
            <section className="flex-1 h-full md:overflow-y-auto p-2 md:p-10">
                <div className="">
                    <div className="flex flex-col max-w-4xl mx-auto space-y-4 text-sm">
                        <div className="space-y-2 ">
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
                        <div className="space-y-2 text-sm ">
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
                        <div className="flex gap-4">
                            <div className="flex-1 space-y-2">
                                <span className="text-slate-500">From</span>
                                <div className="flex relative">
                                    <Calendar
                                        size={20}
                                        className="absolute left-3 top-[8px] z-10 text-slate-300"
                                    />
                                    <DatePicker
                                        className="bg-white text-slate-700 rounded-lg p-[9px] pl-10 w-full outline-transparent focus:outline-primary-900 text-sm "
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        startDate={startDate}
                                    />
                                </div>
                            </div>
                            <div className="flex-1 space-y-2">
                                <span className="text-slate-500">Start Period</span>
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
                                                state.isSelected
                                                    ? ' text-white bg-primary-900 hover:bg-primary-950'
                                                    : ' '
                                            ),
                                        control: (state) =>
                                            'bg-white p-2 px-3 rounded-lg outline-primary-900',
                                        dropdownIndicator: () => 'text-slate-400',
                                        menu: () =>
                                            'bg-white rounded-lg mt-2 p-2 shadow-xl shadow-slate-400/10',
                                        placeholder: () => 'text-slate-500',
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-1 space-y-2">
                                <span className="text-slate-500">To</span>

                                <div className="flex relative">
                                    <Calendar
                                        size={20}
                                        className="absolute left-3 top-[8px] z-10 text-slate-300"
                                    />
                                    <DatePicker
                                        className="bg-white text-slate-700 rounded-lg p-[9px] pl-10 w-full outline-transparent focus:outline-primary-900 text-sm "
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        endDate={endDate}
                                    />
                                </div>
                            </div>
                            <div className="flex-1 space-y-2">
                                <span className="text-slate-500">End Period</span>
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
                                                state.isSelected
                                                    ? ' text-white bg-primary-900 hover:bg-primary-950'
                                                    : ' '
                                            ),
                                        control: (state) =>
                                            'bg-white p-2 px-3 rounded-lg outline-primary-900',
                                        dropdownIndicator: () => 'text-slate-400',
                                        menu: () =>
                                            'bg-white rounded-lg mt-2 p-2 shadow-xl shadow-slate-400/10',
                                        placeholder: () => 'text-slate-500',
                                    }}
                                />
                            </div>
                        </div>
                        <div className="space-y-2 ">
                            <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
                                {({ getRootProps, getInputProps }) => (
                                    <div
                                        {...getRootProps()}
                                        className="w-full h-40 rounded-lg border-2 border-dashed hover:bg-slate-200/50 border-slate-300 flex flex-col text-slate-600 text-sm items-center justify-center gap-1"
                                    >
                                        <FileUp className="my-2" />
                                        <p>
                                            <strong>Click to upload</strong> or drag and drop
                                        </p>

                                        <p>PDF, PNG or JPG (Max. 4Mb)</p>
                                        <input {...getInputProps()} />
                                    </div>
                                )}
                            </Dropzone>
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
            <aside className="small-scroll flex-grow-3 md:bg-white h-full w-full md:max-w-sm rounded">
                <div className="md:overflow-hidden h-full flex flex-col">
                    <div className="p-4 space-y-6 md:overflow-y-auto">
                        <div className="flex flex-col justify-evenly items-center mx-auto w-full max-w-lg">
                            <div className="flex flex-col w-full text-left p-2">
                                <h4 className="text-slate-600 text-sm font-bold">
                                    Annual Vacation
                                </h4>
                                <div className="mx-auto relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
                                        <span className="block font-bold"> 06 </span>
                                        <span className="text-slate-400">Days used</span>
                                    </div>
                                    <PieChart
                                        data={dataCircularOne}
                                        width={180}
                                        height={180}
                                        cx={85}
                                        cy={85}
                                        innerRadius={50}
                                        outerRadius={70}
                                    />
                                </div>
                            </div>
                            <div className="w-full flex-1 flex flex-row justify-around">
                                <BasicMetric.Root>
                                    <BasicMetric.Title>06</BasicMetric.Title>
                                    <BasicMetric.Description>Planned</BasicMetric.Description>
                                </BasicMetric.Root>
                                <BasicMetric.Root>
                                    <BasicMetric.Title>18</BasicMetric.Title>
                                    <BasicMetric.Description>Left</BasicMetric.Description>
                                </BasicMetric.Root>
                                <BasicMetric.Root>
                                    <BasicMetric.Title>
                                        24 <span className="text-green-500 text-md">(+2)</span>
                                    </BasicMetric.Title>
                                    <BasicMetric.Description>Annual</BasicMetric.Description>
                                </BasicMetric.Root>
                            </div>
                        </div>
                        <div className="h-[2px] w-full bg-slate-100"></div>
                        <div className="flex flex-col justify-evenly items-center mx-auto w-full max-w-lg">
                            <div className="flex flex-col w-full text-left p-2">
                                <h4 className="text-slate-600 text-sm font-bold">Others</h4>
                                <div className="mx-auto relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
                                        <span className="block font-bold"> 06 </span>
                                        <span className="text-slate-400">Days used</span>
                                    </div>
                                    <PieChart
                                        data={dataCircularOne}
                                        width={180}
                                        height={180}
                                        cx={85}
                                        cy={85}
                                        innerRadius={50}
                                        outerRadius={70}
                                    />
                                </div>
                            </div>
                            <div className="w-full flex-1 flex flex-row justify-around">
                                <BasicMetric.Root>
                                    <BasicMetric.Title>06</BasicMetric.Title>
                                    <BasicMetric.Description>Planned</BasicMetric.Description>
                                </BasicMetric.Root>
                                <BasicMetric.Root>
                                    <BasicMetric.Title>18</BasicMetric.Title>
                                    <BasicMetric.Description>Left</BasicMetric.Description>
                                </BasicMetric.Root>
                                <BasicMetric.Root>
                                    <BasicMetric.Title>24</BasicMetric.Title>
                                    <BasicMetric.Description>Annual</BasicMetric.Description>
                                </BasicMetric.Root>
                            </div>
                        </div>
                        <div className="h-[2px] w-full bg-slate-100"></div>
                        <div className=" hidden md:flex flex-col w-full text-left p-2">
                            <h4 className="text-slate-600 text-sm font-bold">Request</h4>
                            <div className="mt-3 text-slate-500">
                                <p>Vacation leave: Jul 17 - Jul 24</p>
                                <p>Vacation leave: Aug 13 - Aug 19</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </article>
    );
};
