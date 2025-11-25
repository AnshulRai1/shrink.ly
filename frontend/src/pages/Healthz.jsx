import React, { useEffect, useState } from 'react'

export default function HealthzPage(){
  const [data, setData] = useState(null)
  useEffect(()=>{
    async function load(){
      try{
        console.log("healthz")
        const res = await fetch(`http://localhost:8000/healthz`).then(r=>r.json())
        console.log(res)
        setData(res)
      }catch(err){ setData({ ok:false }) }
    }
    load()
  },[])

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <h2 className="text-lg font-medium">Healthcheck</h2>
      <pre className="mt-3 bg-gray-100 p-3 rounded">{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
