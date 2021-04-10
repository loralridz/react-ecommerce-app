import React, { Component } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { CustomButton } from "../custom-button/custom-button.component";
import { FormInput } from "../form-component/form-input.component";

export class SignUp extends Component {
  // <
  //   {},
  //   {
  //     displayName: string,
  //     email: string,
  //     password: string,
  //     confirmPassword: string
  //   }
  // >
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password dont match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      // After doc is created we'll clear the form
      this.state = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      };
    } catch (err) {
      console.log(err);
    }
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I dont have an account</h2>
        <span>Sign up with email</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            value={displayName}
            name="displayName"
            handleChange={this.handleChange}
            label="Display Name"
          />
          <FormInput
            type="email"
            value={email}
            name="email"
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            type="password"
            value={password}
            name="password"
            handleChange={this.handleChange}
            label="Password"
          />
          <FormInput
            type="password"
            value={confirmPassword}
            name="confirmPassword"
            handleChange={this.handleChange}
            label="Confirm Password"
          />
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
