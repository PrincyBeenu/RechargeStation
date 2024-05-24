import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logor from './logor.png'
import fb from './fb.png'
import insta from './insta.png'
import x from './x.png'
import youtube from './youtube.png'
import whatsapp from './whatsapp.png'
import bg1 from './bg1.jpg'

export const Login = () => {

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
          if (window.hbspt) {
            window.hbspt.forms.create({
              region: 'na1',
              portalId: '46242536',
              formId: '2b93f998-ecdd-4803-9ee4-1410a49a5037',
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
    <div className="bg-green-50 w-[100%] h-[700px]">
        <img class="h-24 w-80" src={logor} alt="recharge station logo"/>

        <div className="absolute right-5 top-5 text-2xl">
            <Link to='/Rec' className="text-lime-500 font-bold ml-10 underline">RECHARGE</Link>
            <Link to='/Rhome' className="text-lime-500 font-bold ml-10 underline">HOME</Link>
            <Link to='/About' className="text-lime-500 font-bold ml-10 underline">ABOUT</Link>
            {/* <Link to='/Contact' className="text-lime-500 font-bold ml-10 underline">CONTACT</Link> */}
            <Link to='/Login' className="text-lime-500 font-bold ml-10 underline">LOGIN</Link>
        </div>

        
    <img className='absolute top-[22%] h-[100%] w-full' src={bg1} alt="img" />

        <div className='absolute top-[24%] left-[45%] text-indigo-900 font-extrabold text-4xl'>LOGIN</div>
        <div id="hubspotForm" className='absolute top-[15%] left-[27%] h-fit w-96 mt-24 mb-24 ml-24 mr-24 p-8 rounded-lg shadow-lg'>
    </div>
    

    <footer className="absolute top-[125%] bg-green-500 h-48 w-full text-indigo-700 font-bold text-center">
    <div className='my-12'><p>follow us on: </p>
    <div className="flex justify-center items-center space-x-4"><Link to='https://www.facebook.com/'><img src={fb} alt="fb" /></Link>
    <Link to='https://www.instagram.com/accounts/login/'><img src={insta} alt="ig" /></Link>
    <Link to='https://twitter.com/?lang=en'><img src={x} alt="x" /></Link>
    <Link to='https://www.youtube.com/'><img src={youtube} alt="youtube" /></Link>
    <Link to='https://web.whatsapp.com/'><img src={whatsapp} alt="wapps" /></Link></div>
    <p>heins road, chennai - 82<br/> 8189841883</p></div>
    </footer>
    </div>
    );
}