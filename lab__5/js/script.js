// item 1
// function cortNumbers(arr) {
//     let swapped;
//     do {
//         swapped = false;
//         arr.forEach((item, index) => {
//             if (item > arr[index + 1]) {
//             let temp = item;
//             arr[index] = arr[index + 1];
//             arr[index + 1] = temp;
//             swapped = true;
//         }})
//     } while (swapped);
//     console.log(arr);
// }
// cortNumbers([10,9,8,7,6,5,4,3,2,1,0])

// item 2
// let text = "Вася любит информатику и любит петь";
// text = text.split(" ")
// text[0] = "Андрей"
// console.log(text.join(" "))




// item 5
// let userChoice = prompt("Задай вопрос!")

// function mtRandom(min, max){
//     // получаем рандоиное число
//     return Math.floor(Math.random() * (max - min + 1))
// }

// var textResponse = [
//     "звучит неплохо",
//     "да,это определенно надо сделать",
//     "не думаю,что это хорошая идея",
//     "может,не сегодня",
//     "Компьютер говорит нет"
// ]
// alert(textResponse[mtRandom(0,textResponse.length - 1)])

//  item 6

// let userWord = prompt("Введите слово для перевода!").toLocaleLowerCase()

// let dictionary = [
//     ["dog","собака"],["сat","кошка"],
//     ["orange", "апельсин"], ["apple","яблоко"],
//     ["home","дом"],["pen","ручка"],
//     ["laptop","ноутбук"],["day","день"],
//     ["month","месяц"],["watch","часы"],
// ]
    
// function translationWord(dictionary){
//     // console.log(userWord.split(" "))
//     let translationWord = Object.fromEntries(dictionary)
//     return userWord.split(" ").map(item => {
//         return translationWord[item] ? translationWord[item]:"?"
//     }).join(" ")
    
// }
// alert(`Ваш перевод: ${translationWord(dictionary)}`)
