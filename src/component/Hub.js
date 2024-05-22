import React, { useEffect } from 'react';

const Hub = () => {
  useEffect(() => {
    
    const existingScript = document.querySelector(`script[src="//js.hsforms.net/forms/embed/v2.js"]`);

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.async = true;

      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: 'na1',
            portalId: '46242536',
            formId: '2b93f998-ecdd-4803-9ee4-1410a49a5037',
            target: '#hubspotForm'
          });
        }
      };

      document.body.appendChild(script);
    } else {
      // Script already exists, just create the form
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '46242536',
          formId: '2b93f998-ecdd-4803-9ee4-1410a49a5037',
          target: '#hubspotForm'
        });
      }
    }

    // Cleanup function
    return () => {
      const formContainer = document.querySelector('#hubspotForm');
      if (formContainer) {
        formContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div id="hubspotForm">
    </div>
  );
};

export default Hub;
