import * as React from 'react';
import '../scroll/scroll-galery.css'
import IMG1 from 'src/assets/creative/kerdezz_anyamrol/gajewszkyanna_szabadonvalasztott_2021_7.jpg'
import IMG2 from '../assets/img/img2.jpeg'
import IMG3 from '../assets/img/img3.jpeg'
// import { kerdezz_anyamrol } from '../../assets';
import * as aranykapu2 from "../assets/creative/aranykapu/arany2.jpg"
import * as aranykapu3 from "../assets/creative/kerdezz_anyamrol/arany1.jpg"
import * as aranykapu4 from "../assets/creative/kerdezz_anyamrol/arany.jpg"
import { everySeries } from '../../utilities'




function Scroll() {
    
    const choosenSeries = everySeries[0]

    // intersection Observer 
    const titleRef = React.useRef(document.getElementById('image-box'))
    const [isVisible, setIsVisible] = React.useState(false)
    const [title, setTitle] = React.useState( everySeries[0].Title)
    
    const titleChange = (entries: any) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
        setTitle(everySeries[1].Title)
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

    let rand = Math.random()
    
    return (
         <>
           <span className='landing-title'  ref={titleRef} >{title}</span>

                <div id='image-box' >
                    {everySeries[0].image.map((e,i) => {
                        return (< div key={1+rand}> 
                        <img className='image' key={i + rand} src={e} alt=""/>
                        <div className='desc-box'  key={i+rand}>
                        <span className='desc-box-name'>{everySeries[0].year}</span>
                        <span className='desc-box-date'>Lorem ipsum dolor sit.</span>
                    </div></div>  )
                    })}
               
                </div>
           </>
    )
    
       
    

    
}

export default Scroll;