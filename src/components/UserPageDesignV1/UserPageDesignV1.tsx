import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse2170Icon } from './Ellipse2170Icon.js';
import { Frame25Icon } from './Frame25Icon.js';
import classes from './UserPageDesignV1.module.css';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}
/* @figmaId 72:295 */
export const UserPageDesignV1: FC<Props> = memo(function UserPageDesignV1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle4}></div>
      <div className={classes.frame1}>
      <button>
        <Link to="/">
        <div className={classes.home}>Home</div>
        </Link>
        </button>
        <button>
        <Link to="/About">
        <div className={classes.about}>About</div>
        </Link>
        </button>
        <button>
        <Link to="/Contact">
        <div className={classes.contactUs}>Contact us</div>
        </Link>
        </button>
        <button>
        <Link to="/Packages">
        <div className={classes.packages}>Packages</div>
        </Link>
        </button>
        <button>
        <Link to="/MarketPlace">
        <div className={classes.marketplace}>Marketplace</div>
        </Link>
        </button>
      </div>
      <div className={classes.rectangle9}></div>
      <div className={classes.footer}>
        <div className={classes.rectangle92}></div>
        <div className={classes.openEyes}>OpenEyes</div>
        <div className={classes.rectangle10}></div>
        <div className={classes.frame25}>
          <Frame25Icon className={classes.icon} />
        </div>
        <div className={classes.toukanLabsContact}>ToukanLabs contact</div>
        <div className={classes.copyright2023OpenEyesAllRightA}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}> Copyright ©2023 </span>
            <span className={classes.label2}>OpenEyes. </span>
            <span className={classes.label3}>All right are reserved</span>
          </p>
        </div>
      </div>
      <div className={classes.ellipse2170}>
        <Ellipse2170Icon className={classes.icon2} />
      </div>
      <div className={classes.robertFox}>Robert Fox</div>
      <div className={classes.robertFoxGmailCom}>robert.fox@gmail.com</div>
      <div className={classes.signOut}>sign out</div>
      <div className={classes.line7}></div>
      <div className={classes.mySubscription}>My subscription</div>
      <div className={classes.frame33}>
        <div className={classes.starter}>Starter</div>
        <div className={classes._10PerMonth}>$10 per month</div>
        <button className={classes.button}>
          <div className={classes.cancel}>cancel</div>
        </button>
        <button className={classes.button2}>
          <div className={classes.upgrade}>upgrade</div>
        </button>
      </div>
      <div className={classes._10820231092023}>10.08.2023-10.09.2023</div>
      <div className={classes.purchaseHistory}>Purchase history</div>
      <div className={classes.robertFoxGmailCom2}>robert.fox@gmail.com</div>
      <div className={classes.frame34}>
        <div className={classes.starter2}>Starter</div>
        <div className={classes._10PerMonth2}>$10 per month</div>
        <button className={classes.button3}>
          <div className={classes.expired}>Expired</div>
        </button>
        <div className={classes._108202310920232}>10.08.2023-10.09.2023</div>
      </div>
      <div className={classes.frame35}>
        <div className={classes.business}>Business</div>
        <div className={classes._10PerMonth3}>$10 per month</div>
        <button className={classes.button4}>
          <div className={classes.expired2}>Expired</div>
        </button>
        <div className={classes._108202310920233}>10.08.2023-10.09.2023</div>
      </div>
    </div>
  );
});

export default UserPageDesignV1
