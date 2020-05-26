var  tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};

var personName = '';
var personValue = 0;

for (a in tasksCompleted){
	if (tasksCompleted[a] > personValue){
		personValue = tasksCompleted[a];
		personName = a;
	} else{
		continue;
	}
}

console.log(personName + ': ' + personValue);

// var arrayWithMaxValue = Object.values(tasksCompleted);
// console.log(arrayWithMaxValue)