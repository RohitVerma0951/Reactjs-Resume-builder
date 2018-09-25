import React from 'react';

import classes from './Qualificaitions.css';
class Qualifications extends React.Component {
    render() {

        let University='';

        return(
            <div  className={classes.Qualifications}>
                <p style={{textDecoration:'capitalize',color:'#18afd2',fontSize:'1.3em',}}><u><b> Educational Qualifications:</b></u></p>
                <ul>
                    <li>
                        <span style={{fontSize:'1.1em'}}><u>High School:</u></span>
                        <ul style={{fontSize:'0.9em'}}>
                            <li>Shri Muthi High School, Jammu</li>
                            <li>From 2010 to 2012</li>
                            <li>Percentage:85%</li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span style={{fontSize:'1.1em'}}><u>High Secondary School:</u></span>
                        <ul style={{fontSize:'0.9em'}}>
                            <li>Shri Ranbir High Sec School, Jammu</li>
                            <li>From 2012 to 2014</li>
                            <li>Percentage:92%</li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span style={{fontSize:'1.1em'}}><u>College</u></span>
                        <ul style={{fontSize:'0.9em'}}>
                            <li>GCET, Jammu</li>
                            <li>From 2014 to 2018</li>
                            <li>Percentage:73%</li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Qualifications;