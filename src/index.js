import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from './store'

import App from './App'
import AboutPage from './screens/AboutPage'
import TodosPage from './screens/TodosPage'

const aboutPage = AboutPage(React);
const todosPage = TodosPage(React);

const history = syncHistoryWithStore(hashHistory, store)

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

