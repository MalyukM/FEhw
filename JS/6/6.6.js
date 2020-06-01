// Напишите функцию unique(arr), которая возвращает массив,
// содержащий только уникальные элементы arr (arr — массив строк).

var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 
'харе', 'кришна', 'кришна', '8-()' ];

function unique(arr){
	listWithUnique=[];
	for (var i=0; i<=arr.length; i++){
		if (!listWithUnique.includes(arr[i])){
			listWithUnique.push(arr[i]);
		}
	}
return listWithUnique;
}

console.log(unique(strings))

// console.log(strings.includes('кришна'))