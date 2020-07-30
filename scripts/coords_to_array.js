
//Divide range to array
const range_to_array = (start, end, steps) => {
	let step = Math.abs(start - end)/steps
	let array = []
	
	if (start == end) {
		for(let i = 0; i < steps; i++){
			array.push(start)
		}
		return array

	}

	 if (start > end){
	 	step = -step
	 }
	
	for(let i = start; Math.abs(i - end) >= Math.abs(step); i+= step){

			array.push(i)
	}
	
	return array
}



const coords_to_points_array = (line, steps) => {
	
	let x = range_to_array(line.beginPoint.x, line.endPoint.x, steps)
	let y = range_to_array(line.beginPoint.y, line.endPoint.y, steps)
	let z = range_to_array(line.beginPoint.z, line.endPoint.z, steps)

	return {x, y, z}
}

const ends_to_points = (line, steps) => {
	
	let x_array = range_to_array(line.beginPoint.x, line.endPoint.x, steps)
	let y_array = range_to_array(line.beginPoint.y, line.endPoint.y, steps)
	let z_array = range_to_array(line.beginPoint.z, line.endPoint.z, steps)

	let points = []

	for (let i = 0; i < steps; i++){
		let coords = {x: x_array[i], y: y_array[i], z: z_array[i]}
		points.push(coords)
	}

	return points
}


const check_intersection = (array1, array2, limit) => {
	for (let i = 0; i < array1.length; i++){
		for (let j = 0; j < array1.length; j++){
			if (Math.abs(array1[i].x - array2[j].x) <= limit &&
				Math.abs(array1[i].y - array2[j].y) <= limit && 
				Math.abs(array1[i].z - array2[j].z) <= limit) {
					
					//return {array1 :array1[i], array2: array2[j]}
					return array1[i]
			}
		}
	}
	return false
}


export {range_to_array, coords_to_points_array, ends_to_points, check_intersection}