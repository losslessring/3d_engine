
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



const coords_to_points_array = (line, step) => {
	
	let x = range_to_array(line.beginPoint.x, line.endPoint.x, step)
	let y = range_to_array(line.beginPoint.y, line.endPoint.y, step)
	let z = range_to_array(line.beginPoint.z, line.endPoint.z, step)

	return {x, y, z}
}

export {range_to_array, coords_to_points_array}