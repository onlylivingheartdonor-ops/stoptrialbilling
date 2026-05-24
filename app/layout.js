export const metadata = {
  title: "Stop Trial Billing | Cancel Free Trials Before They Charge You",
  description: "Find direct links to cancel free trials for Netflix, Spotify, Amazon Prime, Disney+, and 20+ other services. Stop unwanted subscription charges before they happen.",

  alternates: {
    canonical: "https://www.stoptrialbilling.com",
  },

  openGraph: {
    title: "Stop Trial Billing | Cancel Free Trials Before They Charge You",
    description: "Find direct links to cancel free trials for Netflix, Spotify, Amazon Prime, Disney+, and 20+ other services. Stop unwanted subscription charges.",
    url: "https://www.stoptrialbilling.com",
    siteName: "Stop Trial Billing",
    images: [
      {
        url: "https://www.stoptrialbilling.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stop Trial Billing -- Cancel free trials before they charge you",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Stop Trial Billing | Cancel Free Trials Before They Charge You",
    description: "Find direct links to cancel free trials for Netflix, Spotify, Amazon Prime, Disney+, and 20+ other services.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

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
              description: "Directory of direct cancellation links for free trials from Netflix, Spotify, Amazon Prime, Disney+, and 20+ other subscription services.",
              url: "https://www.stoptrialbilling.com",
              applicationCategory: "UtilitiesApplication",
              operatingSystem: "All",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD"
              },
              author: {
                "@type": "Organization",
                name: "MoneyWise Calculators",
                url: "https://moneywisecalculator.com"
              }
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
