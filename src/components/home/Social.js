/**
 * Social contacts
 */

const Social = () => {
    return (
        <div className='container'>
            <div className='container cont_else'>
                <p>Elsewhere, <br />I can be found at the following:</p>
            </div>
            <div className='container cont_social_title'><p>Social</p></div>
            <div className='container cont_social'>
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
                <a
                    href='https://www.instagram.com/totorodavid/'
                    target='_blank'
                    className='' rel="noreferrer"
                >Instagram</a>
                <a
                    href='https://twitter.com/davidandrestoro'
                    target='_blank'
                    className='' rel="noreferrer"
                >Twitter</a>
            </div>
        </div>
    )
}

export default Social
