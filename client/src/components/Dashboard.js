import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentUser } from "../actions/authActions";

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
