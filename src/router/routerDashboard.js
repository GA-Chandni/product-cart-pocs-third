import React,{Fragment} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DashboardContainer from '../container/dashboardContainer'
import Cart from '../components/Cart/cart'

export default function RouterDashboard() {
    return (
       
             <Fragment>
        <Router>
          <Switch>
            {/* ======================= Common Header========================================= */}
            <Route exact path="/" component={DashboardContainer} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </Router>
        {/* Common footer */}
      </Fragment>
       
    )
}
