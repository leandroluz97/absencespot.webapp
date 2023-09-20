import { URLSearch } from '@/constants/utils/URLSearch';
import Select from 'react-select';
import * as R from 'ramda';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

export const RequestNew = () => {
    const QUERIES = URLSearch.queries();
    return (
        <article className="h-full overflow-y-auto md:overflow-hidden flex flex-col md:flex-row  gap-[3px]">
            <section className="flex-1 h-full m-10">
                <div className="flex flex-col max-w-4xl mx-auto relative">
                    {/* <DropdownMenu.Root key="filterBy">
                        <DropdownMenu.Trigger asChild>
                            <button
                                className="IconButton flex justify-between gap-2 outline-none bg-white rounded p-2"
                                aria-label="Customise options"
                            >
                                Filter By: {'Team A'}
                                <ChevronDown />
                            </button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Portal className="relative">
                            <DropdownMenu.Content
                                loop
                                className="DropdownMenuContent bg-white p-4 shadow-xl shadow-slate-400/20 rounded-lg h-full max-h-80 overflow-y-auto flex flex-col w-full relative left-0 right-0 gap-1"
                                sideOffset={10}
                                style={{
                                    // minWidth: '100vw',
                                    position: 'absolute',
                                    height: '300px',
                                    width: '400px',
                                    minWidth: '600px',
                                }}
                                align="start"
                            >
                                <NavLink to={URLSearch.set({ filterBy: 'teamA' })}>
                                    <DropdownMenu.Item
                                        className={twMerge(
                                            'DropdownMenuItem text-slate-600 font-medium hover:bg-slate-100 p-2 rounded outline-transparent cursor-pointer ',
                                            QUERIES.filterBy === 'teamA' ||
                                                R.isNil(QUERIES.filterBy)
                                                ? ' text-white bg-primary-900 hover:bg-primary-950'
                                                : ''
                                        )}
                                    >
                                        Team A
                                    </DropdownMenu.Item>
                                </NavLink>
                                <NavLink to={URLSearch.set({ filterBy: 'teamB' })}>
                                    <DropdownMenu.Item
                                        className={twMerge(
                                            'DropdownMenuItem text-slate-600 font-medium hover:bg-slate-100 p-2 rounded outline-transparent cursor-pointer flex',
                                            QUERIES.filterBy === 'teamB'
                                                ? ' text-white bg-primary-900 hover:bg-primary-950'
                                                : ''
                                        )}
                                    >
                                        Team B
                                    </DropdownMenu.Item>
                                </NavLink>
                                <NavLink to={URLSearch.set({ filterBy: 'teamC' })}>
                                    <DropdownMenu.Item
                                        className={twMerge(
                                            'DropdownMenuItem text-slate-600 font-medium hover:bg-slate-100 p-2 rounded outline-transparent cursor-pointer',
                                            QUERIES.filterBy === 'teamC'
                                                ? ' text-white bg-primary-900 hover:bg-primary-950'
                                                : ''
                                        )}
                                    >
                                        Team C
                                    </DropdownMenu.Item>
                                </NavLink>
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root> */}
                    <Select options={options} unstyled styles={{}} />
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
