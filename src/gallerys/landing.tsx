import * as React from 'react';
import '../landing-gallery/landing.css'
import IMG1 from '../assets/img/img1.jpeg'
import IMG2 from '../assets/img/img2.jpeg'
import IMG3 from '../assets/img/img3.jpeg'
import { kerdezz_anyamrol } from '../assets/data';
import * as aranykapu2 from "../assets/creative/aranykapu/arany2.jpg"
import * as aranykapu3 from "../assets/creative/kerdezz_anyamrol/arany1.jpg"
import * as aranykapu4 from "../assets/creative/kerdezz_anyamrol/arany.jpg"




function Landing() {

    const file = kerdezz_anyamrol

    // intersection Observer 
    const titleRef = React.useRef(document.getElementById('image-box'))
    const [isVisible, setIsVisible] = React.useState(false)
    const [title, setTitle] = React.useState('Main Title')
    
    const titleChange = (entries: any) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
        setTitle('Chnaged Titel')
    }
    const option = {
        root: titleRef.current,
        rootMargin: '0px',
        threshold: 0.5,
    }
    React.useEffect(() => {
        const observer = new IntersectionObserver(titleChange, option)
        if(titleRef.current) observer.unobserve(titleRef.current)
        return() => {
        if(titleRef.current) observer.unobserve(titleRef.current)
        console.warn(titleRef);

        }
        
    },[titleRef, option])

    
    return (
        <>
           <span className='landing-title'  ref={titleRef} >{title}</span>

            <div id='main-container'>
                <div id='image-box' >
                    {file.images.map((e) => {
                        return (  <img src={e} alt=""/>)
                    })}
                <div className='desc-box'>
                    <span className='desc-box-name'>{kerdezz_anyamrol.titleEng}</span>
                    <span className='desc-box-date'>2022</span>
                </div>
                </div>
                <div className='image-box scale-up'>
                <div className='desc-box'>
                    <span className='desc-box-name'>Name of the series</span>
                    <span className='desc-box-date'>Date</span>
                </div>
                <img  src={aranykapu2.default} />
                </div>
                <div className='image-box double'>
                <img src={aranykapu3.default} />
                <div className='desc-box'>
                    <span className='desc-box-name'>Name of the series</span>
                    <span className='desc-box-date'>Date</span>
                </div>
                <div className='desc-box'>
                    <span className='desc-box-name'>Name of the series</span>
                    <span className='desc-box-date'>Date</span>
                </div>
                {/* <img src={aranykapu4.default} /> */}
               
                </div>

                <div className='image-box'>
                    {file.images.map((e) => {
                        return (  <img src={e} alt=""/>)
                    })}
                <div className='desc-box'>
                    <span className='desc-box-name'>{kerdezz_anyamrol.titleEng}</span>
                    <span className='desc-box-date'>2022</span>
                </div>
                </div>
                <div className='image-box scale-up'>
                <div className='desc-box'>
                    <span className='desc-box-name'>Name of the series</span>
                    <span className='desc-box-date'>Date</span>
                </div>
                <img  src={aranykapu2.default} />
                </div>
                <div className='image-box double'>
                <img src={aranykapu3.default} />
                <div className='desc-box'>
                    <span className='desc-box-name'>Name of the series</span>
                    <span className='desc-box-date'>Date</span>
                </div>
                <div className='desc-box'>
                    <span className='desc-box-name'>Name of the series</span>
                    <span className='desc-box-date'>Date</span>
                </div>
                {/* <img src={aranykapu4.default} /> */}
               
                </div>
            </div>
        </>

    );
}

export default Landing;