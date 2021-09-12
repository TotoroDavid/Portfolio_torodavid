import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <div className="container containerHome">
            <div className="row ">
                <div className="col-6 col-sm-2 container__title">.
                    <div className="container__title__logo">
                        <div className='title_toro'>
                            <div>'TO</div>
                            <div>TO'</div>
                        </div>
                    </div>
                    <span>roDave()</span>
                </div>
                <div className="col-6 col-sm-2"></div>
                <div className="col-6 col-sm-2 ">
                    <NavLink to="/" className='container__home'>.Home()</NavLink>
                </div>
                <div className="col-6 col-sm-2 ">
                    <NavLink to="/work" className='container__home'>.Work()</NavLink>
                </div>
                <div className="col-6 col-sm-2 ">
                    <NavLink to="/about" className='container__home'>.About()</NavLink>
                </div>
                <div className="col-6 col-sm-2 ">
                    <NavLink to="/contact" className='container__home'>.Contact()</NavLink>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 '>

                        </div>
                        <div className='col-6 '>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
