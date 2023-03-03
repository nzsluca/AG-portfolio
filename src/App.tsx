import React, { useEffect, useRef }  from 'react';
import logo from './logo.svg';
import './App.css';
import SideNav from './side-nav/side-nav';
import Landing from './landing-gallery/landing';
import { Route, Routes } from 'react-router-dom';
import WorkPage from './work-page/work';
import { useState } from 'react';
import AboutMe from './about-me/about-me';
import { navOpen$ } from './transition.service';
import Transition from 'react-transition-group/Transition';

function App() {
  useEffect(()=>{
    // if(nodeRef.current){
    //   isOpen.subscribe((e) => {
    //     setNavOpen(e)
    //   })
    console.warn(navOpen$);
  
  })

const [isNavOpen, setNavOpen] = useState(false)
 function handleClick(num: boolean){
  setNavOpen(num);
};



const nodeRef = useRef(null);

const navarDefaultStyle = {
  transition: `width 300ms cubic-bezier(0.4, 0, 1, 1) 0s, background 300ms cubic-bezier(0.4, 0, 1, 1) 0s`,
  width: '20vw',
}
const navbarTransitionStyles: any = {
  entering: { width: '15vw' },
  entered: { width: '6vw',},
  exiting: { width: '15vw' },
  exited: { width: '20vw' },
};

const mainDefaultStyle = {
  transition: `width 300ms cubic-bezier(0.4, 0, 1, 1) 0s, background 300ms cubic-bezier(0.4, 0, 1, 1) 0s`,
  width: '20vw',
}
const mainTransitionStyles: any = {
  entering: { flex: '1' },
  entered: { flex: '1.2',},
  exiting: { flex: '1' },
  exited: { flex: '1' },
};


  return (
    <Transition nodeRef={nodeRef} in={isNavOpen} timeout={300}>
       {state => (
         <>
         <div id="App">
<div className='side-nav' ref={nodeRef} style={{
                        ...navarDefaultStyle,
                        ...navbarTransitionStyles[state]
                    }}>
<SideNav></SideNav>
</div>

      <div className='main' ref={nodeRef} style={{
                        ...mainDefaultStyle,
                        ...mainTransitionStyles[state]
                    }}>
      <Routes>
       <Route path='/' element={ <Landing/>}></Route>
       <Route path='/work/:id' element={<WorkPage url='www.sd.com' name='{altozo valami}' text='bal blavla' />}></Route>
       <Route path='/about-me' element={<AboutMe/>}></Route>
       </Routes>
      </div>
   
    </div>
         </>
    
 )}
    </Transition>
  );

}

export default App;



