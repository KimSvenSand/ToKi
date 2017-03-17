/*Creates a class Animal with the properties name and age and a function for logging the properties to the screen*/
class Animal {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  logAnimal() {
    console.log('Name: ' + this.name + '\nAge: ' + this.age);
  }
}

//Based upon the Animal class with an added propertie race
//And also added so the new property is logged to the screen.
class Dog extends Animal {
  constructor(name, age, race) {
    super(name, age);
    this.race = race;
  }

  logAnimal() {
    super.logAnimal();
    console.log('Race: ' + this.race);
  }
}

var animal = new Animal('Buster', '9');
animal.logAnimal();
//Outputs Name: Buster
//Age: 9

var dog = new Dog('Buster', '9', 'Shitzu');
dog.logAnimal();
//Outputs Name: Buster
//Age: 9
//Race: Shitzu
