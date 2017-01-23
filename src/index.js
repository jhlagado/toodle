import React from 'react'
import { render } from 'react-dom'
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
// import { syncHistoryWithStore } from 'react-router-redux'
// import reducer from './reducers'

import {store, history} from './redux-router-init.js'


import App from './App'
import AboutPage from './AboutPage'
import TodosPage from './TodosPage'

// //REDUX_DEVTOOLS_EXTENSION refers to a Chrome extension for redux debugging
// //https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=en
// const store = createStore(reducer, 
//   window.__REDUX_DEVTOOLS_EXTENSION__ && 
//   window.__REDUX_DEVTOOLS_EXTENSION__())

// const history = syncHistoryWithStore(hashHistory, store);

const aboutPage = AboutPage(React);
const todosPage = TodosPage(React);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={todosPage}/>
        <Route path="/todos" component={todosPage}/>
        <Route path="/about" component={aboutPage}/> 
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

window.addEventListener('load', function() {

//   var dialog = document.querySelector('dialog');
//   window.dialogPolyfill.registerDialog(dialog);
//   dialog.showModal();

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(mutation => {
      if (mutation.addedNodes) {
        window.componentHandler.upgradeElements(mutation.addedNodes);
//         mutation.addedNodes.forEach(node => {
//           if (node.tagName === 'DIALOG') {
//             window.dialogPolyfill.registerDialog(node);
//           }
//         }) 
      }  
    })
  });
  observer.observe(document.body, {
      childList: true,
      subtree: true
  });
});

