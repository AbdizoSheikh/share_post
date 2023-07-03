import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'




export const metadata = {
  title: 'Project Showcase',
  description: "A great way to showcase a developer's projects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
