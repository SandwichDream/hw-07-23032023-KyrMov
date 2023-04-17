window.onload = ()=>{
    let header = document.getElementById("Header");
    let nav = document.getElementById("Nav");
    let ul = document.getElementById("Ul");
    let [...liEl] = document.getElementsByTagName('li');
    let footer = document.getElementById("Footer");
    let arr = ["li1", "li2", "li3", "li4", "li5"];
    for(let i = 0; i < [...liEl].length; i++){
        [...liEl][i].innerHTML = arr[i];
    }
    console.log(header);
    console.log(nav);
    console.log(ul);
    console.log(liEl);
    console.log(footer);

    console.log("===========================");

    // 4)

    function divCreater (arr){

        let divEl = document.createElement("div");
        divEl.className = "product-list";
        document.body.appendChild(divEl);

        for( let i = 0; i < arr.length; i++){
            if(arr[i].name !== undefined && !isNaN(Number(arr[i].price))){
                let divElChild = document.createElement("div");
                divElChild.className = "card";
                divEl.appendChild(divElChild);
                divElChild.innerHTML = `Name: ${arr[i].name} Price: ${arr[i].price}`;
            }
        }
    }

    let arrInfo = [
        {
            name: "product1",
            price: 10
        },
        {
            name: "product2",
            price: 15
        },
        {
            name: "product3",
            price: 6
        },
        {
            price: 6
        },
        {
            name: "product5"
        },
        {
            name: "product6",
            price: "f"
        },
        {
            name: "product7",
            price: 13
        }
    ]

    divCreater(arrInfo);

    // Game

    let words = ["програма", "людина", "малюнок", "музика", "слово", "світ", "фон", "гра", "магія"];
    let randomWord = words[Math.floor(Math.random()*words.length)];
    let result = [];
    let changeChance = false;
    let chance = 3;

    let hrEl = document.createElement("hr");
    document.body.appendChild(hrEl);
    let divEl = document.createElement("div");
    divEl.className = "game";
    document.body.appendChild(divEl);

    for(let i = 0; i < randomWord.length; i++){
        result.push("^");
    }

    for(let i = 0; true; i++){
        let word = String(prompt(`Слово: [${String(result).replaceAll(",","")}].\nКількість шансів: ${chance}\nВведіть одну маленьку літеру:`))

        changeChance = true;

        for(let j = 0; j < randomWord.length; j++){
            if(word === randomWord[j]){
                result[j] = word;
                changeChance = false;
            }
        }
        
        if(changeChance === true){
            chance--;
            changeChance = false;
        }

        if(chance === 0){
            divEl.innerHTML = `Ви програли. Ваше слово: ${randomWord}`;
            break;
        }
        else{
            if(String(result).replaceAll(",","") == String(randomWord)){
                divEl.innerHTML = `Вітання!!! Ви перемогли. Ваше слово: ${randomWord}`;
                break;
            }
        }
    }

    

}