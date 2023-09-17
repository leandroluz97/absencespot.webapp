import { Table } from '@/_common/table';
import { URLSearch } from '@/constants/utils/URLSearch';
import { useSearchParams } from 'react-router-dom';

export const TableHeader = () => {
    useSearchParams();
    const QUERIES = URLSearch.queries();
    const desc = QUERIES.sortDesc === 'true' ? 'false' : 'true';

    return (
        <Table.Row>
            <Table.ColumnHead
                to={URLSearch.set({
                    sortBy: 'name',
                    sortDesc: QUERIES.sortBy === 'name' ? desc : 'false',
                })}
                className="col-span-2"
                hasIcon={true}
                query="name"
            >
                Employee
            </Table.ColumnHead>
            <Table.ColumnHead to="" className="col-span-1" hasIcon={false}>
                Type
            </Table.ColumnHead>
            <Table.ColumnHead
                to={URLSearch.set({
                    sortBy: 'start',
                    sortDesc: QUERIES.sortBy === 'start' ? desc : 'false',
                })}
                className="col-span-2"
                hasIcon={true}
                query="start"
            >
                Starts on
            </Table.ColumnHead>
            <Table.ColumnHead
                to={URLSearch.set({
                    sortBy: 'end',
                    sortDesc: QUERIES.sortBy === 'end' ? desc : 'false',
                })}
                className="col-span-2"
                hasIcon={true}
                query="end"
            >
                Ends on
            </Table.ColumnHead>
            <Table.ColumnHead
                to={URLSearch.set({
                    sortBy: 'created',
                    sortDesc: QUERIES.sortBy === 'created' ? desc : 'false',
                })}
                className="col-span-2"
                hasIcon={true}
                query="created"
            >
                Created
            </Table.ColumnHead>
            <Table.ColumnHead to="" className="col-span-1" hasIcon={false}>
                Status
            </Table.ColumnHead>
            <Table.ColumnHead to="" className="col-span-1 flex justify-center" hasIcon={false}>
                Notes
            </Table.ColumnHead>
            <Table.ColumnHead to="" className="col-span-1" hasIcon={false}>
                {' '}
            </Table.ColumnHead>
        </Table.Row>
    );
};
