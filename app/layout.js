export const metadata = {
  title: "Stop Trial Billing | Cancel Free Trials Before They Charge You",
  description: "Find direct links to cancel free trials for Netflix, Spotify, Amazon Prime, Disney+, and 20+ other services. Stop unwanted subscription charges.",
  alternates: { canonical: "https://www.stoptrialbilling.com" },
  openGraph: {
    title: "Stop Trial Billing | Cancel Free Trials Before They Charge You",
    description: "Find direct links to cancel free trials for Netflix, Spotify, Amazon Prime, Disney+, and 20+ other services.",
    url: "https://www.stoptrialbilling.com",
    siteName: "Moneywise Calculators",
    images: [{ url: "https://www.stoptrialbilling.com/og-image.png", width: 1200, height: 630, alt: "Stop Trial Billing" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stop Trial Billing | Cancel Free Trials",
    description: "Find direct links to cancel free trials for 20+ services.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico", apple: "/apple-touch-icon.png" },
  viewport: { width: "device-width", initialScale: 1, maximumScale: 5 },
  authors: [{ name: "David Graham" }],
  creator: "MoneyWise Calculators",
  publisher: "MoneyWise Calculators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3475627763908800"
          crossOrigin="anonymous"
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Stop Trial Billing",
              description: "Directory of free trial cancellation links for 20+ subscription services",
              url: "https://www.stoptrialbilling.com",
              applicationCategory: "Utility",
              operatingSystem: "All",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}