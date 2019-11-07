import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from "classnames";
import { createStaffDetails, getStaffDetails } from '../../actions/staffActions';
import axios from 'axios';
import ReactLoading from 'react-loading';

class Staff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            mobile: '',
            occupation: '',
            errors: {},
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onAvailabilityChange = this.onAvailabilityChange.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    async onDelete(_id) {
        await axios.delete(`/api/staff/${_id}`).then(res => console.log(res)).catch(err => console.log(err));
        await this.props.getStaffDetails();
    }
    async onAvailabilityChange(_id, isAvailable) {
        await axios.put(`/api/staff/availability/${_id}`, { isAvailable: !isAvailable }).then(res => console.log(res)).catch(err => console.log(err));
        await this.props.getStaffDetails();
    }
    async onSubmit(e) {
        e.preventDefault();
        const staffRecord = {
            mobile: this.state.mobile,
            name: this.state.name,
            occupation: this.state.occupation,
        }
        console.table(staffRecord);
        await this.props.createStaffDetails(staffRecord);
        this.setState({
            mobile: '',
            name: '',
            occupation: '',
            errors: {}
        });
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }
    async componentDidMount() {
        await this.props.getStaffDetails();
    }
    render() {
        const { staffData, loading } = this.props.staffData;
        let tableContent;
        (!staffData.length || loading) ? (
            tableContent = null
        ) : tableContent = staffData.length ? staffData.map(
            el =>
                <tr key={el._id} >
                    <th scope="row">{staffData.indexOf(el) + 1}</th>
                    <td>{el.name ? el.name : "-"}</td>
                    <td>{el.occupation ? el.occupation : "-"}</td>
                    <td>{el.mobile ? el.mobile : "-"}</td>
                    <td>{el.isAvailable ? <button type="button" className="btn btn-primary" data-toggle="tooltip" data-placement="right" title="Click to set Unavailable"
                        onClick={() => this.onAvailabilityChange(el._id, el.isAvailable)}
                    >
                        Available
                    </button>
                        : <button type="button" className="btn btn-danger" data-toggle="tooltip" data-placement="right" title="Click to set Available"
                            onClick={() => this.onAvailabilityChange(el._id, el.isAvailable)}
                        >
                            Unavailable
                    </button>}</td>
                    <td style={{ cursor: 'pointer', color: '#00a4eb' }}
                        onClick=
                        {() => this.onDelete(el._id)}
                    >
                        Click Me
                    </td>
                </tr>
        ) : null
        const { errors } = this.state;
        return (
            <div className="mid container">
                <h1>{this.state.block}</h1>
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
                            <label htmlFor="occupation">Occupation</label>
                            <input type="text" id="occupation" placeholder="Occupation"
                                className={classnames("form-control", {
                                    "is-invalid": errors.occupation
                                })}
                                onChange={this.onChange}
                                name="occupation"
                                value={this.state.occupation}
                            />
                            {errors.occupation && (
                                <div className="invalid-tooltip">{errors.occupation}</div>
                            )}
                        </div>
                        <div className="col">
                            <label htmlFor="mobile">Cellphone Number</label>
                            <input type="number" id="mobile" placeholder="Cellphone Number"
                                className={classnames("form-control", {
                                    "is-invalid": errors.mobile
                                })}
                                onChange={this.onChange}
                                name="mobile"
                                value={this.state.mobile}
                            />
                            {errors.mobile && (
                                <div className="invalid-tooltip">{errors.mobile}</div>
                            )}
                        </div>
                        <div className="col-auto" >
                            <button type="submit" style={{ verticalAlign: '-39px' }} className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </form>

                <div style={{ marginTop: '50px', overflow: 'scroll', maxHeight: 800 }}>
                    {!loading ? <table className="table table-striped table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Occupation</th>
                                <th scope="col">Cellphone Number</th>
                                <th scope="col">Available/ Unavailable</th>
                                <th scope="col">Delete?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableContent}
                        </tbody>
                    </table> : <div style={{ display: 'flex', justifyContent: 'center' }}><ReactLoading type="bars" color="#f56f42" /></div>}
                </div>
            </div>
        );
    }
}

Staff.propTypes = {
    createStaffDetails: PropTypes.func.isRequired,
    getStaffDetails: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    errors: state.errors,
    staffData: state.staffData,
});
export default connect(mapStateToProps, { createStaffDetails, getStaffDetails })(Staff);