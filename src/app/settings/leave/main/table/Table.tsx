import { Table } from '@/_common/table';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

export const LeaveTable = () => {
    return (
        <Table.Root style={{ minWidth: '500px' }} className="h-full overflow-auto">
            <Table.Content className="h-full overflow-auto">
                <TableHeader />
                <div className="h-full overflow-y-auto flex flex-col w-100 space-y-[3px]">
                    {Array(5)
                        .fill(2)
                        .map((_, index) => (
                            <TableRow key={'user_' + index} />
                        ))}
                </div>
            </Table.Content>
        </Table.Root>
    );
};
