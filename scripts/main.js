import {geometry_objects} from './geometry.js'

import {range_to_array, coords_to_points_array, ends_to_points, check_intersection} from './coords_to_array.js'

import {drawLine, drawRect, drawCircle} from './draw.js'


//console.log(range_to_array(1, 1, 10))
//geometry_objects.forEach(geometry_object => console.log(coords_to_points_array(geometry_object, 10)))

//geometry_objects.forEach(geometry_object => console.log(ends_to_points(geometry_object, 10)))

//Перевод линий в массив точек для расчета пересечения. Подумать, куда это запихнуть

const steps = 100
let lines_points = geometry_objects.map(geometry_object => ends_to_points(geometry_object, steps))
console.log(lines_points)

// Расчет пересечения
const limit = 1
const intersection = check_intersection(lines_points[0], lines_points[1], limit)
console.log(intersection)
//console.log(geometry_objects[0])
drawLine(geometry_objects[0])
drawLine(geometry_objects[1])
drawCircle(intersection, 8, "red")

//Сделать игровое поле, накидать линий
//Сделать пересечение линий с лучом
// Сделать массив лучей