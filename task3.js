// Знайдіть теги <div>, які стоять безпосередньо після <h3> 
// і перемістіть кожен <div>-елемент так, щоб він став безпосередньо над <h3>.

// Завдання виділене вставкою Task3

const divs = $(".elements-direction").find("div");
const headers = $(".elements-direction").find("h3");

divs.each((i, el) => {$(el).prependTo(headers[i])})

