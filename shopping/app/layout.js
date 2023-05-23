import './global.css';

export const metadata = {
  title: 'Next.js',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="fa">
      <body>
        {children}
        <script src="https://kit.fontawesome.com/ab8b1e8c67.js" crossOrigin="anonymous" differ></script>
      </body>
    </html>
  )
}
