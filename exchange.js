function getMoneyChange(money){
    let arr = []

    if (money < 500) {
      console.log(`Maaf uang kembalian tidak cukup`)
    } 
    else {
        for(let i = 0; i < list.length; i++) {
            while(money >= (Number(list[i][0]))) {
                if(list[i][1] > 0) {
                arr.push((Number(list[i][0])))
                money -= (Number(list[i][0]))
                list[i][1]--
                } 
                else if(money === (Number(list[i][0]))){
                for(let j = 2; j < list.length; j++){
                    while(money >= (Number(list[j][0]))){
                        if(list[j][1] > 0){
                            arr.push((Number(list[j][0])))
                        money -= (Number(list[j][0]))
                        list[j][1]--
                        }else {
                            break     
                        }  
                    }
                }
                } else {
                  return (console.log(`Maaf uang kembalian tidak cukup`))
                }
            }
        }
    }

    for (let key of Object.keys(moneyStocks)){
        for(let i = 0; i < arr.length; i++){
          if(arr[i] == key){
            moneyStocks[key]--
          }
        }
    }
    
    let current = null;
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] != current) {
            if (count > 0) {
                console.log(current + ' ' + count + ' lembar');
            }
            current = arr[j];
            count = 1;
        } else {
            count++;
        }
    }
    if (count > 0) {
        console.log(current + ' ' + count + ' lembar');
    }
}

const moneyStocks = {
    100000: 1,
    50000: 2,
    20000: 4,
    10000: 5,
    5000: 5,
    1000: 10,
    500: 5
}

let list = Object.entries(moneyStocks)
list.reverse()

getMoneyChange(75000)
getMoneyChange(190000)
getMoneyChange(190000)
getMoneyChange(100000)
getMoneyChange(400)
console.log(moneyStocks)