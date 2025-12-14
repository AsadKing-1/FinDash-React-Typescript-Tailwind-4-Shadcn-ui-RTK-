export type TransactionType = "income" | "expense";

export type TransactionCategory =
    | "food"
    | "shopping"
    | "transport"
    | "health"
    | "entertainment"
    | "salary"
    | "investment"
    | "other";

export interface Transaction {
    id: string;              
    type: TransactionType;
    category: TransactionCategory;
    amount: number;
    currency: string;        
    date: string;            
    note?: string;
}
