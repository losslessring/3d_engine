
const draw = (line) => {

	const canvas = document.getElementById('display')

	const ctx = canvas.getContext('2d')
	
	console.log(line)
	ctx.moveTo(line.beginPoint.x, line.beginPoint.y)
	ctx.lineTo(line.endPoint.x, line.endPoint.y)
	ctx.stroke()

}

export {draw}
