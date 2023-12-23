import './transaction-card.css'

const TransactionCard = ({
  transaction, user
}) => {
  return(
    <div className='transaction-card'>
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
}

export default TransactionCard