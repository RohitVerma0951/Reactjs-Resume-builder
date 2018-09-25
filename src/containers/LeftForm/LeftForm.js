import React,{ Component } from 'react';

import classes from './LeftForm.css';
import PersonelDetails from '../../components/ForLeftForm/PersonelDetails/PersonelDetails';
import Address from '../../components/ForLeftForm/Address/Address';
import Hobbies from '../../components/ForLeftForm/Hobbies/Hobbies';
import Strengths from '../../components/ForLeftForm/Strengths/Strengths';
import EducationDetailsTemplate from '../../components/ForLeftForm/EducationDetailsTemplate/EducationDetailsTemplate';
import Skills from '../../components/ForLeftForm/Skills/Skills'
import TrainingOrDiploma from '../../components/ForLeftForm/TrainingOrDiploma/TrainingOrDiploma'
import Objectives from '../../components/ForLeftForm/Objectives/Objectives';
import ProjectsUnderTaken from '../../components/ForLeftForm/ProjectsUndertaken/ProjectsUndertaken';

class LeftForm extends Component{
    state={
        name:null
    }

    // tbClickHandler = (event) =>{
    //    // this.setState({name:tbInput});
    //     console.log("Event " + event.target.value);
    // }

    render(){
        return (
            <div className={classes.LeftForm}>
                    <PersonelDetails tbclicked={this.props.tbClickHandler}/>
                    <Address tbclicked={this.props.tbClickHandler}/>
                    <Objectives select={this.props.select}/>
                    <EducationDetailsTemplate eduName="High school name" eduInstitute="High School:"/> {/*for School*/}
                    <EducationDetailsTemplate eduName="HSS name" eduInstitute="High Secondary:"/> {/*for HSS*/}
                    <EducationDetailsTemplate eduName="College name" eduInstitute="College:"/> {/*for College*/}
                    <EducationDetailsTemplate eduName="University name" eduInstitute="Post Graduation:"/> {/*for Post graduation*/}

                    <Skills />
                    <TrainingOrDiploma />
                    <ProjectsUnderTaken/>
                    <div>
                        <table style={{width:'100%'}}>
                            <tbody>
                                <tr>
                                    <td>
                                        <Hobbies />
                                    </td>
                                    <td>
                                        <Strengths/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }
}

export default LeftForm;