import { NavLink } from 'react-router-dom'
import Footer from '../components/Home/Footer'
import '../components/Links/styles.css'

const Links = () => {
    return (
        <>
            <div className="container my__links">
                <div className='row'>
                    <div className='container p-0 m-0 col-md-12'>
                        <img src="https://github.com/TotoroDavid/TotoroDavid.github.io/blob/main/IMG_1551-modified.png?raw=true" alt="" />
                    </div>
                    <div className='container col-md-12'>
                        <h1>Hello there!</h1>
                    </div>
                    <div className='container col-md-12'>
                        <ul><li>
                            <NavLink to='/home'>Visit My Website</NavLink>
                        </li></ul>
                    </div>
                    <div className='container col-md-12'>
                        <ul><li>
                            <a target='_blank' rel='noreferrer' href="https://cv-resume-davidtoro.netlify.app/">Read My Cv/Resume</a>
                        </li></ul>
                    </div>
                    <div className='container col-md-12'>
                        <ul><li>
                            <NavLink to='/work'>my Dev. Portfolio</NavLink>
                        </li></ul>
                    </div>
                    <div className='container col-md-12'>
                        <ul><li>
                            <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/davidtoro90/">See my linkedin </a>
                        </li></ul>
                    </div>
                    <div className='container col-md-12'>
                        <ul><li>
                            <a target='_blank' rel='noreferrer' href="https://github.com/TotoroDavid">Visit My GitHub</a>
                        </li></ul>
                    </div>
                    <div className='container col-md-12'>
                        <ul><li>
                            <a target='_blank' rel='noreferrer' href="https://www.instagram.com/totorodavid/">Visit My Instagram</a>
                        </li></ul>
                    </div>
                    <div className='container col-md-12'>
                        <ul><li>
                            <a target='_blank' rel='noreferrer' href="https://twitter.com/davidandrestoro">Visit My Twitter</a>
                        </li></ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Links
