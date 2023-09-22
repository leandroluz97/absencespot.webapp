import { URLSearch } from '@/constants/utils/URLSearch';
import Select from 'react-select';
import Dropzone from 'react-dropzone';
import { twMerge } from 'tailwind-merge';
import { FileUp } from 'lucide-react';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

export const RequestNew = () => {
    const QUERIES = URLSearch.queries();
    return (
        <article className="h-full overflow-y-auto md:overflow-hidden flex flex-col md:flex-row  gap-[3px]">
            <section className="flex-1 h-full overflow-y-auto p-10">
                <div className="">
                    <div className="flex flex-col max-w-4xl mx-auto space-y-4 ">
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
                        <div className="space-y-2 ">
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
                                            'bg-white p-2 px-3 rounded-lg outline-primary-900',
                                        dropdownIndicator: () => 'text-slate-400',
                                        menu: () =>
                                            'bg-white rounded-lg mt-2 p-2 shadow-xl shadow-slate-400/10',
                                        placeholder: () => 'text-slate-500',
                                    }}
                                />
                            </div>
                            <div className="flex-1 space-y-2">
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
                                            'bg-white p-2 px-3 rounded-lg outline-primary-900',
                                        dropdownIndicator: () => 'text-slate-400',
                                        menu: () =>
                                            'bg-white rounded-lg mt-2 p-2 shadow-xl shadow-slate-400/10',
                                        placeholder: () => 'text-slate-500',
                                    }}
                                />
                            </div>
                            <div className="flex-1 space-y-2">
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
            <aside className="small-scroll bg-a flex-grow-3 bg-white h-full w-full md:max-w-sm rounded">
                <div className="overflow-hidden h-full flex flex-col">
                    <div className="p-4 space-y-6 overflow-y-auto">
                        gdgdgd
                        {/* <section>
                          <h3 className="font-bold text-slate-700 mb-3">Categories</h3>
                          <div className="flex flex-col gap-2">
                              {categories.map((cat) => (
                                  <button
                                      className="flex gap-2 items-center"
                                      role="checkbox"
                                      aria-checked={
                                          filter.categories.includes(cat.name) ? 'true' : 'false'
                                      }
                                      value={filter.categories.includes(cat.name) ? 'on' : 'off'}
                                      data-state={
                                          filter.categories.includes(cat.name)
                                              ? 'checked'
                                              : 'uncheck'
                                      }
                                      id={cat.name}
                                      onClick={() =>
                                          setFilter({
                                              ...filter,
                                              categories: filter.categories.includes(cat.name)
                                                  ? filter.categories.filter((c) => c !== cat.name)
                                                  : [...filter.categories, cat.name],
                                          })
                                      }
                                  >
                                      <div className={getStyle(cat)}>
                                          <CheckIcon className="text-white" size={15} />
                                      </div>
                                      <label htmlFor={cat.name}>{cat.name}</label>
                                  </button>
                              ))}
                          </div>
                      </section>
                      <section>
                          <h3 className="font-bold text-slate-700 mb-3">
                              Request Awaiting Approval
                          </h3>
                          <div
                              key={9}
                              className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                          >
                              <Avatar.Root>
                                  <Avatar.Initials>CH</Avatar.Initials>
                              </Avatar.Root>
                              <div>
                                  <p className="text-sm text-slate-500 font-bold">
                                      Cecilia Hernández
                                  </p>
                                  <p className="text-sm text-slate-400">
                                      Vacation: May 24 - Jun 24
                                  </p>
                              </div>
                              <button className="text-white text-sm bg-primary-900 p-2 rounded-lg ml-auto hover:bg-primary-950 transition-all ease-in-out duration-300">
                                  <Check />
                              </button>
                          </div>
                      </section>
                      <section>
                          <h3 className="font-bold text-slate-700 mb-3">Upcoming </h3>
                          <div
                              key={9}
                              className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                          >
                              <Avatar.Root>
                                  <Avatar.Initials>VF</Avatar.Initials>
                              </Avatar.Root>
                              <div>
                                  <p className="text-sm text-slate-500 font-bold">
                                      Victoria Flores
                                  </p>
                                  <p className="text-sm text-slate-400">
                                      Maternity : May 5 - Dec 1
                                  </p>
                              </div>
                          </div>
                          <div
                              key={9}
                              className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                          >
                              <Avatar.Root>
                                  <Avatar.Initials>VF</Avatar.Initials>
                              </Avatar.Root>
                              <div>
                                  <p className="text-sm text-slate-500 font-bold">
                                      Victoria Flores
                                  </p>
                                  <p className="text-sm text-slate-400">
                                      Maternity : May 5 - Dec 1
                                  </p>
                              </div>
                          </div>
                          <div
                              key={9}
                              className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                          >
                              <Avatar.Root>
                                  <Avatar.Initials>VF</Avatar.Initials>
                              </Avatar.Root>
                              <div>
                                  <p className="text-sm text-slate-500 font-bold">
                                      Victoria Flores
                                  </p>
                                  <p className="text-sm text-slate-400">
                                      Maternity : May 5 - Dec 1
                                  </p>
                              </div>
                          </div>
                          <div
                              key={9}
                              className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                          >
                              <Avatar.Root>
                                  <Avatar.Initials>VF</Avatar.Initials>
                              </Avatar.Root>
                              <div>
                                  <p className="text-sm text-slate-500 font-bold">
                                      Victoria Flores
                                  </p>
                                  <p className="text-sm text-slate-400">
                                      Maternity : May 5 - Dec 1
                                  </p>
                              </div>
                          </div>
                          <div
                              key={9}
                              className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                          >
                              <Avatar.Root>
                                  <Avatar.Initials>VF</Avatar.Initials>
                              </Avatar.Root>
                              <div>
                                  <p className="text-sm text-slate-500 font-bold">
                                      Victoria Flores
                                  </p>
                                  <p className="text-sm text-slate-400">
                                      Maternity : May 5 - Dec 1
                                  </p>
                              </div>
                          </div>
                          <div
                              key={9}
                              className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                          >
                              <Avatar.Root>
                                  <Avatar.Initials>VF</Avatar.Initials>
                              </Avatar.Root>
                              <div>
                                  <p className="text-sm text-slate-500 font-bold">
                                      Victoria Flores
                                  </p>
                                  <p className="text-sm text-slate-400">
                                      Maternity : May 5 - Dec 1
                                  </p>
                              </div>
                          </div>
                          <div
                              key={9}
                              className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                          >
                              <Avatar.Root>
                                  <Avatar.Initials>VF</Avatar.Initials>
                              </Avatar.Root>
                              <div>
                                  <p className="text-sm text-slate-500 font-bold">
                                      Victoria Flores
                                  </p>
                                  <p className="text-sm text-slate-400">
                                      Maternity : May 5 - Dec 1
                                  </p>
                              </div>
                          </div>
                          <div
                              key={9}
                              className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                          >
                              <Avatar.Root>
                                  <Avatar.Initials>VF</Avatar.Initials>
                              </Avatar.Root>
                              <div>
                                  <p className="text-sm text-slate-500 font-bold">
                                      Victoria Flores
                                  </p>
                                  <p className="text-sm text-slate-400">
                                      Maternity : May 5 - Dec 1
                                  </p>
                              </div>
                          </div>
                          <div
                              key={9}
                              className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                          >
                              <Avatar.Root>
                                  <Avatar.Initials>VF</Avatar.Initials>
                              </Avatar.Root>
                              <div>
                                  <p className="text-sm text-slate-500 font-bold">
                                      Victoria Flores
                                  </p>
                                  <p className="text-sm text-slate-400">
                                      Maternity : May 5 - Dec 1
                                  </p>
                              </div>
                          </div>
                          <div
                              key={9}
                              className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                          >
                              <Avatar.Root>
                                  <Avatar.Initials>VF</Avatar.Initials>
                              </Avatar.Root>
                              <div>
                                  <p className="text-sm text-slate-500 font-bold">
                                      Victoria Flores
                                  </p>
                                  <p className="text-sm text-slate-400">
                                      Maternity : May 5 - Dec 1
                                  </p>
                              </div>
                          </div>
                          <div
                              key={9}
                              className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                          >
                              <Avatar.Root>
                                  <Avatar.Initials>VF</Avatar.Initials>
                              </Avatar.Root>
                              <div>
                                  <p className="text-sm text-slate-500 font-bold">
                                      Victoria Flores
                                  </p>
                                  <p className="text-sm text-slate-400">
                                      Maternity : May 5 - Dec 1
                                  </p>
                              </div>
                          </div>
                          <div
                              key={9}
                              className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                          >
                              <Avatar.Root>
                                  <Avatar.Initials>VF</Avatar.Initials>
                              </Avatar.Root>
                              <div>
                                  <p className="text-sm text-slate-500 font-bold">
                                      Victoria Flores
                                  </p>
                                  <p className="text-sm text-slate-400">
                                      Maternity : May 5 - Dec 1
                                  </p>
                              </div>
                          </div>
                          <div
                              key={9}
                              className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                          >
                              <Avatar.Root>
                                  <Avatar.Initials>VF</Avatar.Initials>
                              </Avatar.Root>
                              <div>
                                  <p className="text-sm text-slate-500 font-bold">
                                      Victoria Flores
                                  </p>
                                  <p className="text-sm text-slate-400">
                                      Maternity : May 5 - Dec 1
                                  </p>
                              </div>
                          </div>
                          <div
                              key={9}
                              className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                          >
                              <Avatar.Root>
                                  <Avatar.Initials>VF</Avatar.Initials>
                              </Avatar.Root>
                              <div>
                                  <p className="text-sm text-slate-500 font-bold">
                                      Victoria Flores
                                  </p>
                                  <p className="text-sm text-slate-400">
                                      Maternity : May 5 - Dec 1
                                  </p>
                              </div>
                          </div>
                          <div
                              key={9}
                              className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                          >
                              <Avatar.Root>
                                  <Avatar.Initials>VF</Avatar.Initials>
                              </Avatar.Root>
                              <div>
                                  <p className="text-sm text-slate-500 font-bold">
                                      Victoria Flores
                                  </p>
                                  <p className="text-sm text-slate-400">
                                      Maternity : May 5 - Dec 1
                                  </p>
                              </div>
                          </div>
                          <div
                              key={9}
                              className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all ease-in-out duration-300"
                          >
                              <Avatar.Root>
                                  <Avatar.Initials>VF</Avatar.Initials>
                              </Avatar.Root>
                              <div>
                                  <p className="text-sm text-slate-500 font-bold">
                                      Victoria Flores
                                  </p>
                                  <p className="text-sm text-slate-400">
                                      Maternity : May 5 - Dec 1
                                  </p>
                              </div>
                          </div>
                      </section> */}
                    </div>
                </div>
            </aside>
        </article>
    );
};
