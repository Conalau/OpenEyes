import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './MarketPlaceDesignV1.module.css';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}
/* @figmaId 129:9 */
export const MarketPlaceDesignV1: FC<Props> = memo(function MarketPlaceDesignV1(props = {}) {
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
        <div className={classes.marketplace}>Marketplace</div>
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
      <div className={classes.rectangle15}></div>
      <div className={classes.rectangle16}></div>
      <div className={classes.title}>Title</div>
      <div className={classes.title2}>Title</div>
      <div className={classes.boremIpsumDolorSitAmetConsecte}>
        Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
        odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
        condimentum ac, vestibulum eu nisl.Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur
        neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
      </div>
      <div className={classes.boremIpsumDolorSitAmetConsecte2}>
        Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
        odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
        condimentum ac, vestibulum eu nisl.Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur
        neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
      </div>
    </div>
  );
});

export default MarketPlaceDesignV1