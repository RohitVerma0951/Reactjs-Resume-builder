import React,{Component } from 'react';

import classes from './TrainingOrDiploma.css';

class TrainingOrDiploma extends Component{

    render(){

        // ta_TrainingOrDiploma={this.props.ta_TrainingOrDiploma}
        // trainingOrDiplomaStartDate={this.props.trainingOrDiplomaStartDate}
        // trainingOrDiplomaEndDate={this.props.trainingOrDiplomaEndDate}
        // trainingOrDiplomaDesc={this.props.trainingOrDiplomaDesc}

        let ta_TrainingOrDiploma="Title";
        let trainingOrDiplomaStartDate="5/5/2017";
        let trainingOrDiplomaEndDate="2/2/2016";
        let trainingOrDiplomaDesc=" Did android app development in Java from Computricals Technologies, Jammu";

        if(this.props.ta_TrainingOrDiploma) {
            ta_TrainingOrDiploma = this.props.ta_TrainingOrDiploma;
        }
        if(this.props.trainingOrDiplomaStartDate) {
            trainingOrDiplomaStartDate = this.props.trainingOrDiplomaStartDate;
        }
        if(this.props.trainingOrDiplomaEndDate) {
            trainingOrDiplomaEndDate = this.props.trainingOrDiplomaEndDate;
        }
        if(this.props.trainingOrDiplomaDesc) {
            trainingOrDiplomaDesc = this.props.trainingOrDiplomaDesc;
        }

        let TrainingOrDiploma = (<div className={classes.TrainingOrDiploma}>
        <div>
            <p><span  style={{textDecoration:'capitalize',color:'#18afd2',fontSize:'1.3em'}}><u><b>Training or Diploma:</b></u></span></p>
        </div>
            <ul>
                <li><b>Title:</b>{ta_TrainingOrDiploma}</li>
                <li><b>From:</b>{trainingOrDiplomaStartDate} to {trainingOrDiplomaEndDate}</li>
            </ul>
            <p>
               {trainingOrDiplomaDesc}
            </p>
        </div>);


        return(
            <div>
                {ta_TrainingOrDiploma !=="Title" ? TrainingOrDiploma : null}
            </div>
        )
    }
}

export default TrainingOrDiploma;