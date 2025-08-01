import type {Metadata} from "next";
import {ThemeProvider} from "next-themes";

import "styles/globals.css";

export const metadata: Metadata = {
    title: "Goalbound Codes for Rewards and Upgrades",
    description: "Unlock exciting in-game rewards with Goalbound codes! Use these codes to get free spins, new characters, and valuable items to enhance your gameplay. ",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <meta property="og:title" content={metadata.title}/>
            <meta property="og:description" content={metadata.description}/>
            <meta property="og:url" content="https://goalbound.codes"/>
            <meta property="og:site_name" content="Goalbound Codes"/>
            <meta property="og:locale" content="en_US"/>
            <meta property="og:image"
                  content="https://goalbound.codes/_next/image?url=%2Fproducts%2FGoalbound%20index.png&w=640&q=75"/>
            <meta property="og:image:alt" content={metadata.title}/>
            <meta property="og:image:width" content="1920"/>
            <meta property="og:image:height" content="1080"/>
            <meta property="og:type" content="website"/>
            <meta property="article:published_time" content="2025-07-08T17:19:11.000Z"/>
            <meta property="article:modified_time" content="2025-08-01T13:01:59.000Z"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={metadata.title}/>
            <meta name="twitter:description" content={metadata.description}/>
            <meta name="twitter:image"
                  content="https://goalbound.codes/_next/image?url=%2Fproducts%2FGoalbound%20index.png&w=640&q=75"/>
            <meta name="twitter:image:alt" content={metadata.title}/>
            <meta name="twitter:image:width" content="1920"/>
            <meta name="twitter:image:height" content="1080"/>

            <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
            <link rel="canonical" href="https://goalbound.codes/"/>
        </head>
        <body className="bg-white dark:bg-black min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
