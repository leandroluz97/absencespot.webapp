import { Table } from '@/_common/table';

export const TableHeader = () => {
    return (
        <Table.Row>
            <Table.ColumnHead to="" className="col-span-3" hasIcon={false}>
                Employee
            </Table.ColumnHead>
            <Table.ColumnHead to="" hasIcon={false}>
                Type
            </Table.ColumnHead>
            <Table.ColumnHead to="" hasIcon={false}>
                Date
            </Table.ColumnHead>
            <Table.ColumnHead to="" hasIcon={false} className="col-span-1">
                Duration
            </Table.ColumnHead>
            <Table.ColumnHead to="" hasIcon={false} className="justify-end">
                Status
            </Table.ColumnHead>
            <Table.ColumnHead to="" hasIcon={false}>
                {' '}
            </Table.ColumnHead>
        </Table.Row>
    );
};
