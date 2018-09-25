import React from 'react';

import classes from './Address.css';
import Textbox from '../../../UI/Textbox/Textbox';

const Address = (props) => {
    return(
        <div className={classes.Address}>
            <div><h4 style={{marginLeft:'10px'}}>2. Address Details:</h4></div>
           <table style={{width:'100%'}}>
               <tbody>
                   <tr>
                       <td><Textbox width="250px" tbclicked={(event)=>props.tbclicked(event,"address1")} placeholder="Locality,H.no.,City/Town/Village"/></td>
                       <td><Textbox width="250px" tbclicked={(event)=>props.tbclicked(event,"address2")}  placeholder="State, country"/></td>
                   </tr>
               </tbody>
           </table>
        </div>
    )
}

export default Address;