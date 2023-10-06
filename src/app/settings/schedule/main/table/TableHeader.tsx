import { Table } from '@/_common/table';
import { URLSearch } from '@/constants/utils/URLSearch';
import { useSearchParams } from 'react-router-dom';

export const TableHeader = () => {
    useSearchParams();
    const QUERIES = URLSearch.queries();
    const desc = QUERIES.sortDesc === 'true' ? 'false' : 'true';

    return (
        <Table.Row className="bg-slate-100 rounded-lg">
            <Table.ColumnHead to="" className="col-span-4 text-slate-600" hasIcon={false}>
                Name
            </Table.ColumnHead>
            <Table.ColumnHead to="" className="col-span-2 text-slate-600" hasIcon={false}>
                Work time
            </Table.ColumnHead>
            <Table.ColumnHead to="" className="col-span-2 text-slate-600" hasIcon={false}>
                Work model
            </Table.ColumnHead>
            <Table.ColumnHead to="" className="col-span-2 text-slate-600" hasIcon={false}>
                Employee count
            </Table.ColumnHead>
            <Table.ColumnHead to="" className="col-span-2 text-slate-600" hasIcon={false}>
                {' '}
            </Table.ColumnHead>
        </Table.Row>
    );
};
