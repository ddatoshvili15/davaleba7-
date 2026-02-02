let salary = 3999 
let bonus = 0
// თუ 1000 მდეა-20%
// 1000-2000 ით ჩათვლით - 10%
// 2000-4000 მდე -5%
// 4000 დან აღარ არის 0%
if (salary <1000) {
    bonus = salary / 5
}
else if (salary >=1000 && salary <=2000 ) {
    bonus = salary/10
}
else if (salary >2000 && salary <4000) {
    bonus = salary/20
}
else { bonus=0 }
console.log(bonus
)