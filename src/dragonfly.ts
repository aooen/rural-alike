import Dragonfly from './models/Dragonfly'
import Renderer from './utils/Renderer'

function renderDragonfly() {
  const canvas = document.getElementById('dragonfly') as HTMLCanvasElement
  const width = document.body.offsetWidth
  const height = document.body.offsetHeight
  new Renderer(canvas, width, height)

  const ctx = canvas.getContext('2d')

  let dragonfly: Dragonfly | null = null

  function animate() {
    ctx.clearRect(0, 0, width, height)

    if (dragonfly) {
      dragonfly.draw(ctx)
  
      if (dragonfly.isDead(width)) {
        dragonfly = null
      } else {
        dragonfly.move()
      }
    } else {
      if (Math.random() < 0.01) {
        const direction = Math.random() < 0.5 ? 1 : -1
        dragonfly = new Dragonfly({
          x: 0,
          y: Math.random() * height * 0.8,
          size: Math.random() / 2 + 0.5,
          speed: Math.random() * 10 + 10,
          direction,
        })

        dragonfly.x = direction === 1 ? dragonfly.getMinX() : dragonfly.getMaxX(width)
      }
    }

    window.requestAnimationFrame(animate)
  }

  animate()
}

export default renderDragonfly
