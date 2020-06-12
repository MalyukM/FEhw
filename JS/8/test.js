function sayHi() {
  	console.log('Test with ${name}');
}

let user = { name: "John" };
sayHi.call( user );