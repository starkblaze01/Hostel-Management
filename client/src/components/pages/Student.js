import React, { Component } from 'react';
import classnames from "classnames";
import axios from 'axios';

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            findBy: '',
            val: '',
            errors: '',
            data: {},
        }
        this.onChange = this.onChange.bind(this);
        this.onFtechDetails = this.onFtechDetails.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onStatusChange = this.onStatusChange.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    async onDelete(id) {
        console.log(id);
        await axios.delete(`/api/student`, { data: { id } }).then(res => console.log(res)).catch(err => console.log(err));
        await this.onFtechDetails();
    }
    async onStatusChange(id, isAvailable) {
        console.log(id);
        await axios.put(`/api/student/availability`, { id, isAvailable: !isAvailable }).then(res => console.log(res)).catch(err => console.log(err));
        await this.onFtechDetails();
    }
    async onFtechDetails() {
        if (this.state.findBy === 'id') {
            await axios.get(`/api/student/id/${this.state.val}`).then((res) => {
                this.setState({ data: res });
                console.log(res);
                if (!res.data.data) {
                    alert("Not Found");
                }
            }).catch(err =>
                console.log(err)
            );
        }
        else if (this.state.findBy === 'room') {
            await axios.get(`/api/student/room/${this.state.val}`).then((res) => {
                this.setState({ data: res });
                console.log(res);
                if (!res.data) {
                    alert("Not Found");
                }
            }
            ).catch(err =>
                console.log(err)
            );
        } else {
            console.log('lol ho gya')
            return alert('Select Room number or Student Id?');
        }
    }
    onBatchSelect(batch) {
        this.props.history.push(`/studentdetails/${batch}`);
    }
    render() {
        const { errors, data } = this.state;
        let tableContent;
        (!data) ? (
            tableContent = null
        ) : tableContent = data.data ? data.data.map(
            el =>
                <tr key={el._id} >
                    <th scope="row">{data.data.indexOf(el) + 1}</th>
                    <td>{el.name ? el.name : "-"}</td>
                    <td>{el.email ? el.email : "-"}</td>
                    <td>{el.id ? el.id : "-"}</td>
                    <td>{el.block ? el.block : "-"}</td>
                    <td>{el.room ? el.room : "-"}</td>
                    <td>{el.gender ? el.gender : "-"}</td>
                    <td>{el.isAvailable ? <button type="button" className="btn btn-primary" data-toggle="tooltip" data-placement="right" title="Click to Mark Absent"
                        onClick={() => this.onStatusChange(el.id, el.isAvailable)}
                    >
                        Present
                    </button>
                        : <button type="button" className="btn btn-danger" data-toggle="tooltip" data-placement="right" title="Click to Mark Present"
                            onClick={() => this.onStatusChange(el.id, el.isAvailable)}
                        >
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
        return (
            <div style={{ height: '100vh' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="card" style={{ width: "12rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">B.Tech-2016</h5>
                            <h6 className="card-subtitle mb-2 text-muted">CS & IT</h6>
                            <p onClick={() => this.onBatchSelect('2016')} className="card-text" style={{
                                cursor: 'pointer',
                                color: '#00a4eb'
                            }}>Add or Check Info</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "12rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">B.Tech-2017</h5>
                            <h6 className="card-subtitle mb-2 text-muted">CS & IT</h6>
                            <p onClick={() => this.onBatchSelect('2017')} className="card-text" style={{
                                cursor: 'pointer',
                                color: '#00a4eb'
                            }}>Add or Check Info</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "12rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">B.Tech-2018</h5>
                            <h6 className="card-subtitle mb-2 text-muted">CS & IT</h6>
                            <p onClick={() => this.onBatchSelect('2018')} className="card-text" style={{
                                cursor: 'pointer',
                                color: '#00a4eb'
                            }}>Add or Check Info</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "12rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">B.Tech-2019</h5>
                            <h6 className="card-subtitle mb-2 text-muted">CS & IT</h6>
                            <p onClick={() => this.onBatchSelect('2019')} className="card-text" style={{
                                cursor: 'pointer',
                                color: '#00a4eb'
                            }}>Add or Check Info</p>
                        </div>
                    </div>
                </div>
                <br />
                <label htmlFor="find" style={{ marginLeft: '14px' }}><h5>Find By</h5></label>
                <div className="col-8 input-group-prepend">
                    <select className={classnames("form-control", {
                        "is-invalid": errors.room
                    })}
                        id="find" onChange={this.onChange} value={this.state.findBy}
                        name="findBy"
                    >   <option value="" defaultValue disabled>Select</option>
                        <option value="id">Student Id</option>
                        <option value="room">Room No.</option>
                    </select>
                    <input type="text" id="val" placeholder="Value"
                        className={classnames("form-control", {
                            "is-invalid": errors.room
                        })}
                        onChange={this.onChange}
                        name="val"
                        value={this.state.val}
                        required={true}
                    />
                    {errors.room && (
                        <div className="invalid-tooltip">{errors.room}</div>
                    )}
                    <button className="btn btn-primary" style={{ width: '100px' }} onClick={this.onFtechDetails}><tiny>Find Details</tiny></button>
                </div>
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

export default Student;