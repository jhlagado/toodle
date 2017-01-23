import React from 'react'

import { Link } from 'react-router'
import AppMenu from './containers/AppMenu'

const closeNav = e => {
  var layout = document.querySelector('.mdl-layout');
  if (layout && layout.MaterialLayout) {
    const ml = layout.MaterialLayout;
    const isVisible = ml.drawer_.classList.contains('is-visible'); 
    console.log(isVisible);
    if (isVisible) ml.toggleDrawer(); 
  }  
}

const MenuLink = ({to, children}) => (
  <Link className="mdl-navigation__link" onClick={closeNav} to={to}>{children}</Link>
);

export default ({children}) => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">To Do</span>
        <div className="mdl-layout-spacer"></div>
        <nav className="mdl-navigation">

          <div className="material-icons mdl-badge mdl-badge--overlap" 
            data-badge="1">email</div>

          <button className="mdl-button mdl-js-button mdl-button--icon">
            <i className="material-icons">person</i>
          </button>
          <button id="demo-menu-lower-right"
                  className="mdl-button mdl-js-button mdl-button--icon">
            <i className="material-icons">more_vert</i>
          </button>
        </nav>
      </div>
      <AppMenu />
    </header>
    <div className="mdl-layout__drawer">
      <span className="mdl-layout-title">Lagado</span>
      <nav className="mdl-navigation">
        <MenuLink to="/todos">To Dos</MenuLink>
        <MenuLink className="mdl-navigation__link" to="/about">About</MenuLink>
      </nav>
    </div>
    <main className="mdl-layout__content">
      <div className="page-content" style={{margin:'30px'}}>
        {children}
      </div>
    </main>
  </div>
)

