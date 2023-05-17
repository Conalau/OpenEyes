import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './AbotDesignV1.module.css';
import { Frame25Icon } from './Frame25Icon.js';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}
/* @figmaId 62:4 */
export const AbotDesignV1: FC<Props> = memo(function AbotDesignV1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle4}></div>
      <div className={classes.frame1}>
      <button>
        <Link to="/">
        <div className={classes.home}>Home</div>
        </Link>
        </button>
        <div className={classes.about}>About</div>
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
      <button>
      <Link to="/SignUp">
      <div className={classes.signUp}>Sign up</div>
      </Link>
      </button>
      <button>
      <Link to="/Login">
      <div className={classes.login}>Login</div>
      </Link>
      </button>
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
      <div className={classes.rectangle12}></div>
      <div className={classes.aboutOpenEyesPrivatePractice}>
        <p className={classes.labelWrapper2}>
          <span className={classes.label4}>About </span>
          <span className={classes.label5}>OpenEyes </span>
          <span className={classes.label6}>Private Practice</span>
        </p>
      </div>
      <div className={classes.welcomeToOpenEyesPrivatePracti}>
        Welcome to OpenEyes Private Practice, the ophthalmology system designed to help clinicians track patient
        pathways for ophthalmology from appointment bookings through to operation bookings and everything in between. At
        OpenEyes Private Practice, we understand that every practice is unique, and we&#39;re dedicated to providing
        customizable solutions that meet your specific needs.
      </div>
      <div className={classes.weReCommittedToDeliveringTheHi}>
        We&#39;re committed to delivering the highest level of service to our customers, and we&#39;re proud to be the
        authorized development partner for OpenEyes. Thank you for choosing OpenEyes Private Practice. We look forward
        to helping you transform your practice.
      </div>
      <div className={classes.ourMissionIsToHelpCliniciansWo}>
        Our mission is to help clinicians work more efficiently and effectively, so they can provide the best possible
        care to their patients. We offer a range of packages to suit practices of all sizes, and our expert team is on
        hand to provide consultation, customization, and training services to help you make the most of OpenEyes Private
        Practice.
      </div>
    </div>
  );
});

export default AbotDesignV1