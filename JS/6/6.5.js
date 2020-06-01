// Палиндром - это строка которая читается с обоих сторон одинаково.
// Например: Анна, оно, А роза упала на лапу Азора.

function isPal(someStr){
	cleanInp = someStr.toLowerCase().split(' ').join('');
	toTest = cleanInp.split("").reverse().join("");
	if (cleanInp == toTest){
		return(true);
	}else{
		return(false);
	}
}

console.log(isPal('Вася'))