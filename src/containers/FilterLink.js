// @flow

import React from 'react'

import { connect } from 'react-redux'

import { setVisibilityFilter } from '../store/visibilityFilter/actions'
import LinkFactory from '../components/LinkFactory'

const Link = LinkFactory(React);

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

export let mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
