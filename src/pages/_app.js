import { Analytics } from "@vercel/analytics/react";
import '@/styles/globals.css'; // Import global styles
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react'; // Import useEffect hook if needed

export default function App({ Component, pageProps }) {
  // Use useEffect to initialize analytics
  useEffect(() => {
    const analytics = Analytics();
    analytics.page();
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
