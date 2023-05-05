import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { CarbonAnalyticsCustomIcon } from './CarbonAnalyticsCustomIcon.js';
import { CarbonGuiManagementIcon } from './CarbonGuiManagementIcon.js';
import { Frame25Icon } from './Frame25Icon.js';
import classes from './HomepageDesignV1.module.css';
import { Popular_calendarBSIcon } from './Popular_calendarBSIcon.js';

import { Link } from "react-router-dom";

interface Props {
  className?: string;
}
/* @figmaId 45:75 */
export const HomepageDesignV1: FC<Props> = memo(function HomepageDesignV1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle11}></div>
      <div className={classes.benefits}>
        <div className={classes.freeShipping}>
          <div className={classes.carbonGuiManagement}>
            <CarbonGuiManagementIcon className={classes.icon} />
          </div>
          <div className={classes.frame21}>
            <div className={classes.enhancedPracticeManagement}>Enhanced Practice Management</div>
            <div className={classes.simplifyPracticeManagementAndS}>
              Simplify practice management and save time with OpenEyes Private Practice
            </div>
          </div>
        </div>
        <div className={classes.support247}>
          <div className={classes.carbonAnalyticsCustom}>
            <CarbonAnalyticsCustomIcon className={classes.icon2} />
          </div>
          <div className={classes.frame22}>
            <div className={classes.customizableSolutions}>Customizable Solutions</div>
            <div className={classes.tailorOpenEyesPrivatePracticeT}>
              Tailor OpenEyes Private Practice to meet the unique needs of your practice.
            </div>
          </div>
        </div>
        <div className={classes._30DaysReturn}>
          <div className={classes.popular_calendarBS}>
            <Popular_calendarBSIcon className={classes.icon3} />
          </div>
          <div className={classes.frame23}>
            <div className={classes.streamlinedPatientPathways}>Streamlined Patient Pathways</div>
            <div className={classes.easilyTrackPatientProgressFrom}>
              Easily track patient progress from appointments to operations with OpenEyes Private Practice.
            </div>
          </div>
        </div>
      </div>
      <div className={classes.rectangle6}></div>
      <div className={classes.aboutOpenEyesPrivatePractice}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>About </span>
          <span className={classes.label2}>OpenEyes</span>
          <span className={classes.label3}> </span>
          <span className={classes.label4}>Private Practice</span>
        </p>
      </div>
      <div className={classes.openEyesPrivatePracticeIsThePo}>
        OpenEyes Private Practice is the powerful solution for private ophthalmology practices looking to streamline
        patient pathways. Manage appointments, operations, and more with ease. Choose the package that fits your needs
        and budget.OpenEyes Private Practice is the powerful solution for private ophthalmology practices looking to
        streamline patient pathways. Manage appointments, operations, and more with ease. Choose the package that fits
        your needs and budget.
      </div>
      <button className={classes.button}>
        <div className={classes.seeMore}>See more</div>
      </button>
      <div className={classes.rectangle7}></div>
      <div className={classes.whatCliniciansAreSaying}>
        <p className={classes.labelWrapper2}>
          <span className={classes.label5}>What </span>
          <span className={classes.label6}>Clinicians</span>
          <span className={classes.label7}> are Saying</span>
        </p>
      </div>
      <div className={classes.openEyesPrivatePracticeIsThePo2}>
        OpenEyes Private Practice is the powerful solution for private ophthalmology practices looking to streamline
        patient pathways. Manage appointments, operations, and more with ease. Choose the package that fits your needs
        and budget.OpenEyes Private Practice is the powerful solution for private ophthalmology practices looking to
        streamline patient pathways. Manage appointments, operations, and more with ease. Choose the package that fits
        your needs and budget.
      </div>
      <div className={classes.footer}>
        <div className={classes.rectangle9}></div>
        <div className={classes.openEyes}>OpenEyes</div>
        <div className={classes.rectangle10}></div>
        <div className={classes.frame25}>
          <Frame25Icon className={classes.icon4} />
        </div>
        <div className={classes.appertaFoundation}>Apperta Foundation</div>
        <div className={classes.toukanLabsContact}>ToukanLabs contact</div>
        <div className={classes.copyright2023OpenEyesAllRightA}>
          <p className={classes.labelWrapper3}>
            <span className={classes.label8}> Copyright ©2023 </span>
            <span className={classes.label9}>OpenEyes. </span>
            <span className={classes.label10}>All right are reserved</span>
          </p>
        </div>
      </div>
      <div className={classes.heroV2}>
        <div className={classes.rectangle2}></div>
        <div className={classes.openEyes2}>
          <p className={classes.labelWrapper4}>
            <span className={classes.label11}>Open</span>
            <span className={classes.label12}>Eyes</span>
          </p>
        </div>
        <div className={classes.privatePractice}>Private Practice</div>
        <div className={classes.openEyesPrivatePracticeIsThePo3}>
          OpenEyes Private Practice is the powerful solution for private ophthalmology practices looking to streamline
          patient pathways. Manage appointments, operations, and more with ease. Choose the package that fits your needs
          and budget.
        </div>
        <div className={classes.buton}>
          <div className={classes.purchaseNow}>Purchase Now</div>
        </div>
        <div className={classes.partners}>
          <div className={classes.image1}></div>
          <div className={classes.image2}></div>
        </div>
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
        </div>
        <div className={classes.rectangle92}></div>
        <button>
          <Link to="/SingUp">
          <div className={classes.signUp}>Sing up</div>
          </Link>
          </button>  
        <button>
          <Link to="/Login">
          <div className={classes.login}>Login</div>
          </Link>
          </button>  
      </div>
      <div className={classes.image5}></div>
    </div>
  );
});
