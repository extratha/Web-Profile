import React, { Component } from 'react';
import './style/App.css';
import ts from './img/langlogo/ts.png'
import js from './img/langlogo/js.png'
import css from './img/langlogo/css.png'
import html from './img/langlogo/html.png'
import csh from './img/langlogo/csharp.png'
import vue from './img/langlogo/vue.png' 

class Skills extends Component {
    render() {
        return (
            <div className='Skills' id='skills'>
                <div className='skills-blockbg'>
                    <div className='sbg bgjs breath'> </div>
                    <div className='sbg bgts breath'>  </div>
                    <div className='sbg bgcss breath'>  </div>
                    <div className='sbg bghtml breath'> </div>
                    <div className='sbg bgvue breath'>  </div>
                </div>
                <div className='skills-blockimg'>
                    <div className='sbg'> <img src={js} alt='' className='langlogo'></img>  </div>
                    <div className='sbg'> <img src={ts} alt='' className='langlogo'></img>  </div>
                    <div className='sbg'> <img src={css} alt='' className='langlogo'></img> </div>
                    <div className='sbg'> <img src={html} alt='' className='langlogo'></img> </div>
                    <div className='sbg'> <img src={vue} alt='' className='langlogo vue'></img> </div>
                </div>

                <div className='skills-wrap px-3'>
                    
                    <div className='skills-header sec-header pb-2'>
                        <p> SKILLS </p>
                        <hr className='hr2'></hr>
                    </div>

                    <div className='skills-info'>
                        <div className='sub-skills '>
                            <p className='program_s head_s'> Programming Languages : </p>
                            <p className='program_s list_s '> HTML5, SCSS, Javascript, TypeScript</p>
                        </div>
                        <div className='sub-skills  '>
                            <p className='framework_s head_s'> Framework & library :</p>
                            <p className='framework_s list_s '> Vue2-3 js-ts, Bootstrap, ReactJS, NextJS, NodeJS, Jest, </p>
                        </div>
                        <div className='sub-skills'>
                            <p className='tools_s head_s'> Tools :</p>
                            <p className='tools_s list_s'> VSCode, AWS(Code Commit, S3, Cloud Watch), DBeaver, Adobe,  </p>
                        </div>
                        <div className='sub-skills'>
                            <p className='languages_s head_s'> Languages :  </p>
                            <p className='languages_s list_s'> Thai (Native), English (Beginner)</p>
                        </div>
                        <div className='sub-skills'>
                            <p className='dm_s head_s'> Version Controls : </p>
                            <p className='dm_s list_s'> Git CLI , GitLab , GitHub</p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Skills