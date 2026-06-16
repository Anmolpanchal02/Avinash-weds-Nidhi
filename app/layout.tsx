import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avinash & Nidhi — Wedding Invitation | 12 July 2026",
  description: "Join us in celebrating the sacred union of Avinash (Kalu) & Nidhi (Twinkle) — Sunday, 12 July 2026 at Katara Paradise, Tonk Road, Niwai, Rajasthan.",
  keywords: ["Avinash Nidhi Wedding", "Wedding Invitation", "Niwai Rajasthan", "12 July 2026"],
  openGraph: {
    title: "Avinash ❤️ Nidhi — Wedding Invitation",
    description: "Sunday, 12 July 2026 · Katara Paradise, Niwai, Rajasthan",
    url: "https://avinash-weds-nidhi.vercel.app",
    siteName: "Avinash & Nidhi Wedding",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/image.png",
        width: 904,
        height: 1280,
        alt: "Avinash & Nidhi Wedding Invitation — 12 July 2026",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avinash ❤️ Nidhi — Wedding Invitation",
    description: "Sunday, 12 July 2026 · Katara Paradise, Niwai, Rajasthan",
    images: ["/image.png"],
  },
  metadataBase: new URL("https://avinash-weds-nidhi.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,700&family=Great+Vibes&family=Cinzel:wght@400;500;600;700;800;900&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
