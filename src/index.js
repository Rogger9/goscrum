import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from 'store'
import { App } from './App'
import { GlobalStyles } from 'styles/global'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
