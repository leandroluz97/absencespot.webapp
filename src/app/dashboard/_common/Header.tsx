import { BasicTabs } from '@/_common/tabs';
import { URLSearch } from '@/constants/utils/URLSearch';
import * as R from 'ramda';
import { useSearchParams } from 'react-router-dom';

export const Header = () => {
    useSearchParams();
    const QUERIES = URLSearch.queries();

    return (
        <div className="rounded p-3 flex justify-center md:justify-between items-end">
            <div className="hidden md:block ">
                <h2 className="text-slate-600 text-xl font-bold">Hello, Emily Smith 👋</h2>
                <p className="text-slate-400">
                    Here is what’s happening at
                    <span className="font-bold"> AbsenceSpot</span>
                </p>
            </div>
            <div>
                <BasicTabs.Root>
                    <BasicTabs.List
                        className="flex justify-between gap-2"
                        aria-label="Filter by role"
                    >
                        <BasicTabs.Trigger value="company" className="p-0">
                            <BasicTabs.Link
                                className="p-2"
                                to={URLSearch.set({ role: 'company' })}
                                isActive={QUERIES.role === 'company' || R.isNil(QUERIES.role)}
                            >
                                Company
                            </BasicTabs.Link>
                        </BasicTabs.Trigger>
                        <BasicTabs.Trigger value="personal" className="p-0">
                            <BasicTabs.Link
                                className="p-2"
                                to={URLSearch.set({ role: 'personal' })}
                                isActive={QUERIES.role === 'personal'}
                            >
                                Personal
                            </BasicTabs.Link>
                        </BasicTabs.Trigger>
                    </BasicTabs.List>
                </BasicTabs.Root>
            </div>
        </div>
    );
};
