import React,{ Component } from 'react';

import classes from './Skills.css';

class Skills extends Component{

    render(){

        let Skill1=<li>Javascript</li>;
        let Skill2=<li>Html, css</li>;
        let Skill3=null;
        let Skill4=null;

        if(this.props.Skill1) {
            Skill1 = <li>{this.props.Skill1}</li>;
            console.log("Reached skill1");
        }
        if(this.props.Skill2) {
            Skill2 = <li>{this.props.Skill2}</li>;
        }
        if(this.props.Skill3) {
            Skill3 = <li>{this.props.Skill3}</li>;
        }
        if(this.props.Skill4) {
            Skill4 = <li>{this.props.Skill4}</li>;
        }

        return(
            <div className={classes.Skills}>
                <div>
                    <p><span  style={{textDecoration:'capitalize',color:'#18afd2',fontSize:'1.3em'}}><u><b>Skills</b></u></span></p>
                </div>
                <ol>
                   {Skill1}
                   {Skill2}
                   {Skill3 !==null?Skill3:null}
                   {Skill4}
                </ol>
            </div>
        )
    }
}

export default Skills;