import { Table } from '@/_common/table';
import { Check, X } from 'lucide-react';

export const TableRow = () => {
    return (
        <Table.Row>
            <Table.Column className="col-span-3">
                <div className="flex gap-2 items-center">
                    <div className="w-8 h-8 bg-slate-200 rounded-full flex flex-shrink-0 justify-center items-center">
                        <p className="text-slate-600 leading-none font-bold text-sm">CH</p>
                    </div>
                    <p className="truncate text-slate-500 text-sm">Justine Andre</p>
                </div>
            </Table.Column>
            <Table.Column>
                <p className="font-bold text-green-500">Vacation</p>
            </Table.Column>
            <Table.Column>
                <p className="text-slate-500 text-sm">Jun 26 - Jun 27</p>
            </Table.Column>
            <Table.Column className="col-span-1">
                <p className="text-slate-500 text-sm">1 Days</p>
            </Table.Column>
            <Table.Column className="col-span-2 flex items-center text-slate-500 justify-end">
                <p className="font-bold text-sm bg-violet-100 text-violet-800 rounded-lg p-1 px-3">
                    Pending
                </p>
            </Table.Column>
            <Table.Column className=" col-span-2 flex items-center text-slate-500 gap-2 justify-end">
                <button className="text-white text-sm bg-slate-100 p-2 rounded-lg hover:bg-slate-200 transition-all ease-in-out duration-300">
                    <X className="text-slate-400" />
                </button>
                <button className="text-white text-sm bg-primary-900 p-2 rounded-lg hover:bg-primary-950 transition-all ease-in-out duration-300">
                    <Check />
                </button>
            </Table.Column>
        </Table.Row>
    );
};
