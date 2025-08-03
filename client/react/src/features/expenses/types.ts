export interface Expense {
  id: number;
  date: Date;
  amount: number;
  currency_name: string;
  currency_id: string;
  category_id: number;
  category_name: string;
  payer_id: number;
  payer_name: string;
  account_id: string;
  account_name: string;
  description: string;
}