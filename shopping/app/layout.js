import React from 'react';

export const metadata = {
  title: 'Shopping Website',
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout;