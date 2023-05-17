import { ChangeEventHandler, FormEvent, FormEventHandler, memo, useState } from 'react';
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

export const Register: FC<MyFormProps> = memo(function Register(props) {  
  const [data, setdata] = useState({ Email: '', Password: '', UserName: '' })  
  const apiUrl = "https://localhost:44345/api/user/InsertUser";  

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const data1 = { Email: data.Email, Password: data.Password, EmployeeName: data.UserName};  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        console.log(result.data);  
        if (result.data.Status === 'Invalid')  
          alert('Invalid User');  
        else  
          props.history.push('/')  
      })  
  }

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => { 
    e.persist();  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }
  
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
      </div>
      <div className={classes.rectangle9}></div>
      <div className={classes.signUp}>Sign up</div>
      <button>
          <Link to="/Login">
          <div className={classes.login}>Login</div>
          </Link>
          </button>  
      <form onSubmit={onSubmit} className="user">
      <div className={classes.rectangle1}>
      <input type="text" name="UserName" onChange={onChange} value={data.UserName} className="form-control" id="Name" placeholder="UserName" />
      </div>e
       
      <div className={classes.rectangle12}>
      <input type="email" className="form-control" value={data.Email} onChange={ onChange }  name="Email" id="Email" aria-describedby="emailHelp" placeholder="Enter Email"/>
      </div>
        
      <div className={classes.rectangle13}>
        v<input type="Password" name="Password" onChange={onChange} value={data.Password} className="form-control" id="exampleLastName" placeholder="Password" />
      </div>
      <div className={classes.singUp}>Sing up</div>
      <button className={classes.button}>
        <div className={classes.createAccount}>Create account</div>
      </button>
      <div className={classes.rectangle132}></div>
      <div className={classes.fullName}>Full name</div>
      <div className={classes.email}>Email</div>
      <div className={classes.password}>Password</div>
        <div className={classes.alreadyAUser}>Already a user?</div>
        <div className={classes.frame31}>
        <button className={classes.button}>
        <Link to="/Login">
          <div className={classes.login2}>Login</div>
          </Link>
      </button>
          <div className={classes.line8}></div>
        </div>
      </form>
    </div>
  );
});

export default Register;
