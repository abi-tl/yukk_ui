import AuthApi from '../api/auth-api'
import MainMenuOption from '../components/main-menu-option'
import MainMenuOptions from '../components/main-menu-option/main-menu-option'
import { useAuth } from '../providers/auth-provider'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate()
  const authContext = useAuth()

  const handleClickInfoRekening = () => {
    navigate('/account')
  }

  const handleClickMutasiRekening = () => {
    navigate('/transactions')
  }

  const handleClickTransfer = () => {
    navigate('/transfer')
  }

  const handleClickLogout = () => {
    AuthApi.logout()
           .then((response) => {
            authContext.logout()
           })
  }

  return(
    <div>
      <MainMenuOption
        label={ 'Info Rekening' }
        onClick={ handleClickInfoRekening }
      />
      <MainMenuOption
        label={ 'Mutasi Rekening' }
        onClick={ handleClickMutasiRekening }
      />
      <MainMenuOption
        label={ 'Transfer' }
        onClick={ handleClickTransfer }
      />
      <MainMenuOption
        label={ 'Logout' }
        onClick={ handleClickLogout}
      />
    </div>
  )
}

export default HomePage