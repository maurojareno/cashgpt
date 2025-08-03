import type { Expense } from '../types';

export const getExpenses = async (): Promise<Expense[]> => {
  const res = await fetch('http://localhost:3001/expenses');
  if (!res.ok) throw new Error('No se pudo obtener gastos');
  return res.json();
};