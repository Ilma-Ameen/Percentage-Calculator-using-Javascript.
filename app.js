var maths = +prompt("Enter maths marks");
var english = +prompt("Enter english marks");
var Artificial_Intelligence = +prompt("Enter Artificial Intelligence marks");
var Computer_Networking = +prompt("Enter Computer Networking marks");
var Data_Science = +prompt("Enter Data Science marks");
var Total_marks = 500;
var obtained_marks = maths + english + Artificial_Intelligence + Computer_Networking + Data_Science;
var percentage = obtained_marks / Total_marks * 100;
console.log("Percentage : " + percentage);
console.log("Obtained Marks : " + obtained_marks + " out of " + Total_marks );


if (percentage >= 80) {
    console.log("Grade : A-one")
}
else if (percentage >= 70) {
    console.log("Grade : A")
}
else if (percentage >=60) {
    console.log("Grade : B")
}
else if (percentage >= 50) {
    console.log("Grade : C")
}
else if (percentage >= 40) {
    console.log("Grade : D")
}
else if (percentage >= 30) {
    console.log("Grade : E")
}
else {
    console. Log("You are fail")
}
    