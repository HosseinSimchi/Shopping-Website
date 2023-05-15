import React from 'react';

import "./global.css";

export const metadata = {
  title: 'فروشگاه اینترنتی',
}

const RootLayout = ({children}) => {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout;
