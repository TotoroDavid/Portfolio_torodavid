/**
 * presentation section
 */

import SkillsDescription from "./SkillsDescription"

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
            <div className='container_main_skills '>
                <div className=''>
                    <div class="container__skills ">
                        <h1 class='skills__title'>SKILLS</h1>
                    </div>
                </div>
                <div>
                    <SkillsDescription />
                </div>
            </div>
        </>
    )
}

export default Presentation
