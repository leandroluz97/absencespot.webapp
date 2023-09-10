import { PieChart } from '@/app/_common/charts/PieChart';
import { BasicMetric } from '@/app/_common/metrics';

const dataCircularOne = [
    { name: 'Planned', value: 6 },
    { name: 'Left', value: 18 },
];
const dataCircularTwo = [
    { name: 'Planned', value: 3 },
    { name: 'Left', value: 1 },
];

export const PieMetrics = () => {
    return (
        <div className="h-full flex flex-col p-6 gap-1">
            <h4 className="text-slate-600 text-sm font-bold">Annual Leaves</h4>
            <div className="flex justify-evenly items-center mx-auto w-full max-w-lg">
                <div className="text-left p-2">
                    <h5 className="text-slate-400 text-sm font-medium pb-3">Vacation</h5>
                    <PieChart data={dataCircularOne} width={100} height={100} />
                </div>
                <div className="flex-1 flex flex-row justify-evenly">
                    <BasicMetric.Root>
                        <BasicMetric.Title>06</BasicMetric.Title>
                        <BasicMetric.Description>Planned</BasicMetric.Description>
                    </BasicMetric.Root>
                    <BasicMetric.Root>
                        <BasicMetric.Title>18</BasicMetric.Title>
                        <BasicMetric.Description>Left</BasicMetric.Description>
                    </BasicMetric.Root>
                    <BasicMetric.Root>
                        <BasicMetric.Title>24</BasicMetric.Title>
                        <BasicMetric.Description>Annual</BasicMetric.Description>
                    </BasicMetric.Root>
                </div>
            </div>
            <div className="flex justify-evenly mx-auto w-full max-w-lg">
                <div className="text-left p-2">
                    <h5 className="text-slate-400 text-sm font-medium pb-3">Others</h5>
                    <PieChart data={dataCircularTwo} width={100} height={100} />
                </div>
                <div className="flex-1 flex flex-row justify-evenly">
                    <BasicMetric.Root>
                        <BasicMetric.Title>03</BasicMetric.Title>
                        <BasicMetric.Description>Planned</BasicMetric.Description>
                    </BasicMetric.Root>
                    <BasicMetric.Root>
                        <BasicMetric.Title>01</BasicMetric.Title>
                        <BasicMetric.Description>Left</BasicMetric.Description>
                    </BasicMetric.Root>
                    <BasicMetric.Root>
                        <BasicMetric.Title>04</BasicMetric.Title>
                        <BasicMetric.Description>Annual</BasicMetric.Description>
                    </BasicMetric.Root>
                </div>
            </div>
        </div>
    );
};
