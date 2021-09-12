/**
 * routes
 */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Sidebar from "./sidebar/Sidebar"
//pages for ourRoutes
import Home from "../../pages/home/Home"
import Portfolio from "../../pages/Portfolio"
import Links from '../../pages/Links'


const PersonalWeb = () => {
    return (
        <Router>
            <Sidebar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/portfolio" exact component={Portfolio} />
                <Route path="/links" exact component={Links} />
            </Switch>
        </Router>
    )
}

export default PersonalWeb
