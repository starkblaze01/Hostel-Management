import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from "classnames";
import { createStudentDetails, getStudentDetails } from '../../actions/studentDetailsActions';
import axios from "axios";

class StudentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            batch: this.props.match.params.id,
            name: '',
            email: '',
            id: '',
            gender: '',
            room: '',
            block: '',
            isAvailable: true,
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
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
            block: this.state.block,
            gender: this.state.gender,
        }
        console.table(studentDetailsData);
        this.props.createStudentDetails(studentDetailsData);
        this.setState({
            name: '',
            email: '',
            id: '',
            gender: '',
            room: '',
            block: '',
            errors: {}
        });
    }
    async onDelete(id) {
        console.log(id);
        await axios.delete(`/api/student`, { data: { id } }).then(res => console.log(res)).catch(err => console.log(err));
        await this.props.getStudentDetails(this.props.match.params.id);
    }
    async onStatusChange(id) {
        console.log()
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }
    async componentDidMount() {
        await this.props.getStudentDetails(this.props.match.params.id);
    }

    render() {
        const { studentData, loading } = this.props.studentDetails;
        let tableContent;
        (!studentData.length || loading) ? (
            tableContent = null
        ) : tableContent = studentData.length ? studentData.map(
            el =>
                <tr key={el._id} >
                    <th scope="row">{studentData.indexOf(el) + 1}</th>
                    <td>{el.name ? el.name : "-"}</td>
                    <td>{el.email ? el.email : "-"}</td>
                    <td>{el.id ? el.id : "-"}</td>
                    <td>{el.block ? el.block : "-"}</td>
                    <td>{el.room ? el.room : "-"}</td>
                    <td>{el.gender ? el.gender : "-"}</td>
                    <td>{el.isAvailable ? <button type="button" className="btn btn-primary" data-toggle="tooltip" data-placement="right" title="Click to Change Status"
                        onClick={() => this.onStatusChange(el.id)}
                    >
                        Present
                    </button>
                        : <button type="button" className="btn btn-danger" data-toggle="tooltip" data-placement="right" title="Click to Change Status">
                            Absent
                    </button>}</td>
                    <td style={{ cursor: 'pointer', color: '#00a4eb' }}
                        onClick=
                        {() => this.onDelete(el.id)}
                    >
                        Click Me
                    </td>
                </tr>
        ) : null
        const { errors } = this.state;
        return (
            <div style={{ height: '100vh' }}>
                <h1>{this.state.batch}</h1>
                <br />
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Name"
                                className={classnames("form-control", {
                                    "is-invalid": errors.name
                                })}
                                onChange={this.onChange}
                                name="name"
                                value={this.state.name}
                            />
                            {errors.name && (
                                <div className="invalid-tooltip">{errors.name}</div>
                            )}
                        </div>
                        <div className="col">
                            <label htmlFor="email">Email address</label>
                            <input type="email" id="email" aria-describedby="emailHelp" placeholder="Enter email"
                                className={classnames("form-control", {
                                    "is-invalid": errors.email
                                })}
                                onChange={this.onChange}
                                name="email"
                                value={this.state.email}
                            />
                            {errors.email && (
                                <div className="invalid-tooltip">{errors.email}</div>
                            )}
                        </div>
                        <div className="col">
                            <label htmlFor="id">ID</label>
                            <input type="number" id="id" placeholder="ID"
                                className={classnames("form-control", {
                                    "is-invalid": errors.id
                                })}
                                onChange={this.onChange}
                                name="id"
                                value={this.state.id}
                            />
                            {errors.id && (
                                <div className="invalid-tooltip">{errors.id}</div>
                            )}
                        </div>
                        <div className="col">
                            <label htmlFor="block">Block</label>
                            <input type="text" id="block" placeholder="Block"
                                className={classnames("form-control", {
                                    "is-invalid": errors.block
                                })}
                                onChange={this.onChange}
                                name="block"
                                value={this.state.block}
                            />
                            {errors.block && (
                                <div className="invalid-tooltip">{errors.block}</div>
                            )}
                        </div>
                        <div className="col">
                            <label htmlFor="room">Room No.</label>
                            <input type="number" id="room" placeholder="Room No."
                                className={classnames("form-control", {
                                    "is-invalid": errors.room
                                })}
                                onChange={this.onChange}
                                name="room"
                                value={this.state.room}
                            />
                            {errors.room && (
                                <div className="invalid-tooltip">{errors.room}</div>
                            )}
                        </div>
                        <div className="col">
                            <label htmlFor="exampleFormControlSelect1">Gender</label>
                            <select className={classnames("form-control", {
                                "is-invalid": errors.room
                            })}
                                id="exampleFormControlSelect1" onChange={this.onChange} value={this.state.gender}
                                name="gender"
                            >   <option value="" defaultValue disabled>Select Gender</option>
                                <option >GIRL</option>
                                <option >BOY</option>
                            </select>
                            {errors.gender && (
                                <div className="invalid-tooltip">{errors.gender}</div>
                            )}
                        </div>
                        <div className="col-auto" >
                            <button type="submit" style={{ verticalAlign: '-39px' }} className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </form>
                <div style={{ marginTop: '50px', overflow: 'scroll', maxHeight: 800 }}>
                    <table className="table table-striped table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">ID</th>
                                <th scope="col">Block</th>
                                <th scope="col">Room No.</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Leave Status</th>
                                <th scope="col">Delete?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableContent}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

StudentDetails.propTypes = {
    createStudentDetails: PropTypes.func.isRequired,
    getStudentDetails: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    errors: state.errors,
    studentDetails: state.studentDetails,
});

export default connect(mapStateToProps, { createStudentDetails, getStudentDetails })(StudentDetails);