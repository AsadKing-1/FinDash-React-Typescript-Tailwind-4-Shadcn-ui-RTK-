import type { Transaction } from "./transaction";

export interface Month {
    id: string;
    label: string;
    transactions: Transaction[];
}
