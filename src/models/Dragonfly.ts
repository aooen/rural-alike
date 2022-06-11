import * as Obj from '../utils/Obj'

const tailColor = 'rgb(205, 29, 29)'
const bodyColor = 'rgb(180, 50, 50)'
const headColor = 'rgb(170, 50, 50)'
const wingColor = 'rgba(0, 0, 0, 0.2)'

interface DragonflyAttrs {
  x: number
  y: number
  size: number
  speed: number
  direction: 1 | -1
}

class Dragonfly implements DragonflyAttrs {
  x: number
  y: number
  size: number
  speed: number
  direction: 1 | -1

  /**
   * @param direction 1: to right, -1: to left
   */
  constructor(attrs: DragonflyAttrs) {
    Obj.init.call(this, attrs)
  }

  move() {
    this.x += this.direction * this.speed
  }

  getMinX() { return -200 * this.size }
  getMaxX(width: number) { return 200 + width / this.size }

  isDead(width: number) {
    return this.x < this.getMinX() || this.x > this.getMaxX(width)
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.setTransform(this.size * this.direction, 0, 0, this.size, this.x, this.y)

    // tail joint
    ctx.closePath()
    ctx.beginPath()
    ctx.fillStyle = tailColor
    ctx.arc(50, 50, 6, 0, Math.PI * 2)
    ctx.fill()
    ctx.arc(120, 50, 6, 0, Math.PI * 2)
    ctx.fill()
  
    // connect tail joint
    ctx.moveTo(50, 44)
    ctx.quadraticCurveTo(85, 50, 120, 44)
    ctx.lineTo(120, 56)
    ctx.quadraticCurveTo(85, 50, 50, 56)
    ctx.lineTo(50, 44)
    ctx.fill()
  
    // tail ending
    ctx.moveTo(50, 44)
    ctx.quadraticCurveTo(25, 50, 50, 56)
    ctx.fill()
  
    // body
    ctx.closePath()
    ctx.beginPath()
    ctx.fillStyle = bodyColor
    ctx.arc(125, 47, 10, 0, Math.PI * 2)
    ctx.fill()
  
    ctx.moveTo(125, 37)
    ctx.quadraticCurveTo(146, 25, 167, 37)
    ctx.lineTo(167, 55)
    ctx.quadraticCurveTo(169, 59, 125, 57)
    ctx.fill()
  
    // head
    ctx.closePath()
    ctx.beginPath()
    ctx.fillStyle = headColor
    ctx.arc(172, 45, 12, 0, Math.PI * 2)
    ctx.fill()
  
    // wing
    ctx.closePath()
    ctx.beginPath()
    ctx.translate(150, 35)
    ctx.rotate(Math.random() * 45 * Math.PI / 180)
    ctx.translate(-150, -35)
    ctx.fillStyle = wingColor
    ctx.moveTo(150, 35)
    ctx.lineTo(130, 10)
    ctx.quadraticCurveTo(120, 20, 140, 35)
    ctx.setTransform(this.size * this.direction, 0, 0, this.size, this.x, this.y)
    
    ctx.translate(140, 35)
    ctx.rotate(-Math.random() * 30 * Math.PI / 180)
    ctx.translate(-140, -35)
    ctx.moveTo(140, 35)
    ctx.lineTo(120, 10)
    ctx.quadraticCurveTo(110, 20, 130, 35)
    ctx.fill()

    ctx.setTransform(1, 0, 0, 1, 0, 0)
  }
}

export default Dragonfly
