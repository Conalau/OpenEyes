import { memo } from 'react';
import type { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import  HomepageDesignV1  from './components/HomepageDesignV1/HomepageDesignV1';
import  PackageDesignV1  from './components/PackageDesignV1/PackageDesignV1';
import  LogInDesignV1  from './components/LogInDesignV1/LogInDesignV1';
import  SingUpDesignV1  from './components/SingUpDesignV1/SingUpDesignV1';
import  ContactDesignV1  from './components/ContactDesignV1/ContactDesignV1';
import  AbotDesignV1  from './components/AbotDesignV1/AbotDesignV1';
import  MarketPlaceDesignV1  from './components/MarketPlaceDesignV1/MarketPlaceDesignV1';
import  CheckoutDesignV1  from './components/CheckoutDesignV1/CheckoutDesignV1';
import  UserPageDesignV1  from './components/UserPageDesignV1/UserPageDesignV1';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <Router>
      <Switch>
        <Route exact path="/Packages" component={PackageDesignV1}>
        <div className={`${resets.storybrainResets} ${classes.root}`}></div>
        </Route>
        <Route exact path="/Login" component={LogInDesignV1}>
        <div className={`${resets.storybrainResets} ${classes.root}`}></div>
        </Route>
        <Route exact path="/About" component={AbotDesignV1}>
        <div className={`${resets.storybrainResets} ${classes.root}`}></div>
        </Route>
        <Route exact path="/Contact" component={ContactDesignV1}>
        <div className={`${resets.storybrainResets} ${classes.root}`}></div>
        </Route>
        <Route exact path="/Checkout" component={CheckoutDesignV1}>
        <div className={`${resets.storybrainResets} ${classes.root}`}></div>
        </Route>
        <Route exact path="/UserProfile" component={UserPageDesignV1}>
        <div className={`${resets.storybrainResets} ${classes.root}`}></div>
        </Route>
        <Route exact path="/MarketPlace" component={MarketPlaceDesignV1}>
        <div className={`${resets.storybrainResets} ${classes.root}`}></div>
        </Route>
        <Route exact path="/SignUp" component={SingUpDesignV1}>
        <div className={`${resets.storybrainResets} ${classes.root}`}></div>
        </Route>
        <Route exact path="/" component={HomepageDesignV1}>
          <div className={`${resets.storybrainResets} ${classes.root}`}></div>
        </Route>
      </Switch>
    </Router>
  );
});
