import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './assets/components/screens/Home/Home'
import Layout from './assets/components/layout/Layout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>,
)
