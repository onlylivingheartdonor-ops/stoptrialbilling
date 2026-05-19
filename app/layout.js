export const metadata = {
  title: "Stop Trial Billing | Cancel Free Trials Before They Charge You",
  description: "Find direct links to cancel free trials for Netflix, Spotify, Amazon Prime, Disney+, and 20+ other services. Stop unwanted subscription charges.",

  alternates: {
    canonical: "https://www.stoptrialbilling.com",
  },

  openGraph: {
    title: "Stop Trial Billing | Cancel Free Trials Before They Charge You",
    description: "Find direct links to cancel free trials for Netflix, Spotify, Amazon Prime, Disney+, and 20+ other services. Stop unwanted subscription charges.",
    url: "https://www.stoptrialbilling.com",
    siteName: "Moneywise Calculators",
    images: [
      {
        url: "https://www.stoptrialbilling.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stop Trial Billing - Cancel Free Trials",
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

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
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
      </head>
      <body>{children}</body>
    </html>
  );
}