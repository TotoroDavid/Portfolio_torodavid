import '../components/Contact/style.css'
import Footer from '../components/Home/Footer'

const ContactMe = () => {
    return (
        <>
            <div className='container pt-4 contact_title'>
                <h2>Say hello.</h2>
            </div>
            <div className='container p-0'>
                <div className='row'>
                    <div className='col-md-6 contact_cont p-0 m-0'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-12 p-0'>
                                    <h4 className='pt-5 pb-4'>
                                        hello@ <br />
                                        davidtoro65@hotmail.com
                                    </h4>
                                </div>
                                <div className='col-md-12'>
                                    <p>
                                        For any enquiries, or just to say hello, get in touch and contact me.
                                        If you’d like to send me a message, I can be reached through various ways! If you prefer email, simply fill out the form below or send me a message directly at
                                    </p>
                                </div>
                                <div className='col-md-6 d-flex flex-column'>
                                    <p className='d-flex justify-content-center pt-4 gray'>Phone</p>
                                    <p className='d-flex justify-content-center text-muted'>+57 (315) 294-7533</p>
                                </div>
                                <div className='col-md-6 d-flex flex-column'>
                                    <p className='d-flex justify-content-center pt-4 gray'>Enquiries</p>
                                    <p className='d-flex justify-content-center text-muted'>davidtoro65@hotmail.com</p>
                                </div>
                                <div className='d-flex justify-content-center gray pt-3'>Follow me</div>
                                <div className='col-md-12 d-flex flex-row justify-content-center'>
                                    <a className='p-3 text-secondary text-decoration-none' target='_blank' href="https://twitter.com/davidandrestoro">Tw</a>
                                    <a className='p-3 text-secondary text-decoration-none' target='_blank' href="https://www.linkedin.com/in/davidtoro90/">Lk</a>
                                    <a className='p-3 text-secondary text-decoration-none' target='_blank' href="https://www.instagram.com/totorodavid/">In</a>
                                    <a className='p-3 text-secondary text-decoration-none' target='_blank' href="https://github.com/TotoroDavid">Git</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 p-0'>
                        <img
                            src="https://github.com/TotoroDavid/TotoroDavid.github.io/blob/main/IMG_1554.jpeg?raw=true" alt=""
                            className='container p-0' />
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>
            <Footer />
        </>

    )
}

export default ContactMe
