const name = "Генератор защитного поля";
let price = 1000;
console.log(`Выбран ${name} , цена за штуку ${price} кредитов`);
price = 2000;
console.log(`Выбран ${name}, цена за штку ${price} кредитов`);

//  ??
let userName;
let greeting;
console.log(`${userName} ${greeting}`);
//  ??
let userName;
let greeting;
console.log(`${userName} ${greeting}`);

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
 

//    const total=20;
//     const ordered=80;
//     if (ordered > total) {
//         console.log("На складе недостаточно товаров!");
//     } else {
//         console.log("Заказ оформлен, с вами свяжется менеджер");
//     }
    
    // task 5
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// if (prompt = null) {
//     message = 'Отменено пользователем!';
// }  if (ADMIN_PASSWORD === 'jqueryismyjam') {
//     message = 'Добро пожаловать!';
// } else message = 'Доступ запрещен, неверный пароль!';
// alert(message);

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     if (password === null) {
//        prompt('Отменено пользователем!') ;
//     }
//   if (password === ADMIN_PASSWORD) {
//     message =alert('Добро пожаловать!');
//   } else {
//     message = 'Доступ запрещен, неверный пароль!';
//   }
//   return message;
// }
// console.log(checkPassword("jqueryismyjam"));

// task6

// let credits = 23580;
// const pricePerDroid = 3000;
// let totalPrice;
// if (prompt === null) {
//     console.log('Отменено пользователем!');
// } else {
//     totalPrice = credits - pricePerDroid;
// } if (totalPrice>credits) {
//     console.log('Недостаточно средств на счету!');
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