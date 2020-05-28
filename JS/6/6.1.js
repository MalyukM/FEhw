// У объекта есть свойство className, которое хранит список css класов – слов, разделенных пробелами:

// ```js
// var obj = {
//   className: 'open menu'
// };
// ```

// Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

// ```js
// removeClass(obj, 'open'); // obj.className='menu'
// removeClass(obj, 'blabla'); // без изменений
// ```

// P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:

// ```js
// obj = {
//   className: 'my menu menu'
// };

// removeClass(obj, 'menu');

// console.log( obj.className ); // 'my'
// ```

// Лишних пробелов после функции образовываться не должно.

var obj = {
  className: 'open menu'
};

function removeClass(objInput,cls){
	for (var key in objInput){
		var arrToClass = objInput[key].split(' ');
		for (var i=0; i < arrToClass.length; i++){
			if (arrToClass[i]==cls){arrToClass.splice(i,1);}
		}
		objInput[key] = arrToClass.join(' ');
	}
	console.log(objInput);
}

// removeClass(obj, "open");
removeClass(obj, "smth");