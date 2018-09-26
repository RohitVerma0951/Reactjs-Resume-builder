import React from 'react';

import Textbox from '../../../UI/Textbox/Textbox';
import classes from './Skills.css';

const Skills = (props) => (
    <div className={classes.Skills}>
        <div><h4>Skills:</h4></div>
        <div>
            <table style={{width:'100%'}}>
                <tbody>
                    <tr>
                        <td>1. <Textbox width="200px" tbclicked={(event)=>{props.skill_tb(event,"tb1")}}/></td>
                        <td>2. <Textbox width="200px"  tbclicked={(event)=>{props.skill_tb(event,"tb2")}}/></td>
                    </tr>
                    <tr>
                        <td>3. <Textbox width="200px"  tbclicked={(event)=>{props.skill_tb(event,"tb3")}}/></td>
                        <td>4. <Textbox width="200px"  tbclicked={(event)=>{props.skill_tb(event,"tb4")}}/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)

export default Skills;