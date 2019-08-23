import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./layout/Home";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Dashboard from "./Dashboard";
import PrivateRoute from './common/PrivateRoute';

class Routes extends Component {
    render() {
        return (
            < div className="App" >
                <Navbar />
                <Route exact path="/" component={Home} />
                <div className="container">
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                </div>
                <Footer />
            </div >
        )
    }

}

export default Routes;
