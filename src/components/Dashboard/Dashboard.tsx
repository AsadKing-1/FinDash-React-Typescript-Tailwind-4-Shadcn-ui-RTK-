import { DashboardNav } from "./Dashboard-Nav/Dashboard-Nav";
import { DashboardBalance } from "./Dashboard-Balance/Dashboard-Balance";

export function Dashboard() {
    return (
        <section id="dashboard">
            <DashboardNav />
            <DashboardBalance/>
        </section>
    )
}