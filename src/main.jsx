import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import { CoinDetail } from './Components/CoinDetail.jsx'
import GetCoins from './Components/GetCoins.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetCoins />} />
        <Route path="/coin/:coinId" element={<CoinDetail />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
