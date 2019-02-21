class Developer {

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getName(){
        return `${this.firstname} ${this.lastname}`;
     } 
}

var dev = new Developer('Gabriel', 'Luciano' );
console.log(dev.getName());


class JavaScriptDeveloper extends Developer {
    getJob(){
        return 'Javascript Developer';
    }
}

var jsdev = new JavaScriptDeveloper('Gabriel', 'Luciano')
console.log(jsdev.getJob());


getGreeting = () => 'Welcome to React Dev';
console.log(getGreeting());