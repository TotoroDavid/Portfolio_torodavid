/**
 * routes
 */

import { BrowserRouter as Router, Switch, Route }
/**
 * components
 */
/**Navbar and menu */ from "react-router-dom"
import About from "../pages/About"
import ContactMe from "../pages/ContactMe"
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
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={ContactMe} />
            </Switch>
        </Router>
    )
}

export default Portfolio
