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
  title: "BEST Land Clearing in Bogart & Athens GA | Ground Breaker Land Management — Grading, Bush Hogging, Stump Grinding & Site Prep Near Me",
  description: "Ground Breaker Land Management provides professional land clearing, grading, bush hogging, stump grinding, and site prep in Bogart, Watkinsville, Athens, and across Oconee County, GA. Locally owned & fully insured. Call (706) 510-3942 for a free estimate.",
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
              "image": "https://groundbreakerlandmanagement.com/images/logo-v2.png",
              "description": "Professional land clearing, grading, site prep, bush hogging, and stump grinding serving Bogart, Watkinsville, Athens, and Oconee County, GA. Locally owned and fully insured.",
              "@id": "https://groundbreakerlandmanagement.com",
              "url": "https://groundbreakerlandmanagement.com",
              "telephone": "+1-706-510-3942",
              "areaServed": [
                { "@type": "City", "name": "Bogart, GA" },
                { "@type": "City", "name": "Watkinsville, GA" },
                { "@type": "City", "name": "Athens, GA" },
                { "@type": "AdministrativeArea", "name": "Oconee County, GA" },
                {
                  "@type": "GeoCircle",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": 33.9519,
                    "longitude": -83.3576
                  },
                  "geoRadius": "160934"
                }
              ],
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
