import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from "classnames";


class StudentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            batch: 'Batch-2016',
            name: '',
            email: '',
            id: '',
            gender: '',
            room: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        const studentDetailsData = {
            name: this.state.name,
            email: this.state.email,
            batch: this.state.batch,
            id: this.state.id,
            room: this.state.room,
            gender: this.state.gender,
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }
    async componentDidMount() {
        // await;
    }
    render() {
        const { errors } = this.state;
        return (
            <div style={{ height: '100vh' }}>
                <h1>Batch-2016</h1>
                <br />
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col">
                            <label for="name">Name</label>
                            <input type="text" id="name" placeholder="Name"
                                className={classnames("form-control", {
                                    "is-invalid": errors.name
                                })}
                                onChange={this.onChange}
                                value={this.state.name}
                            />
                            {errors.name && (
                                <div className="invalid-feedback">{errors.name}</div>
                            )}
                        </div>
                        <div className="col">
                            <label for="email">Email address</label>
                            <input type="email" id="email" aria-describedby="emailHelp" placeholder="Enter email"
                                className={classnames("form-control", {
                                    "is-invalid": errors.email
                                })}
                                onChange={this.onChange}
                                value={this.state.email}
                            />
                            {errors.email && (
                                <div className="invalid-feedback">{errors.email}</div>
                            )}
                        </div>
                        <div className="col">
                            <label for="id">ID</label>
                            <input type="number" id="id" placeholder="ID"
                                className={classnames("form-control", {
                                    "is-invalid": errors.id
                                })}
                                onChange={this.onChange}
                                value={this.state.id}
                            />
                            {errors.id && (
                                <div className="invalid-feedback">{errors.id}</div>
                            )}
                        </div>
                        <div className="col">
                            <label for="room">Room No.</label>
                            <input type="number" id="room" placeholder="Room No."
                                className={classnames("form-control", {
                                    "is-invalid": errors.room
                                })}
                                onChange={this.onChange}
                                value={this.state.room}
                            />
                            {errors.room && (
                                <div className="invalid-feedback">{errors.room}</div>
                            )}
                        </div>
                        <div class="col">
                            <label for="exampleFormControlSelect1">Gender</label>
                            <select class="form-control" id="exampleFormControlSelect1" onChange={this.onChange} value={this.state.gender}>
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