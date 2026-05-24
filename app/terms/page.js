export const metadata = {
  title: "Terms of Service | Stop Trial Billing",
  description: "Terms of service for Stop Trial Billing. Please read these terms before using the site.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main style={{ maxWidth: "780px", margin: "0 auto", padding: "2rem 1.5rem", fontFamily: "'DM Mono', monospace", color: "#1a1a1a", background: "#faf8f4", minHeight: "100vh" }}>
      <p style={{ fontSize: "12px", marginBottom: "1.5rem" }}>
        <a href="/" style={{ color: "#dc2626", textDecoration: "none" }}>&#8592; Back to Stop Trial Billing</a>
      </p>

      <h1 style={{ fontFamily: "Georgia, serif", fontSize: "2rem", marginBottom: ".5rem" }}>Terms of Service</h1>
      <p style={{ fontSize: "12px", color: "#888", marginBottom: "2rem" }}>Last updated: May 19, 2026</p>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>Acceptance of terms</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          By accessing or using Stop Trial Billing at stoptrialbilling.com, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the site.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>Description of service</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          Stop Trial Billing is a free informational directory that provides links to the cancellation or account management pages of major subscription services. It also provides general guidance on managing free trials and avoiding unwanted charges. This site is not affiliated with, endorsed by, or connected to any subscription service listed.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>Accuracy of links and information</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          We make reasonable efforts to keep cancellation links accurate and up to date. However, subscription services frequently update their websites and account management pages. We cannot guarantee that every link on this site is current at the time you visit. If a link does not work, we recommend searching for the service name plus "cancel subscription" in your browser.
        </p>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444", marginTop: ".75rem" }}>
          The general information provided about free trials, billing practices, and consumer rights is for educational purposes only and does not constitute legal advice. Laws and regulations vary by jurisdiction and may change over time.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>No affiliation with listed services</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          This site is an independent directory. We have no commercial relationship with Netflix, Spotify, Amazon, Disney, or any other service listed. We do not receive compensation for directing users to any cancellation page. All company names and trademarks are the property of their respective owners.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>Acceptable use</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          You may use this site for personal, educational, or informational purposes. You agree not to use this site in any way that violates applicable laws, disrupts the site's infrastructure, or misrepresents its purpose or affiliation.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>Disclaimer of warranties</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          This site is provided "as is" without warranties of any kind. We do not warrant the accuracy, completeness, or timeliness of any information or links provided. Your use of any third-party cancellation page linked from this site is governed entirely by that service's own terms and policies.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>Limitation of liability</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          To the fullest extent permitted by law, MoneyWise Calculators and its operators shall not be liable for any charges, fees, or damages incurred as a result of relying on information or links provided by this site, including any failure to successfully cancel a subscription through a linked cancellation page.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>Third-party services and advertising</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          This site displays advertisements through Google AdSense and uses Google Analytics for traffic measurement. Your interaction with these services is governed by Google's own terms and privacy policies.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>Changes to these terms</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          We reserve the right to modify these terms at any time. Updated terms will be posted on this page with a revised date. Continued use of the site constitutes acceptance of the updated terms.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>Contact</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          For questions about these terms, contact us through{" "}
          <a href="https://moneywisecalculator.com" style={{ color: "#dc2626" }}>MoneyWise Calculator</a>.
        </p>
      </section>

      <p style={{ fontSize: "12px", color: "#aaa", borderTop: "1px solid #e0dbd3", paddingTop: "1.5rem" }}>
        &copy; 2026 MoneyWise Calculators &middot; <a href="/privacy" style={{ color: "#aaa" }}>Privacy Policy</a>
      </p>
    </main>
  );
}
