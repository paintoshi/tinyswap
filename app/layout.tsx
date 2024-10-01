import type { Metadata, Viewport } from "next"
import { Manrope, Orbitron } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
})

const orbitron = Orbitron({ 
  weight: '700',
  subsets: ['latin'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: "TinySwap",
  description: "A simple and powerful Cross-chain Swap/Bridge, powered by LI.FI.",
  applicationName: "TinySwap",
  keywords: ["tinyswap", "swap", "bridge", "li.fi", "crypto", "cryptocurrency", "exchange"],
  authors: [{ name: "Paintoshi", url: "https://github.com/paintoshi" }],
  creator: "Paintoshi",
  publisher: "Paintoshi",
  twitter: {
    card: "summary_large_image",
    title: "TinySwap",
    description: "A simple and powerful Cross-chain Swap/Bridge, powered by LI.FI.",
    images: "https://tinyswap.app/og.png",
    site: "@paintoshi",
    creator: "@paintoshi",
  },
  openGraph: {
    title: "TinySwap",
    description: "A simple and powerful Cross-chain Swap/Bridge, powered by LI.FI.",
    images: "https://tinyswap.app/og.png",
    url: "https://tinyswap.app",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${orbitron.variable}`}>
        {children}
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          strategy="afterInteractive"
          id="google-tag1"
          src={`https://www.googletagmanager.com/gtag/js?id=G-CYE6KFRLTH`}
        />
        <Script
          strategy="afterInteractive"
          id="google-tag2"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CYE6KFRLTH', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
