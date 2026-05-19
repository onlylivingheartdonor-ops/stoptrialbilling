"use client"

import { useState } from "react"
import { RELATED_LINKS as RELATED } from "./lib/links"

const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #faf8f4; font-family: 'DM Mono', monospace; color: #1a1a1a; }
  .stb-wrap { max-width: 780px; margin: 0 auto; padding: 2rem 1.5rem; }
  .stb-header { border-bottom: 2px solid #1a1a1a; padding-bottom: 1.5rem; margin-bottom: 2rem; }
  .stb-eyebrow { font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: #888; margin-bottom: .5rem; }
  .stb-title { font-family: 'DM Serif Display', serif; font-size: clamp(2rem, 5vw, 3.2rem); line-height: 1.1; }
  .stb-title em { font-style: italic; color: #dc2626; }
  .stb-card { background: #fff; border: 1px solid #e0dbd3; border-radius: 4px; padding: 1.5rem; margin-bottom: 1.5rem; }
  .stb-section-title { font-family: 'DM Serif Display', serif; font-size: 1.2rem; margin-bottom: 1rem; color: #1a1a1a; }
  .stb-service-list { display: flex; flex-direction: column; gap: 0.75rem; }
  .stb-service-item { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 0; border-bottom: 1px solid #e0dbd3; }
  .stb-service-name { font-family: 'DM Serif Display', serif; font-size: 1rem; color: #1a1a1a; }
  .stb-service-link { font-size: 12px; color: #dc2626; text-decoration: none; border: 1px solid #dc2626; padding: 0.25rem 0.75rem; border-radius: 2px; transition: all .2s; }
  .stb-service-link:hover { background: #dc2626; color: #fff; }
  .stb-search-box { margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #e0dbd3; }
  .stb-search-label { font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: #888; display: block; margin-bottom: .5rem; }
  .stb-search-input { width: 100%; border: none; border-bottom: 1.5px solid #e0dbd3; background: transparent; font-family: 'DM Mono', monospace; font-size: 1rem; color: #1a1a1a; padding: .4rem 0; outline: none; }
  .stb-search-input:focus { border-color: #dc2626; }
  .stb-prose p { font-size: 13px; color: #444; line-height: 1.7; margin-bottom: .75rem; }
  .stb-prose p:last-child { margin-bottom: 0; }
  .stb-prose ul { font-size: 13px; color: #444; line-height: 1.8; padding-left: 1.2rem; margin-bottom: .75rem; }
  .stb-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem; }
  .stb-info-item { padding: .75rem; border-left: 2px solid #fca5a5; }
  .stb-info-title { font-size: 12px; font-weight: 500; color: #1a1a1a; margin-bottom: .25rem; }
  .stb-info-body { font-size: 12px; color: #888; line-height: 1.5; }
  .stb-tip-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .stb-tip-num { font-family: 'DM Serif Display', serif; font-size: 2rem; color: #fca5a5; line-height: 1; margin-bottom: .4rem; }
  .stb-tip-title { font-size: 12px; font-weight: 500; color: #1a1a1a; margin-bottom: .25rem; }
  .stb-tip-body { font-size: 12px; color: #888; line-height: 1.5; }
  .stb-related-links { display: flex; flex-wrap: wrap; gap: .5rem; }
  .stb-related-link { font-size: 12px; padding: .35rem .75rem; border: 1px solid #e0dbd3; border-radius: 2px; color: #555; text-decoration: none; transition: all .15s; display: inline-block; }
  .stb-related-link:hover { border-color: #1a1a1a; color: #1a1a1a; }
  .stb-disclaimer { font-size: 11px; color: #888; line-height: 1.6; border-top: 1px solid #e0dbd3; padding-top: 1rem; margin-top: 1rem; }
  .stb-footer-links { display: flex; gap: 1rem; font-size: 11px; margin-top: .75rem; }
  .stb-footer-links a { color: #888; text-decoration: underline; }
  @media (max-width: 600px) {
    .stb-info-grid, .stb-tip-grid { grid-template-columns: 1fr; }
  }
`

const SERVICES = [
  { name: "Netflix", url: "https://www.netflix.com/cancelplan" },
  { name: "Spotify", url: "https://www.spotify.com/account/cancel/" },
  { name: "Amazon Prime", url: "https://www.amazon.com/gp/css/account/memberships" },
  { name: "Disney+", url: "https://www.disneyplus.com/account/billing" },
  { name: "Hulu", url: "https://accounts.hulu.com/account/cancel" },
  { name: "Apple TV+", url: "https://tv.apple.com/account/manage" },
  { name: "YouTube Premium", url: "https://www.youtube.com/paid_memberships" },
  { name: "Adobe Creative Cloud", url: "https://account.adobe.com/plans" },
  { name: "Microsoft 365", url: "https://account.microsoft.com/services" },
  { name: "Peacock", url: "https://www.peacocktv.com/account/manage" },
  { name: "Paramount+", url: "https://www.paramountplus.com/account/" },
  { name: "HBO Max (Max)", url: "https://play.max.com/account" },
  { name: "Audible", url: "https://www.audible.com/account/subscription" },
  { name: "Dropbox", url: "https://www.dropbox.com/account/plan" },
  { name: "Canva", url: "https://www.canva.com/account/subscription" },
  { name: "LinkedIn Premium", url: "https://www.linkedin.com/premium/manage" },
]

export default function Page() {
  const [search, setSearch] = useState("")

  const filteredServices = SERVICES.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <style>{css}</style>
      <main className="stb-wrap">

        <div className="stb-header">
          <p className="stb-eyebrow">Subscription Management</p>
          <h1 className="stb-title">Stop Trial Billing<br /><em>Cancel Free Trials</em></h1>
        </div>

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
            {filteredServices.length === 0 ? (
              <p style={{ fontSize: "13px", color: "#888", textAlign: "center", padding: "1rem" }}>No matching services found</p>
            ) : (
              filteredServices.map(service => (
                <div key={service.name} className="stb-service-item">
                  <span className="stb-service-name">{service.name}</span>
                  <a href={service.url} target="_blank" rel="noopener noreferrer" className="stb-service-link">
                    Cancel →
                  </a>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="stb-card">
          <p className="stb-section-title">How to stop free trials from billing you</p>
          <div className="stb-prose">
            <p>Free trials are designed to convert into paid subscriptions. The moment you sign up, most companies already have your payment information. If you don't cancel before the trial ends, you'll be automatically charged — often for a full month or even a full year.</p>
            <p>The safest approach is to <strong>cancel immediately after signing up</strong>. Most services will still honor the full trial period even if you cancel on day one. This is the single best habit to develop.</p>
            <p>Use the searchable list above to find the cancellation page for your service. Bookmark it. Cancel before the trial ends.</p>
          </div>
        </div>

        <div className="stb-card">
          <p className="stb-section-title">Why this matters</p>
          <div className="stb-info-grid">
            <div className="stb-info-item">
              <p className="stb-info-title">The average person forgets</p>
              <p className="stb-info-body">Studies show over 40% of free trial users forget to cancel and get charged. The average forgotten subscription costs $25-50/month.</p>
            </div>
            <div className="stb-info-item">
              <p className="stb-info-title">Recurring billing is profitable</p>
              <p className="stb-info-body">Companies rely on "subscription inertia" — the hassle of canceling keeps people paying for months or years after they stop using the service.</p>
            </div>
            <div className="stb-info-item">
              <p className="stb-info-title">Cancel anytime</p>
              <p className="stb-info-body">In the US, the FTC's "Click to Cancel" rule requires companies to make cancellation as easy as sign-up. You should never have to call a customer service line.</p>
            </div>
            <div className="stb-info-item">
              <p className="stb-info-title">Use virtual cards</p>
              <p className="stb-info-body">Privacy.com or virtual credit cards let you set spending limits or one-time-use numbers — free trials cannot auto-renew if the card is already expired or locked.</p>
            </div>
          </div>
        </div>

        <div className="stb-card">
          <p className="stb-section-title">Pro tips to avoid surprise charges</p>
          <div className="stb-tip-grid">
            <div>
              <p className="stb-tip-num">01</p>
              <p className="stb-tip-title">Cancel immediately</p>
              <p className="stb-tip-body">Sign up, then cancel within 5 minutes. Most services still give you the full trial period. Zero risk of forgetting.</p>
            </div>
            <div>
              <p className="stb-tip-num">02</p>
              <p className="stb-tip-title">Set a calendar reminder</p>
              <p className="stb-tip-body">When you start a trial, immediately add a reminder 48 hours before it ends. Use two reminders: email and phone alert.</p>
            </div>
            <div>
              <p className="stb-tip-num">03</p>
              <p className="stb-tip-title">Check your bank statements</p>
              <p className="stb-tip-body">Review credit card and bank statements monthly. Small recurring charges are easy to miss and add up quickly.</p>
            </div>
            <div>
              <p className="stb-tip-num">04</p>
              <p className="stb-tip-title">Use subscription tracking apps</p>
              <p className="stb-tip-body">Apps like Rocket Money, Truebill, or your own <strong>mysubscriptioncost.com</strong> track all recurring bills in one place.</p>
            </div>
          </div>
        </div>

        <div style={{ background: "#fff", border: "1px solid #e0dbd3", borderRadius: "4px", padding: "1rem 1.5rem", marginBottom: "1.5rem", textAlign: "center" }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "#888" }}>
            Already paying for services you don't use?{" "}
            <a href="https://www.mysubscriptioncost.com" style={{ color: "#dc2626", textDecoration: "underline" }}>
              Track all your subscriptions here
            </a>
          </p>
        </div>

        <div className="stb-card">
          <p className="stb-section-title">Related tools</p>
          <div className="stb-related-links">
            {RELATED.map((r, i) => (
              <a key={i} className="stb-related-link" href={r.href}>{r.label}</a>
            ))}
          </div>
          <div className="stb-disclaimer">
            This site provides direct links to third-party cancellation pages for convenience. We are not affiliated with any service listed. Always verify you are on the official website before entering payment information. This site may use cookies and analytics. By using this site, you agree to our Privacy Policy and Terms of Service.
            <div className="stb-footer-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}