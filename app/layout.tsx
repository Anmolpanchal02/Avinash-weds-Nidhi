import type { Metadata, Viewport } from "next";
import "./globals.css";
import { WEDDING } from "./data/wedding";
import { getSiteUrl } from "./lib/site";

const siteUrl = getSiteUrl();
const shareTitle = `${WEDDING.groom.name} & ${WEDDING.bride.name} — Wedding Invitation`;
const shareDescription = `You're invited to celebrate the wedding of ${WEDDING.groom.name} & ${WEDDING.bride.name} on ${WEDDING.weekday}, ${WEDDING.date} at ${WEDDING.venue.name}, ${WEDDING.venue.address}, ${WEDDING.venue.state}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${WEDDING.groom.name} & ${WEDDING.bride.name} Wedding | ${WEDDING.date}`,
    template: `%s | ${WEDDING.groom.name} & ${WEDDING.bride.name}`,
  },
  description: shareDescription,
  keywords: [
    "wedding invitation",
    WEDDING.groom.name,
    WEDDING.bride.name,
    WEDDING.date,
    WEDDING.venue.name,
    WEDDING.venue.state,
    "Indian wedding",
    "Rajasthan wedding",
  ],
  authors: [{ name: `${WEDDING.groom.name} & ${WEDDING.bride.name}` }],
  creator: `${WEDDING.groom.name} & ${WEDDING.bride.name}`,
  openGraph: {
    title: shareTitle,
    description: `${WEDDING.weekday}, ${WEDDING.date} · ${WEDDING.venue.name}, ${WEDDING.venue.address}, ${WEDDING.venue.state}`,
    url: siteUrl,
    siteName: `${WEDDING.groom.name} & ${WEDDING.bride.name} Wedding`,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-wedding-invitation.jpg",
        width: 723,
        height: 1024,
        alt: `Wedding Invitation — ${WEDDING.groom.name} & ${WEDDING.bride.name}`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: `${WEDDING.weekday}, ${WEDDING.date} · ${WEDDING.venue.name}, ${WEDDING.venue.state}`,
    images: ["/og-wedding-invitation.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1A0508",
  colorScheme: "dark",
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
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,700&family=Great+Vibes&family=Cinzel:wght@400;500;600;700;800;900&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Noto+Serif+Devanagari:wght@400;500;600;700&family=Tiro+Devanagari+Hindi:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
