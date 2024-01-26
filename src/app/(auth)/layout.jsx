"use client"
import '../globals.css'

export default function EventsLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <html lang="fr">
      <body>
      <section>
        {children}
      </section>
      </body>
      </html>
    )
  }