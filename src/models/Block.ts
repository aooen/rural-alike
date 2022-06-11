import * as Obj from '../utils/Obj'

export type Rgb = [number, number, number]

interface BlockAttrs {
  colors: [Rgb, Rgb]
}

class Block implements BlockAttrs {
  colors: [Rgb, Rgb]

  constructor(attrs: BlockAttrs) {
    Obj.init.call(this, attrs)
  }

  /**
   * @param yRate yRate >= 0 && yRate < 1
   */
  getColor(yRate: number) {
    if (yRate < Math.random()) { return this.colors[0] }
    return this.colors[1]
  }
}

export default Block
