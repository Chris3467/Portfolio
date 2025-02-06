import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import './Logo.scss'
import LogoS from '../../../assets/images/logo_C2.png'

function Logo() {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    const outline = outlineLogoRef.current

    // Get the total length of the SVG path
    const pathLength = outline.getTotalLength()

    // Set initial stroke properties for the outline
    gsap.set(outline, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    })

    // Create the animation timeline
    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .to(outline, {
        strokeDashoffset: 0, // Animate drawing the path
        duration: 4,
        ease: 'power1.inOut',
      })

    // Fade in the solid logo
    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="logo" />
      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M10 10 L20 20 L30 10 Z" // Your path data
            stroke="#000" // Add desired stroke color
            strokeWidth="3" // Adjust stroke width as needed
            fill="none"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
