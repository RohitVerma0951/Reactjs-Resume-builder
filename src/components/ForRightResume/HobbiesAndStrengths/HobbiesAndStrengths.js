import React from 'react';

import classes from './HobbiesAndStrengths.css';

class HobbiesAndStrengths extends React.Component{

    render(){

        let hobby1="Hobby1";
        let hobby2="Hobby2";
        let hobby3="Hobby3";
        let hobby4="Hobby4";

        let strength1="strength1";
        let strength2 ="Strength2";
        let strength3="Strength3";
        let strength4="Strength4";

        let name="Rohit Verma";

        if(this.props.hobby1) {
            hobby1 = this.props.hobby1;
        }
        if(this.props.hobby2) {
            hobby2 = this.props.hobby2;
        }
        if(this.props.hobby3) {
            hobby3 =  this.props.hobby3;
        }
        if(this.props.hobby4) {
            hobby4 = this.props.hobby4;
        }

        if(this.props.strength1) {
            strength1 = this.props.strength1;
            console.log("strngth"+this.props.strength1);
            
        }
        if(this.props.strength2) {
            strength2 = this.props.strength2;            
        }
        if(this.props.strength3) {
            strength3 = this.props.strength3;
        }
        if(this.props.strength4) {
            strength4 = this.props.strength4;
        }

        if(this.props.name) {
            name=this.props.name;
        }
        let Hobbies = (
            <div className={classes.HobbiesAndStrengths}>
                <div>
                    <p><span  style={{textDecoration:'capitalize',color:'#18afd2',fontSize:'1.3em'}}><u><b>Hobbies:</b></u></span></p>
                </div>
                <div style={{fontSize:'1em'}}>
                    <ul>
                        <li>{hobby1}</li>
                        <li>{hobby2}</li>
                        <li>{hobby3}</li>
                        <li>{hobby4}</li>
                    </ul>
                </div>
            </div>
        );

        const Strengths = (
            <div className={classes.HobbiesAndStrengths}>
                <div>
                    <p><span  style={{textDecoration:'capitalize',color:'#18afd2',fontSize:'1.3em'}}><u><b>Strengths:</b></u></span></p>
                </div>
                <div style={{fontSize:'1em'}}>
                    <ul>
                        <li>{strength1}</li>
                        <li>{strength2}</li>
                        <li>{strength3}</li>
                        <li>{strength4}</li>
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
               <p><span style={{marginLeft:'20px'}}><b>Place:</b> Jammu</span><span style={{float:'right',marginRight:'20px'}}>{name}</span></p>
            </div>
        )
    }
}

export default HobbiesAndStrengths;