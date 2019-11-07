import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./layout/Home";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from './common/PrivateRoute';
import Student from './pages/Student';
import StudentDetails from './pages/StudentDetails';
import Block from './pages/Block';
import RoomAction from "./pages/RoomAction";
import Staff from './pages/Staff';

class Routes extends Component {
    render() {
        return (
            < div className="App" >
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    <PrivateRoute exact path="/student" component={Student} />
                    <PrivateRoute exact path="/block" component={Block} />
                    <PrivateRoute exact path="/room/:id" component={RoomAction} />
                    <PrivateRoute exact path="/staff" component={Staff} />
                    <PrivateRoute exact path="/studentdetails/:id" component={StudentDetails} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Redirect to="/dashboard" />
                </Switch>
                <Footer />
            </div >
        )
    }

}

export default Routes;
