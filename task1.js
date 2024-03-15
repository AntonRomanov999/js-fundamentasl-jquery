// Для заданої сторінки знайдіть всі <h2> з класом head, 
// зробіть для них зелений колір фону
// потім серед знайдених елементів знайдіть елементи з класом inner 
// і поставте їм розмір шрифту 35px.

// Завдання виділене вставкою Task1

const heads = $(".head");
heads.css("background-color", "green");
const inners = heads.find(".inner");
inners.css("font-size", "35px");


