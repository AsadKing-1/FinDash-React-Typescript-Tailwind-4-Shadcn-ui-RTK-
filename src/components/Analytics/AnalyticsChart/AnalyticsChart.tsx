import { PieChart, Pie, Cell } from "recharts";
import { useSelector } from "react-redux";
import { selectAnalytics } from "@/feature/analytics/selector";

const COLORS = [
    "#8A2BE2",
    "#00D18F",
    "#FFB443",
    "#FF5C5C",
    "#4DA3FF",
];

export function AnalyticsDonut() {
    const data = useSelector(selectAnalytics);

    const total = data.reduce(
        (sum, item) => sum + item.amount,
        0
    );

    return (
        <div className="relative w-full h-full">
            <PieChart width="100%" height="100%">
                <Pie
                    data={data}
                    dataKey="amount"
                    nameKey="label"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={3}
                    cornerRadius={10}
                    startAngle={90}
                    endAngle={-270}
                >
                    {data.map((_, index) => (
                        <Cell
                            key={index}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
            </PieChart>

            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div className="text-[20px] font-bold text-white">
                    ₽ {total.toLocaleString("ru-RU")}
                </div>
                <div className="text-[12px] text-(--color-muted)">
                    Total
                </div>
            </div>
        </div>
    );
}
