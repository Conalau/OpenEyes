import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './ContactDesignV1.module.css';
import { Frame25Icon2 } from './Frame25Icon2.js';
import { Frame25Icon } from './Frame25Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 62:199 */
export const ContactDesignV1: FC<Props> = memo(function ContactDesignV1(props = {}) {
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
      <div className={classes.footer}>
        <div className={classes.rectangle92}></div>
        <div className={classes.openEyes}>OpenEyes</div>
        <div className={classes.rectangle10}></div>
        <div className={classes.frame25}>
          <Frame25Icon className={classes.icon} />
        </div>
        <div className={classes.appertaFoundation}>Apperta Foundation</div>
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
      <div className={classes.weReHereToHelpIfYouHaveAnyQues}>
        We&#39;re here to help! If you have any questions or concerns about OpenEyes Private Practice, please don&#39;t
        hesitate to get in touch with us. Our friendly and knowledgeable support team is available to assist you with
        any issues or inquiries you may have.
      </div>
      <div className={classes.contactUs2}>Contact us</div>
      <div className={classes.frame252}>
        <Frame25Icon2 className={classes.icon2} />
      </div>
      <div className={classes.getInTouch}>Get In Touch</div>
      <div className={classes.rectangle1}></div>
      <div className={classes.robertFox}>Robert Fox</div>
      <div className={classes.rectangle13}></div>
      <div className={classes.yournameEmailCom}>yourname@email.com</div>
      <div className={classes.rectangle14}></div>
      <div className={classes.yournameEmailCom2}>yourname@email.com</div>
      <button className={classes.button}>
        <div className={classes.send}>Send</div>
      </button>
      <div className={classes.fullName}>Full name</div>
      <div className={classes.email}>Email</div>
      <div className={classes.yourMessage}>Your Message</div>
    </div>
  );
});
