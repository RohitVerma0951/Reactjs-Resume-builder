import React,{ Component } from 'react';

import classes from './Projects.css';

class Projects extends Component{

    render(){
        return(
            <div className={classes.Projects}>
                <div>
                    <p><span  style={{textDecoration:'capitalize',color:'#18afd2',fontSize:'1.3em'}}><u><b>Projects undertaken:</b></u></span></p>
                </div>
                <div>
                    <ul>
                        <li>
                            <p>
                            <span style={{fontSize:'1.1em'}}><u> Project 1</u>:</span>
                                Made an android app.......
                            </p>
                        </li>
                        <li>
                            <p>
                            <span style={{fontSize:'1.1em'}}><u> Project 2</u>:</span>
                                Made an android app.......
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Projects;