// JavaScript Document

/*
 * Declare a person class with 4 fields representing their name, age, gender, and interests.
 * Person also has 2 methods representing Hello and Goodbye functionality
 */ 
class Person {
    /*
     * Constructor for Person class.
     * Takes 4 parameters and sets them to the appropiate fields
     */
    constructor(name, age, gender, interests) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
    /*
     * Method to say hello.
     * Prints to the console a greeting using the name field
     */ 
    greeting() {
        console.log(`Hi! I'm ${this.name}`);
    };
    /*
     * Method to say goodbye.
     * Prints to the console a farewell using the name field
     */
    bye() {
        console.log(`${this.name.} has left the building. Bye for now!`);
    };
}

/*
 * Instantiate 2 Person objects using constructors.
 * Includes an array for multiple interests
 */
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

/*
 * Declare a Teacher class which extends Person.
 * In extending Person, Teacher inherits all fields and methods of Person
 * Also has 2 additional fields
 */
class Teacher extends Person {
    /*
     * Constructor for Teacher class.
     * Takes 7 parameters and sets them to the appropiate fields.
     * last isn't used
     */
    constructor(name, last, age, gender, interests, subject, grade) {
        /*
         * Call the super class's constructor.
         * In this case Person.
         */
        super(name, age, gender, interests);
        // subject and grade are specific to Teacher
        this.subject = subject;
        this.grade = grade;
    }
}

//Instatiate a Teacher object using the constructor
let jessica = new Teacher('Jessica', 'Gilfillan', 28, 'female', ['JavaScript', 'PHP', 'Web Design'], 'PHP', 89);