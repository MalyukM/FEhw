var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

function anClean(arrWithAn){
	listWithAnn = []
	result = {}
	for (var i =0; i<arrWithAn.length; i++ ){		
		toCheck = arrWithAn[i].toLowerCase().split("").sort().join("");
			result[toCheck] = arrWithAn[i];
		}

	for (key in result){
		listWithAnn.push(result[key]);
	} 

	return listWithAnn;
}

console.log(anClean(arr));
