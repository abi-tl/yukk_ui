import axios from 'axios'

const path = '/api/transaction'

const TransactionsApi = {
  get: async () => {
    // We set the baseUrl in /configs/axios-config.js already
    // Just specify path here
    const response = axios.get(path)
    return response
  },

  create: async (amount, recipient_account_id) => {
    const body = {
      "recipient_account_id" : recipient_account_id,
      "amount" : amount
    }

    const response = axios.post(path, body)
    return response
  }
}

export default TransactionsApi