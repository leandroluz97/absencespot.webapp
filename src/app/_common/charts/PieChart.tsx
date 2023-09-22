import { Cell, Legend, Pie, PieChart as PieChartMain, Tooltip, TooltipProps } from 'recharts';
import { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';
import { NameType } from 'recharts/types/component/DefaultTooltipContent';
import { ValueType } from 'tailwindcss/types/config';
const COLORS = ['#2693FF', '#C2E1FF'];

const CustomToolTip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
        const [data] = payload;
        return (
            <div className="bg-primary-900 p-2 px-3 rounded-lg text-white opacity-90 ">
                <p className="text-lg font-bold">
                    <span className="text-sm">{data.name}</span>: {data.value}
                </p>
            </div>
        );
    }
    return <p></p>;
};

type Props = { data: unknown[] } & CategoricalChartProps;

export const PieChart = ({ data, ...props }: Props) => {
    return (
        <PieChartMain width={100} height={100} {...props}>
            <Pie
                cx={45}
                cy={45}
                innerRadius={30}
                outerRadius={50}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
                {...props}
                data={data}
            >
                {data.map((entry: unknown, index: number) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip
                content={(props: TooltipProps<ValueType, NameType>) => <CustomToolTip {...props} />}
            />
        </PieChartMain>
    );
};
