import classes from './Home.module.css'
import Typewriter from 'typewriter-effect'

import { SocialIcon } from 'react-social-icons'

const Home = () => {
    return (
        <div id="home" className={classes.Home}>
            <div className={classes.Middle}>
                <h1>Hey! I'm Dawud Saiyed Rehan <span>😄 🤙🏽</span> </h1>
                <div className={classes.Links}>
                    <ul>
                        <li><SocialIcon network='github' onClick={() => window.open(`https://github.com/drehan7`, '_blank')} fgColor="#fffaff" bgColor="#474749" style={{ height: 75, width: 75, opacity: .9 }} /></li>
                        <li><SocialIcon network='linkedin' onClick={() => window.open(`https://linkedin.com/in/dsrehan`, '_blank')} fgColor="#fffaff" bgColor="#494947" style={{ height: 75, width: 75, opacity: .8 }} /></li>
                    </ul>
                </div>
                <div className={classes.Dynamic}>
                    <h1 id="typewriter">
                        <Typewriter options={{
                            strings: ['Front-end Developer', 'Back-end Developer', 'Full Stack Developer', "Life-long Learner"],
                            loop: true,
                            autoStart: true
                        }} />
                    </h1>
                </div>
            </div>
        </div>
    )
}
export default Home
