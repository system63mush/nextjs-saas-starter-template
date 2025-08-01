import type {Metadata} from "next";
import {ThemeProvider} from "next-themes";

import "styles/globals.css";

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
                url: "https://goalbound.codes/_next/image?url=%2Fproducts%2FGoalbound%20index.png&w=640&q=75",
                alt: "Goalbound Codes for Rewards and Upgrades",
                width: 1920,
                height: 1080,
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Goalbound Codes for Rewards and Upgrades",
        description:
            "Unlock exciting in-game rewards with Goalbound codes! Use these codes to get free spins, new characters, and valuable items to enhance your gameplay.",
        images: [
            {
                url: "https://goalbound.codes/_next/image?url=%2Fproducts%2FGoalbound%20index.png&w=640&q=75",
                alt: "Goalbound Codes for Rewards and Upgrades",
            },
        ],
    },

    metadataBase: new URL("https://goalbound.codes"),

    // Optional: Article info if this is content-based
    // These are not official metadata keys, so you must handle them manually if needed
    other: {
        "article:published_time": "2025-07-08T17:19:11.000Z",
        "article:modified_time": "2025-08-01T14:01:59.000Z",
    },
}


export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
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
