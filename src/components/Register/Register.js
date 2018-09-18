import React from 'react';
import vars from '../../vars'
import url from 'url'

class Register extends React.Component {
    onNameChange = (event) => {
        this.setState({name: event.target.value})
    };
    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    };
    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    };
    onSubmitSignIn = () => {
        fetch(url.resolve(vars.BACKEND_URL, 'register'), {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home');
                }
            })
    };

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    render() {
        const {onRouteChange} = this.props;
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m mw6 shadow-5 center">
                <main className="pa4 mt5 mb5 white-80 w-80">
                    <div className="measure w-100">
                        <fieldset id="register" className="ba b--transparent ph0 mh0">
                            <legend className="f1 center fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input
                                    className="pa2 input-reset hover-bg-dark-blue hover-white w-100"
                                    type="text"
                                    name="name-register"
                                    id="name-register"
                                    onChange={this.onNameChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                    className="pa2 input-reset hover-bg-dark-blue hover-white w-100"
                                    type="email"
                                    name="email-address-register"
                                    id="email-address-register"
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                    className="pa2 input-reset hover-bg-dark-blue hover-white w-100"
                                    type="password"
                                    name="password-register"
                                    id="password-register"
                                    onChange={this.onPasswordChange}
                                />
                            </div>
                        </fieldset>
                        <div>
                            <input
                                onClick={this.onSubmitSignIn}
                                className="b mt3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Sign Up"
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => onRouteChange('signin')}
                               className="mt3 pa2 f6 link shadow-hover inline-flex underline black db pointer">Signin</p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Register;