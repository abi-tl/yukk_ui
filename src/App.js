import { Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Login from './pages/login'
import HomePage from './pages/home-page'
import ProtectedRoute from './components/protected-route'
import AccountDetail from './pages/account-detail'
import TransactionList from './pages/transactions-list'
import Transfer from './pages/transfer'
import Register from './pages/register'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } />
        <Route path='/account' element={
          <ProtectedRoute>
            <AccountDetail />
          </ProtectedRoute>
        } />

        <Route path='/transactions' element={
          <ProtectedRoute>
            <TransactionList />
          </ProtectedRoute>
        } />
        <Route path='/transfer' element={
          <ProtectedRoute>
            <Transfer />
          </ProtectedRoute>
        } />
      </Routes>

    </div>
  );
}

export default App;
