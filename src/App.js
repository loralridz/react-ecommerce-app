import "./App.css";
import { Homepage } from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import { Header } from "./components/header/header.component";
import { SignInAndSignUp } from "./pages/signin-signup/signin-signup.component";

function App() { 
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route  path="/shop" component={ShopPage} />
        <Route  path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
