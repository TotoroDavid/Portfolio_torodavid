import './styles.css'

const Projects = () => {
    return (
        <>
            <div className='container'>
                <h1 className='text-center'>Portfolio</h1>
            </div>
            <div className='row' style={{ background: '#16161a' }}>
                <div className="col-md-4 text-center cont_projects">
                    <div className='card m-1' style={{ background: '#fef6e4' }}>
                        <div className='overflow'>
                            <img src='https://github.com/TotoroDavid/simple-social-media-MERN-application/blob/master/client/src/images/Screen%20Shot%202021-09-11%20at%209.37.56%20am.png?raw=true' alt="" className='card-img-top' />
                        </div>
                        <div className='card-body text-dark cont_desc'>
                            <h3>Simple Social Media MERN</h3>
                            <p style={{ color: '#FF6F61' }}>#Mongo #Express #React #NodeJs #Redux</p>
                            <p style={{ color: '#172c66' }}>
                                About Full Stack MERN Application The App is called "Dave'sBook" it is a simple social media app that allows users to post interesting events, Login with Email (JWT) + Google OAuth Authentication
                            </p>
                            <a href='https://davesbook.netlify.app' className='card btn btn-light m-1' style={{ background: '#f582ae' }}>Live</a>
                            <a
                                href='https://github.com/TotoroDavid/simple-social-media-MERN-application'
                                className='card btn btn-light m-1'
                                style={{ background: '#f582ae' }}
                            >GitHub code</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center cont_projects">
                    <div className='card m-1' style={{ background: '#fef6e4' }}>
                        <div className='overflow'>
                            <img src='https://github.com/TotoroDavid/simple-social-media-MERN-application/blob/master/client/src/images/Screen%20Shot%202021-09-11%20at%209.37.56%20am.png?raw=true' alt="" className='card-img-top' />
                        </div>
                        <div className='card-body text-dark cont_desc'>
                            <h3>Simple Social Media MERN</h3>
                            <p style={{ color: '#ffc0ad' }}>#Mongo #Express #React #NodeJs #Redux</p>
                            <p style={{ color: '#172c66' }}>
                                About Full Stack MERN Application The App is called "Dave'sBook" it is a simple social media app that allows users to post interesting events, Login with Email (JWT) + Google OAuth Authentication
                            </p>
                            <a href='https://davesbook.netlify.app' className='card btn btn-light m-1' style={{ background: '#f582ae' }}>Live</a>
                            <a
                                href='https://github.com/TotoroDavid/simple-social-media-MERN-application'
                                className='card btn btn-light m-1'
                                style={{ background: '#f582ae' }}
                            >GitHub code</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center cont_projects">
                    <div className='card m-1' style={{ background: '#fef6e4' }}>
                        <div className='overflow'>
                            <img src='https://github.com/TotoroDavid/simple-social-media-MERN-application/blob/master/client/src/images/Screen%20Shot%202021-09-11%20at%209.37.56%20am.png?raw=true' alt="" className='card-img-top' />
                        </div>
                        <div className='card-body text-dark cont_desc'>
                            <h3>Simple Social Media MERN</h3>
                            <p style={{ color: '#ffc0ad' }}>#Mongo #Express #React #NodeJs #Redux</p>
                            <p style={{ color: '#172c66' }}>
                                About Full Stack MERN Application The App is called "Dave'sBook" it is a simple social media app that allows users to post interesting events, Login with Email (JWT) + Google OAuth Authentication
                            </p>
                            <a href='https://davesbook.netlify.app' className='card btn btn-light m-1' style={{ background: '#f582ae' }}>Live</a>
                            <a
                                href='https://github.com/TotoroDavid/simple-social-media-MERN-application'
                                className='card btn btn-light m-1'
                                style={{ background: '#f582ae' }}
                            >GitHub code</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
