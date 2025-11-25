import React, { useState } from 'react'

export default function CreateLinkForm({ onCreated }){
  const [url, setUrl] = useState('')
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [result, setResult] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    setError(null)
    setResult(null)
    if (!url) return setError('URL is required')
    setLoading(true)
    try{
      const body = { url }
      if (code) body.code = code
      const data = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000/api'}/links`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      }).then(r => r.json())
      if (!data || data.status >= 400) {
        setError(data?.message || 'Failed')
      } else {
        setResult(data.data)
        setUrl('')
        setCode('')
        onCreated && onCreated()
      }
    }catch(err){
      setError(err?.body?.message || err?.message || 'Something went wrong')
    }finally{ setLoading(false) }
  }

  function copyShort(){
    if (!result) return
    navigator.clipboard.writeText(result.shortUrl)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
      <div className="grid sm:grid-cols-3 gap-3">
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium">Original URL</label>
          <input
            value={url}
            onChange={e=>setUrl(e.target.value)}
            placeholder="https://example.com"
            className="mt-1 block w-full rounded border-gray-200 shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Custom code (optional)</label>
          <input
            value={code}
            onChange={e=>setCode(e.target.value)}
            placeholder="6-8 letters/numbers"
            className="mt-1 block w-full rounded border-gray-200 shadow-sm p-2"
          />
        </div>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <button disabled={loading} className="px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-60">{loading? 'Creating...' : 'Shorten Link'}</button>
        {error && <div className="text-sm text-red-600">{error}</div>}
      </div>

      {result && (
        <div className="mt-4 p-3 bg-gray-50 rounded border">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-500">Short URL</div>
              <div className="font-mono">{result.shortUrl}</div>
            </div>
            <div className="space-x-2">
              <button type="button" onClick={copyShort} className="px-3 py-1 border rounded">Copy</button>
            </div>
          </div>
        </div>
      )}
    </form>
  )
}
