let number = prompt("Сколько напитков вы хотите заказать?");
let m = 0;
let obsum = "Общая сумма: ";
for (let i = 0; i < number; i++) {
    var question = prompt("Какой напиток вы хотите заказать?");
    // let summa = str.substr(str.length - 2);
    // let num = Number(summa);
    if (question == "эспрессо") {
        m += 30;
    }
    if (question == "капучино") {
        m += 40;
    }
    if (question == "латте") {
        m += 45;
    }
    if (question == "горячий шоколад") {
        m += 70;
    }
    const myOrder = order(question);
    alert(myOrder + " " + obsum + m)
}
// let summa = str.substr(str.length - 2);
// let num = Number(summa);
// let obsum = num + num;
// alert(obsum);
function order(drink) {
    let str = "Ваш заказ: ";
    let sum = "Сумма напитка: ";
    switch (drink) {
        case "эспрессо":
            str += "эспрессо" + '</br>' + sum + 30;
            break;
        case "капучино":
            str += "капучино" + '</br>' + sum + 40;
            break;
        case "латте":
            str += "латте" + '</br>' + sum + 45;
            break;
        case "горячий шоколад":
            str += "горячий шоколад" + '</br>' + sum + 70;
            break;
        default:
            break;
    }
    // let summa = str.substr(str.length - 2);
    // let num = Number(summa);
    // let obsum = num + num;
    // alert(obsum);
    return str;
}
