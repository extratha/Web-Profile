import React, { Component } from 'react';
import './App.css';
import cerE from './img/cerE.jpg';

class Education extends Component {
    render() {
        return(
            <div className='Education' id='education'>
                <div className='edu-wrap px-3'>
                    <div className='edu-info'>
                        <div className='edu-header sec-header'>
                            <p>
                                EDUCATION
                            </p>
                        </div>
                        <hr className='hr2'></hr>
                        <div className='bachelor'>
                            <p>Prince of Songkla University (2016-2018)</p>
                            <p>Bachelor of Technology (Information Technology)</p>
                            <p> (Second class hornors) </p>
                        </div>
                    </div>
                    
                    <div className='edu-cer'>
                        <img src={cerE} alt=" " className='cerE'></img>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Education;