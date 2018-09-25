import React from 'react';

import Textbox from '../../../UI/Textbox/Textbox'
import classes from './PersonelDetails.css';

const PersonelDetails = (props) => {

    return (
        <div className={classes.PersonelDetails}>
            <div>
                <h4>1. Personel Details:</h4>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>
                            <Textbox placeholder="Enter name" tbclicked={(event)=>props.tbclicked(event,"name")} width="200px"/></td>
                        <td>Email:
                        </td>
                        <td><Textbox placeholder="Enter email" type="email" tbclicked={(event)=>props.tbclicked(event,"email")} width="200px"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            M.no:
                        </td>
                        <td>
                            <Textbox placeholder="Enter mobile no" type="number" tbclicked={(event)=>props.tbclicked(event,"mobile")}  width="200px"/>
                        </td>
                        <td>
                            Zip:</td>
                        <td>
                            <Textbox placeholder="Enter pin code" tbclicked={(event)=>props.tbclicked(event,"zip")} type="number"  width="200px"/>

                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default PersonelDetails;
