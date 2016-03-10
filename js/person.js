var person = {
    firstName: "Jimi",
    lastName: "Hendrix",
    emails: ["jimi.hendrix@gmail.com"],
    address: {
        street: "Brook Street",
        number: "23",
        city: {
            postalCode: "W1K",
            name: "London"
        }
    },
    fullName: function() {
        return this.firstName + " " +  this.lastName;
    }
}