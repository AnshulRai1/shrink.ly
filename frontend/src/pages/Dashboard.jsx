import React, { useEffect, useState } from 'react'
import CreateLinkForm from '../components/CreateLinkForm'
import LinkTable from '../components/LinkTable'

export default function Dashboard(){
  const [links, setLinks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function fetchLinks(){
    setLoading(true)
    setError(null)
    try{
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000/api'}/links`).then(r=>r.json())
      setLinks(res.data || res)
    }catch(err){
      setError('Failed to load links')
    }finally{ setLoading(false) }
  }

  useEffect(()=>{ fetchLinks() }, [])

  async function handleDelete(code){
    if(!confirm('Delete this link?')) return
    try{
      await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000/api'}/links/${encodeURIComponent(code)}`, { method: 'DELETE' }).then(r=>r.json())
      fetchLinks()
    }catch(err){ alert('Failed to delete') }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Create and manage your short links</p>
      </div>

      <CreateLinkForm onCreated={fetchLinks} />

      <section>
        <h2 className="text-lg font-medium mb-2">All links</h2>
        {loading ? (
          <div className="p-6 bg-white rounded shadow-sm">Loading...</div>
        ) : error ? (
          <div className="p-6 bg-white rounded text-red-600">{error}</div>
        ) : (
          <LinkTable links={links} onDelete={handleDelete} />
        )}
      </section>
    </div>
  )
}
