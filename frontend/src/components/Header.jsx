import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">Shrink.ly</Link>
        <nav className="space-x-4 text-sm">
          <Link to="/" className="hover:underline">Dashboard</Link>
          <Link to="/healthz" className="hover:underline">Health</Link>
        </nav>
      </div>
    </header>
  )
}
