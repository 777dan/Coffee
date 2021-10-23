let number = prompt("Сколько напитков вы хотите заказать?");
for (let i = 0; i < number; i++) {
    var question = prompt("Какой напиток вы хотите заказать?")
    const myOrder = order(question);
    alert(myOrder)
}
// let summa = str.substr(str.length - 2);
// let num = Number(summa);
// let obsum = num + num;
// alert(obsum);
function order(drink) {
    let str = "Ваш заказ: ";
    let sum = "Сумма: ";
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
    let summa = str.substr(str.length - 2);
    let num = Number(summa);
    let obsum = num + num;
    alert(obsum);
    return str;
}
