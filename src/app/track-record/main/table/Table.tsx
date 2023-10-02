import { Table } from '@/_common/table';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

export const TrackRecordTable = () => {
    return (
        <Table.Root style={{ minWidth: '900px' }} className="h-full overflow-auto">
            <Table.Content className="h-full overflow-auto">
                <TableHeader />
                <div className="h-full overflow-y-auto flex flex-col w-100 space-y-[3px]">
                    {Array(20)
                        .fill(2)
                        .map((_, index) => (
                            <TableRow key={'dash_' + index} />
                        ))}
                </div>
            </Table.Content>
        </Table.Root>
    );
};
