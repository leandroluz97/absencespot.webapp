import { Table } from '@/_common/table';
import { TableHeader } from './TableHeader';
import { TableCard } from './TableCard';

export const TeamTable = () => {
    return (
        <div className="h-full overflow-auto">
            <div className="h-full overflow-auto">
                {/* <TableHeader /> */}
                {/* <div className="h-full overflow-y-auto grid grid-cols-5 w-100 space-y-[3px]"> */}
                <div className="grid grid-cols-4 gap-[3px]">
                    {Array(40)
                        .fill(2)
                        .map((_, index) => (
                            <TableCard key={'dash_' + index} />
                        ))}
                </div>
            </div>
        </div>
    );
};
