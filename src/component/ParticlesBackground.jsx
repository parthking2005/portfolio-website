import React, { useCallback } from 'react'
import { loadFull } from 'tsparticles'
import Particles from '@tsparticles/react'

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    try {
      await loadFull(engine)
    } catch (error) {
      console.error('Failed to load particles:', error)
    }
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    if (container?.canvas) {
      console.log('Particles loaded successfully')
    }
  }, [])

  const particlesOptions = {
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    background: {
      color: {
        value: "transparent"
      }
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push"
        },
        onHover: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#FFD700"
      },
      links: {
        color: "#FFD700",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce"
        },
        random: false,
        speed: 2,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 80
      },
      opacity: {
        value: 0.4
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 1, max: 3 }
      }
    },
    detectRetina: true
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  )
}

export default ParticlesBackground
