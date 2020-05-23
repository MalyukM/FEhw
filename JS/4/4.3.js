function checSent (x){
	if (x.length > 20){
		console.log(x.substring(0,21) + "...");
	} else {
		console.log(x);
	}
}

checSent('Very long sentensy wth some long text')