import * as React from 'react';
import '../landing-gallery/landing.css'
import IMG1 from '../assets/img/img1.jpeg'
import IMG2 from '../assets/img/img2.jpeg'
import IMG3 from '../assets/img/img3.jpeg'
import { kerdezz_anyamrol } from '../assets/data';
import * as aranykapu2 from "../assets/creative/aranykapu/arany2.jpg"
import * as aranykapu3 from "../assets/creative/kerdezz_anyamrol/arany1.jpg"
import * as aranykapu4 from "../assets/creative/kerdezz_anyamrol/arany.jpg"
import Scroll from '../gallerys/scroll/scroll-galery';
import { getAlbumss } from '../services/gallery-service';
import { data$ } from '../services/gallery-service';




function Landing() {

    interface imgurGalleryPic {
        id: string,
        description: string,
        images: string[],
        images_count: number, 
        title: string,

    }
    const file = kerdezz_anyamrol

    // intersection Observer 
    const imgBoxRef = React.useRef(null)
    const [isVisible, setIsVisible] = React.useState(false)


    const [title, setTitle] = React.useState('Main Title')
    const [fullView, setFullView] = React.useState(false)
    const [imgFram, setImgFrame] = React.useState(false)

    // let innerWidth = window.innerWidth 
    getAlbumss()
    let  datafromImgur: imgurGalleryPic
    
    // data$.subscribe((e) => {
    //         datafromImgur.description = e.data;
    //         datafromImgur.id = e.data.id;
    //         datafromImgur.images = e.data.images;
    //         datafromImgur.images_count = e.data.images_count; 
    //         datafromImgur.title = e.data.title
    //         return datafromImgur
    // })

    const titleChange = (entries: any) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
        setTitle('Latest Works')
    }


    let galleyContainer = document.getElementById('gallery-container')

    const option = {
        root: galleyContainer,
        rootMargin: '30px',
        threshold: 1,
    }
    React.useEffect(() => {
        const observer = new IntersectionObserver(titleChange, option)
        if (imgBoxRef.current) observer.observe(imgBoxRef.current)  
        return () => {
            if (imgBoxRef.current) observer.unobserve(imgBoxRef.current)
        }

    }, [imgBoxRef, option])

    // function createFrames(e: any, key: number) {
    //     setImgFrame(!imgFram)
    //     return (
    //         <div key={key} className={imgFram ? 'long-frame' : 'wide-frame'}>
    //             <img onClick={() => setFullView(!fullView)} className={fullView ? 'image s2' : 'image'} src={e} alt="" />
    //         </div>
    //     )

    // }



    return (
        <>
            <span className='page-title'>{title}</span>
            <div id='gallery-container'>

                {file.images.map((data, i) => {
        return  (
            <div key={i} className={'long-frame'} >
                <img ref={imgBoxRef} onChange={() => setTitle('New Title')}  onClick={() => setFullView(!fullView)} className={fullView ? 'image s2' : 'image'} src={data} alt="" />
            </div>
        )
         })}
                <div className='description-box'>
                    <h2>Title</h2>
                    <span>Year</span>
                    <a href="/glarrey">Go to Album</a>
                </div>

            </div>


        </>

    );
}

export default Landing;