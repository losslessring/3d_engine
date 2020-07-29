import Point from './point.js'
import Line from './line.js'


//let startPoint = new Point(0, 0, 0)
//let endPoint = new Point(1, 1, 1)

let line1 = new Line(new Point(0, 0, 0), new Point(10, 10, 0))
let line2 = new Line(new Point(0, 10, 0), new Point(11, 0, 0))

let geometry_objects = [line1, line2]


export {geometry_objects}