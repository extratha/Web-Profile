import React, { Component } from 'react';
import './style/App.css';
import cov from './img/covv.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

class Profile extends Component {
    render() {
        let aosDuration= 1000
        let aosEasing = 'ease-out-back'
        let aosOffset = '40'
        return (
            <div className="Profile" id='profile' >
                <div className="profile-wrap">
                    <div className="profile-cov-wrap">
                        <div className="profile-info">
                            <div className="intro-reveal " >

                                <div id="introduce" className="line-1" 
                                data-aos="fade-right" 
                                data-aos-easing={aosEasing}
                                data-aos-duration={aosDuration}
                                data-aos-offset={aosOffset}
                                data-aos-delay="0">My name is Thakorn</div>

                                <div id="introduce" className="line-2" 
                                data-aos="fade-right"
                                data-aos-easing={aosEasing}
                                data-aos-duration={aosDuration}
                                data-aos-offset={aosOffset}
                                data-aos-delay='100'>I am a <span className='jobs'>UX/UI</span> designer.</div>

                                <div id="introduce" className="line-3" 
                                data-aos="fade-right"
                                data-aos-easing={aosEasing}
                                data-aos-duration={aosDuration}
                                data-aos-offset={aosOffset}
                                data-aos-delay='200'>Sometime i have to be a <span className='jobs'>developer.</span></div>

                                <div id="introduce" className="line-4" 
                                data-aos="fade-right"
                                data-aos-easing={aosEasing}
                                data-aos-duration={aosDuration}
                                data-aos-offset={aosOffset}
                                data-aos-delay='300'>I am a good listener and willing to learn new things.</div>

                            </div>
                            <img src={cov} alt=" " className="profile-cov" ></img>



                        </div>


                    </div>

                </div>
            </div>
        );
    }
}

export default Profile;