function Calculator(){
	this.calculate = function(oper){
		arrToCalc = oper.split(" ");
			if (arrToCalc[1] == '+'){
				return +arrToCalc[0] + +arrToCalc[2] 
			} else if (arrToCalc[1] == '-'){
				return +arrToCalc[0] - +arrToCalc[2]
			}
	}
	this.addMethod = function (operSymb, operVal){
		arrToCalc2 = operVal.split(' ')
		if (operSymb == "*"){
			return +arrToCalc2[0] * +arrToCalc2[1] 
		} else if (operSymb == "/"){
			return +arrToCalc2[0] / +arrToCalc2[1]
		} else if (operSymb == "**"){
			return Math.pow(+arrToCalc2[0], +arrToCalc2[1])
		}
	}
}


var calc = new Calculator();
console.log( calc.calculate('3 + 7') );

var powerCalc = new Calculator;
console.log(powerCalc.addMethod('**', '2 3'))
