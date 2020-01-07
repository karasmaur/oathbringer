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
        <div>
            <h3>Welcome to Oathbringer</h3>
            <p>With this app you can create and manage your D&D characters during your campaigns!</p>
            <hr />
            <p>Create an account to start making and managing your characters:</p>

            <Link to="/register">
                Register
            </Link>
            <Link to="/login">
                Login
            </Link>
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
