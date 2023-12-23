import './account-detail-card.css'

const AccountDetailCard = ({
  account,
  username
}) => {
  return(
    <div className='account-detail-card'>
      <span>{ `Sdr/i ${username}` }</span>
      <div>
        <div className='detail'>
          <span>{ `No. Rek ${account.number}` }</span>
        </div>
        <div className='detail'>
          <span>{  `Saldo : Rp ${Intl.NumberFormat().format(account.balance)}` }</span>
        </div>
      </div>
    </div>
  )
}

export default AccountDetailCard