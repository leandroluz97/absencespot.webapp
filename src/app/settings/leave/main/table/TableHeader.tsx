import { Table } from '@/_common/table';
import { URLSearch } from '@/constants/utils/URLSearch';
import { useSearchParams } from 'react-router-dom';

export const TableHeader = () => {
    useSearchParams();
    const QUERIES = URLSearch.queries();
    const desc = QUERIES.sortDesc === 'true' ? 'false' : 'true';

    return (
        <Table.Row className="bg-slate-100 rounded-lg">
            <Table.ColumnHead to="" className="col-span-3 text-slate-600" hasIcon={false}>
                Name
            </Table.ColumnHead>
            <Table.ColumnHead to="" className="col-span-2 text-slate-600" hasIcon={false}>
                Icon
            </Table.ColumnHead>
            <Table.ColumnHead to="" className="col-span-3 text-slate-600" hasIcon={false}>
                Required Approval
            </Table.ColumnHead>
            <Table.ColumnHead to="" className="col-span-2 text-slate-600" hasIcon={false}>
                Allowance
            </Table.ColumnHead>
            <Table.ColumnHead to="" className="col-span-1 text-slate-600" hasIcon={false}>
                Status
            </Table.ColumnHead>
            <Table.ColumnHead to="" className="col-span-1 text-slate-600" hasIcon={false}>
                {' '}
            </Table.ColumnHead>
        </Table.Row>
    );
};
