import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'

export default function Stats(){
  const { code } = useParams()
  const navigate = useNavigate()
  const [link, setLink] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    async function load(){
      setLoading(true); setError(null)
      try{
        const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000/api'}/links/${encodeURIComponent(code)}`).then(r=>r.json())
        setLink(res.data || res)
      }catch(err){ setError('Not found') }
      setLoading(false)
    }
    load()
  },[code])

  if(loading) return <div className="p-6 bg-white rounded shadow-sm">Loading...</div>
  if(error) return (
    <div className="p-6 bg-white rounded shadow-sm">
      <div className="text-red-600">{error}</div>
      <button onClick={()=>navigate('/')} className="mt-3 px-3 py-2 border rounded">Back</button>
    </div>
  )

  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-xs text-gray-500">Short Code</div>
            <div className="font-mono text-lg">{link.code}</div>
          </div>
          <div>
            <button onClick={()=>navigator.clipboard.writeText(link.shortUrl)} className="px-3 py-1 border rounded">Copy Short URL</button>
          </div>
        </div>

        <div className="mt-4">
          <div className="text-xs text-gray-500">Original URL</div>
          <div className="break-words">{link.originalUrl}</div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4">
          <div>
            <div className="text-xs text-gray-500">Clicks</div>
            <div className="text-lg font-semibold">{link.clicks ?? 0}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Last clicked</div>
            <div>{link.lastClicked ? dayjs(link.lastClicked).format('YYYY-MM-DD HH:mm') : '-'}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Created</div>
            <div>{link.createdAt ? dayjs(link.createdAt).format('YYYY-MM-DD HH:mm') : '-'}</div>
          </div>
        </div>

        <div className="mt-4">
          <button onClick={()=>navigate('/')} className="px-3 py-2 border rounded">Back</button>
        </div>
      </div>
    </div>
  )
}
