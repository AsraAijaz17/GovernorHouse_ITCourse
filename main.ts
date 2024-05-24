
//Union
let age1: string | number;
age1 = 19;
age1 = "19";
// age1 = true; error ayega 
age1 = `true ${99}`;
age1 = `true ${99 + 1}`;


console.log(typeof age1);
//-------------------------------------

//Narrowing

let age2: string | number;
age2 = 18; // ab datatype only number hogai narrowing apply hogai 
//ab ispe only numbr k mthds apply honge wrna phly both k methds apply hrhy thy
console.log(age2.toFixed(2));



//-------------------------------------



//Math.random
console.log(Math.random());
let age = Math.random() > 0.6 ? "Hamzah" : 18;
// let age = Math.random() > 0.6 ? "Hamzah" : [18]; //aray bh kara skte
console.log(age);


//-------------------------------------

//khud hi narrwing kr rha ts itna smrt h
let agee = Math.random() > 0.6 ? "Hamzah" : 18;
if (typeof agee === "number") {
    agee.toFixed(2);
}
else {
    agee.toLowerCase;

}



