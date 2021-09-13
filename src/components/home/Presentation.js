import React from 'react'

const Presentation = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className="jumbo">
                    <p className="jumbo-text">Hey there, I'm a
                        <span class="jumbo-highlight js-about-text">
                            Front/Back-end Developer &amp; more
                        </span>
                    </p>
                </div>
            </div>
            <div className='container '>
                <div className='row'>
                    <div className='col-12 col-sm-6 container_img'>
                        <div class="person ">
                            <div class="container_">
                                <div class="container-inner">
                                    <img
                                        className="circle"
                                        src='https://github.com/TotoroDavid/TotoroDavid.github.io/blob/main/69094048-modified.png?raw=true'
                                        alt=''
                                    />
                                </div>
                            </div>
                            <div class="divider"></div>
                            <div class="name">DavidToro</div>
                            <div class="title">web.Developer</div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 container_introduction'>
                        <p>
                            Hello World! I’m David. Nice to meet you. I am a web developer in constant learning.
                            This is my personal website, where I keep track of my progress and share my practice projects.
                        </p>
                    </div>
                </div>
            </div>
            <div className='container '>
                <div className='cont_title'>
                    <div class="container__skills ">
                        <h1 class='skills__title'>SKILLS</h1>
                    </div>
                </div>
                <div className='skills_introduction'>
                    <li>
                        Front-end development using HTML5, CSS3, Vanilla JS, React, Redux.
                    </li>
                    <br />
                    <li>Backend development using Node, Express.</li>
                    <br />
                    <li>
                        Architectural design for Relational Database Management Systems as well as for NoSQL database systems like MongoDB.
                    </li>
                    <br />
                    <li> Robust full-stack system design implementation.</li>
                </div>
            </div>
        </>
    )
}

export default Presentation
