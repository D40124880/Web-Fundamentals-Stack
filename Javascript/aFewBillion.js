var hisMoney = 0.01;

for(var days = 2; days <= 30; days++){
    hisMoney *= 2;
}
console.log(hisMoney);

var dayss = 0;
var money = 0.01;
while(money <= 10000){
  money = money * 2;
  dayss = dayss + 1;
}
console.log("It takes:", dayss, "days.");