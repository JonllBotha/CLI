/* const name = "Jonéll";
let age = 22;
let userHobbies = true;

console.log(name, age, userHobbies);

let nameAgeCombo = name+age;

function whoIsUser(name, age) {
    console.log(nameAgeCombo);
    return "Name is "+ name + " Age is "+ age;
}

console.log(whoIsUser(name, age));

alt + shift + A*/

/* function myFunction(a, b) {
    return a+b;
}

//arrow funtion

const myArrowFuntion = (a, b) => {
    return a+b;
}

// shorter way

//const myArrowFunction = (a, b) => a+b;

const random = () => 10;

console.log(myFunction(1, 2), myArrowFuntion(1, 2), random()); */

/* const person = {
    name:'Jonéll',
     age:22,
     greet: function() {
        console.log("Hi my name is ", this.name);
     }
    }

console.log(person);
console.log(person.greet()); */

/* let hobbies = ["sports", "cooking", 25, true, ["reading", "traveling"]];

console.log(JSON.stringify(hobbies)); // add JSON.stringify for vs code on windows

for (let hobby of hobbies){
    console.log(hobby);
}

// other way of doing it
for (let index in hobbies){
    console.log(hobbies[index]);
} */

/* let hobbiesArray = ["sports", "cooking", "painting"];
let hobbiesSubset = hobbiesArray.slice(0,2);

console.log(hobbiesSubset);

let filteredHobbies = hobbiesArray.filter((val) => val !== "sports");
console.log(filteredHobbies);

let updatedArray = hobbiesArray.map((val) => "hobby: " +val);
console.log(updatedArray); */

/* const hobbies = ["reading", "cooking"];
hobbies.push("programming");

console.log(hobbies);

const hobbiesObject = {
    name: "Jonéll",
    type: "programming"
};

hobbiesObject.age = 22;
console.log(hobbiesObject); */

/* //spread operator

const hobbies = ["sports", "cooking"];
const copiedHobbiesArray = [...hobbies];

console.log(copiedHobbiesArray);

const person = {name: "Jonéll Botha", age: 22};
const copiedPerson = {...person, ...{hobby : "traveling"}};

console.log(copiedPerson);

// rest operator

const toArray = (...args) => args;
console.log(toArray(1,2,3)); */

/* const person = {name: "Jonéll", age: 22, occupation: "Developer"};
const {name, age, occupation} = person;

console.log(name, age, occupation);

const numbers = [1,2,3,4,5];
const [first, second, third] = numbers;

console.log(first, second, third);

const {occupation, ...rest} = person;
console.log(rest); */

/* const getUser = username => {
    const API_URL = `https://api.github.com/users/${username}`;
    return fetch(API_URL).then((value) => value.json());
}

getUser('openai').then((val) => console.log(val));

const getUser = async username => {
    const API_URL = `https://api.github.com/users/${username}`;
    const response = await fetch(API_URL);
    const data = response.json();
    return data;
}

getUser('openai').then((val) => console.log(val));

const getGithubUser = username => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.github.com/users/${username}`).then((response) => response.json().
        then(data => {
            if (data.message === "Not Found"){
                reject('User not found');
            }
            else
            resolve(data);
        })).catch(err => reject(err));
    });
}

getGithubUser("JonllBotha").then((val) => console.log(val)).catch((err) => console.log("error", err)); */
