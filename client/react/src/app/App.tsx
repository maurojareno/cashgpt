import './App.css'
import { SampleList } from '../features/sample-list';
import { ExpensesList } from '../features/expenses';
import { UsersList } from '../features/users';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { MainLayout } from '../pages/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      <Route index element={<SampleList />} />
      <Route path="/expenses" element={<ExpensesList />} />
      <Route path="/users" element={<UsersList />} />
    </Route>
  )
);

const App = () => {

  return <RouterProvider router={router} />
  
}

export default App
