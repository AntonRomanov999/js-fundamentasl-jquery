// На HTML-сторінці є 6 чекбоксів. 
// Напишіть скріпт, який після того, 
// як користувач позначив будь-які 3 чекбокси,
// всі чекбокси робить неактивними.

// Завдання виділене вставкою Task4

const chkb = $("input");


chkb.change(() => {
    const chkbChk = $('input:checked');
    if (chkbChk.length >= 3) {
        $(chkb).attr("disabled", "true")
    }}
)

//test






