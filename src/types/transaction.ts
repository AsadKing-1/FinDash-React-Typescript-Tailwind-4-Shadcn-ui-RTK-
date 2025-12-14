import type { Currency } from "./currency";
import type { Category } from "./category";

export interface Transaction {
    id: string;
    amount: number; 
    currency: Currency;
    category: Category;
    date: string;             
    note?: string;
    createdAt: number;        
}
