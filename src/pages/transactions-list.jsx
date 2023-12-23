import { useEffect, useState } from 'react'
import AuthApi from '../api/auth-api'
import { useAuth } from '../providers/auth-provider'
import AccountApi from '../api/account-api'
import TransactionsApi from '../api/transactions-api'
import TransactionCard from '../components/transaction-card'

const TransactionList = () => {
  const [transactions, setTransactions] = useState([])
  const [pagination, setPagination] = useState({})
  const authContext = useAuth()
  const user = authContext.user

  useEffect(() => {
    TransactionsApi.get()
              .then((response) => {
                console.log(response.data)
                setTransactions(response.data.data)
              })
  }, [])

  return(
    <div>
      <span>{ `Transaksi Sdr/i ${authContext.user.name}` }</span>
      {
        transactions.map((transaction) => (
          <TransactionCard
            key={transaction.id}
            user={ user }
            transaction={transaction}
          />
        ))
      }
    </div>
  )
}

const transactionDetail = (transaction, user) => (
  <div key={transaction.id}>
    <div>
      <span>{ Date(transaction.created_at)}</span>
    </div>
    <div>
      <span>
        {
          transaction.recipient_account_id == user.account_id ?
          `+ Rp ${Intl.NumberFormat().format(transaction.amount)}` :
          `- Rp ${Intl.NumberFormat().format(transaction.amount)}`
        }
      </span>
    </div>
  </div>
)

export default TransactionList