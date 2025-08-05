import './App.css'
import { SampleList } from '../features/sample-list';
import { ExpensesList } from '../features/expenses';

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Cash GPT
      </h1>
      <SampleList />
      <ExpensesList />
    </>
  )
}

export default App
