import { Table } from '@/_common/table';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

export const DashboardTable = () => {
    return (
        <Table.Root>
            <Table.Content>
                <TableHeader />
                {Array(5)
                    .fill(2)
                    .map((_, index) => (
                        <TableRow key={'dash_' + index} />
                    ))}
            </Table.Content>
        </Table.Root>
    );
};
