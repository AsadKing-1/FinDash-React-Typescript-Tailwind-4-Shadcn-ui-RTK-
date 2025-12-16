import { AnalyticsDonut } from "./AnalyticsChart/AnalyticsChart"

export function Analytics() {
    return (
        <section className="bg-(--color-card) mt-5 p-5 rounded-md">
            <div>
                <p className="text-[20px] font-bold">Cost Allocation</p>
                <p className="text-[14px] text-(--color-muted)">Categories for the current month</p>
            </div>
            <div>
                <AnalyticsDonut/>
            </div>
        </section>
    )
}
