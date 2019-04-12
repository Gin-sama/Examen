class Paralax{
	constructor(img,x,y,w,h,speedX){
		this.img = img
		this.x = x
		this.y = y
		this.w = w
		this.h = h
		this.speedX=speedX
	}
	draw(){
		image(this.img,this.x,this.y,this.w,this.h)
	}

	move(){

		
		if (salto==1 && yf >=height-350 ) {
			
				yf-=4
			
		}else{
			
			if (yf<=height-130 ) {
			yf+=4
			salto=0

			}else{
				estado=0
			}
			
			
		}
		

		if (xf>=width*.4 && correr==1) {
		this.speedX=2
		}
		if (this.x==-456 && yf>=this.h-186 || this.x==-870 && yf>=this.h-186 || this.x==-1176 && yf>=this.h-186 || this.x==-1616 && yf>=this.h-186 || this.x==-5876 && yf>=this.h-186 || this.x==-6506 && yf>=this.h-186 || this.x==-8480+width) {
			this.speedX=0
			correr=0
		}else{
			correr=1
		}
		if (this.x==-8480+width) {
			distancia=2
		}
		this.x-= this.speedX
		
	}
	
}