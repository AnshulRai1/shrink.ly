const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

async function api(path, opts = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...opts
  })
  const contentType = res.headers.get('content-type') || ''
  if (contentType.includes('application/json')) {
    const json = await res.json()
    if (!res.ok) throw { status: res.status, body: json }
    return json
  }
  if (!res.ok) throw { status: res.status }
  return null
}

export const LinksAPI = {
  create: (body) => api('/links', { method: 'POST', body: JSON.stringify(body) }),
  list: () => api('/links', { method: 'GET' }),
  stats: (code) => api(`/links/${encodeURIComponent(code)}`, { method: 'GET' }),
  delete: (code) => api(`/links/${encodeURIComponent(code)}`, { method: 'DELETE' }),
}

export default LinksAPI
