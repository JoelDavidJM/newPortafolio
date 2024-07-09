import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContextProvider } from './contect/ThemaContext.jsx'
import { Provider } from 'react-redux'
import store from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeContextProvider>,
  </Provider>
)
