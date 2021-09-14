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
import { Work } from "../pages/Work"

const Portfolio = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/work" exact component={Work} />
            </Switch>
        </Router>
    )
}

export default Portfolio
