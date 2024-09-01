import '@/styles/globals.css';
import '@/styles/verses.css';
import '@/styles/nprogress.css'; // Import custom NProgress styles

import { ThemeProvider } from 'next-themes';
import { Auth0Provider } from '@auth0/auth0-react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Import NProgress default styles

// NProgress configuration
NProgress.configure({ showSpinner: false });

// Bind events to show/hide the progress bar
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
        <SpeedInsights />
      </ThemeProvider>
    </Auth0Provider>
  );
}
