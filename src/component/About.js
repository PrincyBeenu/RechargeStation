import { React } from 'react';
import { Link } from 'react-router-dom'
import logor from './logor.png'
import fb from './fb.png'
import insta from './insta.png'
import x from './x.png'
import youtube from './youtube.png'
import whatsapp from './whatsapp.png'
import logobig from './logobig.png'

export const About = () => {
    return (
    <div className="bg-green-50 w-[100%] h-[1200px]">
        <img class="h-24 w-80" src={logor} alt="recharge station logo"/>

        <div className="absolute right-5 top-5 text-2xl">
            <Link to='/Rec' className="text-lime-500 font-bold ml-10 underline">RECHARGE</Link>
            <Link to='/Rhome' className="text-lime-500 font-bold ml-10 underline">HOME</Link>
            <Link to='/About' className="text-lime-500 font-bold ml-10 underline">ABOUT</Link>
            <Link to='/Contact' className="text-lime-500 font-bold ml-10 underline">CONTACT</Link>
            <Link to='/Login' className="text-lime-500 font-bold ml-10 underline">LOGIN</Link>
        </div>

        <img className="h-80 w-42 absolute left-[36%]" src={logobig} alt="logo" />

        <p className="absolute top-[76%] text-1xl text-indigo-700 font-bold ml-5 mr-5"><span className='text-2xl'>About Us</span><br/><br/>

            At RechargeStation, we're dedicated to simplifying the process of recharging your digital services and utilities. With our user-friendly platform, you can conveniently top up your mobile phones, DTH services, data cards, and more, all in one place.
            
            We understand the importance of staying connected in today's fast-paced world, which is why we strive to provide a seamless and hassle-free experience for our users. Whether you're topping up your prepaid mobile plan or renewing your favorite subscription service, we're here to help you stay connected with ease.
            
            At RechargeStation, we're committed to excellence in customer service and satisfaction. Our team works tirelessly to ensure that your recharge transactions are processed quickly, securely, and reliably, so you can get back to what matters most to you.
            
            Join us at RechargeStation and experience the convenience of recharging your digital life with just a few clicks. Your satisfaction is our top priority, and we look forward to serving you every step of the way.
        </p>


    <p className='absolute top-[130%] ml-10 text-2xl text-indigo-900 underline font-bold'>Service Usage Overview:</p>
    <div className='absolute top-[140%]'>
        <iframe src='https://flo.uri.sh/visualisation/18101342/embed' 
        title='Interactive or visual content' 
        class='flourish-embed-iframe' 
        frameborder='0' scrolling='no' style={{ marginLeft:'55%',  width:'300%', height:'1000px;'}} 
        sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'>
        </iframe>
        <div style={{width:'100%', height:'100px', marginTop:'4px', textAlign:'right'}}>
        <a class='flourish-credit' 
        href='https://public.flourish.studio/visualisation/18101342/?utm_source=embed&utm_campaign=visualisation/18101342' 
        target='_top' style={{textDecoration:'none'}}>
        <img alt='Made with Flourish' 
        src='https://public.flourish.studio/resources/made_with_flourish.svg' 
        style={{width:'90%', height:'50%', border:'none', margin:'0'}} /> 
        </a></div>
    </div>

    <div className='absolute top-[180%] ml-10 text-1xl text-indigo-800 text-wrap font-bold'>
    The "Service Usage Overview" chart reveals the predominant usage of different services within our platform. 
    Mobile services stand out with a substantial usage rate of 96%, showcasing their significant role in meeting 
    our customers' needs. Wi-Fi follows closely behind at 85%, reflecting its importance as a preferred connectivity 
    option. However, DTH services exhibit a comparatively lower usage rate of 31%, indicating a potential area for 
    further exploration or improvement. Understanding these usage percentages empowers us to tailor our offerings 
    and strategies to better serve our customers' preferences and maximize user engagement across all services.
    </div>
   
    <footer className="absolute top-[210%] bg-green-500 h-48 w-full text-indigo-700 font-bold text-center">
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