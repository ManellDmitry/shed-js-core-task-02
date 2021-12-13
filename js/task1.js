// const name = "Генератор защитного поля";
// let price = 1000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);
// price = 2000;
// console.log(`Выбран ${name}, цена за штку ${price} кредитов`);

// let userName ="Димон";
// let greeting= "Дарова";
// console.log(`${userName} ${greeting}`);

// ============== 1 ====================================
// объяви три переменные с именами var1, var2 и var3 соответственно
// присвой им значения: 1, 0, true
// выведи в консоль результаты сравнения:
// var1 > var2
// var1 == var3
// var1 === var3
// var1 != var3
// var2 != var3
// var1 > var2 == var3
// var1 > var2 > var3
// напиши в комментарии после команды console.log, ответ из консоли
// объясни почему получаются такие ответы

// let var1 = 1;
// let var2 = 0;
// let var3 = true;
// console.log(var1 > var2); //true
// console.log(var1 == var3);//true
// console.log(var1 === var3);//false
// console.log(var1 != var3);//false
// console.log(var2 != var3);//true
// console.log(var1 > var2 == var3); //true
// console.log(var1 > var2 > var3);//false

// const total = 20;
// const ordered = 80;
// if (ordered > total) {
//   console.log("На складе недостаточно товаров!");
// } else {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// }

// task 5
// const ADMIN_PASSWORD = "jqueryismyjam";
// let message;
// const value = prompt();
// console.log(`value`, value);
// if (!value) {
//   message = "Отменено пользователем!";
// } else if (ADMIN_PASSWORD === "jqueryismyjam") {
//   message = "Добро пожаловать!";
// } else message = "Доступ запрещен, неверный пароль!";
// alert(message);

// let value = prompt("Введите пароль");
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   if (password === null) {
//     message = "Отменено пользователем!";
//   } else if (password === ADMIN_PASSWORD) {
//     message = "Добро пожаловать!";
//   } else if (password === "") {
//     message = "Вы ничего не ввели";
//   } else {
//     message = "Доступ запрещен, неверный пароль!";
//   }
//   return message;
// }
// console.log(checkPassword(value));

// task6;

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let credits = 23580;
// const pricePerDroid = 3000;
// let totalPrice;
// let value = prompt();
// if (value === null) {
//   console.log("Отменено пользователем!");
// } else if (parseInt(value)) {
//   console.log(parseInt(value));
//   totalPrice = parseInt(value) * pricePerDroid;
//   console.log(totalPrice);
//   let expression = totalPrice > credits;
//   console.log(expression);
//   if (expression) {
//     console.log("У Вас недостаточно средств на счету");
//   } else {
//     console.log(
//       `Вы купили ${parseInt(value)} дроидов, на счету осталось ${
//         credits - totalPrice
//       } кредитов.`
//     );
//   }
// } else if (isNaN(value)) {
//   console.log("Вы ввели не число");
// }

// task7
// function getCountryPrice(z,x) {
//     let price;
//     switch (z,x) {
//         case "Китай":
//             price = 100;
//             console.log('Доставка в [страна] будет стоить ${price} кредитов');
//             break;
//         case "Чили":
//             price = 250;
//             console.log('Доставка в [страна] будет стоить ${price} кредитов');
//             break;
//         case "Австралия":
//             price = 170;
//             console.log('Доставка в [страна] будет стоить ${price} кредитов');
//             break;
//         case "Индия":
//             price = 80;
//             console.log('Доставка в [страна] будет стоить ${price} кредитов');
//             break;
//         case "Ямайка":
//             price = 120;
//             console.log('Доставка в [страна] будет стоить ${price} кредитов');
//             break;
//             default: alert('В вашей стране доставка не доступна');
//     }
// }
