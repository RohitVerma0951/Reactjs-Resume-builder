import React,{ Component } from 'react';

import classes from './RightResume.css';
import PersonelDetails from '../../components/ForRightResume/PersonalDetails/PersonalDetails';
import Qualifications from '../../components/ForRightResume/Qualifications/Qualifaications';
import Skills from '../../components/ForRightResume/Skills/Skills';
import TrainingOrDiploma from '../../components/ForRightResume/TrainingOrDiploma/TrainingOrDiploma';
import Projects from '../../components/ForRightResume/Projects/Projects';
import HobbiesAndStrengths from '../../components/ForRightResume/HobbiesAndStrengths/HobbiesAndStrengths';

class RightResume extends Component{

    render(){
        return (
            <div className={classes.RightResume}>
                <PersonelDetails 
                    name={this.props.name} 
                    email={this.props.email} 
                    zip={this.props.zip}
                    mobile={this.props.mobile}
                    ddlValue={this.props.ddlValue}
                    add1={this.props.add1}
                    add2={this.props.add2}/>

                <Qualifications />
                <Skills />
                <TrainingOrDiploma />
                <Projects />
                <HobbiesAndStrengths />
            </div>
        )
    }
}

export default RightResume;