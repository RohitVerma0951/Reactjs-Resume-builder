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
    // tbClickHandler = (event) =>{
    //    // this.setState({name:tbInput});
    //     console.log("Event " + event.target.value);
    // }

    render(){
        return (
            <div className={classes.LeftForm}>
                    <div style={{textAlign:'center'}}>
                        <h2>The Resume Builder</h2>
                    </div>
                    <PersonelDetails tbclicked={this.props.tbClickHandler}/>
                    <Address tbclicked={this.props.tbClickHandler}/>
                    <Objectives select={this.props.select}/>

                    <EducationDetailsTemplate 
                        eduName="High school name" 
                        eduInstitute="High School:"
                        taclicked={(event)=>{this.props.taclicked(event,"hs_ta")}}
                        tbclicked={this.props.tbClickHandler}/> {/*for School*/}

                    <EducationDetailsTemplate 
                        eduName="HSS name"
                        taclicked={(event)=>{this.props.taclicked(event,"hss_ta")}}
                        tbclicked={this.props.tbClickHandlerForHss} 
                        eduInstitute="High Secondary:"/> {/*for HSS*/}

                    <EducationDetailsTemplate 
                        eduName="College name" 
                        taclicked={(event)=>{this.props.taclicked(event,"college_ta")}}
                        tbclicked={this.props.tbClickHandlerForCollege} 
                        eduInstitute="College:"/> {/*for College*/}

                    <EducationDetailsTemplate 
                        eduName="University name"
                        taclicked={(event)=>{this.props.taclicked(event,"university_ta")}}
                        tbclicked={this.props.tbClickHandlerForUniversity} 
                        eduInstitute="Post Graduation:"/> {/*for Post graduation*/}

                    <Skills skill_tb={this.props.skill_tb}/>

                    <TrainingOrDiploma 
                        trainingOrDiploma={this.props.trainingOrDiploma}
                    />

                    <ProjectsUnderTaken
                        projects={this.props.projects}
                    />

                    <div>
                        <table style={{width:'100%'}}>
                            <tbody>
                                <tr>
                                    <td>
                                        <Hobbies hobbies={this.props.hobbies}/>
                                    </td>
                                    <td>
                                        <Strengths strengths={this.props.strengths}/>
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