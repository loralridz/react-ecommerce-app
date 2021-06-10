import "./App.css";
import { Homepage } from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import { SignInAndSignUp } from "./pages/signin-signup/signin-signup.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import React from "react";
import { connect } from 'react-redux';
import { setCurrentUser } from "./redux/user/user.actions"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({ currentUser: user });
      // if user is signing in
      if (userAuth) {
        // get user ref
        const userRef = await createUserProfileDocument(userAuth);
        // subscribe(listen) to set state
        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            },
            () => {
              // to get state(which is async-not fully populated) pass function as 2nd param n print
              // console.log(this.state);
            }
          );
        });
      }
      // if user logs out set user to null
      else {
        this.setState({ currentUser: userAuth });
      }
      console.log("user", userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  setCurrentUser: user => dispatch(setCurrentUser(user))
}
export default connec(null, mapDispatchToProps)(App);
