import { ChangeEventHandler, FormEventHandler, memo, useState } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { CheckBoxIcon } from './CheckBoxIcon.js';
import classes from './LogInDesignV1.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}
interface MyFormProps extends React.HTMLProps<HTMLFormElement> {
  history: string[];
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange: FormEventHandler<HTMLFormElement>;
}

  export const Login1: FC<MyFormProps> = memo(function Login1(props) { 
  const [user, setuser] = useState({ Email: '', Password: ''});  
      const apiUrl = "https://localhost:44345/api/user/Login";    
      const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {    
        try{
          event.preventDefault();    
          debugger;   
          const data = { Email:user.Email, Password: user.Password };    
          axios.post(apiUrl, data)    
          .then((result) => {    
              debugger;  
              console.log(result.data);   
              const serializedState = JSON.stringify(result.data.UserDetails);  
            var a= localStorage.setItem('myData', serializedState);   
              console.log("A:",a)  
              const user =result.data.UserDetails;  
              console.log(result.data.message);  
              if (result.data.status == '200')    
                  props.history.push('/')    
              else    
              alert('Invalid User');    
          })        
          
        } catch { 
          alert("Erroare")

        }
            };    
            
            const onChange: ChangeEventHandler<HTMLInputElement> = (e) => { 
              e.persist();  
              setuser({ ...user, [e.target.name]: e.target.value });  
            }
/* @figmaId 70:5 */
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle13}></div>
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
      </div>
      <div className={classes.rectangle9}></div>
      <button>
          <Link to="/SignUp">
          <div className={classes.signUp}>Sing up</div>
          </Link>
          </button>  
      <div className={classes.login}>Login</div>
      <div className={classes.partners}>
        <div className={classes.image1}></div>
        <div className={classes.image2}></div>
      </div>
      <form onSubmit={onSubmit} className="user">

      <div className={classes.rectangle1}>
        <input type="email" className="form-control" value={user.Email} onChange={ onChange }  name="Email" id="Email" aria-describedby="emailHelp" placeholder="Enter Email"/> 
      </div>
      <div className={classes.rectangle5}>
        <input type="password" className="form-control" value={user.Password} onChange={ onChange }  name="Password" id="DepPasswordartment" placeholder="Password"/>
      </div>
      <div className={classes.frame30}>
        <div className={classes.checkBox}>
          <CheckBoxIcon className={classes.icon} />
        </div>
        <div className={classes.rememberMe}>Remember me</div>
      </div>
      <div className={classes.forgotPassword}>Forgot password?</div>
      <div className={classes.lOGIN}>LOGIN</div>
      <button className={classes.button}>
        <Link to="/">
        <div className={classes.login2}>Login</div>
        </Link>
      </button>
      </form>
    </div>
  );
});

export default Login1