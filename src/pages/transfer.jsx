import { Formik } from 'formik'
import './transfer.css'
import { useAuth } from '../providers/auth-provider'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { useState } from 'react'
import AccountApi from '../api/account-api'
import TransactionsApi from '../api/transactions-api'
import { useNavigate } from 'react-router'
import ConfirmationModal from '../components/confirmation-modal'

const Transfer = () => {
  const authContext = useAuth()
  const [transaction, setTransaction] = useState({})
  const [modalOpen, setModalOpen] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (values) => {
    console.log(values.account_number)
    AccountApi.get_recipient(values.account_number)
                    .then((response) => {
                      const account = response.data.account
                      setTransaction({
                        "recipient_account_number" : account.number,
                        "recipient_account_id" : account.id,
                        "recipient_account_name" : account.recipient_name,
                        "amount" : values.amount
                      })
                    })
    setModalOpen(true)
  }

  const handleConfirm = async () => {
    await TransactionsApi.create(transaction.amount, transaction.recipient_account_id)
                         .then(() => {
                          alert('transaksi berhasil!')
                          setModalOpen(false)
                          navigate('/home')
                         })
  }

  const handleCancel = async () => {
    setModalOpen(false)
    setTransaction({})
  }

  return(
    <>
      <Formik
        initialValues={{ account_number: 0, amount: 0 }}
        onSubmit={ handleSubmit }
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
          <div className='transfer'>
            <div className='form'>
              <form noValidate onSubmit={ handleSubmit }>
                <span>{ 'Transfer' }</span>

                <input
                  type='text'
                  name='account_number'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.account_number}
                  placeholder='Enter account number'
                  className='form-control'
                  id='account_number'
                />

                <input
                  type='number'
                  name='amount'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.amount}
                  placeholder='Enter amount'
                  className='form-control'
                />

                <button type='submit'>{ 'Send' }</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
      {
        modalOpen &&
        <ConfirmationModal
          transaction={ transaction }
          onConfirm={ handleConfirm }
          onCancel={ handleCancel }
        />
      }
    </>
  )
}

export default Transfer