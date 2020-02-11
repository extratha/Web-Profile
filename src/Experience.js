import React, { Component } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

class Experience extends Component{
    render(){
        const exList='ex-list'
        return(
            <div className='Experience' id='experience'> 
                <div className='ex-wrap px-3'>
                    <div className='ex-header sec-header pb-4'>
                        <p> EXPERIENCE </p>
                    </div>
                    
                    <div className='ex-info '>
                        <div className='ex-info-block1 '>
                            <div className='verLine' ></div>
                            <div className='ex-text ' data-aos='fade-right' data-aos-easing='ease-out-back' data-aos-duration='1000' data-aos-delay='200'>
                                <div className={exList}> Teaching assistant (Prince of Songkla University)</div>
                                <div className={exList}> Web developer (Freelance) </div>
                            </div>
                        </div>
                        <div className='ex-info-block2 '>
                            <div className='verLine right'></div>
                            <div className='ex-text tr ml-auto' data-aos='fade-left'data-aos-easing='ease-out-back' data-aos-duration='1000' data-aos-delay='200'>
                                <div className={exList}> Software Developer (C#.Net) </div>
                                <div className={exList}> UX/UI Designer (Creative Network Technology) </div>
                            </div>
                        </div>
                    </div>
                        
                    
                </div>
            </div>
        )
    }

}

export default Experience;