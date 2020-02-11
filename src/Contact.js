import React, { Component } from 'react';
import './App.css';
import mail from './img/contact/mail.svg'
import fb from './img/contact/fb.svg'
import linkedin from './img/contact/linkedin.svg'
import phone from './img/contact/phone.svg'


class Contact extends Component {
    render() {
        return (
            <div className='Contact' id='contact'>
                <div className='contact-wrap '>
                    <div className='contact-header sec-header'>
                        <p> CONTACT </p>
                        <hr className='hr2'></hr>
                    </div>
                    <div className='contact-info d-flex'>
                        
                        <div className='ct-block fb' >
                            <a className='ct-link' href='https://www.facebook.com/thakorn.ex'>
                                <img src={fb} alt='' className='cticon'></img>
                                <p className='ct-text '> Thakorn Thongrak </p>
                            </a>
                        </div>

                        <div className='ct-block linkedin'>
                            <a className='ct-link' href='https://www.linkedin.com/in/thakorn-thongrak-4a90b318b/?originalSubdomain=th'>
                                <img src={linkedin} alt='' className='cticon'></img>
                                <p className='ct-text '> Thakorn Thongrak </p>
                            </a>
                        </div>
                        
                        <div className='ct-block mail'>
                            <img src={mail} alt='' className='cticon'></img>
                            <p className='ct-text '> thakorntongrak@gmail.com </p>
                        </div>

                        <div className='ct-block phone'>
                            <img src={phone} alt='' className='cticon'></img>
                            <p className='ct-text '> (+66) 93-765-6698 </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact