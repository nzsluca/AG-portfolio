import * as React from 'react';
import '../landing-gallery/landing.css'
import IMG1 from '../assets/img/img1.jpeg'
import IMG2 from '../assets/img/img2.jpeg'
import IMG3 from '../assets/img/img3.jpeg'
import { kerdezz_anyamrol } from '../assets/data';
import * as aranykapu2 from "../assets/creative/aranykapu/arany2.jpg"
import * as aranykapu3 from "../assets/creative/kerdezz_anyamrol/arany1.jpg"
import * as aranykapu4 from "../assets/creative/kerdezz_anyamrol/arany.jpg"


function  WorkPage(valami:{url: string, name: string, text: string}) {

    const file = kerdezz_anyamrol


    return (
        <>
                        <span className='landing-title'>Latest Work</span>

            <div id='main-container'>
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
    )

}

export default WorkPage;


