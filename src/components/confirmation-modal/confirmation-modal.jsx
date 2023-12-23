import React from "react";
import './confirmation-modal.css'

const ConfirmationModal = ({ transaction, onConfirm, onCancel }) => {
  return (
    <div className={'darkBG'}>
      <div className={'centered'}>
        <div className={'modal'} isOpen={true}>
          <div className={'modalHeader'}>
            <h5 className={'heading'}>{ 'Konfirmasi Transfer' }</h5>
          </div>
          <div className={'modalContent'}>
            <div>{ 'Tujuan' }</div>
            <div>
              <span>{ `Nama Penerima : ${transaction.recipient_account_name}` }</span>
            </div>
            <div>
              <span>{ `No Rek Penerima : ${transaction.recipient_account_number}` }</span>
            </div>
            <div>
              <span>{ `Jumlah Transfer : Rp ${Intl.NumberFormat().format(transaction.amount)}` }</span>
            </div>
          </div>
          <div className={'modalActions'}>
            <div className={'actionsContainer'}>
              <button className={'confirmBtn'} onClick={ () => onConfirm() }>
                OK
              </button>
              <button
                className={'cancelBtn'}
                onClick={() => onCancel()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;