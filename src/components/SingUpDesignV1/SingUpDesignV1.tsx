import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse2171Icon } from './Ellipse2171Icon.js';
import { Ellipse2172Icon } from './Ellipse2172Icon.js';
import { Ellipse2173Icon } from './Ellipse2173Icon.js';
import { Ellipse2174Icon } from './Ellipse2174Icon.js';
import { Ellipse2175Icon } from './Ellipse2175Icon.js';
import { Ellipse2176Icon } from './Ellipse2176Icon.js';
import { Ellipse2177Icon } from './Ellipse2177Icon.js';
import { Ellipse2178Icon } from './Ellipse2178Icon.js';
import { Ellipse2179Icon } from './Ellipse2179Icon.js';
import { Ellipse2180Icon } from './Ellipse2180Icon.js';
import { Ellipse2181Icon } from './Ellipse2181Icon.js';
import { Ellipse2182Icon } from './Ellipse2182Icon.js';
import classes from './SingUpDesignV1.module.css';

interface Props {
  className?: string;
}
/* @figmaId 72:128 */
export const SingUpDesignV1: FC<Props> = memo(function SingUpDesignV1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle4}></div>
      <div className={classes.frame1}>
        <div className={classes.home}>Home</div>
        <div className={classes.about}>About</div>
        <div className={classes.contactUs}>Contact us</div>
        <div className={classes.packages}>Packages</div>
      </div>
      <div className={classes.rectangle9}></div>
      <div className={classes.signUp}>Sign up</div>
      <div className={classes.login}>Login</div>
      <div className={classes.rectangle1}></div>
      <div className={classes.robertFox}>Robert Fox</div>
      <div className={classes.rectangle12}></div>
      <div className={classes.yournameEmailCom}>yourname@email.com</div>
      <div className={classes.rectangle13}></div>
      <div className={classes.rectangle14}></div>
      <div className={classes.singUp}>Sing up</div>
      <button className={classes.button}>
        <div className={classes.createAccount}>Create account</div>
      </button>
      <div className={classes.rectangle132}></div>
      <div className={classes.fullName}>Full name</div>
      <div className={classes.email}>Email</div>
      <div className={classes.createPassword}>Create password</div>
      <div className={classes.confirmPassword}>Confirm password</div>
      <div className={classes.ellipse2171}>
        <Ellipse2171Icon className={classes.icon} />
      </div>
      <div className={classes.ellipse2177}>
        <Ellipse2177Icon className={classes.icon2} />
      </div>
      <div className={classes.ellipse2172}>
        <Ellipse2172Icon className={classes.icon3} />
      </div>
      <div className={classes.ellipse2178}>
        <Ellipse2178Icon className={classes.icon4} />
      </div>
      <div className={classes.ellipse2173}>
        <Ellipse2173Icon className={classes.icon5} />
      </div>
      <div className={classes.ellipse2179}>
        <Ellipse2179Icon className={classes.icon6} />
      </div>
      <div className={classes.ellipse2174}>
        <Ellipse2174Icon className={classes.icon7} />
      </div>
      <div className={classes.ellipse2180}>
        <Ellipse2180Icon className={classes.icon8} />
      </div>
      <div className={classes.ellipse2175}>
        <Ellipse2175Icon className={classes.icon9} />
      </div>
      <div className={classes.ellipse2181}>
        <Ellipse2181Icon className={classes.icon10} />
      </div>
      <div className={classes.ellipse2176}>
        <Ellipse2176Icon className={classes.icon11} />
      </div>
      <div className={classes.ellipse2182}>
        <Ellipse2182Icon className={classes.icon12} />
      </div>
      <div className={classes.frame32}>
        <div className={classes.alreadyAUser}>Already a user?</div>
        <div className={classes.frame31}>
          <div className={classes.login2}>Login</div>
          <div className={classes.line8}></div>
        </div>
      </div>
    </div>
  );
});
