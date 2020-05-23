// function checkSpam (x){
// 	var spamWord = "spam, sex";
// 	var lowerSensenceToCheck = x.toLowerCase();
// 	for (var i =0; i <= spamWord.split(' ').length; i++){
// 		if (lowerSensenceToCheck.indexOf(spamWord.split(' ')[i]) > 1){
// 			console.log("true");
			
// 		} else{
// 			console.log("false");
// 			continue;
// 		}
// 	}
// }

// console.log(checkSpam('get new Sex videos'));

function checkSpam (x){
	var spamWord = "spam, sex";
	var lowerSensenceToCheck = x.toLowerCase();
	if (lowerSensenceToCheck.indexOf('spam') > 0 || lowerSensenceToCheck.indexOf('sex') > 0){
		console.log("true");
	} else {
		console.log("false");
	}
}
checkSpam('get new Sex videos');
checkSpam('[SPAM] How to earn fast money?'); // true
checkSpam('New PSD template'); // false