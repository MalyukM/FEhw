/*
hm is here:
http://learn.javascript.ru/call-apply#перепишите-суммирование-аргументов
 */


function sumArgs() {
	arrToSum = [].join.call(arguments);
	return arrToSum.split(',').map(Number).reduce((a, b) => a + b, 0)
}

console.log(sumArgs(1,2,3,4))