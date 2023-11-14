import react, { useEffect } from 'react';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;