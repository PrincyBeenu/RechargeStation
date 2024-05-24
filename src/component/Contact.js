import { React, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logor from './logor.png'
import fb from './fb.png'
import insta from './insta.png'
import x from './x.png'
import youtube from './youtube.png'
import whatsapp from './whatsapp.png'
import bg3 from './bg3.jpg'

export const Contact = () => {

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
                formId: '8328ef71-dbf3-42cd-9d24-bda53fbb3adc',
                target: '#hubspotForm'
              });
            }
          };
    
          document.body.appendChild(script);
        } else {
          if (window.hbspt) {
            window.hbspt.forms.create({
              region: 'na1',
              portalId: '46242536',
              formId: '8328ef71-dbf3-42cd-9d24-bda53fbb3adc',
              target: '#hubspotForm'
            });
          }
        }

        return () => {
            const formContainer = document.querySelector('#hubspotForm');
            if (formContainer) {
              formContainer.innerHTML = '';
            }
          };
        }, []);
    

    return (
    <div className="bg-green-50 w-[100%] h-[500px]">
        <img class="h-24 w-80" src={logor} alt="recharge station logo"/>

        <div className="absolute right-5 top-5 text-2xl">
            <Link to='/Rec' className="text-lime-500 font-bold ml-10 underline">RECHARGE</Link>
            <Link to='/Rhome' className="text-lime-500 font-bold ml-10 underline">HOME</Link>
            <Link to='/About' className="text-lime-500 font-bold ml-10 underline">ABOUT</Link>
            <Link to='/Contact' className="text-lime-500 font-bold ml-10 underline">CONTACT</Link>
            <Link to='/Login' className="text-lime-500 font-bold ml-10 underline">LOGIN</Link>
        </div>

        <img className='absolute top-[20%] h-[170%] w-full' src={bg3} alt="img" />
        <div className='absolute left-[36%] top-[23%] text-4xl text-white font-bold'>We are at your service</div>
        
        <p className='absolute left-[37%] top-[40%] font-sans underline text-indigo-100'>Please use the form below to get in touch with us.</p>
        <div id="hubspotForm" className='absolute left-[33%] top-[48%] w-[50%] h-fit px-5 py-5'></div>

        <p className='underline underline-offset-8 absolute left-[32%] top-[170%] font-sans text-2xl font-bold text-indigo-900'>
            If you are still not happy, contact us directly.</p>
            <p className='absolute left-[41%] top-[178%] font-sans text-2xl font-bold text-indigo-900'>Contact: 8188872752</p>

    <footer className="absolute top-[192%] bg-green-500 h-48 w-full text-indigo-700 font-bold text-center">
    <div className='my-12'><p>follow us on: </p>
    <div className="flex justify-center items-center space-x-4"><Link to='https://www.facebook.com/'><img src={fb} alt="fb" /></Link>
    <Link to='https://www.instagram.com/accounts/login/'><img src={insta} alt="ig" /></Link>
    <Link to='https://twitter.com/?lang=en'><img src={x} alt="x" /></Link>
    <Link to='https://www.youtube.com/'><img src={youtube} alt="youtube" /></Link>
    <Link to='https://web.whatsapp.com/'><img src={whatsapp} alt="wapps" /></Link></div>
    <p>heins road, chennai - 82<br/> 8188872752</p></div>
    </footer>
    </div>
    );
}