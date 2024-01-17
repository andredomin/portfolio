import React, { useEffect } from 'react'
import particlesJS from 'particles.js'

const Particles: React.FC = () => {
  useEffect(() => {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80 // Adjust the number of particles as needed
        },
        color: {
          value: '#ecce28' // Use a valid color value
        }
        // Additional particle configuration options
      }
    })
  }, [])

  return (
    <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%' }}></div>
  )
}

export default Particles
