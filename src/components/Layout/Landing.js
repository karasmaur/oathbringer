import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = (props) => {
    useEffect(() => {
        if (props.security.validToken) {
            props.history.push("/main");
        }
    }, []);

    return (
        <div className="landing">
            <div className="light-overlay landing-inner text-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="display-4 mb-4" style={{color: "white"}}>
                                Welcome to Oathbringer.
                            </h3>
                            <p className="lead" style={{color: "white"}}>With this app you can create and manage your D&D characters during your campaigns!</p>
                            <p style={{color: "white"}}>
                                Create an account to start making and managing your characters:
                            </p>
                            <hr />
                            <Link className="btn btn-lg btn-primary mr-2" to="/register">
                                Register
                            </Link>
                            <Link className="btn btn-lg btn-secondary mr-2" to="/login">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Landing.propTypes = {
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});

export default connect(mapStateToProps)(Landing);
