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
                className="col-span-3"
                hasIcon={true}
                query="name"
            >
                Employee
            </Table.ColumnHead>
            <Table.ColumnHead to="" className="col-span-3" hasIcon={false} query="start">
                Position
            </Table.ColumnHead>
            <Table.ColumnHead to="" className="col-span-2" hasIcon={false} query="end">
                Team
            </Table.ColumnHead>
            <Table.ColumnHead to="" className="col-span-3" hasIcon={false} query="end">
                Office
            </Table.ColumnHead>
            <Table.ColumnHead to="" className="col-span-1" hasIcon={false}>
                {' '}
            </Table.ColumnHead>
        </Table.Row>
    );
};
