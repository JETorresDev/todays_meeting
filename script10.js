//Practice exercise for Chapter 10

//Variable containing a new date object with the current date and time
let todaysDate = new Date();

//Grab the value of the current month from todaysDate
let currMonth = todaysDate.getMonth();


//Upgrade todaysDate to a string in local date format
todaysDate = todaysDate.toLocaleDateString();


//Write the value of todaysDate to the web document
document.getElementById("today").textContent = todaysDate;


//Style for date
document.getElementById("today").style.marginLeft = "60px"
document.getElementById("today").style.marginBottom = "5px"
document.getElementById("today").style.fontFamily = "Arial Black, sans-serif"
document.getElementById("today").style.color = "#466a7f"


//Logic statement that will put a message in the document if we are in a "special" month
if(currMonth === 10) {
	document.getElementById("special").textContent = "Have a great Thanksgiving!";
} else if (currMonth === 11) { 
	document.getElementById("special").textContent = "Happy Holidays!";
} else if (currMonth === 0) { 
	document.getElementById("special").textContent = "Happy New Year!"; 
} else if(currMonth === 5) {
	document.getElementById("special").textContent = "Hope you are enjoying your summer!";
} else {
	document.getElementById("special").textContent = "No special announcements.";
}


//Array variable containing the list of meeting attendees
let roster = new Array("Tim", "Amanda", "Joe", "Jake", "Leslie", "Susan", "Mike", "Michelle", "Laurie", "Dwayne", "Lydia", "Sally", "Marcus", "Maria", "Anna", "Jose", "Zach", "Hector");


//Let's sort that array in alphabetical order
roster.sort();


//Loop through the roster array, use the counter variable as the index for each person
for (let x = 0; x < roster.length; x++) {
	document.getElementById("attendance").innerHTML += roster[x] + "<br/>"
} // end of FOR loop


//Variable to hold onto a random number that works with the array indexes
let rando = Math.floor(Math.random() * roster.length);
let rando2 = Math.floor(Math.random() * roster.length);


console.log(rando);
console.log(rando2)


//WHILE loop to repeat picking a number in case of duplicates
while(rando === rando2){
	console.log("doubles!");
	rando2 = Math.floor(Math.random() * roster.length);
}//this is the end of the WHILE loop


//Write the random choice from the array to the document
document.getElementById("coffee").textContent = roster[rando] + " and " + roster[rando2];