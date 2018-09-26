import React from 'react';

import classes from './Hobbies.css';
import Textbox from '../../../UI/Textbox/Textbox';

const Hobbies = (props) =>{
    return(
        <div className={classes.Hobbies}>
            <div>
                <h4 className={{marginLeft:'10px'}}>3. Hobbies: </h4>
            </div>
            <div>
                1. <Textbox width="200px" tbclicked={(event)=>{props.hobbies(event,"tbHobby1")}}/>
            </div>
            <div>
                2. <Textbox width="200px" tbclicked={(event)=>{props.hobbies(event,"tbHobby2")}}/>
            </div>
            <div>
                3. <Textbox width="200px" tbclicked={(event)=>{props.hobbies(event,"tbHobby3")}}/>
            </div>
            <div>
                4. <Textbox width="200px" tbclicked={(event)=>{props.hobbies(event,"tbHobby4")}}/>
            </div>
        </div>
    )
}

export default Hobbies;