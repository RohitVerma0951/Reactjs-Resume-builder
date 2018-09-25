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
                        <td>1. <Textbox width="200px"/></td>
                        <td>2. <Textbox width="200px"/></td>
                    </tr>
                    <tr>
                        <td>3. <Textbox width="200px"/></td>
                        <td>4. <Textbox width="200px"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)

export default Skills;