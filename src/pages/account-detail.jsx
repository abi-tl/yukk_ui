import { useEffect, useState } from 'react'
import AuthApi from '../api/auth-api'
import { useAuth } from '../providers/auth-provider'
import AccountApi from '../api/account-api'
import AccountDetailCard from '../components/account-detail-card'

const AccountDetail = () => {
  const [account, setAccount] = useState({})
  const authContext = useAuth()

  useEffect(() => {
    AccountApi.get()
              .then((response) => setAccount(response.data.account))
  }, [])

  return(
    <div>
      <AccountDetailCard
        username={ authContext.user.name }
        account={ account }
      />
    </div>
  )
}

export default AccountDetail