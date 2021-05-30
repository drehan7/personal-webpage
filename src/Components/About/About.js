import classes from './About.module.css'

function About() {
    return (
        <div id="about" className={classes.About}>
            <div className={classes.Title}>
                <h1>About Me</h1>
            </div>
            <div className={classes.AboutMeSection}>
                <div className={classes.Paragraph}>
                    <p>I am a Full Stack developer with a <strong>deep love</strong> for learning and building new things which drove my decision to make a change from the <strong>service industry</strong> to tech! Recently completed a 16 week code school where I learned <strong>Full Stack Software Development</strong> skills. While at Momentum, I worked with a remote team of classmates on our capstone project to build a web application that makes cooking and searching recipes easy and fun! I learn very quickly and love to tackle tough problems. I'm excited to continue contributing to the open-source community as well as progress in my <strong>Software Development</strong> career!</p>

                </div>

            </div>
            <div className={classes.Skills}>
                <ul className={classes.SkillsUL}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C#</li>
                    <li>ReactJS</li>
                    <li>Django & REST</li>
                    <li>Flask</li>
                    <li>PostgreSQL</li>
                    <li>Heroku</li>
                    <li>Netlify (Hosting)</li>
                </ul>
            </div>

        </div>
    )
}

export default About