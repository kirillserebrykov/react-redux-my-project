import React from 'react';
import styles from './log.module.css';

export const Required_Rrors_Email = ({input, meta ,...props }) => {


  return <div className={ meta.touched && meta.error &&  styles.wraperEmail} >  
    <input {...input} {...props} />
<div className={meta.touched && meta.error &&  styles.beforeEmail} ><span className={styles.textError}>{ meta.touched && meta.error}</span></div>
    </div>
};


export const Required_Rrors_Password = ({input, meta ,...props }) => {
debugger
  return <div className={ meta.touched && meta.error &&  styles.wraperEmail} >  
    <input {...input} {...props} />
<div className={meta.touched && meta.error &&  styles.beforeEmail} ><span className={styles.textError}>{ meta.touched && meta.error}</span></div>
    </div>
};







  








