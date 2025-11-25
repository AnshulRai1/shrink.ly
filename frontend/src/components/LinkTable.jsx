import React from 'react'
import dayjs from 'dayjs'
import { Link as RouterLink } from 'react-router-dom'

function truncate(text, n=60){
  if(!text) return ''
  return text.length>n ? text.slice(0,n-1)+'…' : text
}

export default function LinkTable({ links, onDelete }){
  if(!links || links.length===0) return (
    <div className="p-6 bg-white rounded shadow-sm text-center text-gray-500">No links yet — create one above.</div>
  )

  return (
    <div className="overflow-x-auto bg-white rounded shadow-sm">
      <table className="min-w-full text-sm">
        <thead className="text-left text-xs text-gray-500 uppercase border-b">
          <tr>
            <th className="p-3">Code</th>
            <th className="p-3">Short URL</th>
            <th className="p-3">Original</th>
            <th className="p-3">Clicks</th>
            <th className="p-3">Last clicked</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {links.map(link => (
            <tr key={link.code} className="border-b hover:bg-gray-50">
              <td className="p-3 font-mono"><RouterLink to={`/code/${link.code}`} className="text-indigo-600 hover:underline">{link.code}</RouterLink></td>
              <td className="p-3 font-mono">{link.shortUrl} <button onClick={()=>navigator.clipboard.writeText(link.shortUrl)} className="ml-2 text-xs px-2 py-1 border rounded">Copy</button></td>
              <td className="p-3"><div className="max-w-sm truncate">{link.originalUrl}</div></td>
              <td className="p-3">{link.clicks ?? 0}</td>
              <td className="p-3">{link.lastClicked ? dayjs(link.lastClicked).format('YYYY-MM-DD HH:mm') : '-'}</td>
              <td className="p-3">
                <button onClick={()=>onDelete(link.code)} className="px-3 py-1 border rounded text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
