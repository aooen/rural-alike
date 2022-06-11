import Block from './models/Block'
import Field from './models/Field'
import Renderer from './utils/Renderer'

function renderBackground() {
  const canvas = document.getElementById('background') as HTMLCanvasElement
  const width = document.body.offsetWidth
  const height = document.body.offsetHeight
  const renderer = new Renderer(canvas, width, height)

  const fieldHeight = height * 0.45

  const skyBlock = new Block({ colors: [[101, 195, 255], [130, 215, 255]] })
  const sky = new Field({ x: 0, y: 0, width, height: fieldHeight, block: skyBlock })

  const paddyBlock = new Block({ colors: [[126, 158, 81], [102, 142, 55]] })
  const paddy = new Field({ x: 0, y: fieldHeight, width, height: fieldHeight, block: paddyBlock })

  const ridgeBlock = new Block({ colors: [[153, 156, 88], [122, 121, 78]] })
  const ridge = new Field({ x: 0, y: fieldHeight * 2, width, height: height - fieldHeight * 2, block: ridgeBlock })

  renderer.initBackground([sky, paddy, ridge])
}

export default renderBackground
