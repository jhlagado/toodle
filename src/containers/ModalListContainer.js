import { connect } from 'react-redux'
import ModalList from '../components/ModalList'
import { makeGetModals } from '../store/Modal/selectors'
// import { hideModal } from '../store/Modal/actions'

const makeMapStateToProps = () => {
  const getModals = makeGetModals()
  const mapStateToProps = (state, props) => {
    return {
      modals: getModals(state, props)
    }
  }
  return mapStateToProps;
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
    
//     // hideModal: () => {
//     //   dispatch(hideModal())
//     // },

//     // initDialog: (dialog) => {
//     //   console.log('init dialog' + dialog);
//     //   window.dialogPolyfill.registerDialog(dialog);
//     //   dialog.showModal();
//     // }
//   }
// }

const ModalListContainer = connect(
  makeMapStateToProps,
  // mapDispatchToProps
)(ModalList)

export default ModalListContainer
