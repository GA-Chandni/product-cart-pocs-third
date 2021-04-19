import React, { Fragment } from "react";

// import Home from "./components/Home/home";
import Navbar from "./components/Navbar/nav";
import RouterDashboard from "./router/routerDashboard";
// import NavConatiner from './container/NavContainer';
// import HomeContainer from './container/dashboardContainer'
// import DashboardContainer from "./container/dashboardContainer";
// import Cart from "./components/Cart/cart";

function App() {
  return (
    <div>
      <Navbar />
      <RouterDashboard />
    </div>
  );
}

export default App;
