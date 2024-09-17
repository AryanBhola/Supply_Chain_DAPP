import React from 'react';
import { useHistory } from "react-router-dom";
import './App.css'; 

function Home() {
    const history = useHistory();

    const redirect_to_roles = () => {
        history.push('/roles');
    };

    const redirect_to_addmed = () => {
        history.push('/addmed');
    };

    const redirect_to_supply = () => {
        history.push('/supply');
    };

    const redirect_to_track = () => {
        history.push('/track');
    };

    return (
        <section className="section-services">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="header-section">
                            <h2 className="title">Pharmaceutical Supply Chain Flow</h2>
                            <p className="description">
                                <strong>Note:</strong> Here <u>Owner</u> is the person who deployed the smart contract on the blockchain.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="single-service">
                            <div className="content">
                                <span className="icon">
                                    <i className="fas fa-user-cog"></i>
                                </span>
                                <h3 className="title">Step 1: Register Entities</h3>
                                <p className="description">
                                    <strong>Note:</strong> This is a one-time step. Skip to step 2 if already done.
                                </p>
                                <button onClick={redirect_to_roles} className="btn btn-outline-primary">Register</button>
                            </div>
                            <span className="circle-before"></span>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="single-service">
                            <div className="content">
                                <span className="icon">
                                    <i className="fas fa-prescription-bottle-alt"></i>
                                </span>
                                <h3 className="title">Step 2: Order Medicines</h3>
                                <button onClick={redirect_to_addmed} className="btn btn-outline-primary">Order Medicines</button>
                            </div>
                            <span className="circle-before"></span>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="single-service">
                            <div className="content">
                                <span className="icon">
                                    <i className="fas fa-truck"></i>
                                </span>
                                <h3 className="title">Step 3: Control Supply Chain</h3>
                                <button onClick={redirect_to_supply} className="btn btn-outline-primary">Control Supply Chain</button>
                            </div>
                            <span className="circle-before"></span>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="single-service">
                            <div className="content">
                                <span className="icon">
                                    <i className="fas fa-search"></i>
                                </span>
                                <h3 className="title">Track Medicines</h3>
                                <button onClick={redirect_to_track} className="btn btn-outline-primary">Track Medicines</button>
                            </div>
                            <span className="circle-before"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
