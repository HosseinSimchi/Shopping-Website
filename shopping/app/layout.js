export const metadata = {
  title: 'Next.js',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="fa">
      <body>
        {children}
      </body>
    </html>
  )
}
