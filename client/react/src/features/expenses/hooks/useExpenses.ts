import { useState, useEffect } from 'react';
import { getExpenses } from '../services/expenses.api';
import type { Expense }  from '../types';

export function useExpenses() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getExpenses()
      .then(setExpenses)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { expenses, loading, error };
}