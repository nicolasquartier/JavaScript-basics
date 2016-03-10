$(document).ready(function() {

    var person = {
        firstName: "Jimi",
        lastName: "Hendrix",
        emails: ["jimi.hendrix@gmail.com", "hendrix.jimi@gmail.com"],
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

    loopRecursive(person, 0);
});

var tab = 0;

function loopRecursive(object, t) {
    for(var key in object) {
        if(typeof object[key] === "object") {
            for(var i = 0; i < t; i++) {
                document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
            }
            document.write(key + ": <br/>");
            t++;
            loopRecursive(object[key], t);
            t = 0;
        }
        else if(typeof object[key] === "function") {
            var fullName = object[key]();
            document.write("<br /><br />" + key + ": " + fullName);
        }
        else {
            if(t == 0) {
                document.write(key + ": " + object[key] + "<br />");
            }
            else {
                for(var i = 0; i < t; i++) {
                    document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
                }

                if(isNaN(key)) {
                    document.write(key + ": ");
                }

                document.write(object[key] + "<br />");
            }
        }
    }
}
