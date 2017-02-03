import React from 'react'
import { connect } from 'react-redux'

// import { PropTypes } from 'react'
import { initDialog } from '../shared/initDialog'
import { hideModal } from '../store/Modal/actions'
// import { logout } from '../store/auth/actions'

const basicModal = ({ dispatch, title, message, buttons }) => {

  // let hide = () => dispatch(hideModal());
  // let agree = () => {dispatch(logout()); hide()};

  const closer = (f) => () => {
   if (f) dispatch(f());
   dispatch(hideModal())
  }

  return (
    <dialog ref={initDialog} className="mdl-dialog">
      <h4 className="mdl-dialog__title">{title}</h4>
      <div className="mdl-dialog__content">
        <p>{message}</p>
      </div>
      <div className="mdl-dialog__actions">
        {
          buttons.map(
            ({id, title, onClick}) =>
              <button
                key={id}
                type="button"
                className="mdl-button"
                onClick={closer(onClick)}>
                {title}
              </button>
          )
        }
      </div>
    </dialog>
  )
}

basicModal.propTypes = {
  //   onClick: PropTypes.func.isRequired,
  //   completed: PropTypes.bool.isRequired,
  //   text: PropTypes.string.isRequired
}

export default connect(
)(basicModal)


