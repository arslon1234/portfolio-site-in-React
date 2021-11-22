import './intro.scss'
import man from '../../assets/images/man2.png'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {
       const textRef = useRef()
       useEffect(() => {
              init(textRef.current, 
                     { showCursor: true,
                     backDelay:  1500,   
                     backSpeed:  60,  
                     strings: [ 'Front-End', 'JavaScript', 'Reactjs' ] })
       }, [])
       return (
              <div className='intro' id="home">
                     <div className="left">
                            <div className="ImgContainer">
                                   <img src={man} alt="" />
                            </div>
                     </div>
                     <div className="right">
                            <div className="wrapper">
                                   <h2>Hi There, I'm</h2>
                                   <h1>ArslonBek</h1>
                                   <h3>Developer : <span ref={textRef}></span> </h3>
                            </div>
                            <a href="#portfolio">
                            <i class="fa-solid fa-angle-down"></i>
                            </a>
                     </div>
              </div>
       )
}
