import React, { Component } from 'react';

class Block extends Component {

    onBatchSelect(block) {
        this.props.history.push(`/room/${block}`);
    }
    render() {
        return (
            <div style={{ height: '100vh' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Block A</h5>
                            <h6 className="card-subtitle mb-2 text-muted">CS & IT</h6>
                            <p onClick={() => this.onBatchSelect('Block-A')} className="card-text">Click to check their info</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Block B</h5>
                            <h6 className="card-subtitle mb-2 text-muted">CS & IT</h6>
                            <p onClick={() => this.onBatchSelect('Block B')} className="card-text">Click to check their info</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Block C</h5>
                            <h6 className="card-subtitle mb-2 text-muted">CS & IT</h6>
                            <p onClick={() => this.onBatchSelect('Block C')} className="card-text">Click to check their info</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Block D</h5>
                            <h6 className="card-subtitle mb-2 text-muted">CS & IT</h6>
                            <p onClick={() => this.onBatchSelect('Block D')} className="card-text">Click to check their info</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Block;