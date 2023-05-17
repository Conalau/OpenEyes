import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './CheckoutDesignV1.module.css';
import { Frame25Icon } from './Frame25Icon.js';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}
/* @figmaId 62:239 */
export const CheckoutDesignV1: FC<Props> = memo(function CheckoutDesignV1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle4}></div>
      <div className={classes.frame1}>
        <div className={classes.home}>Home</div>
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
      <div className={classes.rectangle14}></div>
      <div className={classes.yourAccount}>
        <ol className={classes.list}>
          <li>
            <div className={classes.textBlock}>Your Account</div>
          </li>
        </ol>
      </div>
      <div className={classes.robertFoxGmailCom}>robert.fox@gmail.com</div>
      <div className={classes.edit}>Edit</div>
      <div className={classes.rectangle142}></div>
      <div className={classes.payment}>
        <ol className={classes.list2}>
          <li>
            <div className={classes.textBlock2}>Payment</div>
          </li>
        </ol>
      </div>
      <div className={classes.rectangle143}></div>
      <div className={classes.reviewPurchase}>
        <ol className={classes.list3}>
          <li>
            <div className={classes.textBlock3}>Review &amp; Purchase</div>
          </li>
        </ol>
      </div>
      <div className={classes.rectangle144}></div>
      <div className={classes.membershipSummary}>Membership Summary</div>
      <div className={classes.businessPlan}>Business Plan</div>
      <div className={classes.subtotal}>Subtotal</div>
      <div className={classes._19999}>$199.99</div>
      <div className={classes.tax}>Tax</div>
      <div className={classes.total}>Total</div>
      <div className={classes._199992}>$199.99</div>
      <div className={classes._0}>$0.00</div>
      <div className={classes.rectangle145}></div>
      <div className={classes.checkout}>
        <ol className={classes.list4}>
          <li>
            <div className={classes.textBlock4}>Checkout</div>
          </li>
        </ol>
      </div>
      <div className={classes.rectangle1}></div>
      <div className={classes.rectangle12}></div>
      <div className={classes.rectangle13}></div>
      <div className={classes.rectangle15}></div>
      <div className={classes.rectangle16}></div>
      <div className={classes.rectangle17}></div>
      <div className={classes.frame34}>
        <div className={classes.inputEmail}>
          <div className={classes.rectangle18}></div>
        </div>
        <div className={classes.inputEmail2}>
          <div className={classes.rectangle19}></div>
        </div>
        <div className={classes.inputEmail3}>
          <div className={classes.rectangle110}></div>
        </div>
      </div>
      <div className={classes.rectangle111}></div>
      <div className={classes.rectangle112}></div>
      <div className={classes.rectangle113}></div>
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.rectangle114}></div>
      <div className={classes.rectangle115}></div>
      <div className={classes.rectangle116}></div>
      <div className={classes.rectangle22}></div>
      <div className={classes.rectangle32}></div>
      <div className={classes.companyName}>Company Name</div>
      <div className={classes.siteName}>Site Name</div>
      <div className={classes.country}>Country* </div>
      <div className={classes.workflow}>Workflow</div>
      <div className={classes.companyContactName}>Company Contact Name</div>
      <div className={classes.contactEmail}>Contact Email</div>
      <div className={classes.contactNumber}>Contact Number</div>
      <div className={classes.administratorContactName}>Administrator Contact Name</div>
      <div className={classes.administratorContactEmail}>Administrator Contact Email</div>
      <div className={classes.administratorContactNumber}>Administrator Contact Number</div>
      <div className={classes.tehnicalLeadName}>Tehnical Lead Name</div>
      <div className={classes.tehnicalLeadEmail}>Tehnical Lead Email</div>
      <div className={classes.tehnicalLeadNumber}>Tehnical Lead Number</div>
      <div className={classes.frame35}>
        <div className={classes.continue}>Continue</div>
      </div>
      <button>
      <Link to="/UserProfile">
      <div className={classes.robertFoxGmailCom2}>robert.fox@gmail.com</div>
      </Link>
      </button>
    </div>
  );
});

export default CheckoutDesignV1