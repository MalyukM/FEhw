function add(x,y){
	return x+y;
}

function mul(x,y){
	return x*y;
}

function applyF(binaryFunc) {
	return function(a){
		return function(b){
			return binaryFunc(a,b);
		}
	}
}

var addFunc = applyF(add);
console.log(addFunc(2)(3));
console.log(applyF(mul)(3)(4))