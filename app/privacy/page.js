export const metadata = {
  title: "Privacy Policy | Stop Trial Billing",
  description: "Privacy policy for Stop Trial Billing. Learn how we handle data, cookies, and third-party services including Google AdSense and Google Analytics.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: "780px", margin: "0 auto", padding: "2rem 1.5rem", fontFamily: "'DM Mono', monospace", color: "#1a1a1a", background: "#faf8f4", minHeight: "100vh" }}>
      <p style={{ fontSize: "12px", marginBottom: "1.5rem" }}>
        <a href="/" style={{ color: "#dc2626", textDecoration: "none" }}>&#8592; Back to Stop Trial Billing</a>
      </p>

      <h1 style={{ fontFamily: "Georgia, serif", fontSize: "2rem", marginBottom: ".5rem" }}>Privacy Policy</h1>
      <p style={{ fontSize: "12px", color: "#888", marginBottom: "2rem" }}>Last updated: May 19, 2026</p>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>About this site</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          Stop Trial Billing (stoptrialbilling.com) is a free directory that provides direct links to the cancellation pages of major subscription services. It is operated by MoneyWise Calculators, a network of free online tools. This privacy policy explains what information is collected when you use this site, how it is used, and your rights regarding that information.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>Information we do not collect</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          We do not collect, store, or transmit any personal information through this site. We do not require you to create an account, provide an email address, or enter any personal data to use this tool. Search queries entered into the service search box are processed entirely within your browser and are not sent to our servers.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>Cookies</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          This site uses cookies. Cookies are small text files stored on your device by your browser. We use cookies for the following purposes:
        </p>
        <ul style={{ fontSize: "13px", lineHeight: "1.9", color: "#444", paddingLeft: "1.5rem", marginTop: ".75rem" }}>
          <li><strong>Analytics cookies</strong> -- placed by Google Analytics to help us understand how visitors use the site (pages visited, time on site, general geographic region). This data is aggregated and anonymous.</li>
          <li><strong>Advertising cookies</strong> -- placed by Google AdSense to serve relevant advertisements. These cookies may track your browsing across websites to show you ads that match your interests.</li>
        </ul>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444", marginTop: ".75rem" }}>
          You can control or disable cookies through your browser settings. Disabling cookies will not prevent you from using this site, but may affect how advertisements are displayed.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>Google AdSense</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          This site displays advertisements served by Google AdSense, a service provided by Google LLC. Google AdSense uses cookies and similar tracking technologies to serve ads based on your prior visits to this website and other websites.
        </p>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444", marginTop: ".75rem" }}>
          You may opt out of personalized advertising by visiting{" "}
          <a href="https://www.google.com/settings/ads" style={{ color: "#dc2626" }} target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.
          For more information, visit{" "}
          <a href="https://policies.google.com/technologies/partner-sites" style={{ color: "#dc2626" }} target="_blank" rel="noopener noreferrer">How Google uses information from sites or apps that use our services</a>.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>Google Analytics</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          This site uses Google Analytics to collect anonymous information about how visitors use the site. This data is aggregated and does not identify individual users. You can opt out by installing the{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" style={{ color: "#dc2626" }} target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>Third-party links</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          This site contains links to third-party cancellation pages and other websites. When you click a cancellation link, you leave this site and are subject to the privacy policy of the service you are visiting. We are not responsible for the privacy practices of any third-party sites.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>Changes to this policy</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          We may update this privacy policy from time to time. Changes will be posted on this page with an updated date. Continued use of the site after any changes constitutes acceptance of the updated policy.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>Contact</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          For privacy-related questions, contact us through{" "}
          <a href="https://moneywisecalculator.com" style={{ color: "#dc2626" }}>MoneyWise Calculator</a>.
        </p>
      </section>

      <p style={{ fontSize: "12px", color: "#aaa", borderTop: "1px solid #e0dbd3", paddingTop: "1.5rem" }}>
        &copy; 2026 MoneyWise Calculators &middot; <a href="/terms" style={{ color: "#aaa" }}>Terms of Service</a>
      </p>
    </main>
  );
}
