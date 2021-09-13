/**
 * routes
 */

import { BrowserRouter as Router, Switch, Route }
/**
 * components
 */
/**Navbar and menu */ from "react-router-dom"
import Home from "../pages/Home"
import Navbar from '../pages/Navbar'

const Portfolio = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
    )
}

export default Portfolio
