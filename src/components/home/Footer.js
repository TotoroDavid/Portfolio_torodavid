import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-dark text-light text-center'>
            <div className='container p-4'>
                <h2>Created and maintained by David Toro</h2>
                <p>Title: Portfolio Author: <a href="https://www.linkedin.com/in/davidtoro90/" target='_blank'>@totoroDave</a> </p>
                <p> 2020 - {new Date().getFullYear()}</p>
                <p>All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
