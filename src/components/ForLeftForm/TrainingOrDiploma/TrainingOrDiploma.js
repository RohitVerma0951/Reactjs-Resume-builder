import React from 'react';

import classes from './TrainingOrDiploma.css';

const TrainingOrDiploma = () => {
    return(
        <div className={classes.TrainingOrDiploma}>
            <div>
                <h4>Training/Diploma(if any):</h4>
                <textarea cols="1" style={{marginLeft: '17px',width: '513px',resize:'none', fontFamily:'Times New Roman',border:'1px solid rgb(226, 223, 223)'}} placeholder="Title"></textarea>
            </div>
            <table style={{width:'100%',marginLeft: '38px'}}>
                <tbody>
                    <tr>
                        <td>From:</td>
                        <td><input type="date"/></td>
                        <td>To:</td>
                        <td><input type="date"/></td>
                    </tr>
                </tbody>
            </table>
            <div>
                <textarea cols="1" style={{marginLeft: '17px',boxSizing:'border-box',height:'100px',padding:'10px',width: '519px',resize:'none', fontFamily:'Times New Roman',border:'1px solid rgb(226, 223, 223)'}} placeholder="Description"></textarea>
                </div>
        </div>
    )
}

export default TrainingOrDiploma;