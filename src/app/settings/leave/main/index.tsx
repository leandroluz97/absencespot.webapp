import { Link } from 'react-router-dom';
import { LeaveTable } from './table/Table';

export const LeaveTypeMain = () => {
    return (
        <article className="space-y-6 h-full ">
            <section className="space-y-6 h-full">
                <header className="flex justify-between">
                    <h2 className="text-lg text-slate-500 font-bold">Leave Type</h2>
                    <Link
                        to="new"
                        type="button"
                        className="px-6 text-white text-sm bg-primary-900 p-2 rounded-lg hover:bg-primary-950 transition-all ease-in-out duration-300"
                    >
                        Create new
                    </Link>
                </header>
                <section className="space-y-5 ">
                    <LeaveTable />
                </section>
            </section>
        </article>
    );
};
