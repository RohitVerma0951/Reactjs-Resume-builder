import React,{ Component } from 'react';

import classes from './Skills.css';

class Skills extends Component{

    render(){
        return(
            <div className={classes.Skills}>
                <div>
                    <p><span  style={{textDecoration:'capitalize',color:'#18afd2',fontSize:'1.3em'}}><u><b>Skills</b></u></span></p>
                </div>
                <ol>
                    <li>Javascript</li>
                    <li>Html, css</li>
                    <li>Java</li>
                    <li>Asp.net</li>
                </ol>
            </div>
        )
    }
}

export default Skills;