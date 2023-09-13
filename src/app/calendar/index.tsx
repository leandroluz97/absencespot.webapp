import { URLSearch } from '@/constants/utils/URLSearch';
import {
    eachDayOfInterval,
    endOfMonth,
    endOfWeek,
    format,
    startOfMonth,
    startOfWeek,
    isToday,
    isSameMonth,
    startOfToday,
    add,
    sub,
} from 'date-fns';
import { ChevronLeft, ChevronRight, Group, SlidersHorizontal } from 'lucide-react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export const Calendar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const QUERIES = URLSearch.queries();
    const today = new Date(QUERIES.date || startOfToday());
    const days = eachDayOfInterval({
        start: startOfWeek(startOfMonth(today)),
        end: endOfWeek(endOfMonth(today)),
    });
    const currentMonth = new Date(QUERIES.date || today);
    const previousMonth = format(sub(currentMonth, { months: 1 }), 'yyyy-MM-dd');
    const nextMonth = format(add(currentMonth, { months: 1 }), 'yyyy-MM-dd');

    console.log('currentMonth :', currentMonth);
    console.log('previousMonth :', previousMonth);
    console.log('nextMonth :', nextMonth);

    return (
        <article className="h-full flex flex-col">
            <div className="flex gap-6 p-4">
                <div className="flex gap-2 text-slate-600 font-medium">
                    <Group /> <p>Group by: Team (Marketing)</p>
                </div>
                <div className="flex gap-2 text-slate-600 font-medium">
                    <SlidersHorizontal /> <p>Filter</p>
                </div>
            </div>
            <div className="flex justify-between items-center gap-8 mb-[2px] p-2 px-4 bg-white rounded-sm ">
                <p className="font-bold text-slate-600 ">{format(currentMonth, 'MMM yyyy')}</p>
                <div className="flex items-center ">
                    <NavLink
                        className="p-2 hover:bg-slate-100 rounded text-slate-600"
                        to={`?date=${previousMonth}`}
                    >
                        <ChevronLeft />
                    </NavLink>
                    <NavLink
                        className="p-2 hover:bg-slate-100 rounded text-slate-600"
                        to={`?date=${nextMonth}`}
                    >
                        <ChevronRight />
                    </NavLink>
                </div>
            </div>
            <div className="grid grid-cols-7 gap-[2px] mb-[2px]">
                <div className="col-span-1 font-bold text-slate-700 bg-white p-2 text-sm rounded-sm">
                    SUN
                </div>
                <div className="col-span-1 font-bold text-slate-700 bg-white p-2 text-sm rounded-sm">
                    MON
                </div>
                <div className="col-span-1 font-bold text-slate-700 bg-white p-2 text-sm rounded-sm">
                    TUE
                </div>
                <div className="col-span-1 font-bold text-slate-700 bg-white p-2 text-sm rounded-sm">
                    WED
                </div>
                <div className="col-span-1 font-bold text-slate-700 bg-white p-2 text-sm rounded-sm">
                    THU
                </div>
                <div className="col-span-1 font-bold text-slate-700 bg-white p-2 text-sm rounded-sm">
                    FRI
                </div>
                <div className="col-span-1 font-bold text-slate-700 bg-white p-2 text-sm rounded-sm">
                    SAT
                </div>
            </div>
            <div className="grid grid-cols-7 h-full  gap-[2px]">
                {days.map((day) => (
                    <div
                        className={twMerge(
                            'col-span-1 font-bold text-slate-700 bg-white p-2 text-sm rounded-sm ',
                            !isSameMonth(day, today) ? ' text-slate-300 bg-slate-50' : ''
                        )}
                    >
                        <p
                            className={twMerge(
                                '',
                                isToday(day)
                                    ? ' flex  justify-center items-center text-white bg-primary-800 rounded-full h-8 w-8'
                                    : ''
                            )}
                        >
                            {format(day, 'd')}
                        </p>
                    </div>
                ))}
            </div>
        </article>
    );
};
