import React from 'react';

import classes from './Objectives.css';

const Objectives = (props) => {

    return (
        <div className={classes.Objectives}>
            <div>
            <p style={{textDecoration:'capitalize',color:'#18afd2',fontSize:'1.3em',}}><u><b>Objectives:</b></u></p>
            </div>
            <select name="objectives" id="objective" onChange={(event)=>{props.select(event,"ddl")}}>
                <option value="I am seeking employment with a company where I can grow professionally and personally.">
                    I am seeking employment with a company where I can grow professionally and personally.
                </option>
                <option value="I seek challenging opportunities where I can fully use my skills for the success of the organization.">
                    I seek challenging opportunities where I can fully use my skills for the success of the organization.
                </option>
                <option value="I want to succeed in a stimulating and challenging environment that will provide me with advancement opportunities.">
                    I want to succeed in a stimulating and challenging environment that will provide me with advancement opportunities.
                </option>
                <option value="I want to excel in this field with hard work, perseverance and dedication.">
                    I want to excel in this field with hard work, perseverance and dedication.
                </option>
                <option value="I want a highly rewarding career where I can use my skills and knowledge for organizational and personal growth.">
                    I want a highly rewarding career where I can use my skills and knowledge for organizational and personal growth.
                </option>
                <option value="I am seeking a company where I can use my experience and education to help the company meet and surpass its goals.">
                    I am seeking a company where I can use my experience and education to help the company meet and surpass its goals.    
                </option>
                <option value="I want to succeed in an environment of growth and excellence to meet personal and organizational goals.">
                    I want to succeed in an environment of growth and excellence to meet personal and organizational goals.    
                </option>
                <option value="I am seeking a competitive and challenging environment where I can serve your organization and establish a career for myself.">
                    I am seeking a competitive and challenging environment where I can serve your organization and establish a career for myself.    
                </option>
            </select>
        </div>
    )
}

export default Objectives;