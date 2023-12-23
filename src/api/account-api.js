import axios from 'axios'

const AccountApi = {
  get: async () => {
    // We set the baseUrl in /configs/axios-config.js already
    // Just specify path here
    const path     = `/api/account`
    const response = axios.get(path)
    return response
  },

  get_recipient: async (number) => {
    const path     = `/api/recipient_account`
    const params = {
      number : number
    }
    const response = axios.get(path, {params})
    return response
  }

}

export default AccountApi