import Field from '../models/Field'

class Renderer {
  canvas
  readonly ctx
  readonly width
  readonly height

  constructor(canvas: HTMLCanvasElement, width: number, height: number) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.width = width
    this.height = height

    canvas.width = width
    canvas.height = height
  }

  initBackground(fields: Array<Field>) {
    this.ctx.getImageData(0, 0, this.width, this.height)
    const canvasData = this.ctx.createImageData(this.width, this.height);

    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        const idx = (x + y * this.width) * 4
        const [r, g, b] = fields.map(field => field.getColor(y)).find(color => color)
        canvasData.data[idx] = r
        canvasData.data[idx + 1] = g
        canvasData.data[idx + 2] = b
        canvasData.data[idx + 3] = 255
      }
    }

    this.ctx.putImageData(canvasData, 0, 0)
  }
}

export default Renderer
