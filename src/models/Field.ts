import * as Obj from '../utils/Obj'
import Block, { type Rgb } from './Block'

interface FieldAttrs {
  x: number
  y: number
  width: number
  height: number
  block: Block
}

class Field implements FieldAttrs {
  x: number
  y: number
  width: number
  height: number
  block: Block

  constructor(attrs: FieldAttrs) {
    Obj.init.call(this, attrs)
  }

  getColor(y: number): Rgb | null {
    if (y < this.y || y >= this.y + this.height) { return null }
    return this.block.getColor((y - this.y) / this.height)
  }
}

export default Field
