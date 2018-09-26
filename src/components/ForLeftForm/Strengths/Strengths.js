import React from 'react';

import classes from './Strengths.css';
import Textbox from '../../../UI/Textbox/Textbox';

const Strengths = (props) =>{
    return(
        <div className={classes.Strengths}>
            <div>
                <h4 className={{marginLeft:'10px'}}>3. Strengths: </h4>
            </div>
            <div>
                1. <Textbox width="200px" tbclicked={(event)=>{props.strengths(event,"strength1")}}/>
            </div>
            <div>
                2. <Textbox width="200px" tbclicked={(event)=>{props.strengths(event,"strength2")}}/>
            </div>
            <div>
                3. <Textbox width="200px" tbclicked={(event)=>{props.strengths(event,"strength3")}}/>
            </div>
            <div>
                4. <Textbox width="200px" tbclicked={(event)=>{props.strengths(event,"strength4")}}/>
            </div>
        </div>
    )
}

export default Strengths;