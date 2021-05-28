import classes from './Projects.module.css'
import { myProjects } from './myProjects'

function Projects() {
    return (
        <div id="projects" className={classes.Projects}>
            <div className={classes.Title}>
                <h1>Projects</h1>
            </div>
            <div className={classes.MainProjectsContainer}>
                {myProjects.map((proj, i) => (
                    <div>
                        <h1>{proj.name}</h1>
                        <h1>{proj.thumbnail}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
