import React from 'react';

import Textbox from '../../../UI/Textbox/Textbox';
import classes from './EducationDetailsTemplate.css';

const EducationDetailsTemplate =(props) =>{

    return(
        <div className={classes.EducationDetailsTemplate}>
            <div>
                <p><b><span style={{textDecoration:'capitalize',marginLeft:'20px'}}>{props.eduInstitute}</span></b></p>
                <textarea onChange={props.taclicked}  style={{marginLeft: '17px',width: '513px',resize:'none', fontFamily:'Times New Roman',border:'1px solid rgb(226, 223, 223)'}} placeholder={props.eduName}></textarea>
                
            </div>
            <div>
                <table style={{width:'100%'}}>
                    <tbody>
                        <tr>
                            <td>1 <Textbox placeholder="Start year" tbclicked={(event)=>{props.tbclicked(event,"start_year")}} width="200px"/></td>
                            <td>2 <Textbox placeholder="End year" tbclicked={(event)=>props.tbclicked(event,"end_year")} width="200px"/></td>
                        </tr>
                        <tr>
                            <td>3 <Textbox placeholder="Location" tbclicked={(event)=>props.tbclicked(event,"location")} width="200px"/></td>
                            <td>4 <Textbox placeholder="Percentile" tbclicked={(event)=>props.tbclicked(event,"percentile")} width="200px"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EducationDetailsTemplate;