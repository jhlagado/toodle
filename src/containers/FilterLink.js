// @flow

import React from 'react'

import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/TodoActions'
import LinkFactory from '../components/LinkFactory'

const Link = LinkFactory(React);
export let clickFilterLink = (dispatch:Function, filter: string) => {
  dispatch(setVisibilityFilter(filter))
}

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.get('visibilityFilter')
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: clickFilterLink(dispatch, ownProps.filter)
})

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
