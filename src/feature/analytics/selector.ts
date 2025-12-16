import { createSelector } from "@reduxjs/toolkit";
import { selectTransactions } from "@/feature/transactions/selectors";

export const selectAnalytics = createSelector(
    [selectTransactions],
    (transactions) => {
        const grouped: Record<string, number> = {};

        for (const t of transactions) {
            if (t.category.type !== "expense") continue;

            const label = t.category.label;

            if (grouped[label] === undefined) {
                grouped[label] = t.amount;
            } else {
                grouped[label] += t.amount;
            }
        }

        const total = Object.values(grouped).reduce(
            (sum, v) => sum + v,
            0
        );

        return Object.entries(grouped).map(([label, amount]) => ({
            label,
            amount,
            percent: total === 0 ? 0 : Math.round((amount / total) * 100),
        }));
    }
);
