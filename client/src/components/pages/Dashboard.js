import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentUser } from "../../actions/authActions";


const clean = require("../../img/cleaning.jpg");
const student = require("../../img/student.jpg");
const staff = require("../../img/staff.jpeg");
const bedRoom = require("../../img/bedroom.jpeg");
class Dashboard extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    const { user } = this.props.auth;
    return (
      <div className="mid">
        {/* {console.log(getCurrentUser().email)} */}
        <div className="text-center" style={{ fontSize: "25px" }}>
          Welcome {user.name}!
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          <div className="card" style={{ width: "18rem" }}>
            <img src={clean} className="card-img-top" alt="Cleaning" />
            <div className="card-body">
              <h5 className="card-title">Cleaning</h5>
              <p className="card-text">Check the cleaning status of rooms.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Some status</li>
            </ul>
            <div className="card-body">
              <a href="/" className="card-link">Some link</a>
              <a href="/" className="card-link">Another link</a>
            </div>
          </div>
          <a href="/student">
            <div className="card hoverable" style={{ width: "18rem", hover: '' }}>
              <img src={student} className="card-img-top" alt="Cleaning" />
              <div className="card-body">
                <h5 className="card-title">Student Info</h5>
                <p className="card-text">Click to check student's info.</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Some Status</li>
              </ul>
              <div className="card-body">
                <p className="card-link">Some link</p>
                <p className="card-link">Another link</p>
              </div>
            </div>
          </a>
          <div className="card" style={{ width: "18rem" }}>
            <img src={staff} className="card-img-top" alt="Cleaning" />
            <div className="card-body">
              <h5 className="card-title">Worker Info</h5>
              <p className="card-text">Click to check worker's status</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Some Status</li>
            </ul>
            <div className="card-body">
              <a href="/" className="card-link">Some link</a>
              <a href="/" className="card-link">Another link</a>
            </div>
          </div>
        </div>
        <a href="/block">
          <div style={{ display: 'flex', marginTop: '5rem' }}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={bedRoom} className="card-img-top" alt="Cleaning" />
              <div className="card-body">
                <h5 className="card-title">Rooms</h5>
                <p className="card-text">Room Allotment Status</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Click to see more</li>
              </ul>
              <div className="card-body">
                <p href="/" className="card-link">Some link</p>
                <p href="/" className="card-link">Another link</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

Dashboard.propTypes = {
  // getCurrentUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
  ,
  { getCurrentUser }
)(Dashboard);
