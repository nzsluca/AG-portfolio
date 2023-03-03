import * as React from 'react';
import { Link } from 'react-router-dom';
import '../side-nav/side-nav.css'
import { useState, useRef } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';
import InstaIcon from '../assets/img/insta.png'
import faceIcon from '../assets/img/facebook.png'
import { BehaviorSubject } from 'rxjs';
import { Titles } from '../utilities';
import { Icon } from '@iconify/react';
import { navOpen$ } from '../transition.service';


function SideNav() {

    const [open, setOpen] = useState(false)

    const nodeRef = useRef(null);

    const applied_titles = Titles('innen');

    function openClose(){
        setOpen(!open)
        navOpen$.next(open)
        console.warn(navOpen$);
        
    }

    // Transition values for applied work
    const duration = 900;
    const navarDefaultStyle = {
        transition: `width ${duration}ms cubic-bezier(0.4, 0, 1, 1) 0s, background ${duration}ms cubic-bezier(0.4, 0, 1, 1) 0s`,
        width: '20vw',
    }
    const navbarTransitionStyles: any = {
        entering: { width: '15vw' },
        entered: { width: '6vw', background: '#FFFCFC', color: 'black', borderRight: '1px solid black' },
        exiting: { width: '15vw' },
        exited: { width: '20vw' },
    };

    const otherElementDefault = {
        transition: `opacity  ${duration}ms cubic-bezier(0.4, 0, 1, 1) 0s,`,
        opacity: 1,
    }
    const otherElementTrasnition: any = {
        entering: { opacity: 0.6 },
        entered: { opacity: 0, },
        exiting: { opacity: 0.6 },
        exited: { opacity: 1 },
    }

    const dotsDefault = {
        transition: `display  ${duration}ms cubic-bezier(0.4, 0, 1, 1) 0s,`,
        display: 'none',
    }
    const dotsTrasnition: any = {
        entering: { display: 'none' },
        entered: { display: 'flex', alignItems: 'center' },
        exiting: { display: 'none' },
        exited: { display: 'none'},
    }

    const contactDefault = {
        transition: `transform  1200ms cubic-bezier(0.4, 0, 1, 1) 0s,`,
        transform: 'rotate(0deg)',
    }
    const contactTrasnition: any = {
        entering: { transform: 'rotate(-45deg)' },
        entered: { transform: 'rotate(-90deg)', alignItems: 'center', marginBottom: '20px', fontSize: '14px' },
        exiting: { transform: 'rotate(-25deg)' },
        exited: { transform: 'rotate(0deg)'},
    }


    return (
        <Transition nodeRef={nodeRef} in={open} timeout={300}>
            {state => (
                <>
                    <div id='side-nav-container' ref={nodeRef} style={{
                        ...navarDefaultStyle,
                        ...navbarTransitionStyles[state]
                    }}>

                        <div className='cicrle-box-up'  onClick={() => openClose()}  ref={nodeRef} style={{
                        ...dotsDefault,
                        ...dotsTrasnition[state]
                    }}>
                            <span className='cicrle'></span>
                            <span className='cicrle'></span>
                            <span className='cicrle'></span>
                        </div>
                        <div className="title" ref={nodeRef} style={{
                            ...otherElementDefault,
                            ...otherElementTrasnition[state]
                        }}>
                                                    <span className='close-btn' onClick={() => setOpen(!open)}>{'X'}</span>

                            <Link to={'/'}><h2>Gajewszky Anna</h2></Link>
                        </div>
                        <span className='section-title' style={{textAlign: 'right'}} >
                                    <Link to='/work/allcreative'>Creative  Work </Link> </span>
                        <div className='creative' ref={nodeRef} style={{
                            ...otherElementDefault,
                            ...otherElementTrasnition[state]
                        }}>
                        
                            <div className='cicrle-box'>
                                <span className='cicrle'></span>
                                <span className='cicrle'></span>
                                <span className='cicrle'></span>
                            </div>

                            <div className='work-list'>
                             {applied_titles[1].map((e) => {
                                 return (
                                    <Link to='/work/title'>
                                    {e}
                                </Link>
                                  )})}
                                   
                            </div>

                        </div>
                        <span className='section-title' >
                                    <Link to="/work/allApplied" > Applied Work</Link>
                                </span>
                        <div className="applied" ref={nodeRef} style={{
                            ...otherElementDefault,
                            ...otherElementTrasnition[state]
                        }} >
                            
                            <div className='cicrle-box'>
                                <span className='cicrle'></span>
                                <span className='cicrle'></span>
                                <span className='cicrle'></span>
                            </div>

                            <div className='work-list'>
                            {applied_titles[0].map((e) => {
                                 return (
                                    <Link to='/work/title'>
                                    {e}
                                </Link>
                                  )})}
                            </div>

                        </div>

                     

                        <div className="about" ref={nodeRef} style={{
                            ...otherElementDefault,
                            ...otherElementTrasnition[state]
                        }} >
                            <div className='ab-btn'>
                                <Link to={'/about-me'}> <span>About me</span></Link>
                            </div>
                        </div>
                     

                        <div className="contact">
                            <span className='contact-title'>Contact info</span>
                            <span className="about" ref={nodeRef} style={{
                            ...contactDefault,
                            ...contactTrasnition[state]
                        }} >
                          <span className='email'>gajewszkyanna@gmail.com</span>

                                                </span>
                            <div className='icons'>
                            <a href=" https://www.instagram.com/annagajewszky/?hl=en"><Icon icon="lucide:instagram" /></a>
                            <a href="https://www.behance.net/gajewszkyanna"><Icon className='beha' icon="iconoir:behance-tag" /></a>
                            </div>
                        </div>
                        </div>
                </>
            )}
        </Transition>
    );

}

export default SideNav;