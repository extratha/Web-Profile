import React, { Component } from 'react';
import './App.css';
import js from './img/langlogo/js.png'
import css from './img/langlogo/css.png'
import html from './img/langlogo/html.png'
import csh from './img/langlogo/csharp.png'
import java from './img/langlogo/java.png'

class Skills extends Component {
    render() {
        return (
            <div className='Skills' id='skills'>
                <div className='skills-blockbg'>
                    <div className='sbg bgjs breath'> </div>
                    <div className='sbg bgcss breath'>  </div>
                    <div className='sbg bghtml breath'> </div>
                    <div className='sbg bgcsh breath'>  </div>
                    <div className='sbg bgjava breath'>  </div>
                </div>
                <div className='skills-blockimg'>
                    <div className='sbg'> <img src={js} alt='' className='langlogo'></img>  </div>
                    <div className='sbg'> <img src={css} alt='' className='langlogo'></img> </div>
                    <div className='sbg'> <img src={html} alt='' className='langlogo'></img> </div>
                    <div className='sbg'> <img src={csh} alt='' className='langlogo'></img> </div>
                    <div className='sbg'> <img src={java} alt='' className='langlogo imgjava'></img> </div>
                </div>

                <div className='skills-wrap px-3'>
                    
                    <div className='skills-header sec-header pb-2'>
                        <p> SKILLS </p>
                        <hr className='hr2'></hr>
                    </div>

                    <div className='skills-info'>
                        <div className='sub-skills '>
                            <p className='program_s head_s'> Programming Languages : </p>
                            <p className='program_s list_s '> HTML5, CSS3, Javascript, Java, C# </p>
                        </div>
                        <div className='sub-skills  '>
                            <p className='framework_s head_s'> Framework & library :</p>
                            <p className='framework_s list_s '> Bootstrap, ReactJS, .Net, NodeJS, PostgreSQL,</p>
                        </div>
                        <div className='sub-skills'>
                            <p className='tools_s head_s'> Tools :</p>
                            <p className='tools_s list_s'> VSCode, Visual Studio, Netbeans, Adobe (XD, Photoshop, Illustrator, Premiere Pro),  </p>
                        </div>
                        <div className='sub-skills'>
                            <p className='languages_s head_s'> Languages :  </p>
                            <p className='languages_s list_s'> Thai, English(Beginner)</p>
                        </div>
                        <div className='sub-skills'>
                            <p className='dm_s head_s'> Digital Media & Design : </p>
                            <p className='dm_s list_s'> UX/UI Design, , Digital Painting, Video Editing</p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Skills