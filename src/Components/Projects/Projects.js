import classes from './Projects.module.css'
import { myProjects } from './myProjects'
import { SocialIcon } from 'react-social-icons'
import { GiWireframeGlobe } from 'react-icons/gi'
import { RiCodeSSlashLine } from 'react-icons/ri'

function Projects() {
    return (
        <div id="projects" className={classes.Projects}>
            <div className={classes.Title}>
                <h1>Projects</h1>
            </div>
            <div className={classes.MainProjectsContainer}>
                {myProjects.map((proj, i) => (
                    <div className={classes.Proj}>
                        <div className={classes.ProjTitle}>
                            <h1>{proj.name}</h1>
                        </div>
                        <div className={classes.ProjThumbnail}>

                        </div>
                        <div className={classes.ProjThumbnail}>
                            <h1>{proj.thumbnail}</h1>
                        </div>
                        <div className={classes.ProjDesc}>
                            <h1>{proj.description}</h1>
                        </div>

                        <div className={classes.ProjLinksContainer}>
                            <div className={classes.ProjWebLink}>
                                <button onClick={() => window.open(proj.website_link, '_blank')}><GiWireframeGlobe /></button>
                            </div>

                            <div className={classes.ProjGitLink}>
                                <button onClick={() => window.open(proj.github_link, '_blank')}><RiCodeSSlashLine /></button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
