import './global.css';
import React,{useState, useEffect} from 'react';
import {Provider} from 'react-redux';
import store from '@/configs/store';
import {ThemeProvider} from '@emotion/react';
import theme from '@/configs/theme';

export default function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <Provider store={store} >
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}
