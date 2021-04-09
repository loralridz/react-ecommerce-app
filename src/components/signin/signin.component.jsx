import React, { Component } from "react";
import { CustomButton } from "../custom-button/custom-button.component";
import { FormInput } from "../form-component/form-input.component";
import "./signin.styles.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";

export class SignIn extends Component<
  {},
  { email?: string, password?: string }
> {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
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
          <CustomButton type="submit">SignIn</CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            SignIn with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
