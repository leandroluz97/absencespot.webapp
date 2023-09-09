import {
    ResponsiveContainer,
    BarChart as BarChartMain,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    TooltipProps,
    Bar,
} from 'recharts';
import { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';
import { NameType } from 'recharts/types/component/DefaultTooltipContent';
import { ValueType } from 'tailwindcss/types/config';

const CustomToolTip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
        const [data] = payload;

        return (
            <div className="bg-primary-900 p-2 px-3 rounded-lg text-white opacity-90 ">
                <p className="text-xs font-thin">{label}</p>
                <p className="text-lg font-bold">WH: {data.value}</p>
                <p className="text-lg font-bold">Over: {data.payload.Overtime}</p>
            </div>
        );
    }
    return <p> </p>;
};

type Props = { data: unknown[] } & CategoricalChartProps;

export const BarChart = ({ data, ...props }: Props) => {
    return (
        <ResponsiveContainer width={'100%'} height={250}>
            <BarChartMain
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                {...props}
                data={data}
            >
                <CartesianGrid strokeDasharray="4 4" vertical={false} />
                <XAxis
                    dataKey="name"
                    tick={{
                        fill: '#334155',
                        fontSize: '12px',
                        fontWeight: 'bold',
                    }}
                    tickLine={{ stroke: '#fffff' }}
                    stroke="#fffff"
                />
                <YAxis
                    tick={{
                        fill: '#334155',
                        fontSize: '12px',
                        fontWeight: 'bold',
                    }}
                    tickLine={{ stroke: '#fffff' }}
                    stroke="#fffff"
                />
                <Tooltip
                    cursor={false}
                    content={(props: TooltipProps<ValueType, NameType>) => (
                        <CustomToolTip {...props} />
                    )}
                />
                <Bar dataKey="Worked Hours" fill="#2693FF" radius={4} />
                <Bar dataKey="Overtime" fill="#C2E1FF" radius={4} />
            </BarChartMain>
        </ResponsiveContainer>
    );
};
