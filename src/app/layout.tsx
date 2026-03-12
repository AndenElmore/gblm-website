import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ground Breaker Land Management | Seeding, Grading & Bush Hogging",
  description: "Ground Breaker Land Management provides expert seeding, grading, bush hogging, driveway creation, and tree cleanup in Bogart, Watkinsville, Athens, and Oconee County.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LandscapingService",
              "name": "Ground Breaker Land Management",
              "image": "https://groundbreakerlandmanagement.com/images/logo.png",
              "description": "Professional land management services including seeding, grading, bush hogging, and site preparation. Serving a 100-mile radius around Athens, GA.",
              "@id": "https://groundbreakerlandmanagement.com",
              "url": "https://groundbreakerlandmanagement.com",
              "telephone": "+1-706-510-3942",
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 33.9519,
                  "longitude": -83.3576
                },
                "geoRadius": "160934"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              }
            }),
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
