import './styles.css'

const Projects = () => {
    return (
        <div className='container' >
            <div className='container p-0 cont_title_port'>
                <h3 className='p-5'>.My Work --</h3>
                <h2>Portfolio</h2>
                <h4 className='p-5'>
                Swipe in drag below to see a small selection of projects I've worked on! A Selection Of Stuff I've Built
                </h4>
            </div>
            <div className='row cont_folio'>
                {/* #1 */}
                <div className="col-md-4  text-center cont_port_desc">
                    <div className='card   cont_projects' >
                        <div className='overflow'>
                            <img src='https://github.com/TotoroDavid/simple-social-media-MERN-application/blob/master/client/src/images/Screen%20Shot%202021-09-11%20at%209.37.56%20am.png?raw=true' alt="" className='card-img-top' />
                        </div>
                        <div className='card-body  text-light cont_desc_'>
                            <h3>Simple Social Media MERN</h3>
                            <p>#Mongo #Express #React #NodeJs #Redux</p>
                            <p style={{ color: '#d4d8f0' }}>
                                About Full Stack MERN Application The App is called "Dave'sBook" it is a simple social media app that allows users to post interesting events, Login with Email (JWT) + Google OAuth Authentication
                            </p>
                            <a
                                href='https://davesbook.netlify.app'
                                rel='noreferrer'
                                target='_blank'
                                className='card btn btn-dark '>
                                View Project
                            </a>
                            <a
                                href='https://github.com/TotoroDavid/simple-social-media-MERN-application'
                                rel='noreferrer'
                                target='_blank'
                                className='card btn btn-dark '
                            >GITHUB.code</a>
                        </div>
                    </div>
                </div>
                {/* #2 */}
                <div className="col-md-4 text-center"

                >
                    <div className='card  cont_projects'  >
                        <div className='overflow'>
                            <img src='https://i.ytimg.com/vi/YocRq-KesCM/sddefault.jpg#404_is_fine' alt="" className='card-img-top' />
                        </div>
                        <div className='card-body text-light cont_desc_'>
                            <h3>MERN Stack Advanced Authentication</h3>
                            <p>#Mongo #Express #React #NodeJs #Redux</p>
                            <p style={{ color: '#d4d8f0' }}>
                                This project is about exactly how to implement authentication and authorization in the next MERN stack build. I was looking at concepts like login and register authentication, hashing passwords and storing them securely, generating JWT,
                            </p>
                            {/* no live site yet */}
                            <a
                                href='https://github.com/TotoroDavid/MERN-Stack-Advanced-Authentication'
                                rel='noreferrer'
                                target='_blank'
                                className='card btn btn-dark '
                            >GITHUB.code</a>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="col-md-4 text-center" >
                    <div className='card  cont_projects' >
                        <div className='overflow'>
                            <img src='https://i.ytimg.com/vi/yY1n0sDZPtI/hqdefault.jpg' alt="" className='card-img-top' />
                        </div>
                        <div className='card-body text-light cont_desc_'>
                            <h3>Advanced-MERN-Pagination-</h3>
                            <p>#Mongo #Express #React #NodeJs #Redux</p>
                            <p style={{ color: '#d4d8f0' }}>
                                Application building a fully functioning and dynamic app that implements some advanced pagination, is an important topic in web development as it improves websites loading time as well as overall user experience.
                            </p>
                            {/* no live site yet */}
                            <a
                                href='https://github.com/TotoroDavid/Advanced-MERN-Pagination-'
                                rel='noreferrer'
                                target='_blank'
                                className='card btn btn-dark '
                            >GITHUB.code</a>
                        </div>
                    </div>
                </div>
                {/* 4 */}
                <div className="col-md-4 text-center" >
                    <div className='card  cont_projects' >
                        <div className='overflow'>
                            <img src='https://external-preview.redd.it/6aLqKOiAJiVGcaSmEg_LCxFpVIwDVSNN_6lNmP36DFI.jpg?auto=webp&s=e03bd81cb290dedc00859013db0bb6d04e15655e' alt="" className='card-img-top' />
                        </div>
                        <div className='card-body text-light cont_desc_'>
                            <h3>Advanced-MERN-Pagination-</h3>
                            <p>#Mongo #Express #React #NodeJs #Redux</p>
                            <p style={{ color: '#d4d8f0' }}>
                                Application that is able to load data from our own backend and into our frontend and sort data in a nice-looking UI using Material UI. With this project, I will also show you how to properly handle errors in your express API and how to do some advanced API querying features with express and mongoose.
                            </p>
                            {/* no live site yet */}
                            <a
                                href='https://github.com/TotoroDavid/Advance-Filtering'
                                rel='noreferrer'
                                target='_blank'
                                className='card btn btn-dark '
                            >GITHUB.code</a>
                        </div>
                    </div>
                </div>
                {/* 5 */}
                <div className="col-md-4 text-center" >
                    <div className='card  cont_projects' >
                        <div className='overflow'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1eVNQfEOAurY_JISCOb4--bh3WQDlxFB4Wg&usqp=CAU' alt="" className='card-img-top' />
                        </div>
                        <div className='card-body text-light cont_desc_'>
                            <h3>Chat App ReactJS, NodeJS, Socket.IO</h3>
                            <p>#Socket.Io #Express #React #NodeJs</p>
                            <p style={{ color: '#d4d8f0' }}>
                                Socket.io is an amazing library for client/server communication, but it can be a bit confusing to get started with.
                                How to make a Chat App with ReactJS and Socket IO. This will include different rooms and usernames. select an user name and a room and how want to connect with you, use the same number room and well done
                            </p>
                            <a
                                href='https://whatsdave.netlify.app/'
                                rel='noreferrer'
                                target='_blank'
                                className='card btn btn-dark '>
                                View Project
                            </a>
                            <a
                                href='https://github.com/TotoroDavid/Chat-App-ReactJS-NodeJS-Socket.IO'
                                rel='noreferrer'
                                target='_blank'
                                className='card btn btn-dark '
                            >GITHUB.code</a>
                        </div>
                    </div>
                </div>
                {/* #6 */}
                <div className="col-md-4 text-center" >
                    <div className='card  cont_projects' >
                        <div className='overflow'>
                            <img src='https://github.com/TotoroDavid/TV-Show-React-App/blob/master/Screen%20Shot%202021-06-28%20at%209.42.37%20am.png?raw=true' alt="" className='card-img-top' />
                        </div>
                        <div className='card-body text-light cont_desc_'>
                            <h3>TV Show React App</h3>
                            <p>#Axios #React #AJAXrequest #API</p>
                            <p style={{ color: '#d4d8f0' }}>
                                project will be covering all of the basic knowledge needed in react,working with an API to pull out data into our app.
                                Routing in react,
                                Working with different hooks (useState, useEffect, useReducer, useContext),
                                Working with Axios to make AJAX request,
                                Making a request to and API,
                                Setting up our global state with the Context API,
                                Doing some basic CSS styling and CSS Variables,
                                Deploying to a web server.
                            </p>
                            <a
                                href='https://competent-villani-3bf4bc.netlify.app/'
                                rel='noreferrer'
                                target='_blank'
                                className='card btn btn-dark '>
                                View Project
                            </a>
                            <a
                                href='https://github.com/TotoroDavid/TV-Show-React-App'
                                rel='noreferrer'
                                target='_blank'
                                className='card btn btn-dark '
                            >GITHUB.code</a>
                        </div>
                    </div>
                </div>
                {/* #7 */}
                <div className="col-md-4 text-center" >
                    <div className='card  cont_projects' >
                        <div className='overflow'>
                            <img src='https://github.com/TotoroDavid/TypeScript-react-shopping-cart/blob/master/Screen%20Shot%202021-04-26%20at%205.29.31%20pm.png?raw=true' alt="" className='card-img-top' />
                        </div>
                        <div className='card-body text-light cont_desc_'>
                            <h3>TypeScript-react-shopping-cart</h3>
                            <p>#TypeScript #React #MaterialUI #API</p>
                            <p style={{ color: '#d4d8f0' }}>
                                In the next project, I used ReactJS shopping cart with Typescript, Material UI, Styled Components, and React-Query at the same time, I was using a free open API for dummy data to the items in the shop. React-Query hooks are used for fetching the data from the API.
                                Styled Components is used in combination with Material UI to customize the styles. if you wanna check it you can open the next link below
                            </p>
                            <a
                                href='https://infallible-kowalevski-1875b8.netlify.app/'
                                rel='noreferrer'
                                target='_blank'
                                className='card btn btn-dark '>
                                View Project
                            </a>
                            <a
                                href='https://github.com/TotoroDavid/TypeScript-react-shopping-cart'
                                rel='noreferrer'
                                target='_blank'
                                className='card btn btn-dark '
                            >GITHUB.code</a>
                        </div>
                    </div>
                </div>
                {/* 8 */}
                <div className="col-md-4 text-center" >
                    <div className='card  cont_projects' >
                        <div className='overflow'>
                            <img src='https://github.com/TotoroDavid/Nextjs-Portafolio-Simple/blob/master/Screen%20Shot%202021-09-15%20at%205.58.19%20pm.png?raw=true' alt="" className='card-img-top' />
                        </div>
                        <div className='card-body text-light cont_desc_'>
                            <h3>Nextjs-Portafolio-Simple</h3>
                            <p>#NextJs #React #bootstrap #API</p>
                            <p style={{ color: '#d4d8f0' }}>
                                the next simple project is I used the framework of React the name Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React-based web applications. tools Nextjs Bootswatch 4 Resources NProgress change color Nextjs 100% you could to deploy the project in the next link below
                            </p>
                            <a
                                href='https://clever-shaw-a445fa.netlify.app'
                                rel='noreferrer'
                                target='_blank'
                                className='card btn btn-dark '>
                                View Project
                            </a>
                            <a
                                href='https://github.com/TotoroDavid/Nextjs-Portafolio-Simple'
                                rel='noreferrer'
                                target='_blank'
                                className='card btn btn-dark '
                            >GITHUB.code</a>
                        </div>
                    </div>
                </div>
                {/* 9 */}
                <div className="col-md-4 text-center" style={{ padding: '0' }}>
                    <div className='card  cont_projects' >
                        <div className='overflow'>
                            <img src='https://github.com/TotoroDavid/React-Typescript-Quiz-App/blob/master/Screen%20Shot%202021-04-28%20at%208.29.45%20am.png?raw=true' alt="" className='card-img-top' />
                        </div>
                        <div className='card-body text-light cont_desc_'>
                            <h3>React-Typescript-Quiz-App</h3>
                            <p>#TypeScript #React  #API</p>
                            <p style={{ color: '#d4d8f0' }}>
                                in the next project, I used React and TypeScript to create a quiz app project, and I also used styled components with React.you can check it in the next link below.
                            </p>
                            <a
                                href='https://clever-shaw-a445fa.netlify.app'
                                rel='noreferrer'
                                target='_blank'
                                className='card btn btn-dark '>
                                View Project
                            </a>
                            <a
                                href='https://github.com/TotoroDavid/React-Typescript-Quiz-App'
                                rel='noreferrer'
                                target='_blank'
                                className='card btn btn-dark '
                            >GITHUB.code</a>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Projects
