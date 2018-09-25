import React from 'react';

import classes from './Textbox.css';

const Textbox = (props) => {

    let type ="input"
    if(props.type) {
        type = props.type
    }

    return(

        <input 
            style={{width:props.width,textDecoration:'capitalize'}}
            className={classes.Textbox} 
            type={type} 
            onChange={props.tbclicked}
            placeholder={props.placeholder}/>
    )

}
export default Textbox;
