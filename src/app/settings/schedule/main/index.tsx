import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScheduleTable } from './table/Table';
import { Pagination } from '@/_common/pagination';

export const WorkScheduleMain = () => {
    return (
        <article className="space-y-6 h-full ">
            <section className="space-y-6 h-full">
                <header className="flex justify-between">
                    <h2 className="text-lg text-slate-500 font-bold">User</h2>
                    <Link
                        to="new"
                        type="button"
                        className="px-6 text-white text-sm bg-primary-900 p-2 rounded-lg hover:bg-primary-950 transition-all ease-in-out duration-300"
                    >
                        Invite user
                    </Link>
                </header>
                <section className="space-y-5 ">
                    <div className="relative max-w-full w-full">
                        <Search
                            size={20}
                            className="absolute top-3 left-4 translate-y-0.3 text-slate-400"
                        />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-slate-100 rounded-lg p-3 pl-12 outline-primary-900 w-full text-slate-700 placeholder-slate-400"
                        />
                    </div>
                    <ScheduleTable />
                </section>
            </section>
        </article>
    );
};
