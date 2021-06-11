import "./App.css";
import { Homepage } from "./pages/homepage/homepage.component";
import { Switch, Route, Redirect } from "react-router-dom";
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
      loading: false
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({ currentUser: user });
      // if user is signing in
      if (userAuth) {
        // get user ref
        const userRef = await createUserProfileDocument(userAuth);
        // subscribe(listen) to set state
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
        this.setState({ ...this.state, loading: true })
      }
      // if user logs out set user to null
      else {
        setCurrentUser(userAuth)
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
          <Route exact path="/signin"
          >
            {() => this.state.loading ?
              (<SignInAndSignUp />) : (<Redirect to="/" />)}
          </Route>
          {/* {this.props.currentUser ? <Redirect to="/" /> : <></>} */}
        </Switch>
      </div >
    );
  }
}
const mapStateToProps = (user) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
