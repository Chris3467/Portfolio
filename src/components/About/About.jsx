import { useState, useEffect } from 'react'
import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPython,
  faBootstrap,
  faSass,
  faMdb,
  faNodeJs,
  faCss3,
  faHtml5,
  faReact,
  faJsSquare,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

function About() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="con2 about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'About Me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious full-stack developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            To the right you can see the various tech skills I have and down
            below are the different projects I have worked on.
          </p>
          <br />
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Projects'.split('')}
              idx={15}
            />
          </h1>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#339933" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
        <div className="stage-cube-cont2">
          <div className="cubespinner2">
            <div className="face7">
              <FontAwesomeIcon icon={faMdb} color="#47A248" />
            </div>
            <div className="face8">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
                alt="VS Code Logo"
                width="50"
              />
            </div>
            <div className="face9">
              <FontAwesomeIcon icon={faPython} color="#3377AB" />
            </div>
            <div className="face10">
              <FontAwesomeIcon icon={faBootstrap} color="#7952B3" />
            </div>
            <div className="face11">
              <FontAwesomeIcon icon={faSass} color="#CC6699" />
            </div>
            <div className="face12">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
                alt="Express.js Logo"
                width="50"
              />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
