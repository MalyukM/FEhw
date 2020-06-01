//test splice method

// function compare(a, b) {
//   if (a > b) return 1; // если первое значение больше второго
//   if (a == b) return 0; // если равны
//   if (a < b) return -1; // если первое значение меньше второго
// };

var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

function compare(arr) {
	 arr.sort((a, b) => a.age > b.age ? 1 : -1);
};

compare(people)
console.log(people[0])

// for (var i=0; i<people.length; i++){
// 	console.log(people[i].age);
// }
