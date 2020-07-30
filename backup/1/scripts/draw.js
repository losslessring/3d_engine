
const drawLine = (line) => {

	const canvas = document.getElementById('display')

	const ctx = canvas.getContext('2d')
	

	ctx.moveTo(line.beginPoint.x, line.beginPoint.y)
	ctx.lineTo(line.endPoint.x, line.endPoint.y)
	ctx.stroke()

}


const drawRect = (position, size, color) => {

	const canvas = document.getElementById('display')
	const ctx = canvas.getContext('2d')
	ctx.fillStyle = color  	
  	ctx.fillRect(position.x , position.y , size , size)
  	


}

const drawCircle = (position, radius, color) => {

	const canvas = document.getElementById('display')
	const ctx = canvas.getContext('2d')
	ctx.beginPath()
	ctx.arc(position.x, position.y, radius, 0, 2 * Math.PI)
	ctx.strokeStyle = color
	ctx.stroke()
}

export {drawLine, drawRect, drawCircle}
