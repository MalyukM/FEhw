/*
hm is here:
http://learn.javascript.ru/call-apply#перепишите-суммирование-аргументов
function sumArgs() {
	arrToSum = [].join.call(arguments);
	return arrToSum.split(',').map(Number).reduce((a, b) => a + b, 0)
}
 */
function applyAll(func) {
    return func.apply(this, [].slice.call(arguments, 1));
  }

 console.log(applyAll(Math.max,1,2,3))