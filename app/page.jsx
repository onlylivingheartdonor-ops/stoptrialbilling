import TrialCanceller from "./TrialCanceller"
import { RELATED_LINKS as RELATED } from "./lib/links"

const staticCss = `
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
  .stb-nav { font-size: 12px; margin-bottom: 1.5rem; }
  .stb-nav a { color: #dc2626; text-decoration: none; }
  .stb-nav a:hover { text-decoration: underline; }
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
  .stb-prose ul li { margin-bottom: .3rem; }
  .stb-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem; }
  .stb-info-item { padding: .75rem; border-left: 2px solid #fca5a5; }
  .stb-info-title { font-size: 12px; font-weight: 500; color: #1a1a1a; margin-bottom: .25rem; }
  .stb-info-body { font-size: 12px; color: #888; line-height: 1.5; }
  .stb-tip-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .stb-tip-num { font-family: 'DM Serif Display', serif; font-size: 2rem; color: #fca5a5; line-height: 1; margin-bottom: .4rem; }
  .stb-tip-title { font-size: 12px; font-weight: 500; color: #1a1a1a; margin-bottom: .25rem; }
  .stb-tip-body { font-size: 12px; color: #888; line-height: 1.5; }
  .stb-faq-item { border-bottom: 1px solid #e0dbd3; padding: 1rem 0; }
  .stb-faq-item:last-child { border-bottom: none; padding-bottom: 0; }
  .stb-faq-q { font-size: 13px; font-weight: 500; color: #1a1a1a; margin-bottom: .4rem; }
  .stb-faq-a { font-size: 13px; color: #555; line-height: 1.7; }
  .stb-related-links { display: flex; flex-wrap: wrap; gap: .5rem; }
  .stb-related-label { font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: #888; margin-bottom: .75rem; }
  .stb-related-link { font-size: 12px; padding: .35rem .75rem; border: 1px solid #e0dbd3; border-radius: 2px; color: #555; text-decoration: none; transition: all .15s; display: inline-block; }
  .stb-related-link:hover { border-color: #1a1a1a; color: #1a1a1a; }
  .stb-disclaimer { font-size: 11px; color: #888; line-height: 1.6; border-top: 1px solid #e0dbd3; padding-top: 1rem; margin-top: 1rem; }
  .stb-footer-links { display: flex; gap: 1rem; font-size: 11px; margin-top: .75rem; }
  .stb-footer-links a { color: #888; text-decoration: underline; }
  @media (max-width: 600px) { .stb-info-grid, .stb-tip-grid { grid-template-columns: 1fr; } }
`

const SERVICES = [
  { name: "Netflix",              url: "https://www.netflix.com/cancelplan" },
  { name: "Spotify",              url: "https://www.spotify.com/account/cancel/" },
  { name: "Amazon Prime",         url: "https://www.amazon.com/gp/css/account/memberships" },
  { name: "Disney+",              url: "https://www.disneyplus.com/account/billing" },
  { name: "Hulu",                 url: "https://accounts.hulu.com/account/cancel" },
  { name: "Apple TV+",            url: "https://tv.apple.com/account/manage" },
  { name: "YouTube Premium",      url: "https://www.youtube.com/paid_memberships" },
  { name: "Adobe Creative Cloud", url: "https://account.adobe.com/plans" },
  { name: "Microsoft 365",        url: "https://account.microsoft.com/services" },
  { name: "Peacock",              url: "https://www.peacocktv.com/account/manage" },
  { name: "Paramount+",           url: "https://www.paramountplus.com/account/" },
  { name: "HBO Max (Max)",        url: "https://play.max.com/account" },
  { name: "Audible",              url: "https://www.audible.com/account/subscription" },
  { name: "Dropbox",              url: "https://www.dropbox.com/account/plan" },
  { name: "Canva",                url: "https://www.canva.com/account/subscription" },
  { name: "LinkedIn Premium",     url: "https://www.linkedin.com/premium/manage" },
]

const FAQ = [
  {
    q: "Can I cancel a free trial immediately after signing up?",
    a: "Yes. Most services allow you to cancel immediately after signing up and will still honor the full trial period. This is the single best habit to develop — cancel the moment you sign up, before you forget. You lose nothing except the automatic renewal. Netflix, Spotify, Amazon Prime, and most major services all follow this policy."
  },
  {
    q: "What happens if I forget to cancel a free trial?",
    a: "You will be automatically charged at the end of the trial period, typically for one month of service or, if you selected annual billing, for a full year. The charge usually appears within 24 hours of the trial ending. Some services send a reminder email before charging; many do not. If you are charged accidentally, contact the service's customer support immediately — many will issue a refund if you cancel within a day or two of the charge."
  },
  {
    q: "Does cancelling a free trial immediately mean I lose access right away?",
    a: "No. When you cancel during the trial period, your access continues until the trial end date. After that date, you lose access unless you resubscribe. Think of cancellation as simply declining the automatic renewal — not terminating the service immediately. This applies to virtually all major subscription services."
  },
  {
    q: "What is a virtual card and how does it help with free trials?",
    a: "A virtual card is a temporary card number generated for a single transaction or merchant. Services like Privacy.com let you create virtual card numbers that can be set to a spending limit of $0 after the first charge, or limited to a single use. If a service tries to charge you at the end of a trial, the charge simply fails. This is an effective safety net for trials where you want to try the service but are concerned about forgetting to cancel."
  },
  {
    q: "Are companies required to make cancellation easy?",
    a: "In the United States, the FTC's updated Click to Cancel rule (effective 2024-2025) requires companies to make cancellation as easy as sign-up. If you can cancel online, you must be able to do so with no more steps than it took to subscribe. Some states have additional protections. In practice, enforcement varies, and some companies still make cancellation deliberately difficult. If you encounter obstacles, you can dispute charges with your credit card issuer or file a complaint with the FTC."
  },
  {
    q: "What if the service I want to cancel is not listed here?",
    a: "Search for the service name plus 'cancel subscription' or 'cancel free trial' in your browser. Most services have a cancellation option in your account settings under a section called Billing, Subscription, Membership, or Plans. If you cannot find it, check the service's help center or contact their customer support directly. Under FTC rules, they are required to provide a straightforward cancellation method."
  },
]

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: staticCss }} />
      <main className="stb-wrap">

        <p className="stb-nav"><a href="https://moneywisecalculator.com">&#8592; More free tools at MoneyWise Calculator</a></p>

        <div className="stb-header">
          <p className="stb-eyebrow">Subscription Management</p>
          <h1 className="stb-title">Stop Trial Billing<br /><em>Cancel Free Trials</em></h1>
        </div>

        <p style={{ fontSize: "13px", color: "#555", lineHeight: "1.7", marginBottom: "1.5rem" }}>
          Direct links to the cancellation page for Netflix, Spotify, Amazon Prime, Disney+, and 20+ other services. Find your service, click Cancel, and stop free trials from becoming paid subscriptions.
        </p>

        {/* INTERACTIVE SEARCH + LIST — client component */}
        <TrialCanceller services={SERVICES} />

        {/* HOW TO STOP TRIALS */}
        <div className="stb-card">
          <p className="stb-section-title">How to stop free trials from billing you</p>
          <div className="stb-prose">
            <p>Free trials are designed to convert into paid subscriptions. The moment you sign up, most companies already have your payment information. If you do not cancel before the trial ends, you will be automatically charged — often for a full month or even a full year.</p>
            <p>The safest approach is to cancel immediately after signing up. Most services will still honor the full trial period even if you cancel on day one. This is the single best habit to develop: sign up, enjoy the trial, and let it expire gracefully without any surprise charges.</p>
            <p>Use the searchable list above to find the cancellation page for your service. Bookmark this page. Cancel before the trial ends.</p>
          </div>
        </div>

        {/* WHY IT MATTERS */}
        <div className="stb-card">
          <p className="stb-section-title">Why free trial charges are so common</p>
          <div className="stb-prose">
            <p>Subscription companies have spent years optimizing the psychology of trials and renewals. The free trial lowers the barrier to entry — you get full access with no immediate cost. But the payment information you provide at signup is held in anticipation of conversion. The trial end date is carefully chosen to give you just enough time to form a habit, but not quite enough time to remember to cancel.</p>
            <p>Studies consistently find that more than 40% of free trial users forget to cancel and are charged. Many continue paying for months before noticing the charge. The average person who forgets to cancel a streaming trial pays for 3-4 months before cancelling — often only after seeing it on a bank statement.</p>
            <p>The FTC's Click to Cancel rule (effective 2024-2025) requires companies to make cancellation as easy as signup. This has improved the situation, but the best protection is still to cancel proactively rather than reactively.</p>
          </div>
          <div className="stb-info-grid">
            <div className="stb-info-item">
              <p className="stb-info-title">40% forget to cancel</p>
              <p className="stb-info-body">Studies show over 40% of free trial users forget to cancel and get charged. Most continue paying for several months before noticing.</p>
            </div>
            <div className="stb-info-item">
              <p className="stb-info-title">Subscription inertia</p>
              <p className="stb-info-body">Companies rely on the hassle and friction of cancellation to keep you paying. Deliberately confusing account settings are a known industry pattern.</p>
            </div>
            <div className="stb-info-item">
              <p className="stb-info-title">FTC Click to Cancel rule</p>
              <p className="stb-info-body">US law now requires cancellation to be as easy as signup. Companies violating this can be reported to the FTC at reportfraud.ftc.gov.</p>
            </div>
            <div className="stb-info-item">
              <p className="stb-info-title">Virtual card protection</p>
              <p className="stb-info-body">Services like Privacy.com let you create single-use card numbers. If you forget to cancel, the charge simply fails — no surprise billing.</p>
            </div>
          </div>
        </div>
        {/* REAL-WORLD EXAMPLE */}
        <div className="stb-card">
          <p className="stb-section-title">Real-world example: The cost of forgetting to cancel</p>
          <div className="stb-prose">
            <p><strong>Meet Lisa.</strong> In January, she signed up for three free trials: a streaming service, a fitness app, and a productivity tool. Each required a credit card at signup.</p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "1rem" }}>
            <div style={{ background: "#fff1f2", padding: "1rem", borderRadius: "4px", border: "1px solid #fcd4d4" }}>
              <p style={{ fontSize: "12px", fontWeight: "500", color: "#b91c1c", marginBottom: ".5rem" }}>❌ Forgot to cancel</p>
              <p style={{ fontSize: "13px", color: "#444", marginBottom: ".5rem" }}>Trial ends, all three services start billing.</p>
              <p style={{ fontSize: "13px", color: "#444", marginBottom: ".5rem" }}><strong>Monthly cost:</strong> $15 + $10 + $12 = $37/month</p>
              <p style={{ fontSize: "13px", color: "#444", marginBottom: ".5rem" }}><strong>After 6 months:</strong> $222 wasted</p>
              <p style={{ fontSize: "13px", color: "#b91c1c", fontWeight: "500", marginTop: ".5rem" }}>She kept paying for services she barely used.</p>
            </div>
            
            <div style={{ background: "#f0fdf4", padding: "1rem", borderRadius: "4px", border: "1px solid #b7d9c8" }}>
              <p style={{ fontSize: "12px", fontWeight: "500", color: "#166534", marginBottom: ".5rem" }}>✅ Cancelled immediately</p>
              <p style={{ fontSize: "13px", color: "#444", marginBottom: ".5rem" }}>Same trials, but cancelled right after signing up.</p>
              <p style={{ fontSize: "13px", color: "#444", marginBottom: ".5rem" }}><strong>Result:</strong> Still enjoyed full trial access</p>
              <p style={{ fontSize: "13px", color: "#444", marginBottom: ".5rem" }}><strong>Charged:</strong> $0</p>
              <p style={{ fontSize: "13px", color: "#166534", fontWeight: "500", marginTop: ".5rem" }}>She kept the full trial period without the risk.</p>
            </div>
          </div>
          
          <div style={{ marginTop: "1rem", padding: "1rem", background: "#f5f3ef", borderRadius: "4px" }}>
            <p style={{ fontSize: "13px", color: "#1a1a1a", fontWeight: "500", marginBottom: ".25rem" }}>The bottom line:</p>
            <p style={{ fontSize: "13px", color: "#444" }}>The difference between Lisa's two outcomes was <strong>5 minutes</strong> of clicking. One resulted in $222 in wasted charges; the other cost nothing. Find your service above, click Cancel, and protect yourself before the trial ends.</p>
          </div>
        </div>
        {/* PRO TIPS */}
        <div className="stb-card">
          <p className="stb-section-title">Pro tips for managing free trials</p>
          <div className="stb-tip-grid">
            <div>
              <p className="stb-tip-num">01</p>
              <p className="stb-tip-title">Cancel immediately after signup</p>
              <p className="stb-tip-body">Sign up, then cancel within 5 minutes. You still get the full trial period. This removes all risk of accidental charges regardless of what happens later.</p>
            </div>
            <div>
              <p className="stb-tip-num">02</p>
              <p className="stb-tip-title">Set a calendar reminder</p>
              <p className="stb-tip-body">If you want to evaluate the service before cancelling, set a calendar reminder 48 hours before the trial ends — enough time to cancel before the billing date.</p>
            </div>
            <div>
              <p className="stb-tip-num">03</p>
              <p className="stb-tip-title">Review your bank statements monthly</p>
              <p className="stb-tip-body">Check your credit card and bank statements every month for recurring charges you do not recognize. Many forgotten trials are discovered this way — often months late.</p>
            </div>
            <div>
              <p className="stb-tip-num">04</p>
              <p className="stb-tip-title">Use a subscription tracker</p>
              <p className="stb-tip-body">Apps like Rocket Money or the Subscription Cost Calculator automatically identify recurring charges and alert you to new or changed billing amounts.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="stb-card">
          <p className="stb-section-title">Frequently asked questions</p>
          {FAQ.map((item, i) => (
            <div className="stb-faq-item" key={i}>
              <p className="stb-faq-q">{item.q}</p>
              <p className="stb-faq-a">{item.a}</p>
            </div>
          ))}
        </div>

        {/* RELATED */}
        <div className="stb-card">
          <p className="stb-section-title">Related tools</p>
          <p className="stb-related-label">More free tools from the MoneyWise Calculator network</p>
          <div className="stb-related-links">
            {RELATED.map((r, i) => (
              <a key={i} className="stb-related-link" href={r.href}>{r.label}</a>
            ))}
          </div>
          <div className="stb-disclaimer">
            This site provides direct links to third-party cancellation pages for informational purposes. We are not affiliated with any service listed. Links may change — if a link does not work, search for the service name plus "cancel subscription" in your browser. This site uses cookies and analytics. By using this site, you agree to our{" "}
            <a href="/privacy" style={{ color: "#888" }}>Privacy Policy</a> and{" "}
            <a href="/terms" style={{ color: "#888" }}>Terms of Service</a>.
            <div className="stb-footer-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="https://moneywisecalculator.com">MoneyWise Calculator</a>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
