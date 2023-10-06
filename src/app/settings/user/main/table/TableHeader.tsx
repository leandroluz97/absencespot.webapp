import { Table } from '@/_common/table';
import { URLSearch } from '@/constants/utils/URLSearch';
import { useSearchParams } from 'react-router-dom';

export const TableHeader = () => {
    useSearchParams();
    const QUERIES = URLSearch.queries();
    const desc = QUERIES.sortDesc === 'true' ? 'false' : 'true';

    return (
        <Table.Row className="bg-slate-100 rounded-lg">
            <Table.ColumnHead
                to={URLSearch.set({
                    sortBy: 'name',
                    sortDesc: QUERIES.sortBy === 'name' ? desc : 'false',
                })}
                className="col-span-6 text-slate-600"
                hasIcon={true}
                query="name"
            >
                Name
            </Table.ColumnHead>
            <Table.ColumnHead
                to={URLSearch.set({
                    sortBy: 'role',
                    sortDesc: QUERIES.sortBy === 'role' ? desc : 'false',
                })}
                className="col-span-4 text-slate-600"
                hasIcon={true}
                query="role"
            >
                Role
            </Table.ColumnHead>
            <Table.ColumnHead to="" className="col-span-2 text-slate-600" hasIcon={false}>
                {' '}
            </Table.ColumnHead>
        </Table.Row>
    );
};
