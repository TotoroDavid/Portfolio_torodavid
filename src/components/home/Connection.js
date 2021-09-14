import { NavLink } from 'react-router-dom'

const Connection = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-sm-12 cont_works'>
                    <h2>WORK</h2>
                    <div>
                        <p>
                            a small portfolio of my recent projects by me. I have done them all together in the last year of my life. It is only a drop in the ocean compared to the entire list of my projects I have done.
                        </p>
                    </div>
                    <div className='cont_button'>
                        <div>
                            <NavLink to="/work" className='container__home'>My Portfolio !</NavLink>
                        </div>
                        <a
                            href='https://github.com/TotoroDavid'
                            target='_blank'
                            className='container__home' rel="noreferrer">
                            GitHub
                        </a>
                    </div>
                </div>
                <div className='col-md-6 col-sm-12 cont_ME'>
                    <h2>ME</h2>
                    <p>
                        I am always experimenting, always learning, and never bored.
                        You can read more about me and my skills,
                        education and much more in the link below
                    </p>
                    <div className='cont_button'>
                        <div>
                            <NavLink to="/about" className='container__home'>About Me.</NavLink>
                        </div>
                        <a
                            href='https://cv-resume-davidtoro.netlify.app/'
                            target='_blank'
                            className='container__home' rel="noreferrer">
                            My CV/Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Connection
