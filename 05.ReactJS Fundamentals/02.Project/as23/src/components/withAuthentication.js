import React from 'react';
import { connect } from 'react-redux';
import { firebase } from '../firebase';

// Higher order component used to check if the current user is authenticated.
// Future implementation will be added to check if the user is admin to be used 
// in the Administration section as well as to allow only users to add games and players

const withAuthentication = (Component) => {
    class WithAuthentication extends React.Component {
        componentDidMount() {
            const { onSetAuthUser } = this.props;

            firebase.auth.onAuthStateChanged(authUser => {
                authUser
                    ? onSetAuthUser(authUser)
                    : onSetAuthUser(null);
            });
        }

        render() {
            return (
                <Component />
            );
        }
    }

    const mapDispatchToProps = (dispatch) => ({
        onSetAuthUser: (authUser) => dispatch({ type: 'AUTH_USER_SET', authUser }),
    });

    return connect(null, mapDispatchToProps)(WithAuthentication);
}

export default withAuthentication;