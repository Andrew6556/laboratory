// 1-3 item


const CAT = [
    {name:"тася", price:1500, food:"корм",priceFood:100},
    {name:"мурзик", price:5500, food:"рыба",priceFood:200},
    {name:"ден", price:6500, food:"молоко", priceFood:250},
    {name:"маша", price:2300, food:"корм", priceFood:150},
];
const DOG = [
    {name:"рэм", price:5500, food:"корм",priceFood:100},
    {name:"макс", price:5500, food:"мясо",priceFood:200},
    {name:"алекс", price:2500, food:"курица", priceFood:250},
    {name:"джек", price:8300, food:"корм", priceFood:150},
]

var name = prompt("Как вас зовут?")
let greetings = `Привет, ${name}`
alert(greetings)
document.write(greetings)

if(confirm("Тебе нравятся кошки?")){
    document.write(`<br/> Тогда купи кошку:${CAT.map(item => item.name).join(", ")}`)
    alert(`cписок кошек: ${CAT.map(item => item.name).join(", ")}`)
    var userChoice = prompt("Введите имя питомца ,которого хотите купить!").toLocaleLowerCase(),
        {price, food} = CAT.find(item => userChoice == item.name)
    document.write(`<br/> Стоимость питомца ${price} и его любимая еда ${food}`)

    var userFood = +prompt("Cколько корма хотите взять");

    alert(`
        Cтоимость животного ${price} 
        cтоимость корма ${priceFood}
        общая стоимость ${priceFood + price}
    `)
}else{
    document.write(`<br/> Тогда купи собаку:${DOG.map(item => item.name).join(", ")}`)
    alert(`cписок собак: ${DOG.map(item => item.name).join(", ")}`)
    var userChoice = prompt("Введите имя питомца ,которого хотите купить!").toLocaleLowerCase(),
        {price, food, priceFood} = DOG.find(item => userChoice == item.name)
    
    document.write(`<br/> Стоимость питомца ${price} и его любимая еда ${food}`)

    var userFood = +prompt("Cколько корма хотите взять");

    alert(`
        Cтоимость животного ${price} 
        cтоимость корма ${priceFood}
        общая стоимость ${priceFood + price}
    `)
}

