import React from 'react'
import Footer from '../Home/Footer'
import './styles.css'

const AboutMe = () => {
    return (
        <div>
            <div>
                <div className='col-md-12 about_cont'>
                    <p>About</p>
                </div>
                <div className='col-md-12'>
                    <div className='container photo'>
                        <h2>TotoroDavid</h2>
                        <img src="https://github.com/TotoroDavid/TotoroDavid.github.io/blob/main/img/0E85E80B-91EC-4B03-8834-7E6D7CDB650A000.jpg?raw=true" alt="" />
                    </div>
                </div>
                <div>
                    <h1 className="container p-1 about_me_title">Me,<br />Myself<br /> & I.</h1>
                    <p className='container first_content'>
                        A curiosity-driven full-stack Developer with The MERN architecture chops. I'm passionate about bringing the technical aspects to build in-depth full stack applications to life. User experience, It covers the entire development cycle, from front-end (client-side) to backend (server-side)., human code matters to me. I sweat the details. And as a follower of John Maeda’s Laws Of Simplicity, I agree that less is more.
                    </p>
                    <h5 className="container p-3">
                        My place in the world seems to be at the intersection of creativity and logic. All projects are a problem to be solved, whether it's to do with design or code — only the tools change. My process is iterative; I approach each problem as a learning experience that informs the rest of the project. Technology leads, society follows. The move towards increasing inclusivity and diversity in the industry through representation is of importance to me.
                    </h5>
                    <br />
                    <br />
                    <h5 className="container p-3">
                        I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself and do interesting things that matter. My abundant energy fuels me in the pursuit of many interests, hobbies, areas of study, and artistic endeavors. I’m a fast learner, able to pick up new skills and juggle different projects and roles with relative ease.
                    </h5>
                    <br /><br />
                    <p className='container social_cont'>
                        You can read more about my biography, experience, skills, education, and much more in the next Link below:
                    </p>
                    <div className='container cont_social'>
                        <a
                            href='https://cv-resume-davidtoro.netlify.app/'
                            target='_blank'
                            className='' rel="noreferrer"
                        >Cv/Resume</a>
                        <a
                            href='https://www.linkedin.com/in/davidtoro90/'
                            target='_blank'
                            className='' rel="noreferrer"
                        >LinkedIn</a>
                        <a
                            href='https://github.com/TotoroDavid'
                            target='_blank'
                            className='' rel="noreferrer"
                        >Github</a>
                        <a
                            href='https://codepen.io/totorodavid'
                            target='_blank'
                            className='' rel="noreferrer"
                        >Codepen</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutMe
