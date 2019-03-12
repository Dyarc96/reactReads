import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import './GoogleAuth.css';

class GoogleAuth extends React.Component {

    // Metoda po załadowaniu, opisuje metode uzycia autoryzacji google'a. Działanie GAPI.
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '408563209083-lp9dtt9pbsp4dl7a0ab9tj0fkj4gf55l.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    // Nadpisuje stan w oparciu o ^ metode
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    // logowanie po kliku 
    onSignInClick = () => {
        this.auth.signIn();
    };

    // wylogowywanie po kliku
    onSignOutClick = () => {
        this.auth.signOut();
    };

    //render buttonow na podstawie stanu
    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <div className="auth">
                    <button className="google-button" onClick={this.onSignOutClick}>
                        <i className="fab fa-google fa-2x" />
                        SignOut
                    </button>
                </div>
            );
        } else {
            return (
                <div className="auth">
                    <button className="google-button" onClick={this.onSignInClick}>
                        <i className="fab fa-google fa-2x" />
                        Sign in with google
                    </button>
                </div>
            );
        }
    }
    
    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

// zamienia state na props w tym komponencie
const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);