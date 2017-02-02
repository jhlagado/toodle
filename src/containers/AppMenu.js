import React from 'react'
import { connect } from 'react-redux'
import { menuShow } from '../store/Modal/actions'

const logoutModal = (<h1>Hi!!!!</h1>);

let AppMenu = ({ dispatch }) => (
    <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
        htmlFor="demo-menu-lower-right">
      <li className="mdl-menu__item">Some Action</li>
      <li className="mdl-menu__item">Another Action</li>
      <li disabled className="mdl-menu__item">Disabled Action</li>
      <li className="mdl-menu__item" onClick={e => dispatch(menuShow(logoutModal))}>Log out</li>
    </ul>
)

AppMenu = connect()(AppMenu)

export default AppMenu


/*
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(AppMenu(input.value))
        input.value = ''
      }}>

        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" id="AppMenu" ref={node => {
            input = node
          }} />
          <label className="mdl-textfield__label" htmlFor="AppMenu">Enter the task to do...</label>
        </div>

        
        <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          Add Todo
        </button>
      </form>
    </div>


*/