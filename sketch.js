let ParallaxBg = []
let flapy = []
let bg
let ground
let x
let index
let xf=0
let yf=0
let speed = 0.2
let space = 32
let orienta = 1
let salto=0
let distancia=2
let estado=0
let correr=1

function preload(){
	bg=loadImage('images/fondo.png')
	ground = loadImage('images/suelo.png')
	obstacle = loadImage('images/obstaculo.png')
	full = loadImage('images/full.png')
	for(let i = 0;i<3;i++){
		flapy.push(loadImage(`images/Mario${i+2}.png`))
	}
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	
	
	let p = new Paralax(full,0,0,8480,height,0)
	ParallaxBg.push(p)	
	
	/*for (let i = 0;i<2; i++) {
	let p = new Paralax(obstacle,i*8475,0,8475,height-100,1)
	ParallaxBg.push(p)	
	}
	for (let i = 0;i<2; i++) {
	let p = new Paralax(ground,i*8475,height-100,8475,100,1)
	ParallaxBg.push(p)	
	}*/
	x=0
	index=0
	yf=height-130
}

function draw() {
	background('silver')
	image(bg,x,0,width,height)
	for(let p of ParallaxBg){
		p.draw()
		p.move()
	}
	image(flapy[floor(index)],xf+=distancia,yf,50,50)
	index += speed
	if (xf>=width*.4) {
		distancia=0
	}
	if (index>=flapy.length) {
			index=0
		}
		
		/*yf+=orienta
		if (yf<0) {
			orienta=orienta*-1
		}
		if (xf>width) {
			xf=-50
		}
		
		
		
		*/
}
function keyPressed () {

	if (keyCode == space && estado==0){
		salto=1
		estado=1
	}
	
}