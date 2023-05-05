import { memo } from 'react';
import type { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { HomepageDesignV1 } from './components/HomepageDesignV1/HomepageDesignV1';
import { PackageDesignV1 } from './components/PackageDesignV1/PackageDesignV1';
import { LogInDesignV1 } from './components/LogInDesignV1/LogInDesignV1';
import { SingUpDesignV1 } from './components/SingUpDesignV1/SingUpDesignV1';
import { ContactDesignV1 } from './components/ContactDesignV1/ContactDesignV1';
import { AbotDesignV1 } from './components/AbotDesignV1/AbotDesignV1';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <Router>
      <Switch>
        <Route path="/Packages">
        <div className={`${resets.storybrainResets} ${classes.root}`}>
          <PackageDesignV1 />      
        </div>
        </Route>
        <Route path="/Login">
        <div className={`${resets.storybrainResets} ${classes.root}`}>
          <LogInDesignV1 />      
        </div>
        </Route>
        <Route path="/About">
        <div className={`${resets.storybrainResets} ${classes.root}`}>
          <AbotDesignV1 />      
        </div>
        </Route>
        <Route path="/Contact">
        <div className={`${resets.storybrainResets} ${classes.root}`}>
          <ContactDesignV1 />      
        </div>
        </Route>
        <Route path="/SignUp">
        <div className={`${resets.storybrainResets} ${classes.root}`}>
          <SingUpDesignV1 />      
        </div>
        </Route>
        <Route path="/">
          <div className={`${resets.storybrainResets} ${classes.root}`}>  
            <HomepageDesignV1 />
          </div>
        </Route>
      </Switch>
    </Router>
  );
});
