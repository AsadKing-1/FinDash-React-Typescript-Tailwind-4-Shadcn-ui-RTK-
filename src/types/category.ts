export type CategoryType = "income" | "expense";

export interface Category {
    id: string;
    label: string;
    type: CategoryType;
    color?: string;
    icon?: string;
}
