import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { CheckBoxIcon } from './CheckBoxIcon.js';
import classes from './LogInDesignV1.module.css';

interface Props {
  className?: string;
}
/* @figmaId 70:5 */
export const LogInDesignV1: FC<Props> = memo(function LogInDesignV1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle13}></div>
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
      <div className={classes.partners}>
        <div className={classes.image1}></div>
        <div className={classes.image2}></div>
      </div>
      <div className={classes.rectangle1}></div>
      <div className={classes.email}>Email</div>
      <div className={classes.rectangle5}></div>
      <div className={classes.password}>Password</div>
      <div className={classes.frame30}>
        <div className={classes.checkBox}>
          <CheckBoxIcon className={classes.icon} />
        </div>
        <div className={classes.rememberMe}>Remember me</div>
      </div>
      <div className={classes.forgotPassword}>Forgot password?</div>
      <div className={classes.lOGIN}>LOGIN</div>
      <button className={classes.button}>
        <div className={classes.login2}>Login</div>
      </button>
    </div>
  );
});
