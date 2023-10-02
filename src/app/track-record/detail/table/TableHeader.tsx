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
                Date
            </Table.ColumnHead>
            <Table.ColumnHead
                to={URLSearch.set({
                    sortBy: 'name',
                    sortDesc: QUERIES.sortBy === 'name' ? desc : 'false',
                })}
                className="col-span-1"
                hasIcon={false}
                query="name"
            >
                Check in
            </Table.ColumnHead>
            <Table.ColumnHead
                to={URLSearch.set({
                    sortBy: 'name',
                    sortDesc: QUERIES.sortBy === 'name' ? desc : 'false',
                })}
                className="col-span-2"
                hasIcon={false}
                query="name"
            >
                Check out
            </Table.ColumnHead>
            <Table.ColumnHead
                to={URLSearch.set({
                    sortBy: 'name',
                    sortDesc: QUERIES.sortBy === 'name' ? desc : 'false',
                })}
                className="col-span-3"
                hasIcon={false}
                query="name"
            >
                Break
            </Table.ColumnHead>
            <Table.ColumnHead
                to={URLSearch.set({
                    sortBy: 'name',
                    sortDesc: QUERIES.sortBy === 'name' ? desc : 'false',
                })}
                className="col-span-1"
                hasIcon={false}
                query="name"
            >
                Worked
            </Table.ColumnHead>
            <Table.ColumnHead
                to={URLSearch.set({
                    sortBy: 'name',
                    sortDesc: QUERIES.sortBy === 'name' ? desc : 'false',
                })}
                className="col-span-1"
                hasIcon={false}
                query="name"
            >
                Overtime
            </Table.ColumnHead>
            <Table.ColumnHead
                to={URLSearch.set({
                    sortBy: 'name',
                    sortDesc: QUERIES.sortBy === 'name' ? desc : 'false',
                })}
                className="col-span-1 flex justify-end"
                hasIcon={false}
                query="name"
            >
                Note
            </Table.ColumnHead>
            <Table.ColumnHead to="" className="col-span-1" hasIcon={false}>
                {' '}
            </Table.ColumnHead>
        </Table.Row>
    );
};
