import {geometry_objects} from './geometry.js'

import {range_to_array, coords_to_points_array} from './coords_to_array.js'

import {draw} from './draw.js'


//console.log(range_to_array(1, 1, 10))
geometry_objects.forEach(geometry_object => console.log(coords_to_points_array(geometry_object, 10)))

//console.log(geometry_objects[0])
draw(geometry_objects[0])