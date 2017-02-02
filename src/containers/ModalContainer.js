import { connect } from 'react-redux'
import ModalList from '../components/ModalList'
import { makeGetVisibleModals } from '../store/Modal/selectors'

const makeMapStateToProps = () => {
  const getVisibleModals = makeGetVisibleModals()
  const mapStateToProps = (state, props) => {
    return {
      Modals: getVisibleModals(state, props)
    }
  }
  return mapStateToProps;
}

const mapDispatchToProps =  ({
  onModalClick: toggleModal
})

const ModalContainer = connect(
  makeMapStateToProps,
  mapDispatchToProps
)(ModalList)

export default ModalContainer
