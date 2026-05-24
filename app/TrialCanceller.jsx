"use client"

import { useState } from "react"

export default function TrialCanceller({ services }) {
  const [search, setSearch] = useState("")
  const filtered = services.filter(s => s.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="stb-card">
      <p className="stb-section-title">Find your service and cancel</p>
      <div className="stb-search-box">
        <label className="stb-search-label">Search for a service</label>
        <input
          className="stb-search-input"
          type="text"
          placeholder="Netflix, Spotify, Amazon..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="stb-service-list" style={{ marginTop: "1rem" }}>
        {filtered.length === 0 ? (
          <p style={{ fontSize: "13px", color: "#888", textAlign: "center", padding: "1rem" }}>No matching services found</p>
        ) : (
          filtered.map(s => (
            <div key={s.name} className="stb-service-item">
              <span className="stb-service-name">{s.name}</span>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="stb-service-link">Cancel</a>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
