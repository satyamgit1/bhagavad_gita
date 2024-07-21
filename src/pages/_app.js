// pages/_app.js
import '@/styles/globals.css';
import '@/styles/verses.css';
import { ThemeProvider } from 'next-themes';
import { Auth0Provider } from '@auth0/auth0-react';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="dev-vd0qgnb43n46qoyk.us.auth0.com"
      clientId="SGkB9WTXRrmWSgI0oHKEBSBiJWoxtca6"
      authorizationParams={{
        redirect_uri: typeof window !== "undefined" ? window.location.origin : "http://localhost:3000"
      }}
    >
      <ThemeProvider>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </Auth0Provider>
  );
}
