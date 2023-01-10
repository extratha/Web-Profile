import React, { Component } from 'react';
import './style/App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import icon1 from './img/port/icon1.png'
import icon2 from './img/port/icon2.png'
import icon3 from './img/port/icon4.png'
import icon4 from './img/port/icon5.png'
import mui1 from './img/port/mui6.png'
import mui2 from './img/port/mui7.png'
import mui3 from './img/port/mui8.png'
import mui4 from './img/port/mui9.png'
import mui5 from './img/port/mui10.png'
import mui6 from './img/port/mui11.png'
import mui7 from './img/port/mui13.png'
import mui8 from './img/port/mui14.png'
import mui9 from './img/port/mui15.png'
import mui10 from './img/port/mui18.png'
import mui11 from './img/port/mui20.png'
import mui12 from './img/port/mui21.png'
import mui13 from './img/port/mui22.png'
import mui14 from './img/port/mui23.png'
import mui15 from './img/port/mui24.png'
import mui16 from './img/port/mui25.png'
import mui17 from './img/port/mui26.png'
import mui18 from './img/port/mui27.png'
import mui19 from './img/port/mui28.png'
import mui20 from './img/port/mui29.png'
import dui1 from './img/port/dui1.png'

import web1 from './img/port/web1.png'
import web2 from './img/port/web2.png'
import web3 from './img/port/web3.png'
import web4 from './img/port/web4.png'

AOS.init()

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnExpandtxt: 'Expand My Work',
            isDisabledExpandBtn: false
        }
        this.expandPort = this.expandPort.bind(this);
    }

    expandPort() {
        this.state.isDisabledExpandBtn = true
        if (this.state.btnExpandtxt === 'Expand My Work') {
            this.setState({ btnExpandtxt: 'Hide' })
        }
        else {
            this.setState({ btnExpandtxt: 'Expand My Work' })
        }
        this.state.isDisabledExpandBtn = false

    }
    render() {
        const exList = 'ex-list'
        return (
            <div className='Experience' id='experience'>
                <div className='ex-wrap pt-3'>
                    <div className='ex-header sec-header pb-4'>
                        <p> EXPERIENCE </p>
                    </div>

                    <div className='ex-info '>
                        <div className='ex-info-block1 '>
                            <div className='verLine' ></div>
                            <div className='ex-text pt-0 pt-sm-3 ' data-aos='fade-right' data-aos-easing='ease-out-back' data-aos-duration='1000' data-aos-delay='200'>
                                <div className={exList} className="pt-0 pt-sm-4"> Teaching assistant (Prince of Songkla University)</div>
                                <div className={exList}> Web developer (Freelance) </div>
                                <div className={exList}> Software Developer (C#.Net) </div>
                            </div>
                        </div>
                        <div className='ex-info-block2 '>
                            <div className='verLine right'></div>
                            <div className='ex-text tr ml-auto' data-aos='fade-left' data-aos-easing='ease-out-back' data-aos-duration='1000' data-aos-delay='200'>
                                <div className={exList}> UX/UI Designer (Creative Network Technology) </div>
                                <div className={exList}> Frontend Developer (EdVISORY Co., Ltd.) </div>
                                <div className={exList}> Frontend Developer (Thai Credit Retail Bank) </div>
                            </div>
                        </div>
                    </div>

                    <div className='ex-port'>
                        <div className='ex-header sec-header pt-5 pb-3'>
                            <p> MY DESIGN WORK </p>
                        </div>
                        <button id='btnExpandPort' className="btn btn-custom" type="button" data-toggle="collapse"
                            data-target="#collapsePort" aria-expanded="false" aria-controls="collapsePort"
                            disabled={this.state.isDisabledExpandBtn}
                            onClick={this.expandPort}>
                            {this.state.btnExpandtxt}
                        </button>

                        <div className='port-row row justify-content-md-center pt-4 collapse' id='collapsePort'>
                            <div className='port-item col-6 col-md-4 '>
                                <img className='img-port ' src={mui1} alt=''></img>
                            </div>
                            <div className='port-item col-6 col-md-4 '>
                                <img className='img-port ' src={mui2} alt=''></img>
                            </div>
                            <div className='port-item col-6 col-md-4 '>
                                <img className='img-port ' src={mui3} alt=''></img>
                            </div>
                            <div className='port-item col-6 col-md-4 '>
                                <img className='img-port ' src={mui4} alt=''></img>
                            </div>
                            <div className='port-item col-6 col-md-4 '>
                                <img className='img-port ' src={mui5} alt=''></img>
                            </div>
                            <div className='port-item col-6 col-md-4 '>
                                <img className='img-port ' src={mui6} alt=''></img>
                            </div>
                            <div className='port-item col-6 col-md-4 '>
                                <img className='img-port ' src={mui7} alt=''></img>
                            </div>
                            <div className='port-item col-6 col-md-4 '>
                                <img className='img-port ' src={mui8} alt=''></img>
                            </div>
                            <div className='port-item col-6 col-md-4 '>
                                <img className='img-port ' src={mui9} alt=''></img>
                            </div>
                            <div className='port-item col-6 col-md-4 '>
                                <img className='img-port ' src={mui10} alt=''></img>
                            </div>
                            <div className='port-item col-6 col-md-4 '>
                                <img className='img-port ' src={mui11} alt=''></img>
                            </div>
                            <div className='port-item col-6 col-md-4 '>
                                <img className='img-port ' src={mui12} alt=''></img>
                            </div>
                            <div className='port-item col-6 col-md-4 '>
                                <img className='img-port ' src={mui13} alt=''></img>
                            </div>
                            <div className='port-item col-6 col-md-4 '>
                                <img className='img-port ' src={mui14} alt=''></img>
                            </div>
                            <div className='port-item col-6 col-md-4 '>
                                <img className='img-port ' src={mui15} alt=''></img>
                            </div>
                            <div className='port-item col-6 col-md-4 '>
                                <img className='img-port ' src={mui16} alt=''></img>
                            </div>
                            <div className='port-item col-6 col-md-4 '>
                                <img className='img-port ' src={mui17} alt=''></img>
                            </div>
                            <div className='port-item col-6 col-md-4 '>
                                <img className='img-port ' src={mui18} alt=''></img>
                            </div>
                            <div className='port-item col-6 col-md-4 '>
                                <img className='img-port ' src={mui19} alt=''></img>
                            </div>
                            <div className='port-item col-6 col-md-4 '>
                                <img className='img-port ' src={mui20} alt=''></img>
                            </div>
                            <div className='port-item col-6 col-md-4 '>
                                <img className='img-port ' src={icon1} alt=''></img>
                            </div>
                            <div className='port-item col-6 col-md-4 '>
                                <img className='img-port ' src={icon2} alt=''></img>
                            </div>
                            <div className='port-item col-6 col-md-4 '>
                                <img className='img-port ' src={icon3} alt=''></img>
                            </div>
                            <div className='port-item col-6 col-md-4 '>
                                <img className='img-port ' src={icon4} alt=''></img>
                            </div>
                            <div className='inline-block'>
                                <div className='webui-link'>
                                    <a className='webui-url' href='http://tpso12.m-society.go.th/th/images/HealingWeb/Website/healing.html' target="_blank" rel="noreferrer">
                                        <img className='img-webui img-port' src={dui1} alt='' ></img>
                                        <div className='text'> <p> Visit Website </p> </div>
                                        <div className='webui-link-overlay'></div>
                                    </a>
                                </div>
                                <div className='pt-5'>
                                    <button id='btnExpandPort' className="btn btn-custom" type="button" data-toggle="collapse"
                                        data-target="#collapsePort" aria-expanded="false" aria-controls="collapsePort"
                                        onClick={this.expandPort}>
                                        {this.state.btnExpandtxt}
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className='ex-header sec-header ' style={{ marginTop: '5rem' }}>
                            <p> PORTFOLIO </p>
                        </div>
                        <div className="d-flex flex-wrap" >
                            <div className="py-5 col-6 col-md-3 justify-content-center"  >
                                <div className="port-item-circle " onClick={() => { window.open('https://wespace.in.th/') }} >
                                    <img src={web1} className="port-item-image" style={{ margin: '4px 0 0 0', left: '-4px' , top: '8px' }} />
                                </div>
                            </div>
                            <div className="py-5 col-6 col-md-3" >
                                <div className="port-item-circle" onClick={() => { window.open('https://wespace-cudson-qc.edvisory.co.th/#/') }}>
                                    <img src={web2} className="port-item-image" style={{ top: '12px', left: '-1px' , width: '80px'}} />
                                </div>
                            </div>
                            <div className="py-5 col-6 col-md-3" >
                                <div className="port-item-circle" style={{backgroundColor: '#f80000'}} onClick={() => { window.open('https://www.intelligence-one.com/#/') }}>
                                    <img src={web3} className="port-item-image" style={{  top: '12px' }} />
                                </div>
                            </div>
                            <div className="py-5 col-6 col-md-3">
                                <div className="port-item-circle" style={{backgroundColor: 'white'}} onClick={() => { window.open('https://eng-kpi-qc.edvisory.co.th/') }}>
                                    <img src={web4} className="port-item-image" style={{ width: '100px', height: '70px', top: '13px', left: '-4px'}} />
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div >
        )
    }

}

export default Experience;