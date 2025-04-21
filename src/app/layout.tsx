import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

// Configure the Rubik font with Hebrew support
const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-rubik',
  weight: ['400', '500', '700'],
})

// Define metadata for the site
export const metadata: Metadata = {
  title: 'בית קפה ביתא',
  description: 'בית קפה מוביל המספק שירות מקצועי ואיכותי. הזמינו תור עוד היום!',
  keywords: 'בית קפה, שירות, איכות, מקצועיות, ישראל',
  openGraph: {
    title: 'בית קפה ביתא',
    description: 'בית קפה מוביל המספק שירות מקצועי ואיכותי',
    url: 'https://beta-cafe.com',
    siteName: 'בית קפה ביתא',
    locale: 'he_IL',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'בית קפה ביתא',
      },
    ],
  },
}

// Define the RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className={rubik.variable}>
      <head>
        {/* Schema.org markup for a local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CafeOrCoffeeShop',
              name: 'בית קפה ביתא',
              description: 'בית קפה מוביל המספק שירות מקצועי ואיכותי',
              url: 'https://beta-cafe.com',
              telephone: '+972-000-0000',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'רחוב הדוגמה 123',
                addressLocality: 'תל אביב',
                postalCode: '6100000',
                addressCountry: 'IL',
              },
              image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
              priceRange: '₪₪',
              servesCuisine: 'קפה, מאפים',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
                  opens: '08:00',
                  closes: '20:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Friday'],
                  opens: '08:00',
                  closes: '14:00',
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-gray-50 text-gray-900 text-right min-h-screen">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <main className="neumorphic-container rounded-2xl p-6 md:p-8 backdrop-blur-sm bg-white/80 border border-white/20 shadow-xl">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}