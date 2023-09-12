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
} from 'date-fns';
import { twMerge } from 'tailwind-merge';

export const Calendar = () => {
    const today = startOfToday();
    const days = eachDayOfInterval({
        start: startOfWeek(startOfMonth(today))),
        end: endOfWeek(endOfMonth(today))),
    });
    return (
        <article>
            <div className="grid grid-cols-7 grid-rows-6 ">
                {days.map((day) => (
                    <p
                        className={twMerge(
                            'col-span-1 font-bold text-xl',
                            isToday(day) ? ' text-primary-800' : '',
                            !isSameMonth(day, today) ? ' text-slate-400' : ''
                        )}
                    >
                        {format(day, 'd')}
                    </p>
                ))}
            </div>
        </article>
    );
};
