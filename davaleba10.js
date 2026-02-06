//1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს 
// რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს
function shedareba(m, n) {
    if (m > n) {
        return m
    }
    if (n > m) {
        return n
    }
    if (m = n) {
        return 0
    }
}
let m = 100
let n = 200
console.log(shedareba(m, n))
//2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს),
// დააბრუნეთ რიცხვების ჯამი
function getsum(ricxvi1, ricxvi2) {
    return ricxvi1 + ricxvi2
}
let ricxvi1 = 15
let ricxvi2 = 20
console.log(getsum(ricxvi1, ricxvi2))
//3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს 
// ( ფუნქციას არ აქვს პარამეტრი)
function დაწერე() {
    console.log("Dika Dobor")
}
დაწერე()
//4. დაწერეთ ფუნქცია ორი პარამეტრით : 
// firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ 
// ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)
function სრულისახელი(firstname, lastname) {
    return firstname + lastname
}
console.log(სრულისახელი("Dika", "Dobor"))
//5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n)
//  და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) 
// რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 
// 1*2*3 -ის მნიშვნელობა, დაგჭირდებათ ახალი ცვლადის გამოცხადება
//  ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. 
// Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი)
function calculate(n) {
    let result = 1
    let a = 1
}
while (a <= n) {
    result = result * a
    a++
    return result
}
let n = 5
console.log(calculate(n))
//ვერ ვიძახებ ვერაფრით ამ მეხუთეს, 
// for ითაც ვცადე მაგრამ ვერც მასე შევძელი:(

//ობიექტი student - რომელსაც აქვს შემდეგი properties: firstName, lastName, age, 
// scores (scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2) 
//და მეთოდი fullName რომელიც აბრუნებს სტუდენტის სრულ სახელს ( ობიექტი შეიცავს მეთოდს, ცალკე ფუნქციად არ უნდა დაწეროთ ) 
//6.დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)
const student = {
    firstname: "dika",
    lastname: "dobor",
    age: 27,
    scores: [4, 7, 5, 3, 2],

fullname: function() {
    return this.firstname + this.lastname
}
}
console.log(student.fullname())   //ერთი საათია ვუტრიალებ. ვერ ვიძახებ

//7.Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) 
// და ფუნქცია დააბრუნებს  ქულების ჯამს
function getscoressum(scores) {
   let sum = 0;
   for (let score of scores) {
    sum+=score;
   }
return sum;
}
console.log(getscoressum(student.scores))


//8. დაბეჭდეთ სტუდენტის სახელი და ასაკი
console.log(student.firstname, student.age)
