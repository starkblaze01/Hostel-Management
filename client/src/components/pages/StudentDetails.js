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
                <br />
                <form>
                    <div className="row">
                        <div className="col">
                            <label for="exampleInputPassword1">Name</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Name" />
                        </div>
                        <div className="col">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="col">
                            <label for="exampleInputPassword1">ID</label>
                            <input type="number" className="form-control" id="exampleInputPassword1" placeholder="ID" />
                        </div>
                        <div className="col">
                            <label for="exampleInputPassword1">Room No.</label>
                            <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Room No." />
                        </div>
                        <div class="col">
                            <label for="exampleFormControlSelect1">Gender</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>Female</option>
                                <option>Male</option>
                            </select>
                        </div>
                        <div className="col-auto" >
                            <button type="submit" style={{ verticalAlign: '-39px' }} className="btn btn-primary">Add</button>
                        </div>
                    </div>
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