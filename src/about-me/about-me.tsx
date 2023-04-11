import React from "react";
import '../about-me/about-me.css'
import IMG3 from '../assets/profil.png'



function AboutMe() {

    const exhipitons = [
        '2022 So what now, Budapest Art Market, Budapest',
        '2021 No Borders, FotoArtFestival, Bielso-Biala',
        '2021 Tövises Úton Segít a Jövendő, MOME diploma exhibition',
        '2021 In the Search for Venus, Fresh Meat, Hybrid Art Gallery',
        '2020 COWORKING, SKURC',
        '2020 Budavári Legendák, Várkert Bazár',
    ]
    const awards = [
        '2021 Blurring the Lines finalist',
        '2020 National Higher Education Scholarship',
        '2019 Breda Photo Festival short list',
    ]


    return (
        <>
            <div id="main-container">
                <div className="big-titles">
                    <h3 className="title"> About me</h3>
                </div>
                <div className="about-me">
                    <div className="img">
                        <img src={IMG3} alt="" />
                    </div>
                    <div className="section-title">
                        <p> About me in detail</p>
                        {/* <span className="circle">- </span> */}
                    </div>
                    <div className="text">
                        <p>Whenever I take a photograph I think about the emotion it causes. I love when art - let it be fine art, music or film - brings
                            strong emotions and thoughts out of my soul and mind. In my work I go really deep into myself and I always know when my
                            photo is not honest. When that happens I know I didn’t let myself to be seen enough which could be because I want to create
                            the perfect image too quickly or maybe because I’m affraid. In both cases I need to step back. The medium format techniques
                            taught me to be patient so whenever I don’t know how what should be my next step I listen to Zbigniew Preisner or I watch
                            Tarkovszkij, Kubrick, David Lynch or read Margaret Atwood. I also really believe in change. My aim is that with each series I
                            make I approach from a different perspective.</p>
                    </div>
                </div>
                <div className="cv">
                    <div className="img">
                        <img src={IMG3} alt="" />
                    </div>
                    <div className="section-title">
                        <p>Circilum Vite</p>
                        {/* <span className="circle"></span> */}
                    </div>
                    <div className="text">
                        <p>Gajewszky Anna was born in Budapest in 1997. She is currently part of the photography master class, in Moholy-Nagy
                            University of Art and Design in Budapest.

                            Her work is mainly a social examination of todays people fears, dreams, realitionships. She is interested in family reali-
                            tionships, the realitionships we can have with our bodies or with animals. Her photos are mostly staged but they stay on

                            the ground of reality. She uses a medium format camera which gives her the opportunity to approach more as an director,
                            but she finds mistakes or unplanned happenings very interesting. She is experimenting with the different photography
                            techniques - such as collages including paintings or videoworks.</p>
                    </div>

                </div>
                <div className="cv">
                    <div className="img">
                        <img src={IMG3} alt="" />
                    </div>
                    <div className="section-title">
                        <p>Education</p>
                        {/* <span className="circle"></span> */}
                    </div>
                    <div className="text">
                        <ul>
                            <li>2018-2021 Moholy-Nagy University of Arts and Design - Photography BA</li>
                            <li>2022- Moholy-Nagy University of Arts and Design - Photography MA</li>
                        </ul>
                    </div>


                </div>
                <div id="project-container">
                    <div className="big-titles">
                        <h3 className="title"> Project List</h3>
                    </div>
                    <div className="about-me">
                        <div className="img">
                            <img src={IMG3} alt="" />
                        </div>
                        <div className="section-title">
                            <p> Exhibitions</p>
                        </div>
                        <div className="text">
                            <ul>
                                {exhipitons.map((e) => {
                                    return (
                                        <li>{e}</li>
                                    )
                                })
                                }
                            </ul>

                        </div>
                    </div>
                    <div className="membership">
                        <div className="img">
                            <img src={IMG3} alt="" />
                        </div>
                        <div className="section-title">
                            <p> Membership</p>
                        </div>
                        <div className="text">
                            <ul>
                            <li>2020 Studio of Young Photographers</li>

                            </ul>
                        </div>
                    </div>
                    <div className="awards">
                        <div className="img">
                            <img src={IMG3} alt="" />
                        </div>
                        <div className="section-title">
                            <p> Awards, Scholarship</p>
                        </div>
                        <div className="text">
                            <ul>
                                {awards.map((e) => {
                                    return (
                                        <li>{e}</li>
                                    )
                                })
                                }
                            </ul>

                        </div>
                    </div>
                    <div className="press">
                        <div className="img">
                            <img src={IMG3} alt="" />
                        </div>
                        <div className="section-title">
                            <p> Press</p>
                        </div>
                        <div className="text">
                            <ul>
                                <li>
                                2022 Blurring the Lines 2021 edition
                                </li>
                                <li>
                                2021 Index Nagykép, Emlékezz a halálra

                                </li>
                            </ul>
                        </div>
                    </div>


                </div>

            </div>
        </>
    );
}

export default AboutMe;