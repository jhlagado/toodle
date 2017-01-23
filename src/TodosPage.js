import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

export default () => (
  <div>
    <div className="mdl-card mdl-card mdl-shadow--2dp" style={{margin:'auto'}}>
      <div className="mdl-card__media">
        <img src="assets/dog.png" width="220" alt="" 
        style={{padding:20}} />
      </div>
      <div className="mdl-card__supporting-text">
        <AddTodo />
        <VisibleTodoList />
      </div>
      <div className="mdl-card__actions">
        <Footer />
      </div>
    </div>
    
  </div>
)

