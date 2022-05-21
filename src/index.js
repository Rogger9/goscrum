import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from 'store'
import { App } from './App'
import { GlobalStyles } from 'styles/global'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
)
