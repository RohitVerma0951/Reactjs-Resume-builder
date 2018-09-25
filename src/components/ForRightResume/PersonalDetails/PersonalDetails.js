import React, {Component} from 'react';

import classes from './PersonelDetails.css';

class PersonalDetails extends Component {

    render() {

        let name="Rohit Verma";
        let email="rohitverma095@gmail.com";
        let address1 = "Village and Post office Muthi";
        let mobile = "9622031653";
        let zip="181205";
        let add2 = "Tehsil and District Jammu, J&K"
        let Objective="I am seeking employment with a company where I can grow professionally and personally.";

        if(this.props.name) {
            name=this.props.name;
        }
        
        if(this.props.email) {
            email=this.props.email;
        }

        if(this.props.add1) {
            address1=this.props.add1;
            console.log("Reached :  " + this.props.add1);
        }
        if(this.props.mobile) {
            mobile=this.props.mobile;
            console.log("Reached :  " + this.props.mobile);
        }
        if(this.props.zip) {
            zip=this.props.zip;
            console.log("Reached :  " + this.props.zip);
        }
        if(this.props.add2) {
            add2=this.props.add2;
            console.log("Reached :  " + this.props.add2);
        }

        if(this.props.ddlValue) {
            Objective = this.props.ddlValue;
        }

        return (
            <div className={classes.PersonelDetails}>
                <div style={{color:'#18afd2'}}>
                    <h2 style={{textDecoration:'capitalize'}}><u>{name}</u></h2>
                </div>
                <div className={classes.address}>
                    <p style={{textDecoration:'capitalize'}}>{address1}<br/>
                        <span style={{textDecoration:'capitalize'}}>{add2}</span><br />
                        <span><b>P.O:</b>{zip}</span><br/>
                        <span><b>Email:</b>{email}</span><br/>
                        <span><b>Mobile no:</b>{mobile}</span>
                    </p>
                </div>
                <div>
                <p>
                        <b style={{textDecoration:'capitalize',color:'#18afd2',fontSize:'1.3em',}}><u>Objective:</u> </b><span style={{fontSize:'1em'}}>{Objective}</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default PersonalDetails;