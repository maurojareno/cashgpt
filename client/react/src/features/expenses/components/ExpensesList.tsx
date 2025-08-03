import { useExpenses } from '../hooks/useExpenses';

export function ExpensesList() {
  const { expenses, loading, error } = useExpenses();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {expenses.map(expense => (
        <li  key={expense.id}>
          {expense.date.toString()} - {expense.amount} {expense.currency_name} - {expense.category_name} - {expense.payer_name} - {expense.description}
          <br />
          Account: {expense.account_name} ({expense.account_id})
          
        </li>
      ))}
    </ul>
  );
}