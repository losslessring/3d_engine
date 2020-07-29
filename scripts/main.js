import {geometry_objects} from './geometry.js'

import {range_to_array, coords_to_points_array, ends_to_points, check_intersection} from './coords_to_array.js'

import {draw} from './draw.js'


//console.log(range_to_array(1, 1, 10))
//geometry_objects.forEach(geometry_object => console.log(coords_to_points_array(geometry_object, 10)))

//geometry_objects.forEach(geometry_object => console.log(ends_to_points(geometry_object, 10)))

//Перевод линий в массив точек для расчета пересечения. Подумать, куда это запихнуть

let lines_points = geometry_objects.map(geometry_object => ends_to_points(geometry_object, 10))
console.log(lines_points)

// Расчет пересечения
console.log(check_intersection(lines_points[0], lines_points[1], 0.5))
//console.log(geometry_objects[0])
//draw(geometry_objects[0])