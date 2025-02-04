import { useState, useEffect, useRef } from 'react'
import './Contact.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import emailjs from '@emailjs/browser'

function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  //   const sendEmail = (e) => {
  //     e.preventDefault()

  //     emailjs
  //       .sendForm('service_ewvgyh9', 'template_e8a6ped', form.current, {
  //         publicKey: '0a3pEGZJpzea2quDV',
  //       })
  //       .then(
  //         () => {
  //           console.log('SUCCESS!')
  //         },
  //         (error) => {
  //           console.log('FAILED...', error.text)
  //         }
  //       )
  //   }
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_ewvgyh9',
        'template_7hdi7oc',
        form.current,
        '0a3pEGZJpzea2quDV'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Contact Me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" re></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
