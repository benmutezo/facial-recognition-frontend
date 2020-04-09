import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            pass: "",
            name: ""
        }
    }
    onEmailChange = (e) => {
        this.setState({ email: e.target.value })


    }
    onRegPassChange = (e) => {
        this.setState({ pass: e.target.value })
    }

    onUserNameChange = (e) => {
        this.setState({ name: e.target.value })


    }

    onRegister = () => {
        if (!this.state.email) {
            console.log('nothing');
        }
        fetch('https://agile-ocean-22305.herokuapp.com/register', {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.pass,
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange("home");
                }
            })
    }

    render() {
        return (
            <article className="br3 shadow-5  grow ba mv4 w-100 w-50-m w-25-l mw6 center ">
                <main className="pa4 black-80">
                    <div className="measure tc">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="user-name">Name</label>
                                <input
                                    onChange={this.onUserNameChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-transparent hover-white w-100"
                                    type="name"
                                    name="user-name"
                                    id="username" />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                    onChange={this.onEmailChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-transparent hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                    onChange={this.onRegPassChange}
                                    className="b pa2 input-reset ba bg-transparent hover-bg-transparent hover-white w-100"
                                    type="password"
                                    name="current-password"
                                    id="password" />
                            </div>
                        </fieldset>
                        <div className="">
                            <input
                                onClick={this.onRegister}
                                className="b   ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br3"
                                type="submit"
                                value="register" />
                        </div>
                        <div className="lh-copy mt3">
                            <p href="#0" className="f6 link dim black db pointer" onClick={() => this.props.onRouteChange("signin")}>Go back</p>
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}

export default Register;
