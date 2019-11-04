import React, { Component } from 'react';
import classnames from "classnames";

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            findBy: '',
            errors: ''
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onBatchSelect(batch) {
        this.props.history.push(`/studentdetails/${batch}`);
    }
    render() {
        const { errors } = this.state;
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
                <label htmlFor="find">Find By</label>
                <div className="col-5 input-group-prepend">
                    <select className={classnames("form-control", {
                        "is-invalid": errors.room
                    })}
                        id="find" onChange={this.onChange} value={this.state.findBy}
                        name="findBy"
                    >   <option value="" defaultValue disabled>Select</option>
                        <option >Student Id</option>
                        <option >Room No.</option>
                    </select>
                    {errors.gender && (
                        <div className="invalid-tooltip">{errors.gender}</div>
                    )}
                    <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
                    <button className="btn btn-primary">Fetch</button>
                </div>
            </div>
        );
    }
}

export default Student;