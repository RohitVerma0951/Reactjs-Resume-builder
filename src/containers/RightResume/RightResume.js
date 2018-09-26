import React, {Component} from 'react';

import classes from './RightResume.css';
import PersonelDetails from '../../components/ForRightResume/PersonalDetails/PersonalDetails';
import Qualifications from '../../components/ForRightResume/Qualifications/Qualifaications';
import Skills from '../../components/ForRightResume/Skills/Skills';
import TrainingOrDiploma from '../../components/ForRightResume/TrainingOrDiploma/TrainingOrDiploma';
import Projects from '../../components/ForRightResume/Projects/Projects';
import HobbiesAndStrengths from '../../components/ForRightResume/HobbiesAndStrengths/HobbiesAndStrengths';

class RightResume extends Component {

    printResumeHandler = () => {
        var prtContent = document.getElementById("resume");
        var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
        WinPrint.document.write(prtContent.innerHTML);
        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.print();
        WinPrint.close();
    }

    render() {
        return (
            <div className={classes.RightResume} id="resume">
                <PersonelDetails
                    name={this.props.name}
                    email={this.props.email}
                    zip={this.props.zip}
                    mobile={this.props.mobile}
                    ddlValue={this.props.ddlValue}
                    add1={this.props.add1}
                    add2={this.props.add2}/>

                <Qualifications
                    hss_start_yr={this.props.hss_start_yr}
                    hs_start_yr={this.props.hs_start_yr}
                    hs_end_yr={this.props.hs_end_yr}
                    hs_name={this.props.hs_name}
                    hs_location={this.props.hs_location}
                    hssName={this.props.hssName}
                    hssLocation={this.props.hssLocation}
                    hssEndYear={this.props.hssEndYear}
                    hssPercentile={this.props.hssPercentile}
                    collegeName={this.props.collegeName}
                    collegeStartYear={this.props.collegeStartYear}
                    collegeEndYear={this.props.collegeEndYear}
                    collegeLocation={this.props.collegeLocation}
                    collegePercentile={this.props.collegePercentile}
                    universityName={this.props.universityName}
                    UniversityStartYear={this.props.UniversityStartYear}
                    UniversityEndYear={this.props.UniversityEndYear}
                    UniversityLocation={this.props.UniversityLocation}
                    UniversityPercentile={this.props.UniversityPercentile}
                    hs_percentile={this.props.hs_percentile}/>

                <Skills
                    Skill1={this.props.Skill1}
                    Skill2={this.props.Skill2}
                    Skill3={this.props.Skill3}
                    Skill4={this.props.Skill4}/>

                <TrainingOrDiploma
                    ta_TrainingOrDiploma={this.props.ta_TrainingOrDiploma}
                    trainingOrDiplomaStartDate={this.props.trainingOrDiplomaStartDate}
                    trainingOrDiplomaEndDate={this.props.trainingOrDiplomaEndDate}
                    trainingOrDiplomaDesc={this.props.trainingOrDiplomaDesc}
                />
                <Projects
                    pro1title={this.props.pro1title}
                    pro1desc={this.props.pro1desc}
                    pro2title={this.props.pro2title}
                    pro2desc={this.props.pro2desc}
                />
                <HobbiesAndStrengths 
                    hobby1={this.props.hobby1}
                    hobby2={this.props.hobby2}
                    hobby3={this.props.hobby3}
                    hobby4={this.props.hobby4}

                    strength1={this.props.strength1}
                    strength2={this.props.strength2}
                    strength3={this.props.strength3}
                    strength4={this.props.strength4}

                    name={this.props.name}
                />
                <div>
                    <button 
                        className={classes.printBtn}
                        onClick={this.printResumeHandler}>Print</button> 
                </div>
            </div>
        )
    }
}

export default RightResume;