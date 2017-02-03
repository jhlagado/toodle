import React from 'react'
// import { PropTypes } from 'react'
// import Modal from './Modal'
import logoutModal from './logoutModal'
import BasicModal from './BasicModal'

const MODAL_COMPONENTS = {
  'LOGOUT': logoutModal,
  'BASIC_MODAL': BasicModal,
}

const ModalList = ({ modals }) => {
  return (
    <div> 
    { 
      modals.map(({modalType, modalProps, id}) => { 
        var ModalComponent = MODAL_COMPONENTS[modalType];
        if (!ModalComponent) return null; //return <span />
        return <ModalComponent key={id} {...modalProps} />
      })  
    }
    </div>
  );
}

// ModalList.propTypes = {

//   Modals: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,

//   onModalClick: PropTypes.func.isRequired

// }

export default ModalList
