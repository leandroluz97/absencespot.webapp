import { CalendarFilter } from './_common/CalendarFilter';
import { PieMetrics } from './_common/PieMetrics';
import { ChartMetrics } from './_common/ChartMetrics';
import { Header } from './_common/Header';
import { DashboardTable } from './_common/table/Table';

export const Dashboard = () => {
    return (
        <article className="flex h-full gap-[3px] overflow-hidden rounded">
            <div className="flex-grow-10 flex flex-col gap-[3px] overflow-y-auto">
                <div className="flex flex-col flex-1 gap-[3px] rounded">
                    <Header />
                    <div className="flex-1 flex flex-col lg:flex-row gap-[3px]">
                        <div className="w-full lg:w-1/2 bg-white rounded">
                            <PieMetrics />
                        </div>
                        <div className="w-full lg:w-1/2 bg-white rounded">
                            <ChartMetrics />
                        </div>
                    </div>
                </div>
                <div className="p-3 rounded">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-slate-600 text-xl font-bold">Upcoming Requests</h2>
                            <p className="text-slate-400">Future and pending absences</p>
                        </div>
                        <button className="text-white text-sm bg-primary-900 p-3 px-4 rounded-lg hover:bg-primary-950 transition-all ease-in-out duration-300">
                            View All
                        </button>
                    </div>
                </div>
                <div className="flex-1 shrink-0 rounded ">
                    <DashboardTable />
                </div>
            </div>
            <CalendarFilter />
        </article>
    );
};
