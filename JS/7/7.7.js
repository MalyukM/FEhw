// Напишите функцию которая принимает аргумент и
// возвращает функцию которая возвращает этот
// аргумент.
// var idf = identityf(3);
// console.log(idf()); // 3

function identify (x){
	return function(){
		return x;
	}
}

var idf = identify(3);
console.log(idf())