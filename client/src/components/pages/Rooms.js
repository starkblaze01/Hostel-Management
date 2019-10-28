import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from "classnames";
import { createStudentDetails } from '../../actions/studentDetailsActions';

class Rooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            block: 'A',
            id: '',
            students: [],
            cleaner: '',
            gender: '',
            errors: {},
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
            students: this.state.students,
            cleaner: this.state.cleaner,
            block: this.state.block,
            id: this.state.id,
            gender: this.state.gender,
        }
        console.table(studentDetailsData);
        // this.props.createStudentDetails(studentDetailsData);
        this.setState({
            name: '',
            email: '',
            id: '',
            gender: '',
            room: '',
            errors: {}
        });
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
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
                <h1>{this.state.block}</h1>
                <br />
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="id">Room No.</label>
                            <input type="text" id="id" placeholder="Room No."
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
                            <label htmlFor="students">Student ID</label>
                            <input type="number" id="students" placeholder="Enter Student Id"
                                className={classnames("form-control", {
                                    "is-invalid": errors.students
                                })}
                                onChange={this.onChange}
                                name="students"
                                value={this.state.students}
                            />
                            {errors.students && (
                                <div className="invalid-tooltip">{errors.students}</div>
                            )}
                        </div>
                        <div className="col">
                            <label htmlFor="cleaner">Cleaner Name</label>
                            <input type="text" id="cleaner" placeholder="Cleaner Name"
                                className={classnames("form-control", {
                                    "is-invalid": errors.cleaner
                                })}
                                onChange={this.onChange}
                                name="cleaner"
                                value={this.state.cleaner}
                            />
                            {errors.cleaner && (
                                <div className="invalid-tooltip">{errors.cleaner}</div>
                            )}
                        </div>
                        <div className="col">
                            <label htmlFor="exampleFormControlSelect1">Boys/Girls</label>
                            <select className={classnames("form-control", {
                                "is-invalid": errors.room
                            })}
                                id="exampleFormControlSelect1" onChange={this.onChange} value={this.state.gender}
                                name="gender"
                            >   <option value="" defaultValue disabled>Select Gender</option>
                                <option >FEMALE</option>
                                <option >MALE</option>
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
            </div>
        );
    }
}

Rooms.propTypes = {
    createStudentDetails: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    errors: state.errors,
    studentDetails: state.studentDetails,
});
export default connect(mapStateToProps, { createStudentDetails })(Rooms);