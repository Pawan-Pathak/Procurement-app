import { useEffect, useState } from 'react'

const apiBase = import.meta.env.VITE_API_BASE || ''

export default function App() {
  const [health, setHealth] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${apiBase}/api/health`)
      .then((r) => r.json())
      .then(setHealth)
      .catch((e) => setError(String(e)))
  }, [])

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 24 }}>
      <h1>MERN Client</h1>
      <p>Health check from API:</p>
      <pre>{error ? error : JSON.stringify(health, null, 2)}</pre>
    </div>
  )
}

