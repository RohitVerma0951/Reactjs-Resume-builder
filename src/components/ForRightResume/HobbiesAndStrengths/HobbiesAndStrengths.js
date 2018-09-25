import React from 'react';

import classes from './HobbiesAndStrengths.css';

class HobbiesAndStrengths extends React.Component{

    render(){

        let Hobbies = (
            <div className={classes.HobbiesAndStrengths}>
                <div>
                    <p><span  style={{textDecoration:'capitalize',color:'#18afd2',fontSize:'1.3em'}}><u><b>Hobbies:</b></u></span></p>
                </div>
                <div style={{fontSize:'1em'}}>
                    <ul>
                        <li>To Learn New tech.</li>
                        <li>Exploring new places.</li>
                        <li>Listening to music.</li>
                    </ul>
                </div>
            </div>
        );

        const Strengths = (
            <div className={classes.HobbiesAndStrengths}>
                <div>
                    <p><span  style={{textDecoration:'capitalize',color:'#18afd2',fontSize:'1.3em'}}><u><b>Hobbies:</b></u></span></p>
                </div>
                <div style={{fontSize:'1em'}}>
                    <ul>
                        <li>Self improvement.</li>
                        <li>Team work.</li>
                        <li>Adaptability.</li>
                    </ul>
                </div>
            </div>
        );

        return(
            <div  className={classes.HobbiesAndStrengths}>
               <table style={{width:'100%'}}>
                   <tbody>
                       <tr>
                           <td>{Hobbies}</td>
                           <td>{Strengths}</td>     
                       </tr>
                   </tbody>
               </table>
               <p style={{margin:'20px'}}>I hereby declare that the above information is true to the best of my knowledge.</p>
               <p><span style={{marginLeft:'20px'}}><b>Place:</b> Jammu</span><span style={{float:'right',marginRight:'20px'}}>Rohit Verma</span></p>
            </div>
        )
    }
}

export default HobbiesAndStrengths;