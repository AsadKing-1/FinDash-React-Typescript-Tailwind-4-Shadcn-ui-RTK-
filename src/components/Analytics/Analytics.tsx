import { AnalyticsDonut } from "./AnalyticsChart/AnalyticsChart";
import { AnalyticsTable } from "./AnalyticsTable/AnalyticsTable";
import { AnalyticsEmptyState } from "./AnalyticsEmptyState/AnalyticsEmpatyState";
import { useSelector } from "react-redux";
import { selectAnalytics } from "@/feature/analytics/selector";


export function Analytics() {
    const data = useSelector(selectAnalytics);
    const hasData = data.length > 0;
    return (
        <section className="bg-(--color-card) mt-5 p-5 rounded-md">
            <div>
                <p className="text-[20px] font-bold">Cost Allocation</p>
                <p className="text-[14px] text-(--color-muted)">Categories for the current month</p>
            </div>
            <div className="flex justify-between items-center mt-2 gap-5">
                {hasData ? <AnalyticsDonut /> : <AnalyticsEmptyState />}
                {hasData && (
                    <div className="flex-1">
                        <AnalyticsTable />
                    </div>
                )}
            </div>

        </section>
    )
}
