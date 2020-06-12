function User(fullName) {
	this.fullName = fullName,

	Object.defineProperties(this, {
		firstName: {
            set: function (str) {
                    this.fullName = str + ' ' + this.lastName;    
                },
			get() {
                    return this.fullName.split(' ')[0];
                },
            
		},
		lastName: {
            set: function (str) {
                    this.fullName = this.firstName + ' ' + str;  
                },
			get() {
                    return this.fullName.split(' ')[1];
                }
		}
	})

}

var vasya = new User('Александр Пушкин');
console.log(vasya.fullName)
console.log(vasya.firstName)
console.log(vasya.lastName)
vasya.lastName = 'Толстой';
console.log(vasya.fullName);
