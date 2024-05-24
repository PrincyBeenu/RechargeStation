import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logor from './logor.png'
import fb from './fb.png'
import insta from './insta.png'
import x from './x.png'
import youtube from './youtube.png'
import whatsapp from './whatsapp.png'
import bg11 from './bg11.jpg'

export const Signup = () => {

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
                formId: '05067ee2-d30e-4202-b7d7-ac846c410a19',
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
              formId: '05067ee2-d30e-4202-b7d7-ac846c410a19',
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
    <div className="bg-green-50 w-[100%] h-[980px]">
        <img class="h-24 w-80" src={logor} alt="recharge station logo"/>

        <div className="absolute right-5 top-5 text-2xl">
            <Link to='/Rec' className="text-lime-500 font-bold ml-10 underline">RECHARGE</Link>
            <Link to='/Rhome' className="text-lime-500 font-bold ml-10 underline">HOME</Link>
            <Link to='/About' className="text-lime-500 font-bold ml-10 underline">ABOUT</Link>
            <Link to='/Contact' className="text-lime-500 font-bold ml-10 underline">CONTACT</Link>
            <Link to='/Login' className="text-lime-500 font-bold ml-10 underline">LOGIN</Link>
        </div>

    <img className='absolute top-[20%] h-[860px] w-full' src={bg11} alt="img" />
    <div className='absolute top-[24%] left-[45%] text-indigo-900 font-extrabold text-4xl'>SIGN UP</div>
    <Link to='/Login' className='absolute top-[32%] left-[37%] underline text-indigo-900 font-bold'>already have an account ? click here to login</Link>


    <div id="hubspotForm" className='absolute top-[20%] left-[27%] h-fit w-96 mt-24 mb-24 ml-24 mr-24 
        p-8 rounded-lg shadow-lg'>
    </div>

    {/* <form className='absolute top-[15%] left-[30%] h-fit w-96 mt-24 mb-24 ml-24 mr-24 p-8 rounded-lg shadow-lg' onSubmit={handleSubmit}>
    <label className='font-extrabold'>Username</label>
    <input className='w-11/12 py-2 px-3 border-transparent rounded box-border' type="text" id="uname" name="uname" placeholder='username' values = {signupDetails.uname} onChange = {handleChange} />
    <p className='text-red-500 font-bold'>{formErrors.uname}</p>
    <br/>
  
    <label className='font-extrabold'>Create password</label>
    <input className=' w-11/12 py-2 px-3 border-transparent rounded box-border' type="password" id="pword" name="pword" placeholder='create password' values = {signupDetails.pword} onChange = {handleChange} />
    <p className='text-red-500 font-bold'>{formErrors.pword}</p>
    <br/>

    <label className='font-extrabold'>Confirm password</label>
    <input className='w-11/12 py-2 px-3 border-transparent rounded box-border' type="password" id="conpword" name="conpword" placeholder='confirm password' values = {signupDetails.conpword} onChange = {handleChange} />
    <p className='text-red-500 font-bold'>{formErrors.conpword}</p>
    <br/>

    <label className='font-extrabold'>Mobile number</label>
    <input className='w-11/12 py-2 px-3 border-transparent rounded box-border' type="password" id="num" name="number" placeholder='phone number' values = {signupDetails.number} onChange = {handleChange} />
    <p className='text-red-500 font-bold'>{formErrors.number}</p>
    <br/>

    <label className='font-extrabold'>Email id</label>
    <input className=' w-11/12 py-2 px-3 border-transparent rounded box-border' type="text" id="mailid" name="mailid" placeholder='Eg: example@gmail.com' values = {signupDetails.mailid} onChange = {handleChange} />
    <p className='text-red-500 font-bold'>{formErrors.mailid}</p>
    <br/>
    
    <input className='font-extrabold w-11/12 bg-indigo-900 text-white text-1xl font-bold p-3 rounded ' type="submit" value="create account" /> 
    <br/><br/>
    <Link to='/Login' className='absolute left-[7%] text-indigo-900 font-bold'>already have an account ? click here to login</Link>
    </form> */}


    <footer className="absolute top-[178%] bg-green-500 h-48 w-full text-indigo-700 font-bold text-center">
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

// changes 24 May 2024