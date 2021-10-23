// let number = prompt("Сколько напитков вы хотите заказать?");
// let m = 0;
// let obsum = "Общая сумма: ";
// for (let i = 0; i < number; i++) {
//     var question = prompt("Какой напиток вы хотите заказать?");
//     // let summa = str.substr(str.length - 2);
//     // let num = Number(summa);
//     if (question == "эспрессо") {
//         m += 30;
//     }
//     if (question == "капучино") {
//         m += 40;
//     }
//     if (question == "латте") {
//         m += 45;
//     }
//     if (question == "горячий шоколад") {
//         m += 70;
//     }
//     const myOrder = order(question);
//     alert(myOrder + " " + obsum + m)
// }
// // let summa = str.substr(str.length - 2);
// // let num = Number(summa);
// // let obsum = num + num;
// // alert(obsum);
// function order(drink) {
//     let str = "Ваш заказ: ";
//     let sum = "Сумма напитка: ";
//     switch (drink) {
//         case "эспрессо":
//             str += "эспрессо" + sum + 30;
//             break;
//         case "капучино":
//             str += "капучино" + sum + 40;
//             break;
//         case "латте":
//             str += "латте" + sum + 45;
//             break;
//         case "горячий шоколад":
//             str += "горячий шоколад" + sum + 70;
//             break;
//         default:
//             break;
//     }
//     // let summa = str.substr(str.length - 2);
//     // let num = Number(summa);
//     // let obsum = num + num;
//     // alert(obsum);
//     return str;
// }
let question = prompt("Сколько вы хотите купить напитков?");
// let ques;
// for (let i = 0; i < question; i++) {
//     ques = prompt("Какой напиток вы хотите купить?");
// }
function order(...drinks) {
    let sum = 0;
    let price;
    let str = "";
    for (let i = 0; i < question; i++) {
        switch (drinks[i]) {
            case "эспрессо":
                price = 20;
                break;
            case "латте":
                price = 30;
                break;
            case "капучино":
                price = 35;
                break;
            case "горячий шоколад":
                price = 50;
                break;
            default:
                break;
        }
        sum += price;
        str += drinks[i] + ": " + price + ";" + "<br>";

        // sum += price;
    }
    document.write("Общая сумма: " + sum + "<br>");
    return str;
}
let a = order("эспрессо", "латте", "капучино", "горячий шоколад");
// let a = order(ques);
document.write(a);