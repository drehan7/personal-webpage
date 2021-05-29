import classes from './About.module.css'

function About() {
    return (
        <div id="about" className={classes.About}>
            <div className={classes.Title}>
                <h1>About Me</h1>
            </div>
            <div className={classes.AboutMeSection}>
                <p>I am a Full stack web developer with previous experience in culinary arts and kitchen management</p>
            </div>
        </div>
    )
}

export default About