//Question no 2
//  Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var person: string = "Fatima";
console.log(person, "would you like to eat pizza today?")
// Question no 3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var hello: string = "Salar Sikander";
console.log(hello.toLowerCase());
console.log(hello.toUpperCase());
console.log(hello);
// Q4 ;Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks: Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log("Quaid-e-Azam said that,“I do not believe in taking the right decision, I take a decision and make it right.” ")

//Q5: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.var poet: string = "Quaid-e-Azam"
var famousPerson: string = "Quaid-e-Azam";
var message: string = "“I do not believe in taking the right decision, I take a decision and make it right.” ";
console.log(famousPerson, "said that,", message)
// Q6 :Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var name1: string = " \t\n    Hunain   \t\n"
console.log(name1)
var strippedname: string = name1.trim()
console.log(strippedname)
//Q7: Perform 4 operations

console.log("Addition result " + (5+3));

console.log("Subraction result " + (15-7));

console.log("Division result " + (16/2));

console.log("Multiplication result " + (2*4));

//Q8: You should create four lines.


for(let i=0;i<4;i++){
    console.log("\t "+(5+3));
    console.log("_____________________");
    
}

//Q9: Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var fvrtnum: number = 22;
var message: string = `My fvrt no is ${fvrtnum}`;
console.log(message)
// Q10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// prog 1
var myname: string = "Fatima Rasheed"
var date: number = 9 - 9 - 2002;
var person: string = "Fatima";
console.log(myname, date, person, "would you like to eat pizza today?")
console.log("The program is printing a msg")
// prog 2
var myname: string = "Fatima Rasheed"
var date: number = 9 - 9 - 2002;
var famousPerson: string = "Quaid-e-Azam";
var message: string = "“I do not believe in taking the right decision, I take a decision and make it right.” ";
console.log(myname, date, famousPerson, "said that,", message)
console.log("The program is just showing my fvrtperson name and his quote")
//Q11 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var array: string[] = ["Ayeshyy Gull", "Hunain", "Wajdan", "Salar"]
for (let i = 0; i < array.length; i++) {
    console.log(array[i],)
}
//Q12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

var array: string[] = ["Ayeshyy Gull", "Hunain", "Wajdan", "Salar"]
var msg: string = "You are best character in this novel"
for (let i = 0; i < array.length; i++) {
    console.log(array[i], msg)
}

//Q13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var bike: string[] = ["Sport Bike", "Suzuki", "Honda"];
for (let j = 0; j < bike.length; j++) {
    console.log(`I woulld like to own ${bike[j]}`)

}
//Q14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guests: string[] = ["Salar Sikander", "Jahan Sikander", "Faris Ghazi"]
for (let k = 0; k < guests.length; k++) {
    console.log(`${guests[k]} you are Invited to dinner`)
}
//Q15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

console.log(guests[1], "The guest who can't come")
guests.pop();
guests.push("Saadi Yousaf")
console.log(guests[1], "Guests who is coming after replacing ")
for (let k = 0; k < guests.length; k++) {
    console.log(`${guests[k]} you are Invited to dinner`)
}
// Q16 Add one new guest to the beginning of your array.
guests.unshift("Zumar Yousaf");// Add at the start
console.log(guests);
guests.splice(1, 0, "Abida Ubaid")
console.log(guests);//Add in middle
guests.push("Hashim Kardar")
console.log(guests);
for (let k = 0; k < guests.length; k++) {
    console.log(`${guests[k]} We have found big dinner table`)
}
//Q17 Shrinking Guest List

console.log("Sorry I can invite only 2 guests for dinner")
for (let k = guests.length - 1; k > 1; k--)
    guests.pop()
console.log(guests, "Sorry the dinner has been canceled due to some reasons");
for (let k = 0; k < guests.length; k++) {
    console.log(guests[k], "you are still invited at dinner")
}
// empty list
for (let k = guests.length - 1; k >= 0; k--) {
    guests.pop()
}
console.log(guests);
// Q18  Seeing the World: Think of at least five places in the world you’d like to visit.
var places: string[] = ["Turkey", "Saudi Arabia", "Singapur", "Naran", "London"]
for (var place of places) {
    console.log("the array is", place)
}
var sortedplaces = [...places];
sortedplaces.sort() //sorting Alphabatically
for (var place of sortedplaces) {
    console.log(place)
}
for (let place of places)
    console.log("OriginL list", place)

sortedplaces.reverse(); //Reversing arraylist
for (var place of sortedplaces)
    console.log(sortedplaces);

console.log("the array is still in original order", places)
for (var place of sortedplaces)
    sortedplaces.reverse();//Change order again
console.log("The order is changed again", sortedplaces)
//Original array again 

console.log("Original array")
for (var place of places)
    console.log(place)
//Sorting again
sortedplaces = [...places]
places.sort();
for (var place of sortedplaces)
    console.log(place);
// reversing again
let reverselist = places.reverse();
for (var place of reverselist) {
    console.log(place);
}
// Q19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guests: string[] = ["Salar Sikander", "Jahan Sikander", "Faris Ghazi"]
console.log(`total no of guests coming at dinner are:guests.length${guests.length}`)
// Q20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var countries: string[] = ["Australia", "Canada", "Germany", "France", "China"]
console.log("List of countries")
for (let count of countries) {
    console.log(count)
}


//Q21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var TypeScript = {
    name: "Fatima",
    degree: "Software Engineering",
    age: 21,
    gmail: "fatimarasheedch@gmail.com"
}
console.log(TypeScript)

//Q22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program
var num: number[] = [1, 2, 3, 4, 5, 6]
console.log(num[6]); //error    
console.log(num[4]);

//Q23 Conditional Tests: Write a series of conditional tests
let string = "Salar";
let number = 78;
let boolean = true;
let array1 = ["fatima", "ali"];
let array2 = ["fatima", "mohsin"];
let obj1 = { name: "salar", age: 32 };
let obj2 = { name: "salar", age: 32 };
//Test 1
console.log("Is string=='Salar'? ,I predict true");
console.log(string == "Salar");
//Test 2
console.log("Is array1==array2? ,I predict true");
console.log(array1 == array2);
//Test 3
console.log("Is number ==5? ,I predict false")
console.log(number == 5)
//Test 4
console.log("Is obj1==obj2? ,I predict true")
console.log(obj1 == obj2)
//Test 5
console.log("Is obj1.age==obj2.age? ,I predict true")
console.log(obj1.age == obj2.age)
//Test 6
console.log("Is array1[1]!=array2[0]? ,I predict false")
console.log(array1[1] != array2[0])
//Test 7
console.log("Is boolean==true? ,Ipredict true")
console.log(boolean = false)
//Test 8
console.log("Is number==78? ,I predict true")
console.log(number == 78)
//Test 9
console.log("Is string=='fatima'? ,I predict true")
console.log(string == "fatima")
//Test 10
console.log("Is array1[0]==array2[0]? ,I predict true")
console.log(array1[0] == array2[0]);
//Q24 More conditional tests
let string1 = "JAHAN";
let string2 = "faris"
let num1 = 45;
let num2 = 34;
let array3 = [1, 4, 7, 3, 8];
let itemchk = 4;
let itemnotpresent = 10;
// Equality Test
console.log("Is string1=='JAHAN'?I predict true")
console.log(string1 == "JAHAN")
// Inequality test
console.log("Is string2!=JAHAN? I predict true")
console.log(string2 != "JAHAN");
// Lower case test
console.log("Is string1 is in lowercase? I predict false ")
console.log(string1.toLocaleLowerCase() == "JAHAN");
// NUmerical tests
console.log("Is num1==45? I predict true")
console.log(num1 == 45);
// Inequality
console.log("Is num2!=45? I predict true")
console.log(num1 != 45);
// Greater
console.log("Is num1>num2? I predict true")
console.log(num1 > num2);
// lees than
console.log("Is num1<num2? I predict false")
console.log(num1 < num2);
// Greater equal
console.log("Is num1>=55? I predict true")
console.log(num1 >= 55);
// less equal
console.log("Is num2<34? I predict true")
console.log(num1 <= 34);
// using operators
console.log("Is (num1>num2) && (num2==34) ,i predict true")
console.log((num1 > num2) && (num2 == 34))
// or operator
console.log("Is (num2==num1) ||(num1<34) ,i predict true")
console.log((num2 == num1) || (num2 < 34))
// items in an array
console.log("Is item 4 present in the array, i predict true")
console.log(array3.includes(itemchk));
// item not presnt
console.log("is num 10 not present in array3, i predict true")
console.log(!array3.includes(itemnotpresent));
// Q25 Alien Colors

let alliencolor = "blue";
if (alliencolor == "green") {
    console.log("the player earned 5 points");
} else {

    console.log();

}
// Q26 Alien Colors #2
// 1;
alliencolor = "green";
if (alliencolor == "green") {
    console.log("the player earned 5 points");
} else {

    console.log("the player has earned 10 points");
}
// 2
alliencolor = "yellow";
if (alliencolor == "green") {
    console.log("the player earned 5 points");
} else {

    console.log("the player has earned 10 points");
}
//Q27  Alien Colors #3:
// Version 1
alliencolor = "yellow";
if (alliencolor == "green") {
    console.log("the player earned 5 points");
} else if (alliencolor == "yellow") {

    console.log("the player has earned 10 points");
}
else if (alliencolor == "red") {

    console.log("the player has earned 10 points");
}
else {
    console.log("no points")
}

// Version 2
alliencolor = "green";
if (alliencolor == "green") {
    console.log("the player earned 5 points");
} else if (alliencolor == "yellow") {

    console.log("the player has earned 10 points");
}
else if (alliencolor == "red") {

    console.log("the player has earned 10 points");
}
else {
    console.log("no point")
}
// Version 3
alliencolor = "red";
if (alliencolor == "green") {
    console.log("the player earned 5 points");
} else if (alliencolor == "yellow") {

    console.log("the player has earned 10 points");
}
else if (alliencolor == "red") {

    console.log("the player has earned 10 points");
}
else {
    console.log("no point")

}
//Q28 Stages of Life
let age = 15;
if (age < 2) {
    console.log("baby")
}
else if (age <= 2 && age > 4) {
    console.log("Toddler")
}
else if (age <= 4 && age > 13) {
    console.log("Kid")
}
else if (age <= 13 && age > 20) {
    console.log("Teenager")
}
else if (age <= 20 && age > 65) {
    console.log("Adult")
}
else {
    console.log("person is an elder")
}
//Q29 Favorite Fruit
var fruits: string[] = ["Mango", "Pear", "Watermelon", "Orange", "Grapes"];
var fruitchk = "Mango"
if (fruits.includes(fruitchk)) {
    console.log(`My fvrt fruit is ${fruitchk}`)
} else {
    console.log(`The fruit ${fruitchk} is not in my list`)
}

var fruitchk = "Plum"
if (fruits.includes(fruitchk)) {
    console.log(`My fvrt fruit is ${fruitchk}`)
} else {
    console.log(`The fruit ${fruitchk} is not in my list`)
}

var fruitchk = "Watermelon"
if (fruits.includes(fruitchk)) {
    console.log(`My fvrt fruit is ${fruitchk}`)
} else {
    console.log(`The fruit ${fruitchk} is not in my list`)
}

var fruitchk = "Grapes"
if (fruits.includes(fruitchk)) {
    console.log(`My fvrt fruit is ${fruitchk}`)
} else {
    console.log(`The fruit ${fruitchk} is not in my list`)
}
// Make new array
var fvrtfruits: string[] = ["Melon", "Berries", "Pomegranate"]
var chkfruits = "Melon";
if (fvrtfruits.includes(chkfruits)) {
    console.log(`You really like ${chkfruits}`)
}

var chkfruits = "Plum";
if (fvrtfruits.includes(chkfruits)) {
    console.log(`You really like ${chkfruits}`)
}

var chkfruits = "Berries";
if (fvrtfruits.includes(chkfruits)) {
    console.log(`You really like ${chkfruits}`)
}

var chkfruits = "Apple";
if (fvrtfruits.includes(chkfruits)) {
    console.log(`You really like ${chkfruits}`)
}

var chkfruits = "Pomegranate";
if (fvrtfruits.includes(chkfruits)) {
    console.log(`You really like ${chkfruits}`)
}
//Q30 Hello Admin: Make a array of five or more usernames
var usernames: string[] = ["admin", "salar", "jahan", "adam", "faris"];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] == "admin") {
        console.log("Hello admin, would you like to see a status report?")
    } else {
        console.log(`${usernames[i]} thankyou for logging in.`)
    }
}
//Q31 No users
if (usernames.length == 0) {
    console.log("the list is empty")
} else {
    console.log("The list is not empty")
}
//  If list is empty
if (usernames.length == 0) {
    console.log("We need to find some users")
}
for (let i = usernames.length - 1; i >= 0; i--) {
    usernames.pop();
}
if (usernames.length == 0) {
    console.log("The list is empty")
}
//Q32 Checking Usernames
var curr_users: string[] = ["salar", "ali", "amir", "fatima", "mohsin"];
var new_users: string[] = ["bassam", "salar", "hurairah", "hassan", "amir"]


for (let users of new_users) {
    if (curr_users.includes(users)) {
        console.log(`${users} user doesnot exist`)
    } else {
        console.log(`${users} user already exist`)
    }
}
// 
//Q33 Ordinal Numbers: 
var ordinalnumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < ordinalnumbers.length; i++) {
    if (ordinalnumbers[i] == 1) {
        console.log(`${ordinalnumbers[i]}st`)
    }

    else if (ordinalnumbers[i] == 2) {
        console.log(`${ordinalnumbers[i]}nd`)
    }

    else if (ordinalnumbers[i] == 3) {
        console.log(`${ordinalnumbers[i]}rd`)
    } else {
        console.log(`${ordinalnumbers[i]}th`)
    }
}
//Q34  Pizzas
var pizzas: string[] = ["Royal Crust", "Malai Boti", "Tikka Boti"]
for (let i = 0; i < pizzas.length; i++) {

} console.log(pizzas);
for (let i = 0; i < pizzas.length; i++) {
    console.log(` i like ${pizzas[i]} pizza`)
}
console.log(`${pizzas[1]} I like this pizza so much .It has extra cheeze their is extra coting of kababs in the crust of pizza .I really love this pizza`)
//Q35 Animals
var animals=[
    {
        name:"rabbit",
        color :"white",
        age:5
    },
    {
name:"cat",
color:"black",
age:3
    },
    {
name:"cow",
color:"brown",
age:6

    }
]
for(let i=0;i<animals.length;i++){
    console.log(animals[i].name);
}
for(let i=0;i<animals.length;i++){
    console.log(`${animals[i].name} would be a great pet`)
}console.log("All these animals have 4 legs .These animals would be great pet")
//Q36  T-Shirt
function make_shirt(size:string,msg:string) {
return (`The size of shirt is ${size} and msg on shirt is ${msg}` );
    
}
var size="large";
var msg= "Never loose Hope "
console.log(make_shirt(size,msg))
//Q37 Modify Shirts
function make_shirts(size:string="large",message:string="I love typescript") {
    console.log (`The size of shirt is ${size} and msg on shirt is ${message}` );}
    make_shirts("medium");
    make_shirts("small","You are a Gem")
        // Q38 Cities
        function describe_city(city:string,country:string="Pakistan"){
            console.log(`${city} is in ${country}`)
        }
        describe_city("Lahore")//Default country value
        describe_city("Karachi","Pakistan")
        describe_city("London","Uk")
//Q39 City Names
function city_country(city:string,country:string){
    return (`${city},${country}`)

}
var city1=city_country("Faisalabad","Pakistan")
console.log(city1)
var city2=city_country("London","UK")
console.log(city2)
var city3=city_country("Istanbul","Turkey")
console.log(city3)
//Q40 Album
function make_album(artist:string,title:string,tracks?:number){
  var  album:{artist:string,title:string,tracks?:number}={
        artist:artist,
        title:title
    };
    if(tracks!=undefined){
        album.tracks=tracks;
    }
return album;
}
console.log(make_album("Manak","Beet janiya"))
console.log(make_album("Arjit Singh","Lambiya c judaiyan"))
console.log(make_album("B Praak","Man Bharya"))
//Q41 Magicians:
function show_magicians(magicians:string[]){
    for(const magician of magicians){
        console.log(magician)
    }
}
var magiciansnames:string[]=["Dynamo","Merlin","Teller"];
show_magicians(magiciansnames);
//Q42 Great magicians
function make_great(magicians:string[]){
    var greatMagicians:string[]=[]
    for(const magician of magicians){
    greatMagicians.push(`${magician} The Great`) 
    }

return greatMagicians;}
var greatMagiciansList = make_great(magiciansnames);
show_magicians(greatMagiciansList)
//Q43 Unchanged Magicians
var greatMagicianarray=make_great([...magiciansnames])
console.log("Magician Names with 'the Great':");
show_magicians(greatMagiciansList);
console.log("Original Magician Names:");
show_magicians(magiciansnames);


//Q44 Sandwiches:
function Sandwich(Sandwiches:string[]){
    console.log("Sandwich Items" )

for(let items of Sandwiches)
console.log(items)}

console.log(Sandwich(["Cheese","White sauce ","Chicken","Egg"]));
console.log(Sandwich(["Cheese","Mayo ","Egg","Red chili"]));
console.log(Sandwich(["Chicken sauce ","butter","Egg"]));

//Q45 Cars
function cars(
    manufacturer:string,model:string, ... options:any[]){
    let   carsinfo:{[key:string]:string}={
        "names":manufacturer,
        "model":model

    };
    for (let i = 0; i < options.length; i += 2) {
        if (i + 1 < options.length) {
            let key = options[i];
            let value = options[i + 1];
            carsinfo[key] = value;
        }
    }
return carsinfo;
}console.log(cars("Civic","German","color","White","year","2006"))
