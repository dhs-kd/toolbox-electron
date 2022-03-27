var G = 0.1;
var dt = 3;
var heavenly_bodies = []
var n = 6


function planet(x,y,d,m){
    this.x = x
    this.y = y
    this.d = d
    this.m = m
    this.vx = 0
    this.vy = 0
    this.fx = 0
    this.fy = 0
    this.col="#ff6a6a"


    this.attraction=function(other){
      
		var distance=dist(other.x,other.y,this.x,this.y);
		var f=0;
		if(dist!=0){
			f=(G*this.m*other.m)/(distance**2);
		}
      
		var angle=atan2(other.y-this.y,other.x-this.x);
      
		this.fx += f*cos(angle);
		this.fy += f*sin(angle);
	};
	
	this.update = function(){
		this.vx+=(this.fx/this.m)*dt;
		this.vy+=(this.fy/this.m)*dt;

		this.x+= this.vx*dt;
		this.y+= this.vy*dt;

	};

	this.display = function(){
		stroke(this.col);
		fill(this.col);
		ellipse(this.x,this.y,this.d,this.d);
	};

}



function setup(){
    var Width = windowWidth
    var Height = windowHeight

    createCanvas(Width , Height)
    background(0)

    heavenly_bodies[0]=new planet(Width/2,Height/2,33,1600);
	heavenly_bodies[0].col="#ffc300";
  
	heavenly_bodies[1]=new planet(Width/2-280,Height/2,12,.005);
	heavenly_bodies[1].col="#9c2e35";
  
	heavenly_bodies[2]=new planet(Width/2-220,Height/2,14,.002);
	heavenly_bodies[2].col="#709dd8";
  
	heavenly_bodies[3]=new planet(Width/2-100,Height/2,10,.0005);
	heavenly_bodies[3].col="#78878c";
  
    heavenly_bodies[4]= new planet(Width/2-150 ,Height/2 ,11,.004);
    heavenly_bodies[4].col = '#ffc649';
  
    heavenly_bodies[5]= new planet(Width/2-365 ,Height/2 ,20 ,.05)
    heavenly_bodies[5].col ='#c46200'
  
    


	heavenly_bodies[1].vy=.64;
	heavenly_bodies[2].vy=.8;
	heavenly_bodies[3].vy=1.2;
    heavenly_bodies[4].vy = 1;
    heavenly_bodies[5].vy=.5;

}


function draw(){
    background(0,0,0)
    

    for (var i = 0;i<n;i++){
        heavenly_bodies[i].display()
    }
    
    for ( i = 0;i<n;i++){
        heavenly_bodies[i].fx = 0;
        heavenly_bodies[i].fy = 0
        for(var j = 0;j<n;j++){
            if(i!=j){
                heavenly_bodies[i].attraction(heavenly_bodies[j])
            }
        }
    }

    for ( i = 0;i<n;i++){
        heavenly_bodies[i].update()
    }
}