import type {Metadata} from "next";
import {ThemeProvider} from "next-themes";

import "styles/globals.css";
import Script from "next/script";

export const metadata = {
    title: "Goalbound Codes for Rewards and Upgrades",
    description:
        "Unlock exciting in-game rewards with Goalbound codes! Use these codes to get free spins, new characters, and valuable items to enhance your gameplay.",

    openGraph: {
        title: "Goalbound Codes for Rewards and Upgrades",
        description:
            "Unlock exciting in-game rewards with Goalbound codes! Use these codes to get free spins, new characters, and valuable items to enhance your gameplay.",
        url: "https://goalbound.codes",
        siteName: "Goalbound Codes",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://goalbound.codes/products/GoalboundCodes.png",
                alt: "Goalbound Codes for Rewards and Upgrades",
                width: 1920,
                height: 1080,
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Goalbound Codes for Rewards and Upgrades",
        site: "https://goalbound.codes",
        description:
            "Unlock exciting in-game rewards with Goalbound codes! Use these codes to get free spins, new characters, and valuable items to enhance your gameplay.",
        images: [
            {
                url: "https://goalbound.codes/products/GoalboundCodes.png",
                alt: "Goalbound Codes for Rewards and Upgrades",
            },
        ],
    },

    metadataBase: new URL("https://goalbound.codes"),

    // Optional: Article info if this is content-based
    // These are not official metadata keys, so you must handle them manually if needed
    other: {
        "article:published_time": "2025-07-08T17:19:11.000Z",
        "article:modified_time": "2025-08-03T10:05:51.000Z",
    },
}


export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
            <link rel="canonical" href="https://goalbound.codes/"/>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-8FLR53176S"
                strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8FLR53176S');
          `}
            </Script>
            <Script id="clarity" strategy="afterInteractive">
                {`
            (function (c, l, a, r, i, t, y) {
              c[a] = c[a] || function () {
                (c[a].q = c[a].q || []).push(arguments)
              };
              t = l.createElement(r);
              t.async = 1;
              t.src = "https://www.clarity.ms/tag/" + i;
              y = l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t, y);
            })(window, document, "clarity", "script", "snwq484iba");
          `}
            </Script>
            <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
                {`
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Goalbound Codes",
      "url": "https://goalbound.codes",
      "description": "Unlock free Goalbound spins, characters, and more with the latest codes for July 2025.",
      "publisher": {
        "@type": "Organization",
        "name": "Goalbound",
        "url": "https://goalbound.codes",
        "logo": {
          "@type": "ImageObject",
          "url": "https://goalbound.codes/products/GoalboundCodes.png"
        }
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://goalbound.codes/?search={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  `}
            </Script>

        </head>
        <body className="bg-white dark:bg-black min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
