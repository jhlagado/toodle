import React, { PropTypes } from 'react'
import Modal from './Modal'

const ModalList = ({ Modals }) => (
  <ul>
    {Modals.map(Modal =>
      <Modal
        key={Modal.id}
        {...Modal}
      />
    )}
  </ul>
)

// ModalList.propTypes = {

//   Modals: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,

//   onModalClick: PropTypes.func.isRequired

// }

export default ModalList
