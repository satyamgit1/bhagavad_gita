// components/Newsletter.js
import { useEffect } from 'react';

const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

const Newsletter = () => {
  useScript('https://static-bundles.visme.co/forms/vismeforms-embed.js');

  return (
    <div className="visme_d"
         data-title="News Subscription Form"
         data-url="6x0pjyn3-news-subscription-form?sidebar=true"
         data-domain="forms"
         data-full-page="false"
         data-min-height="600px"
         data-form-id="79931">
    </div>
  );
};

export default Newsletter;



