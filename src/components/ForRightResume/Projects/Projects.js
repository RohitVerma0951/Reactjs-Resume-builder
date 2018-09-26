import React,{ Component } from 'react';

import classes from './Projects.css';

class Projects extends Component{

    render(){

        let   pro1title="Project 1";
        let   pro1desc="Project 1 description";
        let   pro2title="Project 2";
        let   pro2desc="Project 2 Description";

        if(this.props.pro1title) {
            pro1title=this.props.pro1title;
        }
        if(this.props.pro1desc) {
            pro1desc = this.props.pro1desc;
        }
        if(this.props.pro2title) {
            pro2title = this.props.pro2title;
        }
        if(this.props.pro2desc) {
            pro2desc = this.props.pro2desc;
        }

        const Project2 = (
                            <li>
                                <p>
                                <span style={{fontSize:'1.1em'}}><u> Project 2</u>:</span>
                                    {pro2title}
                                </p>
                                <p style={{marginLeft:'20px'}}>
                                    {pro2desc}
                                </p>
                            </li>
                        );

        return(
            <div className={classes.Projects}>
                <div>
                    <p><span  style={{textDecoration:'capitalize',color:'#18afd2',fontSize:'1.3em'}}><u><b>Projects undertaken:</b></u></span></p>
                </div>
                <div>
                    <ul>
                        <li>
                            <p>
                            <span style={{fontSize:'1.1em'}}><u> Project 1</u>:</span>{pro1title}
                            </p>
                            <p style={{marginLeft:'20px'}}>
                                {pro1desc}.
                            </p>
                        </li>
                       {pro2title !=="Project 2" ? Project2 : null}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Projects;