import React from 'react';
import * as R from 'ramda';
import { URLSearch } from '@/constants/utils/URLSearch';
import { usePagination } from '@/hooks/usePagination';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Group, SlidersHorizontal } from 'lucide-react';
import { BasicTabs } from '@/_common/tabs';
import { Avatar } from '@/_common/avatar';
import { NotificationRow } from './_common/notificationRow';
import { Pagination } from '@/_common/pagination';

type IGroup = 'team' | 'office';
type IMapper = {
    team: string;
    office: string;
};

export const Notification = () => {
    const { pageNumber } = usePagination();
    const QUERIES = URLSearch.queries();

    const mapper: IMapper = {
        team: 'Team',
        office: 'Office',
    };
    return (
        <article className="h-full overflow-hidden flex flex-col gap-[3px] text-sm">
            <section className="flex-1 flex flex-col overflow-hidden">
                <div className="flex gap-6 p-4">
                    <BasicTabs.Root>
                        <BasicTabs.List
                            className="flex justify-between gap-4"
                            aria-label="Filter by absence types"
                        >
                            <BasicTabs.Trigger value="all" className="p-0">
                                <BasicTabs.Link
                                    className="p-1 px-2"
                                    to={URLSearch.set({ type: 'all' })}
                                    isActive={QUERIES.type === 'all' || R.isNil(QUERIES.type)}
                                >
                                    All
                                </BasicTabs.Link>
                            </BasicTabs.Trigger>
                            <BasicTabs.Trigger value="archived" className="p-0">
                                <BasicTabs.Link
                                    className="p-1 px-2"
                                    to={URLSearch.set({ type: 'archived' })}
                                    isActive={QUERIES.type === 'archived'}
                                >
                                    Archived
                                </BasicTabs.Link>
                            </BasicTabs.Trigger>
                        </BasicTabs.List>
                    </BasicTabs.Root>
                </div>
                <div className="h-full flex flex-col overflow-hidden ">
                    <div className="flex-1 h-full overflow-auto">
                        <div className="flex flex-col gap-[3px]">
                            {Array(20)
                                .fill(2)
                                .map((_, index) => (
                                    <NotificationRow key={'notify_' + index} />
                                ))}
                        </div>
                    </div>
                    <footer className="p-1">
                        {/* <Pagination pageNumber={54} totalPages={1} /> */}
                    </footer>
                </div>
            </section>
            {/* <TrackRecordModal /> */}
        </article>
    );
};
