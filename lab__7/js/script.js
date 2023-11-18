// item 1
// let userName = prompt("Назовите ваше имя:").toLocaleLowerCase()

// userName.length > 5 ? alert("Какое длинное имя"):
//                         alert("Какое короткое имя")

// item 2
// const KAT = [
//     "корица","лада",
//     "леди","лиса",
//     "Марк","тася",
//     "ден","плюшка",
// ]

// const DOG = [
//     "алекс", "макс", 
//     "бадди", "вальтер",
//     "джек", "зевс", 
//     "лео", "оскар"
// ]
// let userName = prompt("Назовите ваше имя:").toLocaleLowerCase()

// if(DOG.includes(userName) || KAT.includes(userName)){
//     alert('Похоже, вы - кошка (или собака)');
//     window.open("https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0", "_blank")
// }else{
//     alert('Похоже, вы - человек');
//     window.open("https://ru.wikipedia.org/wiki/%D0%9B%D1%8E%D0%B4%D0%B8_(%D1%80%D0%BE%D0%B4)", "_blank")
// }

// item 3
// let schedule = [
//     {day:"понедельник", luncheon:"каша", leisure:"колледж"},
//     {day:"вторник", luncheon:"яичница", leisure:"колледж"},
//     {day:"среда", luncheon:"омлет", leisure:"колледж"},
//     {day:"четверг", luncheon:"бутеброды", leisure:"колледж"},
//     {day:"пятница", luncheon:"каша", leisure:"колледж"},
//     {day:"суббота", luncheon:"карбонара", leisure:"театр"},
//     {day:"воскресенье", luncheon:"суп куриный", leisure:"кино"},
// ]
// let currentDay = prompt("Назовите день недели:").toLocaleLowerCase()
// let {leisure, luncheon} = schedule.find(item => item.day === currentDay)

// alert(`Сегодня на завтрак ${luncheon}\n Дальше в вашем расписание поход в ${leisure}`);
// if (leisure === "кино"){
//     window.open("https://kinoteatr.ru/raspisanie-kinoteatrov/novosibirsk/", "_blank")
// }else if(leisure === "театр"){
//     window.open("https://yarcult.ru/narodnoe-hudozhestvennoe-tvorchestvo/teatralnoe-tvorchestvo/", "_blank")
// }else{
//     window.open("https://nsk.ucheba.ru/for-abiturients/college", "_blank")
// }

// item 4

// const date = '2004-06-06T00:00:00.000Z'
// let currentDate = Date.parse(new Date());
// let days = (currentDate - Date.parse(date))/86400000;    
// alert(`Дней прошло со значимой даты ${Math.round(days)}`)