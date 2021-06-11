import React, { Component } from "react";
import { CustomButton } from "../custom-button/custom-button.component";
import { FormInput } from "../form-component/form-input.component";
import "./signin.styles.scss";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
      
    } catch (er) {
      console.log(er);
    }
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>Already have an account</h2>
        <span>Sign in with email</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
          />
          <div className="buttons">
            <CustomButton type="submit">SignIn</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              SignIn with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
