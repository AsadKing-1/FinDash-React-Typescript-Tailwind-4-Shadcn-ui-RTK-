import { useSelector } from "react-redux";
import { selectBalance } from "@/store/transactions/selector";

export const DashboardBalance = () => {
    const balance = useSelector(selectBalance);

    return (
        <div className="bg-(--color-card) mt-4 p-5 rounded-(--radius-md)">
            <div className="flex justify-end">
                <div className="btn w-35 p-0.5 text-[14px] rounded-xl text-center">
                    Purple Theme
                </div>
            </div>
            <div>
                <div className="mt-1.5">
                    <div className="flex justify-between items-center">
                        <div className="text-[13px] text-(--color-muted)">
                            Amount:
                        </div>
                        <div className="text-[13px] text-(--color-muted)">
                            Expense Forecast
                        </div>
                    </div>
                </div>
                <div className="text-[25px] text-(--color-text) font-extrabold">
                    $ {balance.total}
                </div>
                <div className="text-[13px] text-(--color-muted)">
                    Available: $ {balance.total}
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}