import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";
import { selectAnalytics } from "@/feature/analytics/selector";
import { getCategoryColor } from "@/feature/analytics/colors";

export function AnalyticsDonut() {
    const data = useSelector(selectAnalytics);

    const total = data.reduce(
        (sum, item) => sum + item.amount,
        0
    );

    return (
        <div className="relative w-75 h-55">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="amount"
                        nameKey="label"
                        innerRadius={55}
                        outerRadius={75}
                        paddingAngle={0}
                        cornerRadius={1}
                        startAngle={90}
                        endAngle={-270}
                    >
                        {data.map((row) => (
                            <Cell
                                key={row.label}
                                fill={getCategoryColor(row.label)}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

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
