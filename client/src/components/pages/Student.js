import React, { Component } from 'react';

class Student extends Component {

    onBatchSelect(batch) {
        this.props.history.push(`/studentdetails/${batch}`);
    }
    render() {
        return (
            <div style={{ height: '100vh' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">B.Tech-2016</h5>
                            <h6 className="card-subtitle mb-2 text-muted">CS & IT</h6>
                            <p onClick={() => this.onBatchSelect('B.Tech-2016')} className="card-text">Click to check their info</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">B.Tech-2017</h5>
                            <h6 className="card-subtitle mb-2 text-muted">CS & IT</h6>
                            <p onClick={() => this.onBatchSelect('B.Tech-2017')} className="card-text">Click to check their info</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">B.Tech-2018</h5>
                            <h6 className="card-subtitle mb-2 text-muted">CS & IT</h6>
                            <p onClick={() => this.onBatchSelect('B.Tech-2018')} className="card-text">Click to check their info</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Student;