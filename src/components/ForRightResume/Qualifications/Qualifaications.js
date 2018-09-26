import React from 'react';

import classes from './Qualificaitions.css';
class Qualifications extends React.Component {

    state = {
        showUniversity:false
    }

    render() {

        let University=null;
        let hs_start_yr="2011"
        let hs_end_yr="2011"
        let hs_location="Jammu"
        let hs_percentile="85"
        let hs_name="Shri Muthi High school"

        let hss_start_yr="2013"
        let hssName="Shri Ranbir High School";
        let hssEndYear="2014";
        let hssLocation="Jammu";
        let hssPercentile="92";

        let collegeName="GCET Jammu";
        let collegeEndYear="2018";
        let collegeLocation="Jammu";
        let collegeStartYear="2014";
        let collegePercentile="73";
        let universityName="University Name";
        let UniversityEndYear="2020";
        let UniversityLocation="Jammu";
        let UniversityStartYear="2018";
        let UniversityPercentile="75";


        if(this.props.hs_start_yr) {
            hs_start_yr=this.props.hs_start_yr;
            console.log("yeR  "+this.props.hs_start_yr);
        }

        if(this.props.hs_end_yr) {
            hs_end_yr=this.props.hs_end_yr;
            console.log("yeR  "+this.props.hs_end_yr);
        }

        if(this.props.hs_location) {
            hs_location=this.props.hs_location;
            console.log("yeR  "+this.props.hs_start_yr);
        }

        if(this.props.hs_name) {
            hs_name=this.props.hs_name;
            console.log("yeR  "+this.props.hs_start_yr);
        }

        if(this.props.hs_percentile) {
            hs_percentile=this.props.hs_percentile;
            console.log("yeR  "+this.props.hs_start_yr);
        }

        if(this.props.hss_start_yr) {
            hss_start_yr=this.props.hss_start_yr;
            console.log("yeR  "+this.props.hs_start_yr);
        }
        if(this.props.hssEndYear) {
            hssEndYear=this.props.hssEndYear;
            console.log("yeR  "+this.props.hs_start_yr);
        }
        if(this.props.hssLocation) {
            hssLocation=this.props.hssLocation;
            console.log("yeR  "+this.props.hs_start_yr);
        }
        if(this.props.hssPercentile) {
            hssPercentile=this.props.hssPercentile;
            console.log("yeR  "+this.props.hs_start_yr);
        }
        if(this.props.hssName) {
            hssName=this.props.hssName;
            console.log("yeR  "+this.props.hs_start_yr);
        }

        if(this.props.collegeName) {
            collegeName=this.props.collegeName;
            console.log("yeR  "+this.props.collegeName);
        }
        if(this.props.collegeStartYear) {
            collegeStartYear=this.props.collegeStartYear;
            console.log("yeR  "+this.props.hs_start_yr);
        }
        if(this.props.collegeEndYear) {
            collegeEndYear=this.props.collegeEndYear;
            console.log("yeR  "+this.props.hs_start_yr);
        }
        if(this.props.collegeLocation ) {
            collegeLocation=this.props.collegeLocation;
            console.log("yeR  "+this.props.hs_start_yr);
        }
        if(this.props.collegePercentile) {
            collegePercentile=this.props.collegePercentile;
            console.log("yeR  "+this.props.hs_start_yr);
        }

       // let count=0;
        if(this.props.universityName) {
            universityName=this.props.universityName;
        }
        if(this.props.UniversityStartYear) {
            UniversityStartYear=this.props.UniversityStartYear;
        }
        if(this.props.UniversityEndYear) {
            UniversityEndYear=this.props.UniversityEndYear;
        }if(this.props.UniversityLocation) {
            UniversityLocation=this.props.UniversityLocation;
        }if(this.props.UniversityPercentile) {
            UniversityPercentile=this.props.UniversityPercentile;
        }
        
        University=(
            <li>
                <span style={{fontSize:'1.1em'}}><u>Post Graduation:</u></span>
                <ul style={{fontSize:'0.9em'}}>
                    <li>{universityName}, {UniversityLocation}</li>
                    <li>From {UniversityStartYear} to {UniversityEndYear}</li>
                    <li>Percentage:{UniversityPercentile}%</li>
                </ul>
            </li>
        );
       

        return(
            <div  className={classes.Qualifications}>
                <p style={{textDecoration:'capitalize',color:'#18afd2',fontSize:'1.3em',}}><u><b> Educational Qualifications:</b></u></p>
                <ul>
                    <li>
                        <span style={{fontSize:'1.1em'}}><u>High School:</u></span>
                        <ul style={{fontSize:'0.9em'}}>
                            <li>{hs_name}, {hs_location}</li>
                            <li>From {hs_start_yr} to {hs_end_yr}</li>
                            <li>Percentage:{hs_percentile}%</li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span style={{fontSize:'1.1em'}}><u>High Secondary School:</u></span>
                        <ul style={{fontSize:'0.9em'}}>
                            <li>{hssName}, {hssLocation}</li>
                            <li>From {hss_start_yr} to {hssEndYear}</li>
                            <li>Percentage:{hssPercentile}%</li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span style={{fontSize:'1.1em'}}><u>College</u></span>
                        <ul style={{fontSize:'0.9em'}}>
                            <li>{collegeName}, {collegeLocation}</li>
                            <li>From {collegeStartYear} to {collegeEndYear}</li>
                            <li>Percentage:{collegePercentile}%</li>
                        </ul>
                    </li>
                    { universityName!=="University Name"?University:null }
                </ul>
            </div>
        )
    }
}

export default Qualifications;