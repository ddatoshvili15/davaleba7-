// Დაბეჭდეთ რიცხვები 2 დან 8 მდე
for (let i = 2; i <= 8; i ++) {
    console.log(i);
}
// 5 დან 35 - ის ჩათვლით დაბეჭდეთ ყოველი მეოთხე რიცხვი (უნდა დაიბეჭდოს 5,9,13…)
for (let i = 5; i <=35; i +=4 ) {
    console.log(i)
}
// დაბეჭდეთ 3 დან 8 მდე რიცხვების ნამრავლი
let a = 1
for (let i = 3; i <=8; i++){
    a *=i;
}
console.log(a)
// Გამოაცხადეთ ობიექტი person რომელსაც აქვს firstName, lastName
//  age და დაბეჭდეთ person-სრული სახელი ( სახელი და გვარი)
const person = {
    firstname: 'dika',
    lastname: 'dobor',
    age:27
}
console.log (person.firstname + " " + person.lastname) 
//მეოთხე დავალებაში გამოცხადებული person - ის ასაკის მიხედვით დაბეჭდეთ : 	
//ა. თუ ასაკი 18 ზე ნაკლებია - “არასწრულწლოვანია”, 
//ბ. თუ 18 ან მეტია - “სრულწლოვანია”გამოიყენეთ if else
if (person.age <18) {
    console.log("არასრულწლოვანია")
}
else { 
    console.log("სრულწლიანია")
}
//დაწერეთ მასივი fruits ელემენტებით ["Apple", "Banana", "Orange"];
//დაბეჭდეთ მასივის თითოეული წევრი
const fruits = ["apple", "Banana", "orange"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2])
//დაამატეთ fruits მასივის თავში Grapes და ბოლოში  Pineapples დაბეჭდეთ fruits
fruits.unshift("grapes");
fruits.push("pineapple")
console.log(fruits)
//დაბეჭდეთ 1 დან 34 მდე რიცხვების ჯამი
let sum =0;
for (let i = 1; i <= 34; i++) {
    sum=sum +i;
}
console.log(sum)