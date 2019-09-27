import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class StudentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            batch: 'Something',
            errors: {}
        }
    }

    async componentDidMount() {
        // await;
    }
    render() {
        return (
            <div style={{ height: '100vh' }}>
                <h1>Batch-2016</h1>
                <form>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="text" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

StudentDetails.propTypes = {

}

const mapStateToProps = state => ({

});
export default connect(mapStateToProps)(StudentDetails);