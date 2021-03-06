import React from 'react';

import Textbox from '../../../UI/Textbox/Textbox';
import classes from './ProjectsUndertaken.css';

const ProjectsUndertaken = (props) => {
    return(
        <div className={classes.ProjectsUndertaken}>
            <div><h4>Projects Undertaken:</h4></div>
           
            <table style={{width: '100%',marginLeft: '40px'}}>
                <tbody>
                    <tr>
                        <td>1. Name:</td>
                        <td><Textbox width="405px" tbclicked={(event)=>{props.projects(event,"pro1title")}} placeholder="Project name"/></td>
                    </tr>
                </tbody>
            </table>

            <div>
            <textarea  onChange={(event)=>{props.projects(event,"pro1desc")}}  style={{marginLeft: '17px',width: '500px',resize:'none', fontFamily:'Times New Roman',border:'1px solid rgb(226, 223, 223)'}} placeholder="Description"></textarea>
            </div>
            <table style={{width: '100%',marginLeft: '40px'}}>
                <tbody>
                    <tr>
                        <td>2. Name:</td>
                        <td><Textbox width="405px" tbclicked={(event)=>{props.projects(event,"pro2title")}}  placeholder="Project name"/></td>
                    </tr>
                </tbody>
            </table>

            <div>
            <textarea  onChange={(event)=>{props.projects(event,"pro2desc")}}  style={{marginLeft: '17px',width: '500px',resize:'none', fontFamily:'Times New Roman',border:'1px solid rgb(226, 223, 223)'}} placeholder="Description"></textarea>
            </div>
        </div>
    )
}

export default ProjectsUndertaken;