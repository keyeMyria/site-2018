import React, { Component } from 'react'

import styles from './home.scss'

import About from '../about/about.jsx'
import FAQ from '../faq/faq.jsx'
import SectionHeader from '../sectionHeader/sectionHeader'
import Countdown from '../countdown/countdown.jsx'
import Sponsors from '../sponsors/sponsors.jsx'
import Footer from '../footer/footer.jsx'
import { Button } from 'semantic-ui-react'


class Home extends Component {

    constructor(props) {
      super(props);

      this.state = {
        playingAnimation: false
      }
    }

    endAnimation() {
      this.setState({
        playingAnimation: true
      });
    }

    render() {
        return(
            <div>
                <div className="container">
                    <div className="Background">
                        <video id="splash_anim" className="Splash"
                          autoPlay muted src="../../assets/animation/splash.mp4" preload="auto"
                          poster="../../assets/animation/poster.png"
                          onEnded={() => this.endAnimation()}>
                        </video>
                        <div className="Background__foreground">

                        </div>

                        <div className="Background__footer">

                        </div>
                    </div>
                    <div className="Landing">
                        <div className="Landing__logo">
                            <div class="RegButton">
                                <a href = "/start">
                                    { (this.state.playingAnimation) ? <button class="ui button" tabindex="0">REGISTER</button> : null}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <About />

                <Countdown />

                <FAQ/>

                <Sponsors />

                <Footer />
            </div>
        )
    }
}

export default Home
