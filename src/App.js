import React, { Component } from 'react';
import './App.css';
import LeftForm from './containers/LeftForm/LeftForm';
import RightForm from './containers/RightResume/RightResume'

class App extends Component {

  state={
    name:null, 
    email:null,
    add1:null,
    mobile:null,
    zip:null,
    add2:null,
    ddlValue:null,
    hs_start_yr:2012,
    hs_end_yr:2012,
    hs_name:null,
    hs_location:"Muthi",
    hs_percentile:85,

    hss_start_yr:2013,
    hssEndYear:2014,
    hssPercentile:0,
    hssLocation:null,
    hss_name:null,
    university_ta:null,
    college_ta:null,
    collegeStartYear:null,
    collegeEndYear:null,
    collegePercentile:0,
    collegeLocation:null,

    UniversityStartYear:null,
    UniversityEndYear:null,
    UniversityPercentile:0,
    UniversityLocation:null,

    skill1:null,
    skill2:null,
    skill3:null,
    skill4:null,

    ta_TrainingOrDiploma:null,
    trainingOrDiplomaStartDate:null,
    trainingOrDiplomaEndDate:null,
    trainingOrDiplomaDesc:null,

    pro1title:null,
    pro1desc:null,
    pro2title:null,
    pro2desc:null,

    hobby1:null,
    hobby2:null,
    hobby3:null,
    hobby4:null,

    strength1:null,
    strength2:null,
    strength3:null,
    strength4:null,
  }

  selectHandler = (event,type) =>{
    this.setState({ddlValue:event.target.value});
  }

  taClickHandler = (event,value)=>{
    console.log("VAlue "+ value);
    if(value === "hs_ta") {
      this.setState({hs_name:event.target.value});
    }

    if(value === "hss_ta") {
      this.setState({hss_name:event.target.value});
    }
    if(value === "college_ta") {
      this.setState({college_ta:event.target.value});
    }
    if(value === "university_ta") {
      this.setState({university_ta:event.target.value});
    }
  }

  tbClickHandler = (event,type) => {
    console.log(type);
    if(type === "name")
    this.setState({name:event.target.value});

    else if(type === "email")
    this.setState({email:event.target.value});
    
    else if(type === "address1")
    this.setState({add1:event.target.value});

    else if(type === "mobile")
    this.setState({mobile:event.target.value});
    
    else if(type === "zip")
    this.setState({zip:event.target.value});

    else if(type === "address2")
    this.setState({add2:event.target.value});

    if(type === "start_year")
    this.setState({hs_start_yr:event.target.value});

    if(type === "end_year")
    this.setState({hs_end_yr:event.target.value});

    if(type === "location")
    this.setState({hs_location:event.target.value});

    if(type === "percentile")
    this.setState({hs_percentile:event.target.value});
  }

  tbClickHandlerForHss = (event,type) =>{
    if(type==="start_year") {
      this.setState({hss_start_yr:event.target.value});
    }
    if(type==="end_year") {
      this.setState({hssEndYear:event.target.value});
    }
    if(type==="location") {
      this.setState({hssLocation:event.target.value});
    }
    if(type==="percentile") {
      this.setState({hssPercentile:event.target.value});
    }
  }

  tbClickHandlerForCollege = (event,type) => {
    if(type==="start_year") {
      this.setState({collegeStartYear:event.target.value});
    }
    if(type==="end_year") {
      this.setState({collegeEndYear:event.target.value});
    }
    if(type==="location") {
      this.setState({collegeLocation:event.target.value});
    }
    if(type==="percentile") {
      this.setState({collegePercentile:event.target.value});
    }
  }

  tbClickHandlerForUniversity = (event,type) => {
    console.log(type);
    
    if(type==="start_year") {
      this.setState({UniversityStartYear:event.target.value});
    }
    if(type==="end_year") {
      this.setState({UniversityEndYear:event.target.value});
    }
    if(type==="location") {
      this.setState({UniversityLocation:event.target.value});
    }
    if(type==="percentile") {
      this.setState({UniversityPercentile:event.target.value});
    }
  }

  skillHandler = (event,tb) => {
    if(tb==="tb1") {
      this.setState({skill1:event.target.value})
      console.log("vvvvvvv....")
    }
    if(tb==="tb2") {
      this.setState({skill2:event.target.value})      
    }
    if(tb==="tb3") {
      this.setState({skill3:event.target.value})      
    }
    if(tb==="tb4") {
      this.setState({skill4:event.target.value})      
    }
  }

  trainingOrDiplomaHandler = (event,type) => {
    if(type==="title") {
      this.setState({ta_TrainingOrDiploma:event.target.value})
    }
    if(type==="from") {
      this.setState({trainingOrDiplomaStartDate:event.target.value})
    }
    if(type==="to") {
      this.setState({trainingOrDiplomaEndDate:event.target.value})
    }
    if(type==="desc") {
      this.setState({trainingOrDiplomaDesc:event.target.value})
    }
  }

  projectHandler = (event,title) => {
    if(title === "pro1title") {
      this.setState({pro1title:event.target.value});
    }
    if(title === "pro1desc") {
      this.setState({pro1desc:event.target.value});
    }
    if(title === "pro2title") {
      this.setState({pro2title:event.target.value});
    }
    if(title === "pro2desc") {
      this.setState({pro2desc:event.target.value});
    }
  }

  hobbiesHandler = (event, type) =>{
    if(type==="tbHobby1") {
      this.setState({hobby1:event.target.value});
    }
    if(type==="tbHobby2") {
      this.setState({hobby2:event.target.value});
    }
    if(type==="tbHobby3") {
      this.setState({hobby3:event.target.value});
    }
    if(type==="tbHobby4") {
      this.setState({hobby4:event.target.value});
    }
  }

  strengthHandler = (event,type) => {
    console.log(type);
    
    if(type==="strength1") {
      this.setState({strength1:event.target.value});
    }
    if(type==="strength2") {
      this.setState({strength2:event.target.value});
    }
    if(type==="strength3") {
      this.setState({strength3:event.target.value});
    }
    if(type==="strength4") {
      this.setState({strength4:event.target.value});
    }
  }

  render() {
    return (
      <div>
        <LeftForm 
          tbClickHandler={this.tbClickHandler} 
          tbClickHandlerForHss={this.tbClickHandlerForHss} 
          tbClickHandlerForCollege={this.tbClickHandlerForCollege}
          tbClickHandlerForUniversity={this.tbClickHandlerForUniversity}
          select={this.selectHandler}
          taclicked={this.taClickHandler}
          
          skill_tb={this.skillHandler}
          trainingOrDiploma={this.trainingOrDiplomaHandler}

          projects={this.projectHandler}
          hobbies={this.hobbiesHandler}
          strengths={this.strengthHandler}
          />

        <RightForm 
          name={this.state.name} 
          email={this.state.email}
          mobile={this.state.mobile} 
          zip={this.state.zip}
          ddlValue={this.state.ddlValue}
          hs_start_yr={this.state.hs_start_yr}
          hs_name={this.state.hs_name}
          hs_end_yr={this.state.hs_end_yr}
          hs_location={this.state.hs_location}
          hs_percentile={this.state.hs_percentile}
          hss_start_yr={this.state.hss_start_yr}
          hssName={this.state.hss_name}
          hssLocation={this.state.hssLocation}
          hssPercentile={this.state.hssPercentile}
          hssEndYear={this.state.hssEndYear}
          collegeName={this.state.college_ta}
          collegeStartYear={this.state.collegeStartYear}
          collegeEndYear={this.state.collegeEndYear}
          collegeLocation={this.state.collegeLocation}
          collegePercentile={this.state.collegePercentile}
          universityName={this.state.university_ta}
          UniversityStartYear={this.state.UniversityStartYear}
          UniversityEndYear={this.state.UniversityEndYear}
          UniversityLocation={this.state.UniversityLocation}
          UniversityPercentile={this.state.UniversityPercentile}
          add1={this.state.add1}
          add2={this.state.add2}
          Skill1={this.state.skill1}
          Skill2={this.state.skill2}
          Skill3={this.state.skill3}
          Skill4={this.state.skill4}

          ta_TrainingOrDiploma={this.state.ta_TrainingOrDiploma}
          trainingOrDiplomaStartDate={this.state.trainingOrDiplomaStartDate}
          trainingOrDiplomaEndDate={this.state.trainingOrDiplomaEndDate}
          trainingOrDiplomaDesc={this.state.trainingOrDiplomaDesc}

          pro1title={this.state.pro1title}
          pro1desc={this.state.pro1desc}
          pro2title={this.state.pro2title}
          pro2desc={this.state.pro2desc}

          hobby1={this.state.hobby1}
          hobby2={this.state.hobby2}
          hobby3={this.state.hobby3}
          hobby4={this.state.hobby4}
          
          strength1={this.state.strength1}
          strength2={this.state.strength2}
          strength3={this.state.strength3}
          strength4={this.state.strength4}
          />
      </div>
    );
  }
}

export default App;
