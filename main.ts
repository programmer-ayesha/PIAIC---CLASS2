console.log("assalam walikum")

//DATA TYPE
let Fullname = "Ayesha";  // string
let number = 123;         //number
let bulb = true;  //let bulb = false ; // they are bolean

//PRINT VARIABLE
let powder = "lalmirch";
powder = "haldi";

//we don't use "" string and ``back tick to print variable name
console.log(powder);


//EXAMPLE 1
let fullname:string = "ayesha";
console.log(fullname);
let lastname :string = ("shazad");

//ADD AND PRINT TWO VARIABLE IN CONSOLE.LOG
console.log(fullname+lastname);

// The amount of space we put in the strings will be the same amount of space that both variables, name, will have.
console.log(fullname+" "+lastname)


//PRINT MESSAGE
//WE USE `` BACK TICKS TO PRINT MESSAGE WITH VARIABLE NAME 
console.log(`hi, my name is ${fullname} ${lastname}`)


//EXAMPLE 1
console.log("my name is" + fullname + ", and my father name is" + lastname)


//EXAMPLE 2
let message = `hi my name is ${fullname} ${lastname}`;
console.log(message);

//we can't use number in fullname because  variable fullname is STRING ""  
//fullname = 23;

//we can't use again fullname with let 
// let fullname = "areena"; TYPESCRIPT give error