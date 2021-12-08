 let myFunction= (name, age) => {
     if (age <= 18) {
         console.log(`${name} ,  вы еще очень молоды!`);
         return;
     } else if (age > 18) {
         console.log(`${name} ,  добро пожаловать в личный кабинет!`);
         return;
     } else if (age > 50) {
         console.log(`${name} ,  моё почтение!`);
         return;
     }
         else
         console.log(`${name} , "Укажите корректные данные!"`);
 }