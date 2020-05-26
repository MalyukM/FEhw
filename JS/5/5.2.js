var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};
console.log(image);

function multiplyNumeric(obg){
	var tmpObg = {};
	for (key in obg){
		if (typeof(obg[key]) == 'number'){
			tmpObg[key] = obg [key] *2
		} else {
			tmpObg[key] = obg [key]
		}
	}
	return(tmpObg);
}

console.log(multiplyNumeric(image));