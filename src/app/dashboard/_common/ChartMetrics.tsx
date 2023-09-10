import { BarChart } from '@/app/_common/charts/BarChart';
import React from 'react';

const data1 = [
    {
        name: 'Mo',
        'Worked Hours': 4000,
        Overtime: 2400,
        amt: 2400,
    },
    {
        name: 'Tu',
        'Worked Hours': 3000,
        Overtime: 1398,
        amt: 2210,
    },
    {
        name: 'We',
        'Worked Hours': 2000,
        Overtime: 800,
        amt: 2290,
    },
    {
        name: 'Th',
        'Worked Hours': 2780,
        Overtime: 3908,
        amt: 2000,
    },
    {
        name: 'Fr',
        'Worked Hours': 1890,
        Overtime: 4800,
        amt: 2181,
    },
    {
        name: 'Sa',
        'Worked Hours': 2390,
        Overtime: 3800,
        amt: 2500,
    },
    {
        name: 'Su',
        'Worked Hours': 3490,
        Overtime: 4300,
        amt: 2100,
    },
];
export const ChartMetrics = () => {
    return (
        <div className="h-full flex flex-col p-6 gap-3">
            <h4 className="text-slate-600 text-sm font-bold">Employee Time Tracking</h4>
            <div>
                <div className="flex gap-3 mb-3 mt-3 justify-center">
                    <div className="flex items-center gap-1 text-sm">
                        <div
                            className="bg-primary-900 rounded"
                            style={{ width: '14px', height: '14px' }}
                        ></div>
                        <p className="text-xs font-bold text-slate-600">Work Hours</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                        <div
                            className="bg-primary-300 rounded"
                            style={{ width: '14px', height: '14px' }}
                        ></div>
                        <p className="text-xs font-bold text-slate-600">Overtime</p>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center mx-auto max-w-lg">
                    <BarChart data={data1} />
                </div>
            </div>
        </div>
    );
};
