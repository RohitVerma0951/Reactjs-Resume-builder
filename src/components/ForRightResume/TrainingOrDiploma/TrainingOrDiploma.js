import React,{Component } from 'react';

import classes from './TrainingOrDiploma.css';

class TrainingOrDiploma extends Component{

    render(){
        return(
            <div className={classes.TrainingOrDiploma}>
            <div>
                <p><span  style={{textDecoration:'capitalize',color:'#18afd2',fontSize:'1.3em'}}><u><b>Training or Diploma:</b></u></span></p>
            </div>
                <ul>
                    <li><b>Title:</b>Android app development</li>
                    <li><b>From:</b>1/2/2017 to 2/2/2019</li>
                </ul>
                <p>
                    Did android app development in Java from Computricals Technologies, Jammu
                </p>
            </div>
        )
    }
}

export default TrainingOrDiploma;