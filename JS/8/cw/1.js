var calculator {	 
	x: null;
	y: null;
	read: function(){
		this.x = +prompt("x")
		this.y = +prompt("y")
	}
	sum: function(){
		console.log(this.x+this.y)
	}
	mul: function(){
		console.log(this.x*this.y)
	}
}