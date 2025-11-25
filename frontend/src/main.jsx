import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Stats from './pages/Stats'
import HealthzPage from './pages/Healthz'
import Header from './components/Header'
import './styles/index.css'

function App(){
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <main className="max-w-5xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/code/:code" element={<Stats/>} />
            <Route path="/healthz" element={<HealthzPage/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App />)
