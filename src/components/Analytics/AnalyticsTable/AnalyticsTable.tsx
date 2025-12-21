import { useSelector } from "react-redux";
import { selectAnalytics } from "@/feature/analytics/selector";
import { getCategoryColor } from "@/feature/analytics/colors";

export function AnalyticsTable() {
    const data = useSelector(selectAnalytics);

    return (
        <div className="w-full flex flex-col gap-5">
            {data.map((row) => (
                <div
                    key={row.label}
                    className="flex items-center justify-between w-full"
                >
                    <div className="flex items-center gap-3">
                        <span
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: getCategoryColor(row.label) }}
                        />

                        <div className="flex flex-col">
                            <span className="text-[15px] font-semibold text-(--color-text)">
                                {row.label}
                            </span>
                            <span className="text-[12px] text-(--color-muted)">
                                {row.percent}%
                            </span>
                        </div>
                    </div>

                    <span className="text-[14px] text-(--color-text) font-bold">
                        $ {row.amount.toLocaleString("ru-RU")}
                    </span>
                </div>
            ))}
        </div>
    );
}
