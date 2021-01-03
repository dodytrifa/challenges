function convertWeight(summation, unitWeight) {
    let word =''
    let arr = []
    let sum = 0
    let count = 0
    let clue = ['ton', 'kwintal', ' ','kg', 'ons', 'dag', 'g', 'dg', 'cg', 'mg']
    
    for (let i = 0; i < summation.length; i++) {
      if (summation[i] !== ' ' && summation[i] !=="+") {
          word += summation[i]
      } else {
          arr.push(word)
          word = ''
      }
      if (i === summation.length-1) {
          arr.push(word)
      }
    }
    arr.splice(2,1)
    arr.reverse()

    let newArr = []
    while(arr.length) newArr.push(arr.splice(0,2))

    let newObj = newArr.reduce(function(prev,curr){
        prev[curr[0]]=curr[1];
        return prev
    },{})
    
    for (let key of Object.keys(newObj)){
            if(clue.indexOf(key) < clue.indexOf(unitWeight)){
              for(let i = clue.indexOf(key); i < clue.length; i++){
                count++
                if(clue[i] === unitWeight){
                  sum+=newObj[key]*Math.pow(10,(count-1))
                  count=0
                  break
                } 
              }
            }else if(clue.indexOf(key) > clue.indexOf(unitWeight)){
              for(let i = clue.indexOf(key); i >= 0; i--){
               count++
               if(clue[i] === unitWeight){
                 sum+=newObj[key]/Math.pow(10,(count-1))
                 count=0
                 break
               } 
             }
            }else if(clue.indexOf(key) == clue.indexOf(unitWeight)){
              sum+=Number(newObj[key])
            } 
          }
          console.log(sum, unitWeight);
}
console.log(convertWeight('1 ton +10 ons+2 kwintal', 'kg')) //1201 kg
console.log(convertWeight('1 ton +10 ons+2 kwintal', 'g')) //1201000 g
console.log(convertWeight('2 ton +500 kwintal+3 kg+350 ons', 'kg'))  //52038 kg

  