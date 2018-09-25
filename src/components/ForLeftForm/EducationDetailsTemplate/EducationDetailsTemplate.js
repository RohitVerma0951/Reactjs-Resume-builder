import React from 'react';

import Textbox from '../../../UI/Textbox/Textbox';
import classes from './EducationDetailsTemplate.css';

const EducationDetailsTemplate =(props) =>{

    return(
        <div className={classes.EducationDetailsTemplate}>
            <div>
                <p><b><span style={{textDecoration:'capitalize',marginLeft:'20px'}}>{props.eduInstitute}</span></b></p>
                <textarea  style={{marginLeft: '17px',width: '513px',resize:'none', fontFamily:'Times New Roman',border:'1px solid rgb(226, 223, 223)'}} placeholder={props.eduName}></textarea>
                
            </div>
            <div>
                <table style={{width:'100%'}}>
                    <tbody>
                        <tr>
                            <td>1 <Textbox placeholder="Start year" width="200px"/></td>
                            <td>2 <Textbox placeholder="End year" width="200px"/></td>
                        </tr>
                        <tr>
                            <td>3 <Textbox placeholder="Location" width="200px"/></td>
                            <td>4 <Textbox placeholder="Percentile" width="200px"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EducationDetailsTemplate;