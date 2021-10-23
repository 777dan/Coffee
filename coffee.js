function order(drink) {
    let str = "Ваш заказ: ";
    let sum = "Сумма: ";
    switch (drink) {
        case "эспрессо":
            str += "эспрессо" + '</br>' + sum + "30грн";
            break;
        case "капучино":
            str += "капучино" + '</br>' + sum + "40грн";
            break;
        case "латте":
            str += "латте" + '</br>' + sum + "45грн";
            break;
        case "горячий шоколад":
            str += "горячий шоколад" + '</br>' + sum + "70грн";
            break;
        default:
            break;
    }
    return str;
}

const myOrder = order("эспрессо");
alert(myOrder);